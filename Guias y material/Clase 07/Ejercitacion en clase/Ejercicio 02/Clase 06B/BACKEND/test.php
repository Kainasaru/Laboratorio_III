<?php
require_once("Archivo.php");

$objeto = new stdClass();

$res = Archivo::Subir();

$objeto->mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : NULL;
$objeto->fecha = date("Ymd_His");
$objeto->foto = $res["PathTemporal"];

echo json_encode($objeto);