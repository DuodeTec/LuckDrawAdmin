-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 10, 2020 at 08:09 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luck_draw`
--

-- --------------------------------------------------------

--
-- Table structure for table `draw_history`
--

CREATE TABLE `draw_history` (
  `id` int(11) NOT NULL,
  `weapp_id` varchar(100) DEFAULT NULL,
  `draw_times` int(10) DEFAULT NULL COMMENT '剩余抽奖次数',
  `ip` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `invite_history`
--

CREATE TABLE `invite_history` (
  `id` int(11) NOT NULL,
  `invite_id` int(11) DEFAULT NULL COMMENT '邀请人小程序id',
  `follow_id` int(11) DEFAULT NULL COMMENT '被邀请人小程序id',
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `luckdraw_controller`
--

CREATE TABLE `luckdraw_controller` (
  `id` int(11) NOT NULL,
  `total_1` int(11) NOT NULL DEFAULT '0',
  `total_2` int(11) NOT NULL DEFAULT '0',
  `total_3` int(11) NOT NULL DEFAULT '0',
  `total_4` int(11) NOT NULL DEFAULT '0',
  `total_5` int(11) NOT NULL DEFAULT '0',
  `total_6` int(11) NOT NULL DEFAULT '0',
  `limit_1` int(10) NOT NULL DEFAULT '0',
  `limit_2` int(10) NOT NULL DEFAULT '0',
  `limit_3` int(10) NOT NULL DEFAULT '0',
  `limit_4` int(11) NOT NULL DEFAULT '0',
  `limit_5` int(11) NOT NULL DEFAULT '0',
  `limit_6` int(11) NOT NULL DEFAULT '0',
  `winrate_1` int(11) NOT NULL DEFAULT '0',
  `winrate_2` int(11) NOT NULL DEFAULT '0',
  `winrate_3` int(11) NOT NULL DEFAULT '0',
  `winrate_4` int(11) NOT NULL DEFAULT '0',
  `winrate_5` int(11) NOT NULL DEFAULT '0',
  `winrate_6` int(11) NOT NULL DEFAULT '0',
  `can_win` int(11) NOT NULL DEFAULT '0' COMMENT '0不开启，1开启，是否开启抽奖',
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `luckdraw_controller`
--

INSERT INTO `luckdraw_controller` (`id`, `total_1`, `total_2`, `total_3`, `total_4`, `total_5`, `total_6`, `limit_1`, `limit_2`, `limit_3`, `limit_4`, `limit_5`, `limit_6`, `winrate_1`, `winrate_2`, `winrate_3`, `winrate_4`, `winrate_5`, `winrate_6`, `can_win`, `create_time`) VALUES
(1, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, '2020-09-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `luck_user`
--

CREATE TABLE `luck_user` (
  `id` int(11) NOT NULL,
  `weapp_id` int(11) DEFAULT NULL,
  `win_type` int(11) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_phone` varchar(100) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `weapp_name` varchar(100) DEFAULT NULL,
  `weapp_headimg` varchar(255) DEFAULT NULL,
  `weapp_openid` varchar(100) DEFAULT NULL,
  `invite_id` int(11) DEFAULT NULL COMMENT '邀请人-小程序id',
  `ip` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `luck_user`
--

INSERT INTO `luck_user` (`id`, `weapp_id`, `win_type`, `user_name`, `user_phone`, `user_address`, `weapp_name`, `weapp_headimg`, `weapp_openid`, `invite_id`, `ip`, `create_time`) VALUES
(1, 1, 2, 'chenxin', '18221496024', '上海徐家汇港汇一座', 'nick陈😄', NULL, 'xxxx', NULL, NULL, '2020-09-08 12:16:15'),
(2, 2, 1, 'testUser', NULL, '江苏泗阳', 'userZhuang', NULL, 'safasdf', NULL, NULL, '2020-09-09 00:00:00'),
(3, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_list`
--

CREATE TABLE `user_list` (
  `id` int(11) NOT NULL,
  `weapp_id` int(11) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `openid` varchar(100) DEFAULT NULL,
  `header_img` varchar(255) DEFAULT NULL,
  `invite_id` int(11) DEFAULT NULL COMMENT '邀请人-小程序id',
  `draw_times` int(11) DEFAULT '1',
  `ip` varchar(20) DEFAULT NULL,
  `user_agent` text,
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_list`
--

INSERT INTO `user_list` (`id`, `weapp_id`, `user_name`, `openid`, `header_img`, `invite_id`, `draw_times`, `ip`, `user_agent`, `create_time`) VALUES
(1, 1, '陈新', 'oxxxxxdfiisdf', 'img.png', NULL, 1, '11.232.12.2', NULL, NULL),
(2, 32, 'fad', 'asdf', NULL, NULL, 1, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `draw_history`
--
ALTER TABLE `draw_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invite_history`
--
ALTER TABLE `invite_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `luckdraw_controller`
--
ALTER TABLE `luckdraw_controller`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `luck_user`
--
ALTER TABLE `luck_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user_list`
--
ALTER TABLE `user_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `draw_history`
--
ALTER TABLE `draw_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invite_history`
--
ALTER TABLE `invite_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `luckdraw_controller`
--
ALTER TABLE `luckdraw_controller`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `luck_user`
--
ALTER TABLE `luck_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_list`
--
ALTER TABLE `user_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
