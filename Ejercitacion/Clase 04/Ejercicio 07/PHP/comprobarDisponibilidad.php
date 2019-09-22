<?php
sleep(rand(0,6)); //Genero retardo
$respuestas = array("SI","NO");
$answer = $respuestas[rand(0,1)];
$nombre = $_GET["name"];
if($answer == "NO") {
    $path = "../archivos/nombres.txt";
    $file = fopen($path,"r");
    $answer = "Sugerencias:<ul>";
    while(!feof($file)) {
        $name = fgets($file);
        $name = str_replace("\r\n","",$name);
        if($name == $nombre) { //Si el arhivo tiene el nombre que el usuario escribio no puedo decirle que no esta.
            $answer = "SI";
            break;
        }
        $answer .= "<li><a onclick=\"reemplazar('$name')\" href=\"#home\">$name</a></li>";
    }
    $answer = ($answer == "SI")? $answer : $answer."</ul>"; //Si se cambio la respuesta la dejo como estaba.
    fclose($file);
}
echo $answer;
?>
