function mostrar() {
    var checkbox = document.getElementsByName("mChbox");
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"];
    var oldTabla = document.getElementById("tab1");
    var tabla = document.createElement("table");
    var tableHead = tabla.createTHead();
    var tableBody = tabla.createTBody();
    var isName = false;
    var isNum = false;
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tab1");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true && checkbox[i].value == "name") {
            isName = true;
        }
        else if (checkbox[i].checked == true && checkbox[i].value == "num") {
            isNum = true;
        }
    }
    if (oldTabla != null) {
        oldTabla.remove(); //Elimino la tabla anterior para insertar la nueva
    }
    for (var i = 0; i < 12 && (isNum || isName); i++) {
        tableBody.insertRow();
        if (isNum) {
            if (i == 0) {
                tableHead.appendChild(document.createElement("th")).textContent = "Número:";
            }
            tableBody.rows.item(i).insertCell().textContent = (i + 1).toString();
        }
        if (isName) {
            if (i == 0) {
                tableHead.appendChild(document.createElement("th")).textContent = "Mes:";
            }
            tableBody.rows.item(i).insertCell().textContent = meses[i];
        }
    }
    if (isNum || isName) {
        tabla.appendChild(tableHead);
        tabla.appendChild(tableBody);
        document.body.appendChild(tabla);
    }
}
