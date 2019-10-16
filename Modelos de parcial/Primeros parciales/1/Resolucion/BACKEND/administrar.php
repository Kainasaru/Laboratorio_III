<?php
require_once "../../Libreria/PHP/json.php";
require_once "../../Libreria/PHP/archivo.php";

$option = isset($_POST["option"])? $_POST["option"] : "";
switch($option) {
    case "agregar":
        $json = new JSON("./alien.json");
        $alien = json_decode( $_POST["alien"] );
        if( isset($_FILES["foto"] ) ) {
            $arch = new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]);
            $alien->pathFoto = "./BACKEND/fotos/".$arch->getName();
            $arch->move_uploaded_file_to("./fotos/".$arch->getName());
        }
        $json->append( $alien);
        break;
    case "mostrar":
        $json = new JSON("./alien.json");
        echo json_encode( $json->read());
        break;
    case "eliminar":
        $raza = $_POST["raza"];
        $cuadrante = $_POST["cuadrante"];
        $json = new JSON("./alien.json");
        $jsones = $json->read();
        for ($i=0; $i < count($jsones); $i++) { 
            if($jsones[$i]->raza == $raza && $jsones[$i]->cuadrante == $cuadrante) {
                unset($jsones[$i]);
                $jsones = array_values($jsones);
                break;
            }
        }
        $json->write($jsones);
        break;
    case "modificar":
        $ok = "0";
        $json = new JSON("./alien.json");
        $alien = json_decode( $_POST["alien"] );
        if( isset($_FILES["foto"] ) ) {
            @unlink($alien->pathFoto);
            $arch = new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]);
            $alien->pathFoto = "./BACKEND/fotos/".$arch->getName();
            $arch->move_uploaded_file_to("./fotos/".$arch->getName());
        }
        $jsonArray = $json->read();
        for ($i=0; $i < count($jsonArray); $i++) { 
            if( $jsonArray[$i]->cuadrante == $alien->cuadrante) {
                $jsonArray[$i] = $alien;
                $ok = "1";
                break;
            }
        }
        $json->write($jsonArray);
        echo $ok;
        break;
}