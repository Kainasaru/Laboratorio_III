<?php
/*Aplicación Nº 7 (Leer un archivo .json)
Realizar una aplicación web que, a través de Ajax, lea el archivo auto.json desde la página traerAuto.php
 y muestre el JSON recibido por alert() y en el console.log()..*/
$path = "../json/auto.json";
$file = fopen($path,"r");
echo fread($file, filesize($path));
fclose($file);
?>