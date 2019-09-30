function traerRemeras() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let tabla : HTMLTableElement = document.createElement("table");
    let titulos : string[] = ["Id","Slogan","Tamaño","Precio","Color","Nombre del fabricante","Logo del fabricante", "Pais del fabricante","Ciudad del fabricante"];
    tabla.createTHead();
    tabla.border = "1";
    for(let i = 0 ; i < titulos.length ; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json : any = JSON.parse(xhttp.responseText);
            for(let i = 0 ; i < json.length ; i++) {
                let fabricante : any = json[i].manofacturer;
                let ubicacion : any = fabricante.location;
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].slogan;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].size;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].price;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].color;
                tabla.tBodies[0].rows[i].insertCell().textContent = fabricante.name;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<img src='"+fabricante.logo + "'>";
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.country;
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.city;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    }
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("option=traerRemeras");
}