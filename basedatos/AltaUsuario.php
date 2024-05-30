<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  //dasw
  // REALIZA LA QUERY A LA DB
  $insert = "INSERT INTO usuarios(user, password,rol , email) VALUES ('$params->user','$params->password','$params->rol', '$params->email')";
  class Result {}
  $response = new Result();
  if (mysqli_query($conexion, $insert)) {
    $response->resultado = 'OK';
    $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'EL USUARIO YA EXISTE';
  }

  // GENERA LOS DATOS DE RESPUESTA
  
  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>