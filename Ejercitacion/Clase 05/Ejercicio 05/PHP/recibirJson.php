<?php
/*Aplicación Nº 5 (Recibir Json por Ajax)
Diseñar una aplicación que reciba por Ajax un producto desde la página recibirJson.php. Crear una instancia de stdClass y
asignarle los atributos y valores correspondientes.
Desde javascript, mostrar el valor recibido utilizando la función alert() y en el console.log().*/
$prod = new STDClass();
$prod->codigoBarra = "123";
$prod->nombre = "tomate";
$prod->precio = 50;
echo json_encode($prod);
?>