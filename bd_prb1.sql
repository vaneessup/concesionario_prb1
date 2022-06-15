CREATE DATABASE  IF NOT EXISTS `bd_pr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_pr`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_pr
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_agentes`
--

DROP TABLE IF EXISTS `tb_agentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_agentes` (
  `idAgente` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Edad` int NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `tb_Concesionario_idConcesionario` int NOT NULL,
  `tb_Direcciones_idDireccion` int NOT NULL,
  PRIMARY KEY (`idAgente`),
  KEY `fk_tb_Agentes_tb_Concesionario1` (`tb_Concesionario_idConcesionario`),
  KEY `fk_tb_Agentes_tb_Direcciones1` (`tb_Direcciones_idDireccion`),
  CONSTRAINT `fk_tb_Agentes_tb_Concesionario1` FOREIGN KEY (`tb_Concesionario_idConcesionario`) REFERENCES `tb_concesionario` (`idConcesionario`),
  CONSTRAINT `fk_tb_Agentes_tb_Direcciones1` FOREIGN KEY (`tb_Direcciones_idDireccion`) REFERENCES `tb_direcciones` (`idDireccion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_agentes`
--

LOCK TABLES `tb_agentes` WRITE;
/*!40000 ALTER TABLE `tb_agentes` DISABLE KEYS */;
INSERT INTO `tb_agentes` VALUES (1,'Juan','Contreras',26,'3434356','susana@gmail.com',1,2),(2,'Jessica','Flores',29,'3434356','jessic@gmail.com',1,1),(3,'Jeison','Lopez',34,'45465354','ylop@yahoo.com',2,2);
/*!40000 ALTER TABLE `tb_agentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_clientes`
--

DROP TABLE IF EXISTS `tb_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_clientes` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Edad` int NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `tb_Direcciones_idDireccion` int NOT NULL,
  `Genero` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  KEY `fk_tb_Clientes_tb_Direcciones1` (`tb_Direcciones_idDireccion`),
  CONSTRAINT `fk_tb_Clientes_tb_Direcciones1` FOREIGN KEY (`tb_Direcciones_idDireccion`) REFERENCES `tb_direcciones` (`idDireccion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_clientes`
--

LOCK TABLES `tb_clientes` WRITE;
/*!40000 ALTER TABLE `tb_clientes` DISABLE KEYS */;
INSERT INTO `tb_clientes` VALUES (1,'Yeymi','Ramirez',23,'yramirez@gmail.com','34563456',1,'F'),(2,'Susana','Contreras',26,'susana@gmail.com','3434356',1,'F');
/*!40000 ALTER TABLE `tb_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_concesionario`
--

DROP TABLE IF EXISTS `tb_concesionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_concesionario` (
  `idConcesionario` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `tb_Direcciones_idDireccion` int NOT NULL,
  PRIMARY KEY (`idConcesionario`),
  KEY `fk_tb_Concesionario_tb_Direcciones1` (`tb_Direcciones_idDireccion`),
  CONSTRAINT `fk_tb_Concesionario_tb_Direcciones1` FOREIGN KEY (`tb_Direcciones_idDireccion`) REFERENCES `tb_direcciones` (`idDireccion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_concesionario`
--

LOCK TABLES `tb_concesionario` WRITE;
/*!40000 ALTER TABLE `tb_concesionario` DISABLE KEYS */;
INSERT INTO `tb_concesionario` VALUES (1,'Auto Ventas',1),(2,'AutoVentasOriente',2),(3,'Excel Auto Ventas',1);
/*!40000 ALTER TABLE `tb_concesionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cotizacion`
--

DROP TABLE IF EXISTS `tb_cotizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cotizacion` (
  `idCotizacion` int NOT NULL AUTO_INCREMENT,
  `tb_Clientes_idCliente` int NOT NULL,
  `tb_Vehiculo_idVehiculo` int NOT NULL,
  `tb_Concesionario_idConcesionario` int NOT NULL,
  `tb_Agentes_idAgente` int NOT NULL,
  PRIMARY KEY (`idCotizacion`,`tb_Vehiculo_idVehiculo`),
  KEY `fk_tb_Cotizacion_tb_Clientes1` (`tb_Clientes_idCliente`),
  KEY `fk_tb_Cotizacion_tb_Vehiculo1` (`tb_Vehiculo_idVehiculo`),
  KEY `fk_tb_Cotizacion_tb_Concesionario1` (`tb_Concesionario_idConcesionario`),
  KEY `fk_tb_Cotizacion_tb_Agentes1` (`tb_Agentes_idAgente`),
  CONSTRAINT `fk_tb_Cotizacion_tb_Agentes1` FOREIGN KEY (`tb_Agentes_idAgente`) REFERENCES `tb_agentes` (`idAgente`),
  CONSTRAINT `fk_tb_Cotizacion_tb_Clientes1` FOREIGN KEY (`tb_Clientes_idCliente`) REFERENCES `tb_clientes` (`idCliente`),
  CONSTRAINT `fk_tb_Cotizacion_tb_Concesionario1` FOREIGN KEY (`tb_Concesionario_idConcesionario`) REFERENCES `tb_concesionario` (`idConcesionario`),
  CONSTRAINT `fk_tb_Cotizacion_tb_Vehiculo1` FOREIGN KEY (`tb_Vehiculo_idVehiculo`) REFERENCES `tb_vehiculo` (`idVehiculo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cotizacion`
--

LOCK TABLES `tb_cotizacion` WRITE;
/*!40000 ALTER TABLE `tb_cotizacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cotizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_departamento`
--

DROP TABLE IF EXISTS `tb_departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_departamento` (
  `idDepartamento` int NOT NULL AUTO_INCREMENT,
  `deptoNombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_departamento`
--

LOCK TABLES `tb_departamento` WRITE;
/*!40000 ALTER TABLE `tb_departamento` DISABLE KEYS */;
INSERT INTO `tb_departamento` VALUES (1,'Jutiapa'),(2,'Jalapa'),(3,'Guatemala'),(4,'Izabal');
/*!40000 ALTER TABLE `tb_departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_direcciones`
--

DROP TABLE IF EXISTS `tb_direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_direcciones` (
  `idDireccion` int NOT NULL AUTO_INCREMENT,
  `Direccion` text NOT NULL,
  `tb_Municipio_idMunicipio` int NOT NULL,
  PRIMARY KEY (`idDireccion`),
  KEY `fk_tb_Direcciones_tb_Municipio1` (`tb_Municipio_idMunicipio`),
  CONSTRAINT `fk_tb_Direcciones_tb_Municipio1` FOREIGN KEY (`tb_Municipio_idMunicipio`) REFERENCES `tb_municipio` (`idMunicipio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_direcciones`
--

LOCK TABLES `tb_direcciones` WRITE;
/*!40000 ALTER TABLE `tb_direcciones` DISABLE KEYS */;
INSERT INTO `tb_direcciones` VALUES (1,'Las Flores, 5ta Calle',1),(2,'Matazano, San Jose Pinula',2);
/*!40000 ALTER TABLE `tb_direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_municipio`
--

DROP TABLE IF EXISTS `tb_municipio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_municipio` (
  `idMunicipio` int NOT NULL AUTO_INCREMENT,
  `munNombre` varchar(45) NOT NULL,
  `tb_Departamento_idDepartamento` int NOT NULL,
  PRIMARY KEY (`idMunicipio`),
  KEY `fk_tb_Municipio_tb_Departamento1` (`tb_Departamento_idDepartamento`),
  CONSTRAINT `fk_tb_Municipio_tb_Departamento1` FOREIGN KEY (`tb_Departamento_idDepartamento`) REFERENCES `tb_departamento` (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_municipio`
--

LOCK TABLES `tb_municipio` WRITE;
/*!40000 ALTER TABLE `tb_municipio` DISABLE KEYS */;
INSERT INTO `tb_municipio` VALUES (1,'El Progreso',1),(2,'San Jose Pinula',3),(3,'El Porvenir',2),(4,'Jalpatagua',1);
/*!40000 ALTER TABLE `tb_municipio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_vehiculo`
--

DROP TABLE IF EXISTS `tb_vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_vehiculo` (
  `idVehiculo` int NOT NULL AUTO_INCREMENT,
  `Marca` varchar(45) NOT NULL,
  `Modelo` varchar(45) NOT NULL,
  `Tipo` varchar(45) NOT NULL,
  `Precio` decimal(10,0) NOT NULL,
  `tb_Concesionario_idConcesionario` int NOT NULL,
  `Icono` text NOT NULL,
  PRIMARY KEY (`idVehiculo`),
  KEY `fk_tb_Vehiculo_tb_Concesionario1` (`tb_Concesionario_idConcesionario`),
  CONSTRAINT `fk_tb_Vehiculo_tb_Concesionario1` FOREIGN KEY (`tb_Concesionario_idConcesionario`) REFERENCES `tb_concesionario` (`idConcesionario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_vehiculo`
--

LOCK TABLES `tb_vehiculo` WRITE;
/*!40000 ALTER TABLE `tb_vehiculo` DISABLE KEYS */;
INSERT INTO `tb_vehiculo` VALUES (1,'HONDA','2014','CIVIC',40000,1,'https://w7.pngwing.com/pngs/459/529/png-transparent-2016-honda-civic-2018-honda-civic-compact-car-honda.png');
/*!40000 ALTER TABLE `tb_vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-14 12:00:23
