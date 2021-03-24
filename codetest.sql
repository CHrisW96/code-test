-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-03-24 04:31:36
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `codetest`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `clinic_name` varchar(255) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`id`, `email`, `password`, `clinic_name`, `phone_number`, `address`) VALUES
(1, '123123@gmail.com', '123123', 'json', '0', 'hong kong'),
(2, '1231234@gmail.com', '123123', 'json', '0', 'hong kong'),
(3, '12312345@gmail.com', '123123', 'json', '123', 'hong kong'),
(4, '123123456@gmail.com', '123123', 'json', '0000', 'hong kong'),
(5, '123321@gmail.com', '123123', 'json', '111', 'hong kong'),
(6, '123@Gmail.com', '123123', 'json', '111', 'hong kong'),
(7, '1232222@gmail.com', '123', 'json', '123', 'hong kong'),
(8, '1111@gmail.com', '123', 'json', '111', 'hong kong'),
(9, '123123123@gmail.com', '1111', 'json', '123123', 'hong kong'),
(10, 'hhh@gmail.com', '123123', 'json', '22222', 'hong kong');

-- --------------------------------------------------------

--
-- 資料表結構 `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `clinic` varchar(255) NOT NULL,
  `doctor_name` varchar(255) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `medication` varchar(255) NOT NULL,
  `consulation_fee` int(11) NOT NULL,
  `date_and_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `follow_up` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `record`
--

INSERT INTO `record` (`id`, `clinic`, `doctor_name`, `patient_name`, `diagnosis`, `medication`, `consulation_fee`, `date_and_time`, `follow_up`) VALUES
(1, 'json', 'petty', 'jo', 'bad', 'null', 1500, '2021-03-23 02:40:12', 'Yes'),
(2, 'json', 'pretty', 'john', 'good', 'null', 155, '2021-03-23 06:36:43', 'Yes'),
(3, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:41', 'Yes'),
(4, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:45', 'Yes'),
(5, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:45', 'Yes'),
(6, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:45', 'Yes'),
(7, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:46', 'Yes'),
(8, 'json', 'peter', 'joe', 'good', 'null', 1500, '2021-03-24 02:09:46', 'Yes'),
(9, 'json', 'hello', 'yard', 'bad', 'null', 5000, '2021-03-24 02:11:56', 'Yes'),
(10, 'json', 'word', 'pain', 'bad', 'null', 1500, '2021-03-24 02:16:22', 'Yes');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING BTREE;

--
-- 資料表索引 `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
