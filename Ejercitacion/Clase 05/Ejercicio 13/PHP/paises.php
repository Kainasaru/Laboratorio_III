<?php
$path = "../json/paises.json";
$cod = $_POST["codPais"];
$file = fopen($path,"r");
$paises = fread($file,filesize($path));
$paises = json_decode($paises);
$resultado = array();
foreach($paises as $pais) {
    if($pais->CodigoPais == $cod) {
        array_push($resultado,$pais);
    }
}
echo json_encode($resultado);
fclose($file);
?>