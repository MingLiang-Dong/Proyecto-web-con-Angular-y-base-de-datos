<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("localhost:3307", "root", "", "libreria");
  
  return $conexion;
}

?>