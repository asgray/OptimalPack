-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hikeplanner
-- ------------------------------------------------------
-- Server version	8.0.11

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
-- Table structure for table `day`
--

DROP TABLE IF EXISTS `day`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `day` (
  `idday` int(11) NOT NULL AUTO_INCREMENT,
  `breakfast` varchar(45) DEFAULT '0',
  `lunch` varchar(45) DEFAULT '0',
  `dinner` varchar(45) DEFAULT '0',
  `snacks` varchar(45) DEFAULT '0',
  PRIMARY KEY (`idday`),
  UNIQUE KEY `no_dups` (`breakfast`,`lunch`,`dinner`,`snacks`),
  KEY `fk_day_meal2_idx` (`lunch`),
  KEY `fk_day_meal3_idx` (`dinner`),
  KEY `fk_day_meal4_idx` (`snacks`),
  KEY `fk_day_meal1_idx` (`breakfast`),
  CONSTRAINT `fk_day_meal1` FOREIGN KEY (`breakfast`) REFERENCES `meal` (`name`),
  CONSTRAINT `fk_day_meal2` FOREIGN KEY (`lunch`) REFERENCES `meal` (`name`),
  CONSTRAINT `fk_day_meal3` FOREIGN KEY (`dinner`) REFERENCES `meal` (`name`),
  CONSTRAINT `fk_day_meal4` FOREIGN KEY (`snacks`) REFERENCES `meal` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `day`
--

LOCK TABLES `day` WRITE;
/*!40000 ALTER TABLE `day` DISABLE KEYS */;
INSERT INTO `day` VALUES (6,'Carb Bomb','Lunch Wrap','Tuna Mac','Clif Bar Snack'),(2,'Clif Bar Snack','PB tortilla','Tuna Mac','Clif Bar Snack'),(7,'PBJ Tortilla','PBJ Tortilla','Chicken Tuna Teriyaki','PB Tortilla'),(4,'Tuna Mac','Tuna Mac','Tuna Mac','Clif Bar Snack'),(1,'Tuna Mac','Tuna Mac','Tuna Mac','Tuna Mac');
/*!40000 ALTER TABLE `day` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feature` (
  `idfeature` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`idfeature`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES (1,'Post Office','Holds resupply shipments'),(2,'Trailhead','Start or end tha hike here'),(3,'Water source','Crucial source of drinking water'),(4,'Trash Can','Throw away trash here'),(7,'Ranger Station','Check in with rangers to register or learn');
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `food` (
  `idfood` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `weight` int(11) NOT NULL,
  `calories` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `servings` int(11) NOT NULL,
  `cooked` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idfood`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Mac and Cheese','Kraft',70,350,9,3,1),(2,'Tuna Pouch','Starkist',74,70,17,1,0),(3,'Tortilla','Mission',49,140,4,10,0),(4,'12oz. Peanut Butter','Jif',33,190,7,10,0),(5,'White Chocolate Macadamia','Clif Bar',68,260,9,1,0),(31,'Maple & Brown Sugar Instant Oats','Quaker',43,160,4,18,1),(32,'Honey Almond Granola','Bear Naked',30,140,6,10,0),(33,'Classic Almond Butter','Justin\'s',32,190,7,14,0),(34,'Legend Beef Jerky, Teriyaki','Jack Link',28,70,9,10,0),(35,'Shells and Real Aged Cheddar','Annie\'s',71,270,10,6,1),(36,'Honey Buns','Little Debbie',51,220,3,6,0),(37,'Brown Sugar Cinnamon Pop Tarts','Kellog\'s',50,210,2,8,0),(38,'Strawberery Pop Tarts','Kellog\'s',52,200,2,8,0),(39,'Unfrosted Strawberry Pop Tarts','Kellog\'s',50,210,2,8,0),(40,'Strawberry Jelly, Squeeze Bottle','Smucker\'s',20,50,0,28,0),(41,'Pepperoni Pillow Pack','Hormel',30,150,5,5,0),(42,'Shredded Sharp Cheddar Cheese','Sargento',28,110,7,8,0),(43,'Original Mashed Potatoes','Idahoan',57,180,2,3,1),(44,'Beef Stroganoff With Noodles','Mountain House',136,650,27,1,1),(45,'Chicken Teriyaki With Rice','Mountain House',115,440,20,1,1),(46,'Pad Thai Veggie','Backpacker\'s Pantry',226,920,32,1,1),(47,'Fettuccini Alfredo With Chicken','Backpacker\'s Pantry',212,540,32,1,1),(48,'Alfredo Broccoli Pasta Side','Knorr',126,480,16,1,1),(49,'Herb and Butter Rice Side','Knorr',162,575,12,1,1);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gear`
--

DROP TABLE IF EXISTS `gear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gear` (
  `idgear` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `brand` varchar(45) DEFAULT '"Unknown"',
  `weight` varchar(45) NOT NULL,
  `gear_type_type` varchar(45) DEFAULT '"Luxury"',
  PRIMARY KEY (`idgear`),
  UNIQUE KEY `no_dups` (`name`,`brand`),
  KEY `fk_gear_gear_type1_idx` (`gear_type_type`),
  CONSTRAINT `fk_gear_gear_type` FOREIGN KEY (`gear_type_type`) REFERENCES `gear_type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gear`
--

LOCK TABLES `gear` WRITE;
/*!40000 ALTER TABLE `gear` DISABLE KEYS */;
INSERT INTO `gear` VALUES (7,'Atmos 65 AG','Osprey','2041','Backpack'),(8,'Circuit','ULA','1162','Backpack'),(9,'BV500','BearVault','1162','Bear Can'),(10,'Pocket Rocket 2','MSR','73','Gas Stove'),(12,'Kindle Paperwhite','Amazon','205','Luxury'),(13,'Sonic Sleeping Bag','NEMO','932','Sleep System'),(14,'Magma 10 Sleeping Bag','REI Co-op','907','Sleep System'),(15,'Copper Spur HV UL 2','Big Agnes','1360','Shelter'),(16,'Quarter Done 1','REI Co-op','1303','Shelter'),(17,'Ultramid 2','Hyperlite Mountain Gear','534','Shelter'),(18,'RidgeREst SOLite','Therm-a-Rest','538','Sleep System'),(19,'NeoAir XLite','Therm-a-Rest','453','Sleep System'),(20,'Squeeze Water Filter','Sawyer','85','Water Purification'),(21,'Water Treatment - 1 oz','Aquamira','59','Water Purification'),(22,'Storm Headlamp','Black Diamond','110','Light Source'),(23,'PreCip Rain Jacket','Marmot','368','Water Purification'),(24,'TruArc 3','Brunton','31','Navigational Aid');
/*!40000 ALTER TABLE `gear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gear_has_packing_list`
--

DROP TABLE IF EXISTS `gear_has_packing_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gear_has_packing_list` (
  `packing_list_idpacking_list` int(11) NOT NULL,
  `gear_idgear` int(11) NOT NULL DEFAULT '0',
  `quantity` varchar(45) NOT NULL DEFAULT '1',
  PRIMARY KEY (`packing_list_idpacking_list`,`gear_idgear`),
  KEY `fk_gear_has_packing_list_packing_list1_idx` (`packing_list_idpacking_list`),
  KEY `fk_gear_has_packing_list_gear1_idx` (`gear_idgear`),
  CONSTRAINT `fk_gear_has_packing_list_gear1` FOREIGN KEY (`gear_idgear`) REFERENCES `gear` (`idgear`) ON DELETE CASCADE,
  CONSTRAINT `fk_gear_has_packing_list_packing_list1` FOREIGN KEY (`packing_list_idpacking_list`) REFERENCES `packing_list` (`idpacking_list`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gear_has_packing_list`
--

LOCK TABLES `gear_has_packing_list` WRITE;
/*!40000 ALTER TABLE `gear_has_packing_list` DISABLE KEYS */;
INSERT INTO `gear_has_packing_list` VALUES (1,7,'1'),(1,14,'1'),(1,16,'1'),(1,18,'1'),(1,24,'1'),(4,7,'1'),(4,8,'1'),(7,8,'1'),(7,9,'1'),(7,10,'1'),(7,13,'1'),(7,15,'1'),(7,20,'1');
/*!40000 ALTER TABLE `gear_has_packing_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gear_restrictions`
--

DROP TABLE IF EXISTS `gear_restrictions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gear_restrictions` (
  `idgear_restrictions` int(11) NOT NULL AUTO_INCREMENT,
  `gear_type_type` varchar(45) NOT NULL,
  `restriction` enum('Required','Prohibited','Reccomended','Discouraged') NOT NULL,
  PRIMARY KEY (`idgear_restrictions`),
  UNIQUE KEY `no_dups` (`gear_type_type`,`restriction`),
  KEY `fk_gear_restrictions_gear_type1_idx` (`gear_type_type`),
  CONSTRAINT `fk_gear_restrictions_gear_type1` FOREIGN KEY (`gear_type_type`) REFERENCES `gear_type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gear_restrictions`
--

LOCK TABLES `gear_restrictions` WRITE;
/*!40000 ALTER TABLE `gear_restrictions` DISABLE KEYS */;
INSERT INTO `gear_restrictions` VALUES (2,'Bear Can','Required'),(6,'Bear Can','Reccomended'),(3,'Drone','Prohibited'),(1,'Water Container','Reccomended');
/*!40000 ALTER TABLE `gear_restrictions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gear_restrictions_has_region`
--

DROP TABLE IF EXISTS `gear_restrictions_has_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gear_restrictions_has_region` (
  `gear_restrictions_idgear_restrictions` int(11) NOT NULL,
  `region_idregion` int(11) NOT NULL,
  PRIMARY KEY (`gear_restrictions_idgear_restrictions`,`region_idregion`),
  KEY `fk_gear_restrictions_has_region_region1_idx` (`region_idregion`),
  KEY `fk_gear_restrictions_has_region_gear_restrictions1_idx` (`gear_restrictions_idgear_restrictions`),
  CONSTRAINT `fk_gear_restrictions_has_region_gear_restrictions1` FOREIGN KEY (`gear_restrictions_idgear_restrictions`) REFERENCES `gear_restrictions` (`idgear_restrictions`) ON DELETE CASCADE,
  CONSTRAINT `fk_gear_restrictions_has_region_region1` FOREIGN KEY (`region_idregion`) REFERENCES `region` (`idregion`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gear_restrictions_has_region`
--

LOCK TABLES `gear_restrictions_has_region` WRITE;
/*!40000 ALTER TABLE `gear_restrictions_has_region` DISABLE KEYS */;
INSERT INTO `gear_restrictions_has_region` VALUES (2,1),(3,1),(2,2),(3,2),(3,4);
/*!40000 ALTER TABLE `gear_restrictions_has_region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gear_type`
--

DROP TABLE IF EXISTS `gear_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `gear_type` (
  `type` varchar(45) NOT NULL,
  `notes` varchar(45) NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gear_type`
--

LOCK TABLES `gear_type` WRITE;
/*!40000 ALTER TABLE `gear_type` DISABLE KEYS */;
INSERT INTO `gear_type` VALUES ('Alcohol Stove','Lightweight stove that uses denatured alcohol'),('Backpack','Carries a gear for you'),('Bear Can','Prevents wildlife from accessing food'),('Cannister Fuel','works with gas stoves'),('Clothing','stay warm and protected'),('Drone','personal flying machine for photography'),('Firearm','weapon for hunting or defense'),('First Aid','emergency supply'),('Gas Stove','Boils water from a fuel canister'),('Glass Container','contains water, or other things'),('Light Source','to see at night'),('Luxury','Nice to have, but does nothing special'),('Navigational Aid','for finding a route'),('Raincoat','stay dry'),('Shelter','protects from elements'),('Sleep System','stay warm when sleeping'),('Water Container','Holds a volume of water'),('Water Purification','safely treats water'),('Water Weight','drinking water, just for weight calculations');
/*!40000 ALTER TABLE `gear_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hiker`
--

DROP TABLE IF EXISTS `hiker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hiker` (
  `idhiker` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `weight` int(11) NOT NULL,
  `budget` int(11) DEFAULT '0',
  `age` int(11) DEFAULT '0',
  PRIMARY KEY (`idhiker`),
  UNIQUE KEY `idhiker_UNIQUE` (`idhiker`),
  UNIQUE KEY `no_dups` (`name`,`weight`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiker`
--

LOCK TABLES `hiker` WRITE;
/*!40000 ALTER TABLE `hiker` DISABLE KEYS */;
INSERT INTO `hiker` VALUES (1,'Science',86,NULL,NULL),(3,'Athena',72,NULL,NULL),(5,'Loner Boner',41,NULL,NULL),(6,'Fraid Not',80,NULL,NULL),(7,'Pony Puncher',75,NULL,NULL),(11,'Bill Bob',20,NULL,NULL);
/*!40000 ALTER TABLE `hiker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itinerary`
--

DROP TABLE IF EXISTS `itinerary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `itinerary` (
  `iditinerary` int(11) NOT NULL AUTO_INCREMENT,
  `hiker_idhiker` int(11) DEFAULT '0',
  `start_idlocation` int(11) DEFAULT NULL,
  `end_idlocation` int(11) DEFAULT '0',
  `no_days` int(11) NOT NULL,
  `meal_plan_idmeal_plan` int(11) DEFAULT NULL,
  PRIMARY KEY (`iditinerary`),
  KEY `fk_itinerary_hiker1_idx` (`hiker_idhiker`),
  KEY `fk_itinerary_location2_idx` (`end_idlocation`),
  KEY `fk_itinerary_meal_plan1_idx` (`meal_plan_idmeal_plan`),
  KEY `fk_itinerary_location1` (`start_idlocation`),
  CONSTRAINT `fk_itinerary_hiker1` FOREIGN KEY (`hiker_idhiker`) REFERENCES `hiker` (`idhiker`),
  CONSTRAINT `fk_itinerary_location1` FOREIGN KEY (`start_idlocation`) REFERENCES `location` (`idlocation`),
  CONSTRAINT `fk_itinerary_location2` FOREIGN KEY (`end_idlocation`) REFERENCES `location` (`idlocation`),
  CONSTRAINT `fk_itinerary_meal_plan1` FOREIGN KEY (`meal_plan_idmeal_plan`) REFERENCES `meal_plan` (`idmeal_plan`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itinerary`
--

LOCK TABLES `itinerary` WRITE;
/*!40000 ALTER TABLE `itinerary` DISABLE KEYS */;
INSERT INTO `itinerary` VALUES (1,1,1,2,3,7),(2,3,6,7,4,8);
/*!40000 ALTER TABLE `itinerary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `location` (
  `idlocation` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `feature_idfeature` int(11) DEFAULT '0',
  `region_idregion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idlocation`),
  KEY `fk_location_feature1_idx` (`feature_idfeature`),
  KEY `fk_location_region1_idx` (`region_idregion`),
  CONSTRAINT `fk_location_feature1` FOREIGN KEY (`feature_idfeature`) REFERENCES `feature` (`idfeature`) ON DELETE SET NULL,
  CONSTRAINT `fk_location_region1` FOREIGN KEY (`region_idregion`) REFERENCES `region` (`idregion`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Graves Creek Trailhead',2,1),(2,'Damascus PO',1,7),(5,'Enchanted Valley Station',7,1),(6,'Point A',2,2),(7,'Point B',2,2);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal`
--

DROP TABLE IF EXISTS `meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meal` (
  `idmeal` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `food_idfood` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`idmeal`),
  UNIQUE KEY `no_dups` (`name`,`food_idfood`),
  KEY `fk_meal_food_idx` (`food_idfood`),
  KEY `fk_meal_name` (`name`),
  CONSTRAINT `fk_meal_food` FOREIGN KEY (`food_idfood`) REFERENCES `food` (`idfood`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal`
--

LOCK TABLES `meal` WRITE;
/*!40000 ALTER TABLE `meal` DISABLE KEYS */;
INSERT INTO `meal` VALUES (1,'Tuna Mac',1,3),(2,'Tuna Mac',2,1),(4,'Clif Bar Snack',5,3),(5,'PB Tortilla',3,1),(6,'PB Tortilla',4,3),(10,'Tuna Mac',5,1),(11,'PBJ Tortilla',3,1),(12,'PBJ Tortilla',4,2),(13,'PBJ Tortilla',40,2),(14,'Carb Bomb',36,2),(15,'Carb Bomb',37,2),(16,'Lunch Wrap',3,2),(17,'Lunch Wrap',41,1),(18,'Lunch Wrap',42,1),(19,'Chicken Tuna Teriyaki',2,1),(20,'Chicken Tuna Teriyaki',45,1),(21,'Dense Insulation',35,6),(22,'Dense Insulation',43,3);
/*!40000 ALTER TABLE `meal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan`
--

DROP TABLE IF EXISTS `meal_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meal_plan` (
  `idmeal_plan` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idmeal_plan`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan`
--

LOCK TABLES `meal_plan` WRITE;
/*!40000 ALTER TABLE `meal_plan` DISABLE KEYS */;
INSERT INTO `meal_plan` VALUES (8,'4 Day Trip'),(9,'A to B'),(5,'Day hike'),(6,'Long Hike'),(3,'No Cook'),(7,'Short Hike');
/*!40000 ALTER TABLE `meal_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan_has_day`
--

DROP TABLE IF EXISTS `meal_plan_has_day`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meal_plan_has_day` (
  `idmeal_plan_has_day` int(11) NOT NULL AUTO_INCREMENT,
  `meal_plan_idmeal_plan` int(11) NOT NULL,
  `day_idday` int(11) NOT NULL,
  PRIMARY KEY (`idmeal_plan_has_day`),
  KEY `fk_meal_plan_has_day_day1_idx` (`day_idday`),
  KEY `fk_meal_plan_has_day_meal_plan1_idx` (`meal_plan_idmeal_plan`),
  CONSTRAINT `fk_meal_plan_has_day_day1` FOREIGN KEY (`day_idday`) REFERENCES `day` (`idday`),
  CONSTRAINT `fk_meal_plan_has_day_meal_plan1` FOREIGN KEY (`meal_plan_idmeal_plan`) REFERENCES `meal_plan` (`idmeal_plan`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan_has_day`
--

LOCK TABLES `meal_plan_has_day` WRITE;
/*!40000 ALTER TABLE `meal_plan_has_day` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan_has_day` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packing_list`
--

DROP TABLE IF EXISTS `packing_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `packing_list` (
  `idpacking_list` int(11) NOT NULL AUTO_INCREMENT,
  `hiker_idhiker` int(11) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idpacking_list`),
  KEY `fk_packing_list_hiker1_idx` (`hiker_idhiker`),
  CONSTRAINT `fk_packing_list_hiker1` FOREIGN KEY (`hiker_idhiker`) REFERENCES `hiker` (`idhiker`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packing_list`
--

LOCK TABLES `packing_list` WRITE;
/*!40000 ALTER TABLE `packing_list` DISABLE KEYS */;
INSERT INTO `packing_list` VALUES (1,1,'3 Day Overnight'),(4,3,'Day Hike'),(6,5,'Day Hike'),(7,3,'A to B');
/*!40000 ALTER TABLE `packing_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `region` (
  `idregion` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL,
  PRIMARY KEY (`idregion`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Olympic National Park','National Park Service'),(2,'Lassen Volcanic National Park','National Park Service'),(4,'Shenandoah National Park','National Park Service'),(7,'Damascus, VA','Private'),(8,'Jasper National Park','Parks Canada'),(9,'Annapurna Conservation Area','The National Trust for Nature Conservation');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-09 14:09:10
