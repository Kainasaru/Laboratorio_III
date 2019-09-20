<?php
$path = "./autos.json";
$file = fopen("./autos.json","r");
echo fread($file,filesize("./autos.json"));
fclose($file);
?>