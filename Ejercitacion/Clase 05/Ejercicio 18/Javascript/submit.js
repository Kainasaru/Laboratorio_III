function quitarRemera(id) {
    if (confirm("¿Está seguro?")) {
        var xhttp_1 = new XMLHttpRequest();
        xhttp_1.onreadystatechange = function () {
            if (xhttp_1.readyState == 4 && xhttp_1.status == 200) {
                traerRemeras();
            }
        };
        xhttp_1.open("POST", "./PHP/administrarRemeras.php", true);
        xhttp_1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp_1.send("option=quitarRemera&id=" + id);
    }
}
function agregarRemera() {
    var xhttp = new XMLHttpRequest();
    var id = Number(document.getElementById("id").value);
    var slogan = document.getElementById("slogan").value;
    var tamaño = document.getElementById("size").value;
    var precio = document.getElementById("price").value;
    var color = document.getElementById("color").value;
    var fabNombre = document.getElementById("manName").value;
    var fabLogo = document.getElementById("manLogo").value;
    var fabPais = document.getElementById("manCountry").value;
    var fabCiudad = document.getElementById("manCity").value;
    fabLogo = fabLogo.replace(/&/g, encodeURIComponent("&"));
    var jsonObj = { "id": id, "slogan": slogan, "size": tamaño, "price": precio, "color": color,
        "manofacturer": { "name": fabNombre, "logo": fabLogo, "location": { "country": fabPais, "city": fabCiudad } } };
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            traerRemeras();
        }
    };
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("option=agregarRemera&json=" + JSON.stringify(jsonObj));
}
function traerRemeras() {
    var xhttp = new XMLHttpRequest();
    var tabla = document.createElement("table");
    var titulos = ["Id", "Slogan", "Tamaño", "Precio", "Color", "Nombre del fabricante", "Logo del fabricante", "Pais del fabricante", "Ciudad del fabricante", "Action", "Anchor"];
    tabla.createTHead();
    tabla.border = "1";
    for (var i = 0; i < titulos.length; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
        if (i == titulos.length - 1) {
            tabla.tHead.children[i].hidden = true;
        }
    }
    tabla.createTBody();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var i = 0; i < json.length; i++) {
                var fabricante = json[i].manofacturer;
                var ubicacion = fabricante.location;
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].slogan;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].size;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].price;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].color;
                tabla.tBodies[0].rows[i].insertCell().textContent = fabricante.name;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<img src='" + fabricante.logo + "'>";
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.country;
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.city;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a href="#' + json[i].id + '" onclick="quitarRemera(\'' + json[i].id + '\')">Eliminar</a>';
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a name="' + json[i].id + '"></a>';
                tabla.tBodies[0].rows[i].cells[10].hidden = true;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    };
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("option=traerRemeras");
}
function filtrarRemeras() {
    var xhttp = new XMLHttpRequest();
    var tabla = document.createElement("table");
    var titulos = ["Id", "Slogan", "Tamaño", "Precio", "Color", "Nombre del fabricante", "Logo del fabricante", "Pais del fabricante", "Ciudad del fabricante", "Anchor"];
    var filtro = document.getElementById("filtro").value;
    var campo = document.getElementById("selector").selectedOptions[0].value;
    tabla.createTHead();
    tabla.border = "1";
    for (var i = 0; i < titulos.length; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var i = 0; i < json.length; i++) {
                var fabricante = json[i].manofacturer;
                var ubicacion = fabricante.location;
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].slogan;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].size;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].price;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].color;
                tabla.tBodies[0].rows[i].insertCell().textContent = fabricante.name;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<img src='" + fabricante.logo + "'>";
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.country;
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.city;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a href="#' + json[i].id + '" onclick="quitarRemera(\'' + json[i].id + '\')">Eliminar</a>';
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a name="' + json[i].id + '"></a>';
                tabla.tBodies[0].rows[i].cells[10].hidden = true;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    };
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("option=traerRemerasFiltradasPorCampo&campo=" + campo + "&filtro=" + filtro);
}
