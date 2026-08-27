# Fortis OPA (local policy decision point)

Open Policy Agent runs in Docker on this WSO2 machine and answers Fortis authorization questions for the **token broker** (BFF). The frontend must **not** call OPA directly.

```
Frontend (localhost:5173)
    → Token Broker (wso2.local:8787)
        → WSO2 token exchange (9443)
        → OPA Docker (127.0.0.1:8181)
```

OPA listens on **http://127.0.0.1:8181** only (not published on all interfaces).

## Layout

```
opa/
  policies/fortis.rego      # package fortis.authz
  data/fortis-data.json     # allowed/denied modules for Ibile engineering
  docker-compose.yml
  README.md
```

Decision endpoint: `POST /v1/data/fortis/authz/decision`

## Start OPA

Preferred (Docker — binds to localhost only):

```bash
# One-time: allow your user to use Docker without sudo
sudo usermod -aG docker "$USER"
# then log out/in (or: newgrp docker)

cd /home/seyi-a/DevFactory/opa
docker compose up -d
```

If Docker socket access is not available yet, you can run the bundled binary the same way for local testing:

```bash
cd /home/seyi-a/DevFactory/opa
./bin/opa run --server --addr=127.0.0.1:8181 policies/ data/fortis-data.json
```

(`./bin/opa` is downloaded for verification; prefer Docker Compose in day-to-day use.)

Reload policy after edits (or restart):

```bash
docker compose restart opa
```

Stop:

```bash
docker compose down
```

## Health check

```bash
curl -sS http://127.0.0.1:8181/health
```

Expected: HTTP 200.

Confirm the policy bundle is loaded:

```bash
curl -sS http://127.0.0.1:8181/v1/policies | jq 'keys'
```

## Direct OPA tests

### Allowed — Loans for Engineering on Ibile

```bash
curl -sS -X POST http://127.0.0.1:8181/v1/data/fortis/authz/decision \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "subject": {
        "username": "demo.staff@ibile.local",
        "department": "engineering",
        "organization_handle": "ibileltdofficial",
        "roles": ["staff"]
      },
      "action": "loans.view",
      "resource": { "type": "module", "id": "loans" },
      "context": { "app": "fortis", "tenant": "ibileltdofficial" }
    }
  }' | jq
```

Expected:

```json
{
  "result": {
    "allow": true,
    "mode": "show",
    "reason": "..."
  }
}
```

### Denied — Clients for Engineering on Ibile

```bash
curl -sS -X POST http://127.0.0.1:8181/v1/data/fortis/authz/decision \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "subject": {
        "username": "demo.staff@ibile.local",
        "department": "engineering",
        "organization_handle": "ibileltdofficial",
        "roles": ["staff"]
      },
      "action": "clients.view",
      "resource": { "type": "module", "id": "clients" },
      "context": { "app": "fortis", "tenant": "ibileltdofficial" }
    }
  }' | jq
```

Expected:

```json
{
  "result": {
    "allow": false,
    "mode": "hide",
    "reason": "..."
  }
}
```

## Broker integration

The token broker calls OPA at:

```env
OPA_DECISION_URL=http://127.0.0.1:8181/v1/data/fortis/authz/decision
```

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

## Extending policy

Edit `data/fortis-data.json` to add/remove modules, then:

```bash
docker compose restart opa
```

Or extend `policies/fortis.rego` with role/permission/action maps and restart.
