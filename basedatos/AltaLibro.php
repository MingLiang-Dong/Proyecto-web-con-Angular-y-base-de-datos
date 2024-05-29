<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  // REALIZA LA QUERY A LA DB
  $insert ="INSERT INTO `libros`(`id_categoria`, `id_libro`, `n_libro`, `descripcion`, `imagen`, `stock`, `precio`) VALUES ('$params->id_categoria','$params->id_libro','$params->n_libro','$params->descripcion','$params->imagen','$params->stock','$params->precio')";

  
  class Result {}
  $response = new Result();
  if (mysqli_query($conexion, $insert)) {
    $response->resultado = 'OK';
    $response->mensaje = 'Se añadido el libro';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'EL LIBRO YA EXISTE';
  }

  // GENERA LOS DATOS DE RESPUESTA
  
  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>