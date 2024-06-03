-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 03-06-2024 a las 22:39:01
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
(2, 'accion'),
(3, 'comedia');

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
(2, 1, 'EL REY DEL PERÚ, JUAN PEDRO COSANO', 'Rebelión, pasión y epopeya en la desconocida vida del conquistador Gonzalo Pizarro.', 'https://m.media-amazon.com/images/I/91ELLpTFysL._AC_UF894,1000_QL80_.jpg', 30, 18.9),
(2, 2, 'MASACRE MATA EL UNIVERSO MARVEL MARVEL MUST-HAVE', '¿Qué ocurriría si Masacre decidiera asesinar a todos los héroes del Universo Marvel? ¿Te seguiría pareciendo tan divertido? Vas a flipar. De verdad.', 'https://imagessl9.casadellibro.com/a/l/s7/19/9788410512719.webp', 15, 15),
(1, 3, 'Amor y Amistad, Jane Austen', 'El noble joven nos informó de que su nombre era Lindsay, aunque por razones particulares lo llamaré aquí Talbot.» He aquí una elocuente muestra de lo que Chesterton calificó como «una especie de elegancia del absurdo» al caracterizar los escritos juveniles de Jane Austen, de los que reunimos en este volumen –bajo el titulo de Amor y amistad- una completa selección por primera vez en español.', 'https://images-eu.ssl-images-amazon.com/images/I/51bGIavETDL._SX195_.jpg', 20, 15.99),
(1, 4, 'La edad de la inocencia, Edith Wharton\r\n', 'La edad de la inocencia (título original inglés: The Age of Innocence) es una novela de Edith Wharton publicada en 1920 y que fue galardonada en 1921 con el Premio Pulitzer. La acción de la novela transcurre en la alta sociedad neoyorquina de la década de 1870.', 'https://m.media-amazon.com/images/I/51q3kQZxnjL._SX195_.jpg', 15, 9.99),
(1, 5, 'Norte y Sur, Elizabeth Gaskell\r\n', 'A través de la historia de Margaret Hale, una joven del Sur de Inglaterra que por circunstancias familiares se ve obligada a trasladarse al Norte, a la ciudad industrial de Milton -un trasunto apenas disfrazado de Manchester-, Elizabeth Gaskell plasma de forma magistral los conflictos sociales y políticos derivados de la Revolución Industrial en la Inglaterra de mediados del siglo XIX.', 'https://images-na.ssl-images-amazon.com/images/I/516-03-Yx5L._SX210_.jpg', 17, 20),
(3, 6, 'MALDITO KARMA, DAVID SAFIER\r\n', 'La presentadora de televisión Kim Lange está en el mejor momento de su carrera cuando sufre un accidente y muere aplastada por el lavabo de una estación espacial rusa. En el más allá, Kim se entera de que ha acumulado mal karma a lo largo de su vida: ha engañado a su marido, ha descuidado a su hija y ha amargado a cuantos la rodean.', 'https://imagessl2.casadellibro.com/a/l/s7/82/9788432228582.webp', 12, 15.9),
(3, 7, 'ENHORABUENA POR TU FRACASO, ARTURO GONZALEZ CAMPOS', 'Enhorabuena por tu fracaso es un desnudo integral de Arturo  González-Campos, lo que no sabemos si dice mucho a su favor. Una oda a  lo genuino y una invitación a que te atrevas a persistir en lo que te  apasiona; a fracasar y fracasar y volver a intentarlo para, con toda  probabilidad, seguir aprendiendo a fracasar. Este es un relato (¿o unas  memorias?) sobre esos fracasos que, sólo a veces, se convierten en  exitos y que han permanecido en la mente de Arturo González-Campos  durante toda su vida.', 'https://imagessl7.casadellibro.com/a/l/s7/97/9788418051197.webp', 34, 17.95);

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
('', '', 'user', ''),
('admin', '1234', 'admin', ''),
('jimmy', 'jimmy12345', 'user', 'yimmy70@gmail.co'),
('ming', '1234', 'user', 'ming@gmail.com'),
('panda', '123456789', 'user', 'elpelon@gmail.co'),
('prueba', 'prueba', 'user', 'prueba50@gmail.c');

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
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
