<?php
$option = $_POST["option"];
$path = "../json/city.list.min.json";
$file = fopen($path, "r");
$cityArray = fread($file, filesize($path));
$result ="[";

switch ($option) {
    case "traerCiudades":
        echo $cityArray;
        fclose($file);
        break;
    case "agregarCiudad":
        fclose($file); //Cierro el archivo json de ciudades
        $city = $_POST["json"];
        $city = json_decode($city);
        $cityArray = json_decode($cityArray);
        array_push($cityArray,$city); //Agrego el json al array de jsones
        for($i = 0 ; $i < count($cityArray) ; $i++ ) {
            $result .= ($i == count($cityArray) - 1 )? json_encode($cityArray[$i])."]\r\n" :
             json_encode($cityArray[$i]).",\r\n"; 
        }
        $file = fopen($path,"w");
        fwrite($file,$result);
        fclose($file);
        break;
    case "quitarCiudad":
        fclose($file);
        $cityArray = json_decode($cityArray);
        for($i = 0 ; $i < count($cityArray) ; $i++) {
            if($cityArray[$i]->_id == $_POST["id"]) {
                unset($cityArray[$i]);
                $cityArray = array_values($cityArray);
                break;
            }
        }
        for($i = 0 ; $i < count($cityArray) ; $i++ ) {
            $result .= ($i == count($cityArray) - 1 )? json_encode($cityArray[$i])."]\r\n" :
             json_encode($cityArray[$i]).",\r\n"; 
        }
        $file = fopen($path,"w");
        fwrite($file,$result);
        fclose($file);
        break;
}

