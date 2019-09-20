<?php
$jsonStr = $_GET["producto"];
$jsonObj = json_decode($jsonStr);
$jsonObj->nombre = "perejil";
$jsonObj->precio = 20;
echo json_encode($jsonObj);
//var_dump($jsonObj);
//echo $jsonObj["nombre"]." ".$jsonObj["codigoBarra"]." ".$json["precio"];
?>