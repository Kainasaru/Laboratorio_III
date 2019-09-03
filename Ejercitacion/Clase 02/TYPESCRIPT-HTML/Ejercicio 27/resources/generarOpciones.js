function generarOpciones(options) {
    document.getElementById("div").innerHTML = "";
    var select = document.getElementById("div").appendChild(document.createElement("select"));
    for (var i = 0; i < options; i++) {
        select.appendChild(document.createElement("option")).textContent = "Opci\u00F3n " + (i + 1);
    }
}
