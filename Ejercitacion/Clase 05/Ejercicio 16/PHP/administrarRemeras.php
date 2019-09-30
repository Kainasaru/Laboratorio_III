<?php
/*Aplicación Nº 16 (Filtrar listado desde archivo .json II)
Tomando como punto de partida el ejercicio anterior, agregarle un <select> (que posea como opciones tamaño, color y país) 
el cuál indicará el campo del filtrado. En el <input type=”text”> agregar el valor de filtrado (de acuerdo al campo de
 filtrado) y al pulsar el <input type=”button”>, generar dinámicamente un listado de las remeras filtradas. Como página
  nexo, utilice administrarRemeras.php, pasándole la opción “traerRemerasFiltradasPorCampo”.*/
$option = $_POST["option"];
$path = "../json/remeras.json";
switch ($option) {
    case "traerRemeras":
        $file = fopen($path, "r");
        echo fread($file, filesize($path));
        fclose($file);
        break;
    case "traerRemerasFiltradasPorCampo":
        $file = fopen($path,"r");
        $arrayRemeras = json_decode(fread($file,filesize($path)));
        $resultado = array();
        foreach($arrayRemeras as $remera) {
            if( $_POST["campo"] == "pais" && strcasecmp($remera->manofacturer->location->country , $_POST["filtro"]) == 0
             || $_POST["campo"] == "color" && strcasecmp($remera->color , $_POST["filtro"]) == 0 || 
             $_POST["campo"] == "tamaño" && strcasecmp($remera->size , $_POST["filtro"]) == 0 ) {
                array_push($resultado , $remera);
            }
        }
        echo json_encode($resultado);
        fclose($file);
        break;
    case "agregarRemera":
        
        break;
}

?>
