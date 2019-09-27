window.onload = function submitJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            var data = "Id: " + json.Id + " Marca: " + json.Marca + " Precio: " + json.Precio + " Color: ";
            data += json.Color + " Modelo: " + json.Modelo;
            console.log(data);
            alert(data);
        }
    };
    xhttp.open("GET", "./PHP/traerAuto.php", true);
    xhttp.send();
};
