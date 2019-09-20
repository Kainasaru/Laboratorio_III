function mostrar(obj : string) {
    let jsonObj = JSON.parse(obj);
    alert(`${jsonObj.Id} - ${jsonObj.Marca} - ${jsonObj.Precio} - ${jsonObj.Color} - ${jsonObj.Modelo}`);
}
function leer() {
    let xhttp = new XMLHttpRequest();
    let tabla = "<table border=\"1\"><thead><th>Id</th><th>Marca</th><th>Precio</th><th>Color</th>" +
        "<th>Modelo</th><th>Acciones</th></thead><tbody>";
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json = JSON.parse(xhttp.response);
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                tabla += "<tr>";
                tabla += `<td>${json[i].Id}</td><td>${json[i].Marca}</td><td>${json[i].Precio}</td><td>${json[i].Color}</td><td>${json[i].Modelo}</td><td>\
                <input type="button" value="Ver" onclick="mostrar('${JSON.stringify(json[i])}')" /></td>`;
                tabla += "</tr>";
            }
            tabla += "</tbody></table>";
            document.getElementById("result").innerHTML += tabla;
        }
    }
    xhttp.open("GET", "./json_test.php", true);
    xhttp.send();
}


