-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 16, 2021 at 02:29 PM
-- Server version: 8.0.22-0ubuntu0.20.10.2
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinicore`
--

-- --------------------------------------------------------

--
-- Table structure for table `cb_departments`
--

CREATE TABLE `cb_departments` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cb_departments`
--

INSERT INTO `cb_departments` (`id`, `name`, `value`, `status`) VALUES
(1, 'shakil', 'shakil', 'Ok'),
(2, 'shskhk', 'sjhkj', 'Ok'),
(3, 'shiush', 'sjhskj', 'Ok'),
(4, 'sbgskjs', 'shgs', 'Active'),
(5, 'sjhsjks', 'uysiiusyiusy', 'Inactive');

-- --------------------------------------------------------

--
-- Table structure for table `cb_options`
--

CREATE TABLE `cb_options` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_users`
--

CREATE TABLE `cb_users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_date` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cb_users`
--

INSERT INTO `cb_users` (`id`, `username`, `password`, `email`, `created_date`, `modified_date`) VALUES
(3, 'shakilofficial', '$2y$12$aMn0zRDrNJ0.AubbHLqDsu4f2y9Ao.5cBgZDDPffgaadrC2GK3T/O ', 'shakilofficial0@gmail.com', '2021-01-16 14:44:25', '');

-- --------------------------------------------------------

--
-- Table structure for table `cb_users_details`
--

CREATE TABLE `cb_users_details` (
  `id` int NOT NULL,
  `custom_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `sub_department` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `educational_data` varchar(255) NOT NULL,
  `Others Data` varchar(255) NOT NULL,
  `cv_link` varchar(255) DEFAULT NULL,
  `profile_picture_link` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) NOT NULL,
  `modified_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cb_departments`
--
ALTER TABLE `cb_departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_options`
--
ALTER TABLE `cb_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_users`
--
ALTER TABLE `cb_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_users_details`
--
ALTER TABLE `cb_users_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cb_departments`
--
ALTER TABLE `cb_departments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cb_options`
--
ALTER TABLE `cb_options`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_users`
--
ALTER TABLE `cb_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cb_users_details`
--
ALTER TABLE `cb_users_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
