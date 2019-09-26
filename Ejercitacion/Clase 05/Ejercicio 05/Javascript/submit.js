window.onload = function submitJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var prod = JSON.parse(xhttp.responseText);
            var info = "Codigo de barra: " + prod.codigoBarra + " - Nombre: " + prod.nombre + " - ";
            info += "Precio: " + prod.precio;
            alert(info);
            console.log(info);
        }
    };
    xhttp.open("GET", "./PHP/recibirJson.php", true);
    xhttp.send();
};
