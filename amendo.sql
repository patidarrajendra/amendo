-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 30, 2018 at 01:29 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amendo`
--

-- --------------------------------------------------------

--
-- Table structure for table `amendo_category`
--

CREATE TABLE `amendo_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amendo_category`
--

INSERT INTO `amendo_category` (`category_id`, `category_name`) VALUES
(4, 'Accesories'),
(5, 'sheets22222'),
(6, 'gaurav');

-- --------------------------------------------------------

--
-- Table structure for table `amendo_product`
--

CREATE TABLE `amendo_product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(55) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_image` text NOT NULL,
  `product_description` text NOT NULL,
  `product_discount` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amendo_product`
--

INSERT INTO `amendo_product` (`product_id`, `category_id`, `product_name`, `product_price`, `product_image`, `product_description`, `product_discount`) VALUES
(1, 0, 'Nagendra', 12, 'cb20c6ded24c5b4fbf6a04db.png', '', ''),
(2, 2, 'Nagendra', 12, 'bfc44a04acdd59c73592a99c.png', '', ''),
(3, 3, 'test', 450, 'b62ee9419fbafd3a1b79ffc7.png', '', ''),
(4, 3, 'test2', 11111111, 'd62e1c88013fd3591fccf85c.png', '3asdsdsdsadasd', '12'),
(5, 5, 'Pilosheets', 1500, 'a2e4e7da28851f0006c427e6.jpg', 'Good Sheet Need', '12'),
(6, 4, 'dummy', 2000, '169e5382fb75f9f8d56aec05.jpeg', 'testing', '20'),
(7, 4, 'DUMMY TESTING PRODUCT', 2000, '4495daa66ee4b36c47f797d0.jpeg', 'TESTING', '10'),
(8, 4, 'TESTING', 200, 'e2d438b0029662c1990f6a6b.jpeg', 'test', '11');

-- --------------------------------------------------------

--
-- Table structure for table `amendo_user`
--

CREATE TABLE `amendo_user` (
  `id` int(11) NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `full_name` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `phone` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amendo_user`
--

INSERT INTO `amendo_user` (`id`, `username`, `password`, `full_name`, `email`, `phone`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '', '', 0),
(54, 'gaurav', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'gaurav', 'gaurav.badlani@gmail.com', 2147483647),
(55, 'rajendra', '8cb2237d0679ca88db6464eac60da96345513964', 'Rajendra Patidar', 'patidarrajendra@gmail.com', 2147483647),
(56, 'kamal', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'kamal', 'kamal@gmail.com', 2147483647),
(57, 'bhavna', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'bhavna', 'bhavna@gmail.com', 2147483647),
(58, 'mayur', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'mayur', 'mayur@webdsky.com', 2147483647),
(59, 'g', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'ga', 'ga@gmail.com', 2147483647),
(60, 'jonny', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'jonny', 'jonny@gmail.com', 2147483647),
(61, 'dharam', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'dharampal', 'dharampal@gmail.com', 9699996116),
(62, 'mayur', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Mayur', 'mayur@gmail.com', 1234567890),
(63, 'abhishek', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Abhishek', 'abh.webdesky@gmail.com', 0),
(64, 'abhishek', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Abhishek', 'abhi.webdesky@gmail.com', 919131513954);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amendo_category`
--
ALTER TABLE `amendo_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `amendo_product`
--
ALTER TABLE `amendo_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `amendo_user`
--
ALTER TABLE `amendo_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amendo_category`
--
ALTER TABLE `amendo_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `amendo_product`
--
ALTER TABLE `amendo_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `amendo_user`
--
ALTER TABLE `amendo_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
