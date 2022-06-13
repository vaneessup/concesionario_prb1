CREATE DATABASE db_prd;

USE db_prd;

CREATE TABLE cars(
   /* id MEDIUMINT NOT NULL AUTO_INCREMENT,*/

    id INT(11) NOT NULL  PRIMARY KEY,
    marca VARCHAR(180),
    modelo VARCHAR(180),
    tipo VARCHAR(180),
    icono VARCHAR(300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agente(

    id_agente INT(11) NOT NULL PRIMARY KEY,
    nombreA VARCHAR(180),
    apellido VARCHAR(180),
    telefono VARCHAR(180),
    email VARCHAR(200)
);
