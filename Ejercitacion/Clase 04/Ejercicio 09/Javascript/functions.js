window.onload = function () {
    solicitar("load");
    solicitar("1");
};
function solicitar(id) {
    var xhttp = new XMLHttpRequest();
    var idSelect = (id == "load") ? "provincias" : "ciudades"; //Si es load debo cargar las provincias
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var select = document.getElementById(idSelect);
            var options = xhttp.responseText;
            if (id == "load") {
                var respuestas = xhttp.responseText.split("___"); //Separa las provincias de las ciudades iniciales
                options = respuestas[0];
                document.getElementById("ciudades").innerHTML = respuestas[1];
            }
            select.innerHTML = options; //Si es load carga provincias sino ciudades
        }
    };
    xhttp.open("POST", "./PHP/admin.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("codProvincia=" + id);
}
