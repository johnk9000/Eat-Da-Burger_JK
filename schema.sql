DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;

USE eat_da_burger_db;

CREATE TABLE menu(
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(100) NOT NULL,
    eaten BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);