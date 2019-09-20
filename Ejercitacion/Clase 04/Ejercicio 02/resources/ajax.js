function enviar() {
    var xhttp = new XMLHttpRequest();
    var file = document.getElementById("file").value;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var div = document.getElementById("result");
            if (xhttp.response == "") {
                div.hidden = true;
                alert("Se produjo un error al leer el archivo.");
            }
            else {
                var texto = document.createElement("p");
                div.hidden = false;
                texto.setAttribute("style", "white-space: pre-line;");
                texto.textContent = xhttp.response;
                if (typeof div.childNodes[3] === "undefined") {
                    div.appendChild(texto);
                }
                else {
                    div.childNodes[3].textContent = xhttp.response;
                }
            }
        }
    };
    xhttp.open("GET", "./php/procesar.php?file=" + file);
    xhttp.send();
}
