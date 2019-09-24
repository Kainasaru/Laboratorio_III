window.onload = () => {
    solicitar("load");
    solicitar("1");
}

function solicitar(id : string) {
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let idSelect : string  = (id == "load")? "provincias" : "ciudades"; //Si es load debo cargar las provincias
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let select : HTMLSelectElement = <HTMLSelectElement>document.getElementById(idSelect);
            let options : string = xhttp.responseText;
            if( id == "load") {
                let respuestas : string[] = xhttp.responseText.split("___"); //Separa las provincias de las ciudades iniciales
                options = respuestas[0];
                (<HTMLSelectElement>document.getElementById("ciudades")).innerHTML = respuestas[1];
            }
            select.innerHTML = options; //Si es load carga provincias sino ciudades
        }
    }
    xhttp.open("POST", "./PHP/admin.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send(`codProvincia=${id}`);
}