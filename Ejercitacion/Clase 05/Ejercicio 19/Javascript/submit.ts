//Carga datos a modificar 
function modificarRemera(jsonStr: string) {
    let jsonObj: any = JSON.parse(jsonStr);
    (<HTMLInputElement>document.getElementById("id")).value = jsonObj.id;
    (<HTMLInputElement>document.getElementById("slogan")).value = jsonObj.slogan;
    (<HTMLInputElement>document.getElementById("size")).value = jsonObj.size;
    (<HTMLInputElement>document.getElementById("price")).value = jsonObj.price;
    (<HTMLInputElement>document.getElementById("color")).value = jsonObj.color;
    (<HTMLInputElement>document.getElementById("manName")).value = jsonObj.manofacturer.name;
    (<HTMLInputElement>document.getElementById("manLogo")).value = jsonObj.manofacturer.logo;
    (<HTMLInputElement>document.getElementById("manCountry")).value = jsonObj.manofacturer.location.country;
    (<HTMLInputElement>document.getElementById("manCity")).value = jsonObj.manofacturer.location.city;
    document.getElementById("modBtn").style.display = "block";
}
//Solo envia por ajax datos a modificar
function enviarModificacion() {
    if (confirm("¿Seguro?")) {
        document.getElementById("modBtn").style.display = "none";
        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        let id: number = Number((<HTMLInputElement>document.getElementById("id")).value);
        let slogan: string = (<HTMLInputElement>document.getElementById("slogan")).value;
        let tamaño: string = (<HTMLInputElement>document.getElementById("size")).value;
        let precio: string = (<HTMLInputElement>document.getElementById("price")).value;
        let color: string = (<HTMLInputElement>document.getElementById("color")).value;
        let fabNombre: string = (<HTMLInputElement>document.getElementById("manName")).value;
        let fabLogo: string = (<HTMLInputElement>document.getElementById("manLogo")).value;
        let fabPais: string = (<HTMLInputElement>document.getElementById("manCountry")).value;
        let fabCiudad: string = (<HTMLInputElement>document.getElementById("manCity")).value;
        fabLogo = fabLogo.replace(/&/g, encodeURIComponent("&"));
        let jsonObj: any = {
            "id": id, "slogan": slogan, "size": tamaño, "price": precio, "color": color,
            "manofacturer": { "name": fabNombre, "logo": fabLogo, "location": { "country": fabPais, "city": fabCiudad } }
        };
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                traerRemeras();
            }
        }
        xhttp.open("POST", "./PHP/administrarRemeras.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send(`option=modificarRemera&json=${JSON.stringify(jsonObj)}`);
    }
}
//Enviar solicitud de eliminacion con respectivo id
function quitarRemera(id: string) {
    if (confirm("¿Está seguro?")) {
        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                traerRemeras();
            }
        }
        xhttp.open("POST", "./PHP/administrarRemeras.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send(`option=quitarRemera&id=${id}`);
    }
}
//Envia solicitud de agregado
function agregarRemera() {
    document.getElementById("modBtn").style.display = "none";
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let id: number = Number((<HTMLInputElement>document.getElementById("id")).value);
    let slogan: string = (<HTMLInputElement>document.getElementById("slogan")).value;
    let tamaño: string = (<HTMLInputElement>document.getElementById("size")).value;
    let precio: string = (<HTMLInputElement>document.getElementById("price")).value;
    let color: string = (<HTMLInputElement>document.getElementById("color")).value;
    let fabNombre: string = (<HTMLInputElement>document.getElementById("manName")).value;
    let fabLogo: string = (<HTMLInputElement>document.getElementById("manLogo")).value;
    let fabPais: string = (<HTMLInputElement>document.getElementById("manCountry")).value;
    let fabCiudad: string = (<HTMLInputElement>document.getElementById("manCity")).value;
    fabLogo = fabLogo.replace(/&/g, encodeURIComponent("&"));
    let jsonObj: any = {
        "id": id, "slogan": slogan, "size": tamaño, "price": precio, "color": color,
        "manofacturer": { "name": fabNombre, "logo": fabLogo, "location": { "country": fabPais, "city": fabCiudad } }
    };
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            traerRemeras();
        }
    }
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send(`option=agregarRemera&json=${JSON.stringify(jsonObj)}`);
}
//Muestra todo
function traerRemeras() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let tabla: HTMLTableElement = document.createElement("table");
    let titulos: string[] = ["Id", "Slogan", "Tamaño", "Precio", "Color", "Nombre del fabricante", "Logo del fabricante", "Pais del fabricante", "Ciudad del fabricante", "Action", "Anchor"];
    tabla.createTHead();
    tabla.border = "1";
    for (let i = 0; i < titulos.length; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
        if (i == titulos.length - 1) {
            (<HTMLTableHeaderCellElement>tabla.tHead.children[i]).hidden = true;
        }
    }
    tabla.createTBody();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json: any = JSON.parse(xhttp.responseText);
            for (let i = 0; i < json.length; i++) {
                let fabricante: any = json[i].manofacturer;
                let ubicacion: any = fabricante.location;
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].slogan;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].size;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].price;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].color;
                tabla.tBodies[0].rows[i].insertCell().textContent = fabricante.name;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<img src='" + fabricante.logo + "'>";
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.country;
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.city;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<a href='#" + json[i].id + "' onclick='quitarRemera(\"" + json[i].id + "\")' >Eliminar</a><br/>\
                <a href='#' onclick='modificarRemera("+ JSON.stringify(JSON.stringify(json[i])) + ")' >Modificar</a>";
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a name="' + json[i].id + '"></a>';
                tabla.tBodies[0].rows[i].cells[10].hidden = true;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    }
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("option=traerRemeras");
}
//Muestra algunas
function filtrarRemeras() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let tabla: HTMLTableElement = document.createElement("table");
    let titulos: string[] = ["Id", "Slogan", "Tamaño", "Precio", "Color", "Nombre del fabricante", "Logo del fabricante", "Pais del fabricante", "Ciudad del fabricante", "Anchor"];
    let filtro: string = (<HTMLInputElement>document.getElementById("filtro")).value;
    let campo: string = (<HTMLSelectElement>document.getElementById("selector")).selectedOptions[0].value;
    tabla.createTHead();
    tabla.border = "1";
    for (let i = 0; i < titulos.length; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json: any = JSON.parse(xhttp.responseText);
            for (let i = 0; i < json.length; i++) {
                let fabricante: any = json[i].manofacturer;
                let ubicacion: any = fabricante.location;
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].slogan;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].size;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].price;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].color;
                tabla.tBodies[0].rows[i].insertCell().textContent = fabricante.name;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<img src='" + fabricante.logo + "'>";
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.country;
                tabla.tBodies[0].rows[i].insertCell().textContent = ubicacion.city;
                tabla.tBodies[0].rows[i].insertCell().innerHTML = "<a href='#" + json[i].id + "' onclick='quitarRemera(\"" + json[i].id + "\")' >Eliminar</a><br/>\
                <a href='#' onclick='modificarRemera("+ JSON.stringify(JSON.stringify(json[i])) + ")' >Modificar</a>";
                tabla.tBodies[0].rows[i].insertCell().innerHTML = '<a name="' + json[i].id + '"></a>';
                tabla.tBodies[0].rows[i].cells[10].hidden = true;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    }
    xhttp.open("POST", "./PHP/administrarRemeras.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send(`option=traerRemerasFiltradasPorCampo&campo=${campo}&filtro=${filtro}`);
}