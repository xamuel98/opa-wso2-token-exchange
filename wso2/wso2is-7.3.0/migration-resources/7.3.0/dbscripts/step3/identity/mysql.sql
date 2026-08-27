INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT UUID(), ID, 'internal_branding_preference_policy_update', 'Update Branding Policy URLs', NULL, 'Update policy URLs in branding preferences of the organization (root)'
FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/branding-preference'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_branding_preference_policy_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT UUID(), ID, 'internal_org_branding_preference_policy_update', 'Update Branding Policy URLs', NULL, 'Update policy URLs in branding preferences of the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/branding-preference'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_branding_preference_policy_update');
