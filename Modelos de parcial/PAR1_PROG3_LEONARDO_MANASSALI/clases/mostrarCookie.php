<?php 
/* 
MostrarCookie.php: Se recibe por GET un JSON (con el legajo del ufólogo) y se verificará si existe una cookie con
el mismo nombre, de ser así, retornará un JSON que contendrá: éxito(bool) y mensaje(string), dónde se mostrará
el contenido de la cookie. Caso contrario, false y el mensaje indicando lo acontecido.*/
$legajo = json_decode(isset($_GET["legajo"])? $_GET["legajo"] : "");
if( isset($_COOKIE[$legajo->legajo])) {
    $json = new StdClass();
    $json->exito = true;
    $json->mensaje = "Cookie: ".$_COOKIE[$legajo->legajo].". Mensaje: Existe la cookie.";
    echo json_encode($json);
}
else {
    echo "false";
}
?>