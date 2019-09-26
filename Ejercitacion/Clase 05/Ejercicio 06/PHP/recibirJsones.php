<?php
/*Aplicación Nº 6 (Recibir colección de Json por Ajax)
Tomando como punto de partida el ejercicio anterior, recibir una colección de tres elementos de tipo producto
 por Ajax (desde recibirColeccion.php) y mostrar lo recibido con alert() y en el console.log().*/
$prods = array();
$codigosBarra = array("123","456","789");
$nombres = array("tomate","berenjena","frutilla");
$precios = array(50,75,100);
for($i = 0 ; $i < 3 ; $i++) {
    $prods[$i]["codigoBarra"] = $codigosBarra[$i];
    $prods[$i]["nombre"] = $nombres[$i];
    $prods[$i]["precio"] = $precios[$i];
}
echo json_encode($prods);
?>