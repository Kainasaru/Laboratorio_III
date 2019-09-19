<?php 
$numero = $_GET["num"];
if( $numero > 0) {
    echo "Hay ".(ceil($numero / 2))." numeros impares desde 0 a $numero";
}
else {
    echo "error";
}
?>