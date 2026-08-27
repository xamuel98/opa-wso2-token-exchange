import cors from "cors";
import express from "express";

const PORT = Number(process.env.PORT || 8787);
const WSO2_TOKEN_URL =
  process.env.WSO2_TOKEN_URL || "https://wso2.local:9443/oauth2/token";
const WSO2_USERINFO_URL =
  process.env.WSO2_USERINFO_URL || "https://wso2.local:9443/oauth2/userinfo";
const WSO2_STD_CLIENT_ID = process.env.WSO2_STD_CLIENT_ID;
const WSO2_STD_CLIENT_SECRET = process.env.WSO2_STD_CLIENT_SECRET;
const TOKEN_EXCHANGE_SCOPE =
  process.env.TOKEN_EXCHANGE_SCOPE || "openid profile email";
const OPA_DECISION_URL =
  process.env.OPA_DECISION_URL ||
  "http://127.0.0.1:8181/v1/data/fortis/authz/decision";
const CORS_ORIGINS = (process.env.CORS_ORIGINS ||
  "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const DEFAULT_TARGET = "core-banking";
const FAIL_CLOSED = {
  allow: false,
  mode: "hide",
  reason: "Authorization service unavailable",
};

function requireEnv(name, value) {
  if (!value) {
    console.error(`[fatal] Missing required environment variable: ${name}`);
    process.exit(1);
  }
}

requireEnv("WSO2_STD_CLIENT_ID", WSO2_STD_CLIENT_ID);
requireEnv("WSO2_STD_CLIENT_SECRET", WSO2_STD_CLIENT_SECRET);

if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
  console.warn(
    "[warn] NODE_TLS_REJECT_UNAUTHORIZED=0 is set. TLS certificate verification is disabled. UNSAFE for production — local self-signed testing only."
  );
}

function redactToken(token) {
  if (!token || typeof token !== "string") return "[missing]";
  if (token.length <= 12) return "[redacted]";
  return `${token.slice(0, 6)}…${token.slice(-4)} (len=${token.length})`;
}

function extractBearerToken(authorizationHeader) {
  if (!authorizationHeader || typeof authorizationHeader !== "string") {
    return { error: "Missing Authorization header" };
  }
  const match = authorizationHeader.match(/^Bearer\s+(\S+)$/i);
  if (!match) {
    return {
      error:
        "Authorization header must be in the form: Bearer <SPA_ACCESS_TOKEN>",
    };
  }
  return { token: match[1] };
}

function basicAuthHeader(clientId, clientSecret) {
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  return `Basic ${credentials}`;
}

/** Base64url → UTF-8 string (JWT payload decode for local claim extraction). */
function base64UrlDecode(segment) {
  const padded = segment.replace(/-/g, "+").replace(/_/g, "/");
  const padLen = (4 - (padded.length % 4)) % 4;
  return Buffer.from(padded + "=".repeat(padLen), "base64").toString("utf8");
}

/**
 * Decode SPA JWT payload without signature verification (local testing).
 * Production should validate signature / introspect via WSO2.
 */
function decodeJwtClaims(token) {
  const parts = token.split(".");
  if (parts.length < 2) {
    return { error: "Authorization token is not a JWT" };
  }
  try {
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    if (!payload || typeof payload !== "object") {
      return { error: "JWT payload is not an object" };
    }
    if (typeof payload.exp === "number" && payload.exp * 1000 < Date.now()) {
      return { error: "Access token has expired" };
    }
    return { claims: payload };
  } catch {
    return { error: "Failed to decode JWT payload" };
  }
}

/** Call WSO2 UserInfo to enrich the subject claims for the given access token. */
async function fetchUserInfo(accessToken) {
  let res;
  try {
    res = await fetch(WSO2_USERINFO_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
  } catch (err) {
    console.error(`[userinfo] upstream fetch failed: ${err?.message || err}`);
    return {
      error:
        "Could not reach WSO2 UserInfo endpoint. Check WSO2_USERINFO_URL and TLS settings.",
    };
  }

  let body;
  const contentType = res.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      body = await res.json();
    } else {
      await res.text();
      return {
        error: `WSO2 UserInfo returned a non-JSON response (status=${res.status})`,
      };
    }
  } catch {
    return {
      error: `Failed to parse WSO2 UserInfo response (status=${res.status})`,
    };
  }

  if (!res.ok) {
    console.warn(`[userinfo] upstream status=${res.status}`);
    return { error: `WSO2 UserInfo returned HTTP status ${res.status}` };
  }

  if (!body || typeof body !== "object") {
    return { error: "WSO2 UserInfo returned an invalid payload" };
  }

  return { userInfo: body };
}

function asStringArray(value) {
  if (Array.isArray(value)) {
    return value.map(String).filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    return value
      .split(/[,\s]+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function firstString(...candidates) {
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  return "";
}

/** Pick the first non-empty roles/groups claim and normalize to a string array. */
function rolesFrom(...candidates) {
  for (const c of candidates) {
    const arr = asStringArray(c);
    if (arr.length) return arr;
  }
  return [];
}

/**
 * Merge token claims + WSO2 UserInfo into the OPA subject shape, then normalize.
 * UserInfo takes precedence for identity claims; the token carries org handle.
 */
function buildSubject(tokenClaims, userInfo) {
  const tc = tokenClaims && typeof tokenClaims === "object" ? tokenClaims : {};
  const ui = userInfo && typeof userInfo === "object" ? userInfo : {};

  const username = firstString(
    ui.username,
    ui.email,
    ui.preferred_username,
    tc.username,
    tc.email,
    tc.preferred_username,
    tc.sub
  );

  const department = firstString(
    ui.department,
    ui.Department,
    ui.company_department,
    ui["http://wso2.org/claims/department"],
    tc.department,
    tc.Department,
    tc.company_department,
    tc["http://wso2.org/claims/department"]
  );

  const organization_handle = firstString(
    tc.org_handle,
    tc.organization_handle,
    ui.org_handle,
    ui.organization_handle
  );

  const roles = rolesFrom(
    ui.roles,
    ui.groups,
    ui["http://wso2.org/claims/roles"],
    ui["http://wso2.org/claims/groups"],
    tc.roles,
    tc.groups,
    tc["http://wso2.org/claims/roles"],
    tc["http://wso2.org/claims/groups"]
  );

  return {
    username: username.trim(),
    department: department.trim().toLowerCase(),
    organization_handle: organization_handle.trim().toLowerCase(),
    roles,
  };
}

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (CORS_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS origin not allowed: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(express.json({ limit: "32kb" }));

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "wso2-token-broker",
    tokenUrl: WSO2_TOKEN_URL,
    userinfoUrl: WSO2_USERINFO_URL,
    opaDecisionUrl: OPA_DECISION_URL,
  });
});

app.post("/auth/token-exchange", async (req, res, next) => {
  try {
    const target =
      (req.body &&
        typeof req.body.target === "string" &&
        req.body.target.trim()) ||
      DEFAULT_TARGET;

    const { token: subjectToken, error: authError } = extractBearerToken(
      req.headers.authorization
    );

    if (authError) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: authError,
      });
    }

    console.info(
      `[token-exchange] target=${target} subject_token=${redactToken(subjectToken)}`
    );

    const form = new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
      subject_token: subjectToken,
      subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
      requested_token_type: "urn:ietf:params:oauth:token-type:access_token",
      scope: TOKEN_EXCHANGE_SCOPE,
    });

    let upstream;
    try {
      upstream = await fetch(WSO2_TOKEN_URL, {
        method: "POST",
        headers: {
          Authorization: basicAuthHeader(
            WSO2_STD_CLIENT_ID,
            WSO2_STD_CLIENT_SECRET
          ),
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: form.toString(),
      });
    } catch (err) {
      console.error(
        `[token-exchange] upstream fetch failed: ${err?.message || err}`
      );
      return res.status(502).json({
        error: "upstream_unreachable",
        error_description:
          "Could not reach WSO2 token endpoint. Check WSO2_TOKEN_URL and TLS settings.",
        upstreamStatus: null,
      });
    }

    let upstreamBody;
    const contentType = upstream.headers.get("content-type") || "";
    try {
      if (contentType.includes("application/json")) {
        upstreamBody = await upstream.json();
      } else {
        const text = await upstream.text();
        upstreamBody = {
          error: "invalid_upstream_response",
          error_description: text,
        };
      }
    } catch {
      upstreamBody = {
        error: "invalid_upstream_response",
        error_description: "Failed to parse WSO2 token response",
      };
    }

    if (!upstream.ok) {
      console.warn(
        `[token-exchange] upstream status=${upstream.status} error=${upstreamBody?.error || "unknown"}`
      );
      return res.status(upstream.status).json({
        error: upstreamBody?.error || "token_exchange_failed",
        error_description:
          upstreamBody?.error_description || "WSO2 token exchange failed",
        upstreamStatus: upstream.status,
      });
    }

    return res.status(200).json({
      target,
      tokenType: upstreamBody.token_type,
      issuedTokenType: upstreamBody.issued_token_type,
      expiresIn: upstreamBody.expires_in,
      scope: upstreamBody.scope,
    });
  } catch (err) {
    return next(err);
  }
});

app.post("/authz/decision", async (req, res, next) => {
  try {
    const { token, error: authError } = extractBearerToken(
      req.headers.authorization
    );
    if (authError) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: authError,
      });
    }

    const { claims, error: jwtError } = decodeJwtClaims(token);
    if (jwtError) {
      return res.status(401).json({
        error: "invalid_token",
        error_description: jwtError,
      });
    }

    const body = req.body && typeof req.body === "object" ? req.body : {};
    const action =
      typeof body.action === "string" && body.action.trim()
        ? body.action.trim()
        : "";
    if (!action) {
      return res.status(400).json({
        error: "invalid_request",
        error_description: 'Body must include string "action"',
      });
    }

    const resource =
      body.resource && typeof body.resource === "object"
        ? body.resource
        : { type: "module", id: action.split(".")[0] || "unknown" };

    const contextIn =
      body.context && typeof body.context === "object" ? body.context : {};

    const userInfoResult = await fetchUserInfo(token);
    if (userInfoResult.error) {
      return res.status(502).json({
        error: "userinfo_unavailable",
        error_description: userInfoResult.error,
      });
    }

    const subject = buildSubject(claims, userInfoResult.userInfo);
    const tenant =
      firstString(contextIn.tenant, subject.organization_handle) ||
      "ibileltdofficial";

    const opaInput = {
      input: {
        subject,
        action,
        resource,
        context: {
          app: firstString(contextIn.app, "fortis") || "fortis",
          tenant,
          ...contextIn,
        },
      },
    };

    console.info(
      `[authz] action=${action} module=${resource.id || "?"} user=${subject.username || "?"} dept=${subject.department || "?"} org=${subject.organization_handle || "?"} token=${redactToken(token)}`
    );

    let opaRes;
    try {
      opaRes = await fetch(OPA_DECISION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(opaInput),
      });
    } catch (err) {
      console.error(`[authz] OPA unreachable: ${err?.message || err}`);
      return res.status(503).json(FAIL_CLOSED);
    }

    let opaBody;
    try {
      opaBody = await opaRes.json();
    } catch {
      console.error(`[authz] OPA returned non-JSON (status=${opaRes.status})`);
      return res.status(503).json(FAIL_CLOSED);
    }

    if (!opaRes.ok) {
      console.warn(`[authz] OPA status=${opaRes.status}`);
      return res.status(503).json(FAIL_CLOSED);
    }

    const decision = opaBody?.result;
    if (
      !decision ||
      typeof decision !== "object" ||
      typeof decision.allow !== "boolean"
    ) {
      console.warn("[authz] OPA response missing decision result");
      return res.status(503).json(FAIL_CLOSED);
    }

    return res.status(200).json({
      allow: decision.allow,
      mode: decision.mode === "show" ? "show" : "hide",
      reason: decision.reason || (decision.allow ? "allowed" : "denied"),
      subject,
      action,
      resource,
    });
  } catch (err) {
    return next(err);
  }
});

app.use((err, _req, res, _next) => {
  if (err?.message?.startsWith("CORS origin not allowed")) {
    return res.status(403).json({
      error: "cors_denied",
      error_description: err.message,
    });
  }

  if (
    err instanceof SyntaxError ||
    err?.type === "entity.parse.failed" ||
    err?.status === 400
  ) {
    console.warn(`[error] bad request body: ${err?.message || err}`);
    return res.status(400).json({
      error: "invalid_json",
      error_description: "Request body must be valid JSON",
    });
  }

  console.error(`[error] ${err?.message || err}`);
  return res.status(500).json({
    error: "internal_error",
    error_description: "Unexpected server error",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.info(`[ready] wso2-token-broker listening on http://0.0.0.0:${PORT}`);
  console.info(`[ready] CORS origins: ${CORS_ORIGINS.join(", ")}`);
  console.info(`[ready] WSO2 token URL: ${WSO2_TOKEN_URL}`);
  console.info(`[ready] WSO2 UserInfo URL: ${WSO2_USERINFO_URL}`);
  console.info(`[ready] OPA decision URL: ${OPA_DECISION_URL}`);
});
