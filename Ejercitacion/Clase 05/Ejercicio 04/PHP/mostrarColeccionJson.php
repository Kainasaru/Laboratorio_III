<?php
/*Aplicación Nº 4 (Enviar colección de Json por Ajax)
Tomando como punto de partida el ejercicio anterior, enviar una colección de tres elementos de
tipo producto por Ajax (hacia la página mostrarColeccionJson.php) y mostrar lo recibido con var_dump() y
luego de transformarlo en un objeto standard de PHP, mostrar todos los atributos de todos los objetos.*/
$prods = $_POST["json"];
var_dump($prods);
$prods = json_decode($prods);
echo "Recorriendo STDClass<br/>";
foreach($prods as $prod) {
    echo "Codigo de barras: ".$prod->codigoBarra." - Nombre: ".$prod->nombre." - Precio: ".$prod->precio."<br/>";
}
?>