function buscar() {
    var nombre = document.getElementById("name").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var div = document.getElementById("result");
            if (!div) {
                div = document.body.appendChild(document.createElement("div"));
                div.id = "result";
            }
            if (xhttp.response == "SI") {
                div.style.color = "green";
                div.innerHTML = "El nombre est&aacute; disponible.";
            }
            else {
                div.style.color = "black";
                div.innerHTML = "<span style=\"color : red\">El nombre no est&aacute; disponible.</span><br/>";
                div.innerHTML += xhttp.response;
            }
        }
    };
    xhttp.open("GET", "./PHP/comprobarDisponibilidad.php?name=" + nombre);
    xhttp.send();
}
function reemplazar(name) {
    document.getElementById("name").value = name;
}
