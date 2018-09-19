# i3albo database creation script.
# Author: giuliobosco
# Version: 1.0

CREATE DATABASE i3albo;

CREATE TABLE i3albo.group (
	id          INT PRIMARY KEY AUTO_INCREMENT,
	group_name  VARCHAR(50)  NOT NULL,
	admin_id    VARCHAR(50)  NOT NULL,
	description VARCHAR(200) NOT NULL,
	img_path    VARCHAR(255) NOT NULL,

	FOREIGN KEY (admin_id) REFERENCES i3albo.user (username)
);

CREATE TABLE i3albo.user (
	username  VARCHAR(50) PRIMARY KEY AUTO_INCREMENT,
	group_id  INT          NOT NULL,
	email     VARCHAR(255) NOT NULL,
	password  CHAR(64)     NOT NULL,
	img_path  VARCHAR(50),
	firstname VARCHAR(50)  NOT NULL,
	lastname  VARCHAR(50)  NOT NULL,

	FOREIGN KEY (group_id) REFERENCES i3albo.group (id)
);

CREATE TABLE i3albo.event (
	id        INT PRIMARY KEY AUTO_INCREMENT,
	author_id VARCHAR(50) NOT NULL,
	group_id  INT         NOT NULL,
	title     VARCHAR(50) NOT NULL,
	content   VARCHAR(255),
	date      DATETIME    NOT NULL,

	FOREIGN KEY (author_id) REFERENCES i3albo.user (username),
	FOREIGN KEY (group_id) REFERENCES i3albo.group (id)
);

CREATE TABLE i3albo.task_type (
	id          INT PRIMARY KEY AUTO_INCREMENT,
	name        VARCHAR(50)  NOT NULL,
	description VARCHAR(255) NOT NULL,
	group_id    INT          NOT NULL,

	FOREIGN KEY (group_id) REFERENCES i3albo.group (id)
);

CREATE TABLE i3albo.task (
	id              INT PRIMARY KEY AUTO_INCREMENT,
	task_type_id    INT          NOT NULL,
	author_username VARCHAR(50)  NOT NULL,
	group_id        INT          NOT NULL, 
	date            DATETIME     NOT NULL,
	title           VARCHAR(100) NOT NULL,
	description     TEXT,

	FOREIGN KEY (task_type_id) REFERENCES i3albo.task_type (id),
	FOREIGN KEY (author_username) REFERENCES i3albo.user (username),
	FOREIGN KEY (group_id) REFERENCES i3albo.group (id)
);

CREATE TABLE i3albo.test (
	id              INT PRIMARY KEY AUTO_INCREMENT,
	task_type_id    INT         NOT NULL,
	author_username VARCHAR(50) NOT NULL,
	group_id        INT         NOT NULL,
	date            DATETIME    NOT NULL,
	args            TEXT        NOT NULL,

	FOREIGN KEY (task_type_id) REFERENCES i3albo.task_type (id),
	FOREIGN KEY (author_username) REFERENCES i3albo.user (username),
	FOREIGN KEY (group_id) REFERENCES i3albo.group (id)
);