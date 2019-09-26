window.onload = function submitJSON() {
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let producto : string = '{"codigoBarra" : "abc123" , "nombre" : "tomate" , "precio" : 50 }';
    xhttp.onreadystatechange = () => {
        if( xhttp.readyState == 4 && xhttp.status == 200) {
            document.write(xhttp.responseText);
        }
    }
    xhttp.open("POST","./PHP/mostrarJSON.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send(`json=${producto}`);
}