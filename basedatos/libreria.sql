-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2024 a las 12:26:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `n_categoria` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `n_categoria`) VALUES
(1, 'romance'),
(2, 'accion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_categoria` int(11) NOT NULL,
  `id_libro` int(11) NOT NULL,
  `n_libro` varchar(200) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  `imagen` varchar(9000) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_categoria`, `id_libro`, `n_libro`, `descripcion`, `imagen`, `stock`, `precio`) VALUES
(1, 1, 'DONDE NO PUEDES ENCONTRARME', 'Un romance que florece entre las grietas de un corazón roto.\r\n\r\nGala está harta de seguir atrapada en un círculo vicioso de dependencia y toxicidad con su exnovio.\r\n\r\n \r\nNO CONCIBE UNA VIDA SIN ÉL\r\n\r\n \r\nEs por ello que decide dejarlo todo atrás y alejarse completamente de él, con la esperanza de poder sanar su corazón y evitar la tentación de volver a caer en esa destructiva relación.\r\n\r\n \r\nHuir donde no pueda hacerle daño.\r\n\r\n \r\nDONDE NO PUEDA ENCONTRARLA\r\n\r\n \r\nUna nueva vida en la que refugiarse y con la que enfrentarse a sus inseguridades, sus heridas, sus miedos y su inoportuna atracción hacia Gael, un chico que forma parte de su nueva rutina.\r\n\r\n \r\nCON QUIEN PODRÍA REDESCUBRIR EL AMOR\r\n\r\n \r\nPero Gala tiene claro que volver a abrir su corazón no entra en sus planes.\r\n\r\n \r\nElla sabe que lo que necesita es centrarse en sí misma.\r\n\r\n \r\nLIBERARSE DEL PASADO, APRENDER A AMARSE Y PERMITIRSE SER FELIZ SIN DEPENDER DE NADIE MÁS', 'https://imagessl6.casadellibro.com/a/l/s7/16/9788408287216.webp', 12, 16),
(2, 2, 'MASACRE MATA EL UNIVERSO MARVEL MARVEL MUST-HAVE', '¿Qué ocurriría si Masacre decidiera asesinar a todos los héroes del Universo Marvel? ¿Te seguiría pareciendo tan divertido? Vas a flipar. De verdad.', 'https://imagessl9.casadellibro.com/a/l/s7/19/9788410512719.webp', 15, 15.2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `rol` varchar(10) NOT NULL,
  `email` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user`, `password`, `rol`, `email`) VALUES
('a', 'a', 'user', 'a@gmail.com'),
('admin', '1234', 'admin', ''),
('asda', '312313', 'user', 'patata@gmail.es'),
('juan', 'juan1234', 'user', ''),
('ming', '1234', 'user', 'ming@gmail.com'),
('patata', '12345', 'user', 'patata@gmail.es'),
('qwdwqd', 'qwwww', 'user', 'qwdqww'),
('w', '', 'user', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `fkcategoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `fkcategoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
