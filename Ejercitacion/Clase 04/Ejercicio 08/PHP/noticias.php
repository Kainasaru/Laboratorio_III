<?php
session_start();
if( !isset($_SESSION["noticeId"]) ) {
    $_SESSION["noticeId"] = 0;
}

if( isset($_POST["move"]) && $_POST["move"] < 0 ) { //Si el usuario esta moviendo a la izquierda
    $_SESSION["noticeId"]--;
    if($_SESSION["noticeId"] < 1) {
        $_SESSION["noticeId"] = 3;
    }
}
else {
    $_SESSION["noticeId"] = ($_SESSION["noticeId"] == 3)? 1 : $_SESSION["noticeId"]+1;
}
switch ($_SESSION["noticeId"]) {
case 1:
echo "<h2>Descubren agua en la atmósfera de un exoplaneta</h2>";
echo "<img src='./images/exoplaneta.jpg' alt='exoplaneta_foto' width='200px' height='150px' align='middle'>";
echo "<p>El autor principal del hallazgo lo calificó como \"el paso más grande que se dio hasta nuestro objetivo 
final de encontrar vida en otros planetas\"</p>";
break;
case 2:
echo "<h2>Se le murió el gato pero lo hizo clonar</h2>";
echo "<img src='./images/gato.jpg' alt='gato_foto' width='200px' height='150' align='middle'>";
echo "<p>El dueño del animal abonó 35.000 dólares y, tras siete meses, obtuvo una \"copia\" de su mascota
fallecida... El caso ocurrió en China.</p>";
break;
case 3:
echo "<h2>Denunció once veces a su ex pareja, que continúa hostigándola</h2>";
echo "<img src='./images/mujer.jpg' alt='mujer_foto' width='200px' height='150'>";
echo "<p>El padre de su hijo viola la restricción perimetral y la amenaza de muerte. 
Hace poco, le rompió la luneta del auto a cascotazos. La mujer, vecina de La Plata, vive con miedo.</p>";
break;
}
?>