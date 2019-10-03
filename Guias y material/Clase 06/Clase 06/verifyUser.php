<?php
include_once ("usuario.php");
include_once ("mySqlDataAccess.php");

//GET THE JSON BY POST METHOD
$loginData = isset($_POST['loginData']) ? $_POST['loginData'] : NULL;

//DECODE THE JSON INTO AN OBJECT
$objeto = json_decode($loginData);

//CREATE NEW USER
$usuario = new usuario();
//CALL "ExisteEnBD" FUNCTION
$obj = new stdClass();

//IF THE USER EXISTS IT RETURNS TRUE
//$obj->existe=$usuario->ExisteEnBD($objeto->correo, $objeto->clave);

echo $usuario->ExisteEnBD($objeto->correo, $objeto->clave);
//echo json_encode($obj);


?>