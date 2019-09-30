<?php
$option = $_POST["option"];
switch ($option) {
    case "traerCiudades":
        $path = "../json/city.list.min.json";
        $file = fopen($path, "r");
        echo fread($file, filesize($path));
        fclose($file);
        break;
}
