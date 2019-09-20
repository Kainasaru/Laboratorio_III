<?php 
$numero = $_GET["num"];
if( is_numeric($numero) && strstr($numero,".") == "" && $numero > 0) {
    echo (ceil($numero / 2))." impares (0 a $numero).";
}
else {
    echo "error";
}
?>