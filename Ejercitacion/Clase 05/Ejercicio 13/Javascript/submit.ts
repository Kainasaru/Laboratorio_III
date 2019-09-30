function cargarCiudades(id: string) {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let paisSel: string = (<HTMLSelectElement>document.getElementById("pais")).selectedOptions[0].value;
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json: any = JSON.parse(xhttp.responseText);
            let ciudad: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
            for (let i = 0; i < json.length; i++) {
                let opt: HTMLOptionElement = <HTMLOptionElement>ciudad.appendChild(document.createElement("option"));
                opt.textContent = json[i].Ciudad;
            }
            document.getElementById("ciudad").innerHTML = ciudad.innerHTML;
        }
    }
    xhttp.open("POST", "./PHP/paises.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send(`codPais=${paisSel}`);
}

window.onload = () => {
    cargarCiudades("AR");
}