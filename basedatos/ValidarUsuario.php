<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $usuario="SELECT * FROM usuarios WHERE user='$params->user'";
    class Result {}
  $response = new Result();
  $result=$conexion->query($usuario);
 
  if(mysqli_num_rows($result)>0){
    $row = $result->fetch_assoc();
    $bpass = $row["password"];
    if ($bpass==$params->password) {
        $response->resultado = 'OK';
        $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';
        if($row["rol"]=="admin"){
          $response->resultado = 'ADMIN';
        }
    }else{
        $response->resultado = 'NO';
        $response->mensaje = 'EL USUARIO NO EXISTE O CONTRASEÑA INCORRECTA';
    }
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'EL USUARIO NO EXISTE O CONTRASEÑA INCORRECTA';
  }
  
  // GENERA LOS DATOS DE RESPUESTA
  
  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>