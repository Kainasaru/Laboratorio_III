function mostrar() {
    var checkbox = document.getElementsByName("mChbox");
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"];
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tab1");
    tabla.createTHead();
    tabla.createTBody();
    for (var i = 0; i < 12; i++) {
        tabla.tBodies.item(0).insertRow();
    }
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true && checkbox[i].value == "name") {
            tabla.tHead.insertBefore(document.createElement("th"), tabla.tHead[1]).textContent = "Mes: ";
            for (var i_1 = 0; i_1 < 12; i_1++) {
                tabla.tBodies.item(0).rows.item(i_1).insertCell().textContent = meses[i_1];
            }
        }
        else if (checkbox[i].checked == true && checkbox[i].value == "num") {
            tabla.tHead.appendChild(document.createElement("th")).textContent = "Número: ";
            for (var i_2 = 0; i_2 < 12; i_2++) {
                tabla.tBodies.item(0).rows.item(i_2).insertCell().textContent = (i_2 + 1).toString();
            }
        }
    }
    if (tabla.tHead.children.length == 0) {
        if (document.getElementById("tab1")) {
            document.body.removeChild(document.getElementById("tab1"));
        }
    }
    else if (document.getElementById("tab1")) {
        document.body.replaceChild(tabla, document.getElementById("tab1"));
    }
    else {
        document.body.appendChild(tabla);
    }
}
