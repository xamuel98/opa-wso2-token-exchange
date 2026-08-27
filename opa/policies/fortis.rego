package fortis.authz

import rego.v1

# Deny by default. Easy to extend later with roles, permissions, and action maps.
default decision := {
	"allow": false,
	"mode": "hide",
	"reason": "denied by default",
}

# ---------------------------------------------------------------------------
# Normalization helpers (case-insensitive claims)
# ---------------------------------------------------------------------------

norm(x) := lower(x) if {
	is_string(x)
} else := "" if {
	true
}

subject_department := norm(object.get(input.subject, "department", ""))

subject_org := norm(object.get(input.subject, "organization_handle", ""))

resource_id := norm(object.get(input.resource, "id", ""))

action_name := norm(object.get(input, "action", ""))

# Module id from resource.id, else action prefix ("loans.view" -> "loans").
# Trim leading/trailing "/" so navigation routes ("/loans") map to module ids ("loans").
module_id := trim(resource_id, "/") if {
	resource_id != ""
} else := parts[0] if {
	parts := split(action_name, ".")
	count(parts) > 0
	parts[0] != ""
} else := ""

is_ibile if {
	subject_org == data.fortis.tenant
}

is_engineering if {
	subject_department == "engineering"
}

# Eligible users (e.g. Engineering) may use allow-listed modules on Ibile.
eligible_user if {
	is_engineering
}

denied_modules := {m |
	some m in data.fortis.engineering.denied_modules
}

allowed_modules := {m |
	some m in data.fortis.engineering.allowed_modules
}

# ---------------------------------------------------------------------------
# Decisions (more specific rules override the default)
# ---------------------------------------------------------------------------

# Explicit deny: Engineering on Ibile cannot access restricted modules.
decision := {
	"allow": false,
	"mode": "hide",
	"reason": sprintf("engineering users on %s cannot access module '%s'", [data.fortis.tenant, module_id]),
} if {
	is_ibile
	is_engineering
	module_id in denied_modules
}

# Allow: eligible users (e.g. Engineering) on Ibile may access allow-listed modules (e.g. loans).
decision := {
	"allow": true,
	"mode": "show",
	"reason": sprintf("access granted to module '%s' for eligible user on %s", [module_id, data.fortis.tenant]),
} if {
	is_ibile
	eligible_user
	module_id in allowed_modules
	not module_id in denied_modules
}
