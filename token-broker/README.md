# WSO2 Token Broker (local BFF)

Minimal local backend that performs **OAuth 2.0 Token Exchange** against WSO2 Identity Server on behalf of the Fortis SPA.

- Keeps the **Standard Application client secret** on the server (never in the browser)
- Avoids browser CORS issues against `https://wso2.local:9443`
- Returns **token metadata only** (does not return the exchanged `access_token` unless you later enable a debug mode)

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Liveness / config smoke check |
| `POST` | `/auth/token-exchange` | Exchange SPA access token → Standard App access token |
| `POST` | `/authz/decision` | Ask local OPA whether an action/module is allowed |

## Prerequisites

- Node.js **18+** (native `fetch`; this machine has Node 24)
- WSO2 IS running at `https://wso2.local:9443`
- Standard Application client ID + secret
- A valid SPA access token (from your PKCE login)
- Local OPA via Docker (`../opa`) on `http://127.0.0.1:8181`

## Setup

### 1. Install dependencies

```bash
cd /home/seyi-a/DevFactory/token-broker
npm install
```

### 2. Create `.env`

```bash
cp .env.example .env
```

Edit `.env` and set real values:

```env
PORT=8787
WSO2_TOKEN_URL=https://wso2.local:9443/oauth2/token
WSO2_USERINFO_URL=https://wso2.local:9443/oauth2/userinfo
WSO2_STD_CLIENT_ID=<standard_app_client_id>
WSO2_STD_CLIENT_SECRET=<standard_app_client_secret>
TOKEN_EXCHANGE_SCOPE=openid profile email
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
OPA_DECISION_URL=http://127.0.0.1:8181/v1/data/fortis/authz/decision

# UNSAFE — local self-signed certificate testing ONLY. Do NOT use in production.
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### 3. Start the broker

```bash
npm start
```

For auto-reload during development:

```bash
npm run dev
```

The service listens on `0.0.0.0:8787` so it is reachable as `http://wso2.local:8787`.

## Test

### 4. Health check

```bash
curl -sS http://wso2.local:8787/health | jq
```

Expected:

```json
{
  "status": "ok",
  "service": "wso2-token-broker",
  "tokenUrl": "https://wso2.local:9443/oauth2/token"
}
```

### 5. Token exchange (curl)

Replace `<SPA_ACCESS_TOKEN>` with a real Bearer token from the Fortis SPA login:

```bash
curl -sS -X POST http://wso2.local:8787/auth/token-exchange \
  -H "Authorization: Bearer <SPA_ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"target":"core-banking"}' | jq
```

Successful response (metadata only — no `access_token`):

```json
{
  "target": "core-banking",
  "tokenType": "Bearer",
  "issuedTokenType": "urn:ietf:params:oauth:token-type:access_token",
  "expiresIn": 3600,
  "scope": "openid profile email"
}
```

Upstream failure example:

```json
{
  "error": "invalid_grant",
  "error_description": "...",
  "upstreamStatus": 400
}
```

### 6. Authorization decision via OPA

Start OPA first (`cd ../opa && docker compose up -d`), then:

```bash
curl -sS -X POST http://wso2.local:8787/authz/decision \
  -H "Authorization: Bearer <SPA_ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "settings.view",
    "resource": { "type": "module", "id": "settings" },
    "context": { "app": "fortis" }
  }' | jq
```

If OPA is down, the broker fails closed:

```json
{
  "allow": false,
  "mode": "hide",
  "reason": "Authorization service unavailable"
}
```

The broker enriches the OPA subject with WSO2 UserInfo (username, department, roles) using the same Bearer token before calling OPA. If UserInfo fails, the broker fails closed with:

```json
{
  "error": "userinfo_unavailable",
  "error_description": "WSO2 UserInfo returned HTTP status 401"
}
```

## Frontend `.env` values

In your Fortis Vite app:

```env
VITE_API_BASE_URL=http://wso2.local:8787
VITE_TOKEN_EXCHANGE_PATH=auth/token-exchange
VITE_TOKEN_EXCHANGE_TARGET=core-banking
VITE_AUTHZ_PATH=authz/decision
```

Example fetch from the SPA (after PKCE login):

```js
const res = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_TOKEN_EXCHANGE_PATH}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${spaAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target: import.meta.env.VITE_TOKEN_EXCHANGE_TARGET,
    }),
  }
);
```

Menu / sidebar decision (never call OPA from the browser):

```js
const authz = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_AUTHZ_PATH}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${spaAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "settings.view",
      resource: { type: "module", id: "settings" },
      context: { app: "fortis" },
    }),
  }
);
const { allow, mode } = await authz.json();
// hide nav item when mode === "hide" or allow === false
```

## Security notes

- Client secret stays in `.env` on this machine only.
- Logs redact subject tokens (`abc123…wxyz (len=N)`).
- Success responses intentionally omit `access_token`. Ask for a debug mode if you need the raw token returned for local testing.
- JWT claim extraction for `/authz/decision` is decode-only (no signature verify) for local testing.
- OPA is bound to `127.0.0.1:8181`; the frontend must go through the broker.
- `NODE_TLS_REJECT_UNAUTHORIZED=0` disables TLS verification and is **unsafe for production**. Prefer trusting the WSO2 local CA instead when possible.
