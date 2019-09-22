function buscar() {
    var nombre = document.getElementById("name").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var span = document.getElementById("result");
            if (!span) {
                span = document.body.appendChild(document.createElement("span"));
                span.id = "result";
            }
            if (xhttp.response == "SI") {
                span.style.color = "green";
                span.innerHTML = "El nombre est&aacute; disponible.";
            }
            else {
                span.style.color = "red";
                span.innerHTML = "El nombre no est&aacute; disponible.";
            }
        }
    };
    xhttp.open("GET", "./PHP/comprobarDisponibilidad.php?name=" + nombre);
    xhttp.send();
}
