<?php
/*Aplicación Nº 14 (Armar listado desde archivo .json)
Realizar una aplicación web que muestre un listado de remeras, tomando como origen de datos
el archivo remeras.json. La aplicación tendrá sólo un botón (<input type=”button”>), que al
pulsarlo, generará dinámicamente un listado de las remeras (armar una tabla html en javascript) que se
 reciban como objetos JSON desde el archivo .php. Como página nexo, utilice administrarRemeras.php, pasándole 
 la opción “traerRemeras”.*/
$option = $_POST["option"];
switch ($option) {
    case "traerRemeras":
        $path = "../json/remeras.json";
        $file = fopen($path, "r");
        echo fread($file, filesize($path));
        fclose($file);
        break;
}

?>
