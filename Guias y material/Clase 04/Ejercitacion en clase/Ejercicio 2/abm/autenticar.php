<?php
session_start();
if( isset($_POST["login"])  ) {
    $_SESSION["usuario"] = "ok";
}
else {
    session_destroy();
}
?>