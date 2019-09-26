function mostrar(jsonStr : string) {
    let jsonObj = JSON.parse(jsonStr );
    alert(`Id: ${jsonObj.Id} - Marca: ${jsonObj.Marca} -  Precio: ${jsonObj.Precio} -  Color: ${jsonObj.Color} - \
    Modelo: ${jsonObj.Modelo}.`);
}
function leer() {
    let tabla : string = "<table border='1'><thead><th>Id</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th>\
    <th>Action</th></thead><tbody>";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if( xhttp.readyState == 4 && xhttp.status == 200) {
            let jsonObj = JSON.parse(xhttp.responseText);
            for(let i = 0 ; i < jsonObj.length ; i++) {
                tabla += `<tr>\
                <td>${jsonObj[i].Id}</td>\
                <td>${jsonObj[i].Marca}</td>\
                <td>${jsonObj[i].Precio}</td>\
                <td>${jsonObj[i].Color}</td>\
                <td>${jsonObj[i].Modelo}</td>\
                <td><input type='button' value='ver' style='width:5em;'\
                 onclick='mostrar(${JSON.stringify(JSON.stringify(jsonObj[i]))})' ></td>\
                </tr>`;
            }
            tabla += "</tbody></table>";
            (<HTMLDivElement>document.getElementById("result")).innerHTML += tabla;
        }
    }
    xhttp.open("GET", "./json_test.php", true);
    xhttp.send();
}
