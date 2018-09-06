-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: studentguideproject
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `studentguides`
--

DROP TABLE IF EXISTS `studentguides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `studentguides` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` varchar(191) DEFAULT 'studentGuide',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `compositeIndex` (`email`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentguides`
--

LOCK TABLES `studentguides` WRITE;
/*!40000 ALTER TABLE `studentguides` DISABLE KEYS */;
INSERT INTO `studentguides` VALUES (1,'first studentGuide','firststudentGuide@hotmail.com','firststudentGuide','$2a$10$Hz1jsArYQ.QKBphKNvf5vOaIkJZ0Ngg074S0ZtelPP42bvpK/LWoi','studentGuide','2018-09-06 04:16:49','2018-09-06 04:16:49'),(2,'second studentGuide','secondstudentGuide@hotmail.com','secondstudentGuide','$2a$10$2SuyA76qLi0EgySn7A.JwOTs6qSopmvKsE.CYJMQLF6xKS9ygAhRG','studentGuide','2018-09-06 04:18:21','2018-09-06 04:18:21');
/*!40000 ALTER TABLE `studentguides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourists`
--

DROP TABLE IF EXISTS `tourists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tourists` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` varchar(191) DEFAULT 'tourist',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `compositeIndex` (`email`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourists`
--

LOCK TABLES `tourists` WRITE;
/*!40000 ALTER TABLE `tourists` DISABLE KEYS */;
INSERT INTO `tourists` VALUES (1,'first tourist','firstTourist@hotmail.com','firstTourist','$2a$10$t0aExG3t.Euakw7hodqtHegEDv2Y2YI9Q0mWN2fATFrLuZO2p4xWe','tourist','2018-09-06 04:15:17','2018-09-06 04:15:17'),(2,'second tourist','secondTourist@hotmail.com','secondTourist','$2a$10$FyY0VEhn3jLYALf.tPMvOuQeOvmpeSR4Ktd5PwH5boh4m/XviNcHS','tourist','2018-09-06 04:15:38','2018-09-06 04:15:38');
/*!40000 ALTER TABLE `tourists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `touristselecttrips`
--

DROP TABLE IF EXISTS `touristselecttrips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `touristselecttrips` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(191) DEFAULT 'waiting',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `touristId` int(10) DEFAULT NULL,
  `tripId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `touristSelectTrips_tripId_touristId_unique` (`touristId`,`tripId`),
  KEY `tripId` (`tripId`),
  CONSTRAINT `touristselecttrips_ibfk_1` FOREIGN KEY (`touristId`) REFERENCES `tourists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `touristselecttrips_ibfk_2` FOREIGN KEY (`tripId`) REFERENCES `trips` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `touristselecttrips`
--

LOCK TABLES `touristselecttrips` WRITE;
/*!40000 ALTER TABLE `touristselecttrips` DISABLE KEYS */;
/*!40000 ALTER TABLE `touristselecttrips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `trips` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `createdBy` varchar(191) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `studentGuideId` int(10) DEFAULT NULL,
  `touristId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `studentGuideId` (`studentGuideId`),
  KEY `touristId` (`touristId`),
  CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`studentGuideId`) REFERENCES `studentguides` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `trips_ibfk_2` FOREIGN KEY (`touristId`) REFERENCES `tourists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (1,'firstTrip','studentGuide','2018-09-05 00:43:24','2018-09-06 04:19:48','2018-09-06 04:19:48',1,NULL),(2,'secondTrip','tourist','2018-09-05 00:43:24','2018-09-06 04:21:14','2018-09-06 04:21:14',NULL,1);
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-06 12:21:30
