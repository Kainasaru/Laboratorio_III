<?php

if( isset( $_GET["verify"]) ) {
    echo (!isset($_SESSION["usuario"]) || $_SESSION["usuario"] != "ok")? "0" : "1";
}
else if( !isset($_SESSION["usuario"]) || $_SESSION["usuario"] != "ok" ){
    header("location: ./login/login.php");
}
?>