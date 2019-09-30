<?php
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
        $file = fopen($path,"r");
        $arrayRemeras = json_decode(fread($file,filesize($path)));
        fclose($file);
        $remera = json_decode($_POST["json"]);
        $result = "[";
        array_push($arrayRemeras,$remera);
        for($i = 0 ; $i < count($arrayRemeras) ; $i++ ) {
            $result .= ($i == count($arrayRemeras) - 1 )? json_encode($arrayRemeras[$i])."]\r\n" :
             json_encode($arrayRemeras[$i]).",\r\n"; 
        }
        $file = fopen($path,"w");
        fwrite($file,$result);
        fclose($file);
        break;
}

?>
