function traerAutos() {
    var xhttp = new XMLHttpRequest();
    var tabla = document.createElement("table");
    var titulos = ["Id", "Marca", "Precio", "Color", "Modelo"];
    tabla.createTHead();
    tabla.border = "1";
    for (var i = 0; i < 5; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var i = 0; i < json.length; i++) {
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Marca;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Precio;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Color;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Modelo;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    };
    xhttp.open("GET", "./PHP/traerAutos.php", true);
    xhttp.send();
}
