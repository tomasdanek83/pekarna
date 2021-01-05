-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Počítač: wm19.wedos.net:3306
-- Vygenerováno: Úte 05. led 2021, 14:32
-- Verze serveru: 5.5.33
-- Verze PHP: 5.4.23

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databáze: `d22429_dankovi`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `pekarna_eventlog`
--

CREATE TABLE IF NOT EXISTS `pekarna_eventlog` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SESSION_ID` varchar(36) COLLATE utf8_czech_ci NOT NULL,
  `LOCATION_ID` varchar(256) COLLATE utf8_czech_ci NOT NULL,
  `VIEW` varchar(32) COLLATE utf8_czech_ci DEFAULT NULL,
  `EVENT` varchar(32) COLLATE utf8_czech_ci NOT NULL,
  `DETAILS` varchar(256) COLLATE utf8_czech_ci DEFAULT NULL,
  `USER_AGENT` varchar(512) COLLATE utf8_czech_ci DEFAULT NULL,
  `TIMESTAMP` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci AUTO_INCREMENT=2 ;

--
-- Vypisuji data pro tabulku `pekarna_eventlog`
--

INSERT INTO `pekarna_eventlog` (`ID`, `SESSION_ID`, `LOCATION_ID`, `VIEW`, `EVENT`, `DETAILS`, `USER_AGENT`, `TIMESTAMP`) VALUES
(1, '12345678-1234-1234-1234-123456789abc', 'zeleny-les', 'quiz', 'view entered', NULL, 'Mozilla/5.0 (Linux; Android 10; SM-A415F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36', '2021-01-05 10:16:25');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
