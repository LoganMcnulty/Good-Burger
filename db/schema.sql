-- CREATE DATABASE good_burger_db;
-- USE good_burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
	review TEXT
);