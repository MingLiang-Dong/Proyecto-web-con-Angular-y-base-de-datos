<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  class Result {}
  // REALIZA LA QUERY A LA DB
$insert="DELETE FROM libros WHERE id_libro=$_GET[id_libro]";
  mysqli_query($conexion, $insert);

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  if (mysqli_query($conexion, $insert)) {
    $response->resultado = 'OK';
    $response->mensaje = 'Se actualizado el libro';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'No se actualizo correctamente, intentelo de nuevo';
  }

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>