DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;

USE eat_da_burger_db

CREATE TABLE menu(
    id INT NOT NULL AUTO-INCREMENT,
    burger VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);