<?php
$seMuestra = true;
foreach($_POST as $item) {
    if($item == "") {
        echo "No se enviaron todos los datos correctamente...<br/>";
        echo "<a href='./index.php'>Volver</a>";
        $seMuestra = false;
        break;
    }
}
if($seMuestra) {
    echo "<script type='text/javascript' src='../clases/mostrar.js' ></script>";
    echo "Se enviaron todos los datos correctamente<br/>";
    echo "<a href='./index.php' onclick=\"mostrar(".$_POST["dni"].",'".$_POST["nombre"]."','".$_POST["apellido"]."','".
    $_POST["sexo"]."',".$_POST["legajo"].",".$_POST["sueldo"].")\" >Volver</a>";
}
?>