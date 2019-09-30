function submit() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json: any = JSON.parse(xhttp.responseText);
            (<HTMLInputElement>document.getElementById("idTxt")).value = json.Id;
            (<HTMLInputElement>document.getElementById("marcaTxt")).value = json.Marca;
            (<HTMLInputElement>document.getElementById("precioTxt")).value = json.Precio;
            (<HTMLInputElement>document.getElementById("colorTxt")).value = json.Color;
            (<HTMLInputElement>document.getElementById("modeloTxt")).value = json.Modelo;
        }
    }
    xhttp.open("GET", "./PHP/traerAuto.php", true);
    xhttp.send();
}

window.onload = () => {
    (<HTMLInputElement>document.getElementById("idTxt")).value = "";
    (<HTMLInputElement>document.getElementById("marcaTxt")).value = "";
    (<HTMLInputElement>document.getElementById("precioTxt")).value = "";
    (<HTMLInputElement>document.getElementById("colorTxt")).value = "";
    (<HTMLInputElement>document.getElementById("modeloTxt")).value = "";
}