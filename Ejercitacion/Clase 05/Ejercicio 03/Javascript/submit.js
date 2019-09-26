window.onload = function submitJSON() {
    var xhttp = new XMLHttpRequest();
    var producto = '{"codigoBarra" : "abc123" , "nombre" : "tomate" , "precio" : 50 }';
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.write(xhttp.responseText);
        }
    };
    xhttp.open("POST", "./PHP/mostrarJSON.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("json=" + producto);
};
