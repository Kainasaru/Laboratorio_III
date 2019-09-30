function traerAutos() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let tabla : HTMLTableElement = document.createElement("table");
    let titulos : string[] = ["Id","Marca","Precio","Color","Modelo"];
    tabla.createTHead();
    tabla.border = "1";
    for(let i = 0 ; i < 5 ; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json : any = JSON.parse(xhttp.responseText);
            for(let i = 0 ; i < json.length ; i++) {
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Marca;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Precio;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Color;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].Modelo;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    }
    xhttp.open("GET", "./PHP/traerAutos.php", true);
    xhttp.send();
}