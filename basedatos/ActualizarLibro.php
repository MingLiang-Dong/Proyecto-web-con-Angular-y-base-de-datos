<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  // REALIZA LA QUERY A LA DB
  
$insert="UPDATE `libros` SET `id_categoria`='$params->id_categoria',`n_libro`='$params->n_libro',`descripcion`='$params->descripcion',`imagen`='$params->imagen',`stock`='$params->stock',`precio`='$params->precio' WHERE `id_libro`='$params->id_libro'";
  
  class Result {}
  $response = new Result();
  if (mysqli_query($conexion, $insert)) {
    $response->resultado = 'OK';
    $response->mensaje = 'Se actualizado el libro';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'No se actualizo correctamente, intentelo de nuevo';
  }

  // GENERA LOS DATOS DE RESPUESTA
  
  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>