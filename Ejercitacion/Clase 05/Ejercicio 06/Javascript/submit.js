window.onload = function submitJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var prods = JSON.parse(xhttp.responseText);
            for (var i = 0; i < prods.length; i++) {
                var info = "Codigo de barra: " + prods[i].codigoBarra + " - Nombre: " + prods[i].nombre + " - ";
                info += "Precio: " + prods[i].precio + "\n";
                alert(info);
                console.log(info);
            }
        }
    };
    xhttp.open("GET", "./PHP/recibirJsones.php", true);
    xhttp.send();
};
