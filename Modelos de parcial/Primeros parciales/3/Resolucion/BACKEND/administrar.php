<?php
require_once "../../Librerias/json.php";
require_once "../../Librerias/archivo.php";

$option = $_POST["option"];
$jsonPath = "./televisores.json";
switch ($option) {
    case 'agregar':
        $tele = json_decode($_POST["tele"]);
        if( isset($_FILES["foto"])) {
            $pathFoto = "fotos/".$_FILES["foto"]["name"];
            $tele->pathFoto = $pathFoto;
            (new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]))->move_uploaded_file_to($pathFoto);
        }
        (new JSON($jsonPath))->append($tele);
        break;
    
    case 'traer':
        echo json_encode( (new JSON($jsonPath))->read() );
        break;
    
    case 'modificar':
        $tele = json_decode($_POST["tele"]);
        $json = new JSON($jsonPath);
        $jsonArray = $json->read();
        for ($i=0; $i < count($jsonArray); $i++) { 
            if($jsonArray[$i]->codigo == $tele->codigo) {
                if( isset($_FILES["foto"])) {
                    $pathFoto = "fotos/".$_FILES["foto"]["name"];
                    @unlink($jsonArray[$i]->pathFoto);
                    (new Archivo($_FILES["foto"]["tmp_name"],true,$_FILES["foto"]["name"]))->move_uploaded_file_to($pathFoto);
                    $tele->pathFoto = $pathFoto;
                }
                $jsonArray[$i] = $tele;
                break;
            }
        }
        break;
    
    default:
        # code...
        break;
}