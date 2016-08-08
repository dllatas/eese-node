CREATE TABLE `context` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `source` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `pillar` (
    `context_id` INT(11) NOT NULL,
    `id` INT(11) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`, `context_id`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation`),
    INDEX `fk_pillar_context_idx` (`context_id`),
    CONSTRAINT `fk_pillar_context` FOREIGN KEY (`context_id`) REFERENCES `context` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `indicator` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NULL DEFAULT NULL,
    `source_id` INT(11) NOT NULL,
    `context_id` INT(11) NOT NULL,
    `pillar_id` INT(11) NOT NULL,
    `scope` INT(11) NOT NULL DEFAULT '2',
    PRIMARY KEY (`id`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    INDEX `fk_indicator_pillar_idx` (`pillar_id`, `context_id`),
    INDEX `fk_indicator_source_idx` (`source_id`),
    CONSTRAINT `fk_indicator_pillar` FOREIGN KEY (`pillar_id`, `context_id`) REFERENCES `pillar` (`id`, `context_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_indicator_source` FOREIGN KEY (`source_id`) REFERENCES `source` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `country` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(2) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `code_UNIQUE` (`code`),
    UNIQUE INDEX `name_UNIQUE` (`name`),
    UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `region` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `region_id` INT(11) NULL DEFAULT NULL,
    `name` VARCHAR(100) NOT NULL,
    `abbreviation` VARCHAR(10) NOT NULL,
    `enabled` VARCHAR(1) NOT NULL DEFAULT 'Y' COMMENT 'Y means that the region is enabled to be queried. N means that it does not.',
    `top` VARCHAR(1) NULL DEFAULT 'N',
    `code` VARCHAR(3) NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `NAME_UNIQUE` (`name`),
    UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation`),
    INDEX `fk_region_region_idx` (`region_id`),
    CONSTRAINT `fk_region_region` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COMMENT='This table stores region information'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `area` (
    `country_id` INT(11) NOT NULL,
    `region_id` INT(11) NOT NULL,
    PRIMARY KEY (`country_id`, `region_id`),
    INDEX `fk_area_country_idx` (`country_id`),
    INDEX `fk_area_region_idx` (`region_id`),
    CONSTRAINT `fk_area_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_area_region` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `admin` INT(11) NOT NULL DEFAULT '2' COMMENT '1 means the user is Administrator; 2 means is a normal user',
    `tooltip` VARCHAR(1) NOT NULL DEFAULT 'S',
    `scope` INT(11) NOT NULL DEFAULT '2',
    PRIMARY KEY (`username`),
    UNIQUE INDEX `email_UNIQUE` (`email`)
)
COMMENT='This table stores users account related information'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user_indicator` (
    `username` VARCHAR(100) NOT NULL,
    `id` INT(11) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`username`, `id`),
    CONSTRAINT `fk_user_indicator_user` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user_indicator_detail` (
    `username` VARCHAR(100) NOT NULL,
    `user_indicator_id` INT(11) NOT NULL,
    `indicator_id` INT(11) NOT NULL,
    PRIMARY KEY (`username`, `user_indicator_id`, `indicator_id`),
    INDEX `fk_user_indicator_detail_indicator_idx` (`indicator_id`),
    CONSTRAINT `fk_user_indicator_detail_indicator` FOREIGN KEY (`indicator_id`) REFERENCES `indicator` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_user_indicator` FOREIGN KEY (`username`, `user_indicator_id`) REFERENCES `user_indicator` (`username`, `id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `metadata` (
    `id` INT(11) NOT NULL,
    `description` VARCHAR(500) NULL DEFAULT NULL,
    `source` VARCHAR(500) NULL DEFAULT NULL,
    `further` VARCHAR(200) NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `ranking` (
    `country_id` INT(11) NOT NULL,
    `indicator_id` INT(11) NOT NULL,
    `year` INT(11) NOT NULL,
    `position` INT(11) NOT NULL,
    `value` DOUBLE(12,4) NULL DEFAULT NULL,
    PRIMARY KEY (`country_id`, `indicator_id`, `year`),
    INDEX `fk_ranking_country_idx` (`country_id`),
    INDEX `fk_ranking_indicator_idx` (`indicator_id`),
    CONSTRAINT `fk_ranking_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_ranking_indicator` FOREIGN KEY (`indicator_id`) REFERENCES `indicator` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `ranking_area` (
    `indicator_id` INT(11) NOT NULL,
    `year` INT(11) NOT NULL,
    `area_country_id` INT(11) NOT NULL,
    `area_region_id` INT(11) NOT NULL,
    `position` INT(11) NOT NULL,
    PRIMARY KEY (`indicator_id`, `year`, `area_country_id`, `area_region_id`),
    INDEX `fk_ranking_area_area_idx` (`area_country_id`, `area_region_id`),
    INDEX `fk_ranking_area_indicator_idx` (`indicator_id`),
    CONSTRAINT `fk_ranking_area_area` FOREIGN KEY (`area_country_id`, `area_region_id`) REFERENCES `area` (`country_id`, `region_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_ranking_area_indicator` FOREIGN KEY (`indicator_id`) REFERENCES `indicator` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user_seed` (
    `username` VARCHAR(100) NOT NULL DEFAULT '',
    `pointer` INT(11) NULL DEFAULT NULL,
    PRIMARY KEY (`username`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user_area` (
    `id` INT(11) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `region_id` INT(11) NULL DEFAULT NULL,
    PRIMARY KEY (`username`, `id`),
    INDEX `fk_user_area_region` (`region_id`),
    CONSTRAINT `fk_user_area_region` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_user_area_user` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `user_area_detail` (
    `user_area_id` INT(11) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `country_id` INT(11) NOT NULL,
    PRIMARY KEY (`user_area_id`, `username`, `country_id`),
    INDEX `fk_user_area_detail_country_idx` (`country_id`),
    INDEX `fk_user_area_detail_user_area_idx` (`username`, `user_area_id`),
    CONSTRAINT `fk_user_area_detail_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_user_area_detail_user_area` FOREIGN KEY (`username`, `user_area_id`) REFERENCES `user_area` (`username`, `id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;