function submit() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            document.getElementById("idTxt").value = json.Id;
            document.getElementById("marcaTxt").value = json.Marca;
            document.getElementById("precioTxt").value = json.Precio;
            document.getElementById("colorTxt").value = json.Color;
            document.getElementById("modeloTxt").value = json.Modelo;
        }
    };
    xhttp.open("GET", "./PHP/traerAuto.php", true);
    xhttp.send();
}
window.onload = function () {
    document.getElementById("idTxt").value = "";
    document.getElementById("marcaTxt").value = "";
    document.getElementById("precioTxt").value = "";
    document.getElementById("colorTxt").value = "";
    document.getElementById("modeloTxt").value = "";
};
