
DROP PROCEDURE IF EXISTS ALTER_UM_HYBRID_ROLE_UM_ROLE_NAME_INDEX;

DELIMITER $$
CREATE PROCEDURE ALTER_UM_HYBRID_ROLE_UM_ROLE_NAME_INDEX()
BEGIN
    DECLARE alter_sql TEXT;
    DECLARE index_exists INT DEFAULT 0;

    -- Check if the index exists
    SELECT COUNT(*) INTO index_exists
    FROM information_schema.statistics
    WHERE table_schema = DATABASE()
    AND table_name = 'UM_HYBRID_ROLE'
    AND index_name = 'UM_ROLE_NAME';

    -- Construct the SQL based on the existence of the index
    IF index_exists = 0 THEN
        PREPARE stmt FROM 'ALTER TABLE UM_HYBRID_ROLE ADD CONSTRAINT UNIQUE (UM_ROLE_NAME, UM_TENANT_ID);';
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END IF;
END $$
DELIMITER ;

-- Call the stored procedure
CALL ALTER_UM_HYBRID_ROLE_UM_ROLE_NAME_INDEX();

DROP PROCEDURE IF EXISTS ALTER_UM_HYBRID_ROLE_UM_ROLE_NAME_INDEX;
