<?php 
require_once "./Ufologo.php";
/* 
ListadoUfologos.php: (GET) Se mostrará el listado de todos los ufólogos en formato de array de JSON.
MostrarCookie.php: Se recibe por GET un JSON (con el legajo del ufólogo) y se verificará si existe una cookie con
el mismo nombre, de ser así, retornará un JSON que contendrá: éxito(bool) y mensaje(string), dónde se mostrará
el contenido de la cookie. Caso contrario, false y el mensaje indicando lo acontecido.*/
//if($_GET["mostrar"] == "mostrar") {
    echo json_encode(Ufologo::TraerTodos());
//}
?>