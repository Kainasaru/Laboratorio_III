<?php
$path = "../json/autos.json";
$file = fopen($path,"r");
echo fread($file, filesize($path));
fclose($file);
?>