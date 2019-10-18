<?php 
require_once "../../Librerias/archivo.php";
require_once "../../Librerias/json.php";

$option = isset($_POST["option"])? $_POST["option"] : "";
$jsonPath = "./camperas.json";
$jsonColoresPath = "./colores.json";
switch ($option) {
    case 'agregar':
        $campera = json_decode($_POST["campera"]);
        if( isset($_FILES["foto"]) ) {
            $file = new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]);
            $file->move_uploaded_file_to("./fotos/".$file->getName());
            $campera->pathFoto = "./fotos/".$file->getName();
        }
        if( !file_exists($jsonPath)) {
            (new JSON($jsonPath,true))->append($campera);
        }
        else {
            (new JSON($jsonPath))->append($campera);
        }
        
        break;
    case 'mostrar':
        echo json_encode( (new JSON($jsonPath))->read());
        break;
    case 'eliminar':
        $json = new JSON($jsonPath);
        $campera = json_decode( $_POST["campera"]);
        $jsonArray = $json->read();
        for ($i=0; $i < count($jsonArray); $i++) { 
            if($jsonArray[$i]->codigo == $campera->codigo) {
                rename($campera->pathFoto,"./fotos/eliminadas/".pathinfo($campera->pathFoto,PATHINFO_BASENAME));
                unset($jsonArray[$i]);
                $jsonArray = array_values($jsonArray);
                break;
            }
        }
        $json->write($jsonArray);
        break;
    case 'modificar':
        $json = new JSON($jsonPath);
        $campera = json_decode( $_POST["campera"]);
        $jsonArray = $json->read();
        for ($i=0; $i < count($jsonArray); $i++) { 
            if($jsonArray[$i]->codigo == $campera->codigo) {
                if( isset($_FILES["foto"])){
                    unlink($jsonArray[$i]->pathFoto);
                    $arch = new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]);
                    $arch->move_uploaded_file_to("./fotos/modificadas/".pathinfo($arch->getName(),PATHINFO_BASENAME));
                    $campera->pathFoto = "./fotos/modificadas/".pathinfo($arch->getName(),PATHINFO_BASENAME);
                } 
                $jsonArray[$i] = $campera;
                break;
            }
        }
        $json->write($jsonArray);
        break;
    case 'colores':
        echo json_encode( (new JSON($jsonColoresPath))->read());
        break;
    
    default:
        # code...
        break;
}