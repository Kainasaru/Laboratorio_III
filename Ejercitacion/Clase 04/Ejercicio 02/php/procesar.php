<?php 
$path = $_GET["file"];
if( pathinfo($path,PATHINFO_EXTENSION) == "txt" && file_exists($path)) {
    if( filesize($path) == 0  ) {
        echo "Vacio";
    }
    else {
        $file = fopen($path,"r");
        $texto = fread($file,filesize($path));
        echo $texto;
        fclose($file);
    }
}
?>