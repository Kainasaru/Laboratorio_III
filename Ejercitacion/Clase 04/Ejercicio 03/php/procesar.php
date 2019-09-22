<?php 
$path = $_GET["file"];
$word = $_GET["word"];

$okFile = false;
if(pathinfo($path,PATHINFO_EXTENSION) == "txt" && file_exists($path)) {
    $file = fopen($path,"r");
    if( filesize($path) > 0  ) {
        $okFile = true;
        if( $word != "" && strstr( fread($file,filesize($path) ),$word) != "") {
            echo 1;
        }
        else {
            echo 0;
        }
    }
    fclose($file);
}
if($okFile === false) {
    echo -1;
}
?>