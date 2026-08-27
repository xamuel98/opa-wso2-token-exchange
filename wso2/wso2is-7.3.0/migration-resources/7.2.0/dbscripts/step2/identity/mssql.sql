UPDATE API_RESOURCE SET TYPE = 'ORGANIZATION' WHERE IDENTIFIER = '/o/api/server/v1/configs';

UPDATE API_RESOURCE SET TYPE = 'ORGANIZATION' WHERE IDENTIFIER = '/o/api/server/v1/identity-governance';

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_governance_update', 'Update Identity Governance', NULL, 'Update governance connectors in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/identity-governance' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_governance_update');

-- TENANT API Resource: /scim2/Bulk
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_resource_create', 'Create Bulk Resource', NULL, 'Create new SCIM resources in bulk in the organization (root)'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_resource_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_user_create', 'Create Bulk User', NULL, 'Fine-grained scope for user create in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_user_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_user_update', 'Update Bulk User', NULL, 'Fine-grained scope for user update in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_user_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_user_delete', 'Delete Bulk User', NULL, 'Fine-grained scope for user delete in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_user_delete');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_group_create', 'Create Bulk Group', NULL, 'Fine-grained scope for group create in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_group_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_group_update', 'Update Bulk Group', NULL, 'Fine-grained scope for group update in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_group_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_group_delete', 'Delete Bulk Group', NULL, 'Fine-grained scope for group delete in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_group_delete');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_role_create', 'Create Bulk Role', NULL, 'Fine-grained scope for role create in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_role_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_role_update', 'Update Bulk Role', NULL, 'Fine-grained scope for role update in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_role_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_bulk_role_delete', 'Delete Bulk Role', NULL, 'Fine-grained scope for role delete in bulk'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_bulk_role_delete');

-- ORGANIZATION API Resource: /o/scim2/Bulk
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_resource_create', 'Create Bulk Resource', NULL, 'Create new SCIM resources in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_resource_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_user_create', 'Create Bulk User', NULL, 'Fine-grained scope for user create in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_user_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_user_update', 'Update Bulk User', NULL, 'Fine-grained scope for user update in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_user_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_user_delete', 'Delete Bulk User', NULL, 'Fine-grained scope for user delete in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_user_delete');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_group_create', 'Create Bulk Group', NULL, 'Fine-grained scope for group create in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_group_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_group_update', 'Update Bulk Group', NULL, 'Fine-grained scope for group update in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_group_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_group_delete', 'Delete Bulk Group', NULL, 'Fine-grained scope for group delete in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_group_delete');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_role_create', 'Create Bulk Role', NULL, 'Fine-grained scope for role create in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_role_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_role_update', 'Update Bulk Role', NULL, 'Fine-grained scope for role update in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_role_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_bulk_role_delete', 'Delete Bulk Role', NULL, 'Fine-grained scope for role delete in bulk in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Bulk' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_bulk_role_delete');

DELETE FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/secret-type'
  AND TYPE = 'TENANT';

-- Tenant-level application management scopes (/api/server/v1/applications)
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_application_mgt_client_secret_create', 'Regenerate Application Secret', NULL, 'Regenerate the client secret of an application'
FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/applications' AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_application_mgt_client_secret_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_application_mgt_client_secret_view', 'View application client secret', NULL, 'Allows viewing the client secret of an application. Requires both this scope and the application view scope (internal_application_mgt_view) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_application_mgt_client_secret_view');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_application_internal_api_update', 'Update authorized internal APIs of an Application', NULL, 'Allows updating authorized internal APIs of an application. Requires both this scope and the application update scope (internal_application_mgt_update) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_application_internal_api_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_application_business_api_update', 'Update authorized business APIs of an Application', NULL, 'Allows updating authorized business APIs of an application. Requires both this scope and the application update scope (internal_application_mgt_update) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_application_business_api_update');

-- Organization-level application management scopes (/o/api/server/v1/applications)
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_application_mgt_client_secret_create', 'Regenerate Application Secret', NULL, 'Regenerate the client secret of an application in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_application_mgt_client_secret_create');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_application_mgt_client_secret_view', 'View application client secret', NULL, 'Allows viewing the client secret of an application. Requires both this scope and the application view scope (internal_org_application_mgt_view) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_application_mgt_client_secret_view');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_application_internal_api_update', 'Update authorized internal APIs of an Application', NULL, 'Allows updating authorized internal APIs of an application. Requires both this scope and the application update scope (internal_org_application_mgt_update) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_application_internal_api_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_application_business_api_update', 'Update authorized business APIs of an Application', NULL, 'Allows updating authorized business APIs of an application. Requires both this scope and the application update scope (internal_org_application_mgt_update) for fine-grained access control.'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/api/server/v1/applications'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_application_business_api_update');

-- Tenant-level role management scopes (/scim2/Roles)
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_role_mgt_permissions_update', 'Update Permissions of Role', NULL, 'Assign/De-assign permissions into the role in the organization (root)'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_role_mgt_permissions_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_role_mgt_users_update', 'Update Users of Role', NULL, 'Assign/De-assign users into the role in the organization (root)'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_role_mgt_users_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_role_mgt_groups_update', 'Update Groups of Role', NULL, 'Assign/De-assign groups into the role in the organization (root)'
FROM API_RESOURCE
WHERE IDENTIFIER = '/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_role_mgt_groups_update');

-- Organization-level role management scopes (/o/scim2/Roles)
INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_role_mgt_permissions_update', 'Update Permissions of Role', NULL, 'Assign/De-assign permissions into the role in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_role_mgt_permissions_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_role_mgt_users_update', 'Update Users of Role', NULL, 'Assign/De-assign users into the role in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_role_mgt_users_update');

INSERT INTO SCOPE (ID, API_ID, NAME, DISPLAY_NAME, TENANT_ID, DESCRIPTION)
SELECT LOWER(NEWID()), ID, 'internal_org_role_mgt_groups_update', 'Update Groups of Role', NULL, 'Assign/De-assign groups into the role in the organization'
FROM API_RESOURCE
WHERE IDENTIFIER = '/o/scim2/Roles'
  AND NOT EXISTS (SELECT 1 FROM SCOPE WHERE NAME = 'internal_org_role_mgt_groups_update');
