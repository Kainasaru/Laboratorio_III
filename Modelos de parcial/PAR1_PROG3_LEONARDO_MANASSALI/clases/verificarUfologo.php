<?php 
require_once "./Ufologo.php";
/* 
VerificarUfologo.php: si coinciden con algún registro del archivo JSON
(VerificarExistencia), crear una COOKIE nombrada con el legajo del ufólogo, que guardará la fecha actual (con
horas, minutos y segundos) más el retorno del mensaje del método VerificarExistencia. Luego ir a
ListadoUfologos.php.
Caso contrario, retornar un JSON que contendrá: éxito(bool) y mensaje(string) indicando lo acontecido (agregar el
mensaje obtenido del método de clase).
ListadoUfologos.php: (GET) Se mostrará el listado de todos los ufólogos en formato de array de JSON.
MostrarCookie.php: Se recibe por GET un JSON (con el legajo del ufólogo) y se verificará si existe una cookie con
el mismo nombre, de ser así, retornará un JSON que contendrá: éxito(bool) y mensaje(string), dónde se mostrará
el contenido de la cookie. Caso contrario, false y el mensaje indicando lo acontecido.*/
$legajo = isset($_POST["legajo"])? $_POST["legajo"] : "";
$clave = isset($_POST["clave"])? $_POST["clave"] : "";
$ufo = new Ufologo("",$legajo,$clave);
$json = Ufologo::VerificarExistencia($ufo);
if( $json->existe ) {
    setcookie($legajo,date("y-m-d-h:i:s")." ".$json->mensaje);
    if( $_COOKIE["10001"]) {
        echo "esta";
    }
    header("location: ./ListadoUfologos.php");
}
else {
    $result = new StdClass();
    $result->exito = false;
    $result->mensaje = $json->mensaje;
    echo json_encode($result);
}
?>

