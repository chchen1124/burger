### Schema

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name VARCHAR(30),
	devoured bool DEFAULT false,
	the_date date
);