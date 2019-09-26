<?php
/*Aplicación Nº 3 (Enviar Json por Ajax)
Diseñar una aplicación que envíe por Ajax un producto hacia la página mostrarJson.php.
En dicha página, mostrar el valor recibido utilizando la función var_dump().
Luego, transformar lo recibido en un objeto standard de PHP y mostrar cada uno de sus atributos.
Utilizar las funciones json_encode() y json_decode().*/
$prod = $_POST["json"];
var_dump($prod);
$prod = json_decode($prod);
echo "Codigo de barras: ".$prod->codigoBarra." - Nombre: ".$prod->nombre." - Precio: ".$prod->precio;
?>