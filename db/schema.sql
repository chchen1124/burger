### Schema

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured bool DEFAULT false NOT NULL,
	the_date date NOT NULL
);