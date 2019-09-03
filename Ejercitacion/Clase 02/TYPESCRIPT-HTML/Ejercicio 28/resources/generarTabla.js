function generarTabla(rows, cols) {
    document.getElementById("div").innerHTML = "";
    var tabla = document.createElement("table");
    tabla.createTBody();
    tabla.createCaption();
    tabla.caption.textContent = "Su tabla";
    tabla.setAttribute("border", "1");
    for (var i = 0; i < rows; i++) {
        tabla.tBodies.item(0).insertRow();
        for (var j = 0; j < cols; j++) {
            tabla.tBodies.item(0).rows.item(i).insertCell().textContent = "(" + (i + 1) + ";" + (j + 1) + ")";
        }
    }
    document.getElementById("div").appendChild(tabla);
}
