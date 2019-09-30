<?php
/*Aplicación Nº 14 (Armar listado desde archivo .json)
Realizar una aplicación web que muestre un listado de remeras, tomando como origen de datos
el archivo remeras.json. La aplicación tendrá sólo un botón (<input type=”button”>), que al
pulsarlo, generará dinámicamente un listado de las remeras (armar una tabla html en javascript) que se
 reciban como objetos JSON desde el archivo .php. Como página nexo, utilice administrarRemeras.php, pasándole 
 la opción “traerRemeras”.*/
$option = $_POST["option"];
$path = "../json/remeras.json";
switch ($option) {
    case "traerRemeras":
        $file = fopen($path, "r");
        echo fread($file, filesize($path));
        fclose($file);
        break;
    case "traerRemerasFiltradas":
        $file = fopen($path,"r");
        $arrayRemeras = json_decode(fread($file,filesize($path)));
        $resultado = array();
        foreach($arrayRemeras as $remera) {
            if( $remera->manofacturer->location->country == $_POST["pais"]) {
                array_push($resultado , $remera);
            }
        }
        echo json_encode($resultado);
        fclose($file);
        break;
}

?>
