function cargarCiudades(id) {
    var xhttp = new XMLHttpRequest();
    var paisSel = document.getElementById("pais").selectedOptions[0].value;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            var ciudad = document.createElement("select");
            for (var i = 0; i < json.length; i++) {
                var opt = ciudad.appendChild(document.createElement("option"));
                opt.textContent = json[i].Ciudad;
            }
            document.getElementById("ciudad").innerHTML = ciudad.innerHTML;
        }
    };
    xhttp.open("POST", "./PHP/paises.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("codPais=" + paisSel);
}
window.onload = function () {
    cargarCiudades("AR");
};
