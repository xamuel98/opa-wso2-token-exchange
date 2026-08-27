DROP PROCEDURE IF EXISTS ALTER_UM_ORG;

DELIMITER $$
CREATE PROCEDURE ALTER_UM_ORG()
BEGIN
     IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='UM_ORG' AND COLUMN_NAME='UM_ORG_VERSION' and TABLE_SCHEMA = (SELECT DATABASE())) THEN
            ALTER TABLE `UM_ORG` ADD COLUMN `UM_ORG_VERSION` VARCHAR(20) NOT NULL DEFAULT 'v0.0.0';
     END IF;
END $$
DELIMITER ;

CALL ALTER_UM_ORG();

DROP PROCEDURE IF EXISTS ALTER_UM_ORG;

SET @index_exists := (
	SELECT COUNT(*) FROM (
		SELECT 1 FROM INFORMATION_SCHEMA.STATISTICS
		WHERE TABLE_SCHEMA = DATABASE()
		AND TABLE_NAME = 'UM_ORG'
		GROUP BY INDEX_NAME
		HAVING GROUP_CONCAT(COLUMN_NAME ORDER BY SEQ_IN_INDEX) = 'UM_ORG_NAME'
		AND COUNT(COLUMN_NAME) = 1
	) AS idx
);

SET @create_index_um_org_um_org_name := IF (
    @index_exists = 0,
    'CREATE INDEX INDEX_UM_ORG_UM_ORG_NAME ON UM_ORG(UM_ORG_NAME)',
    'SELECT "INDEX_UM_ORG_UM_ORG_NAME exists, skipping creation"'
);

PREPARE stmt_index_um_org_um_org_name FROM @create_index_um_org_um_org_name;
EXECUTE stmt_index_um_org_um_org_name;
DEALLOCATE PREPARE stmt_index_um_org_um_org_name;

SET @index_exists := (
    SELECT COUNT(*) FROM (
        SELECT 1 FROM INFORMATION_SCHEMA.STATISTICS
        WHERE TABLE_SCHEMA = DATABASE()
        AND TABLE_NAME = 'UM_ORG_HIERARCHY'
        GROUP BY INDEX_NAME
        HAVING GROUP_CONCAT(COLUMN_NAME ORDER BY SEQ_IN_INDEX) = 'UM_ID'
        AND COUNT(COLUMN_NAME) = 1
    ) AS idx
);

SET @create_index_um_org_hierarchy_um_id := IF (
    @index_exists = 0,
    'CREATE INDEX INDEX_UM_ORG_HIERARCHY_UM_ID ON UM_ORG_HIERARCHY(UM_ID)',
    'SELECT "Index exists, skipping creation"'
);

PREPARE stmt_index_um_org_hierarchy_um_id FROM @create_index_um_org_hierarchy_um_id;
EXECUTE stmt_index_um_org_hierarchy_um_id;
DEALLOCATE PREPARE stmt_index_um_org_hierarchy_um_id;
