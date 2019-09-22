function solicitar(action: string, interval : string) {
    if( action == "start") {
        pedirNoticia();
        reanudar();
    }
    else if (action == "continue") {
        reanudar();
    }
    else if(action == "stop"){
        detener(Number(interval));
    }
    else if( action == "previous") {
        if( interval != "null") {
            detener(Number(interval)); 
        }
        desplazar(-1); //Negativo para anterior positivo o cero para siguiente
    }
    else if(action == "next") {
        if( interval != "null") {
            detener(Number(interval)); 
        }
        desplazar(1);
    }
}

function resaltar(color : string) {
    (<HTMLDivElement>document.getElementById("news")).style.backgroundColor = color;
}

function desplazar(valor : number){
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let fecha = new Date();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            (<HTMLDivElement>document.getElementById("news")).innerHTML = xhttp.response + "<br/>" +
                `Recepcion: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
                resaltar("orange");
                setTimeout(resaltar,500,"white");
        }
    }
    xhttp.open("POST", "./PHP/noticias.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send(`move=${valor}`);
}

function reanudar() {
    let intervalId: number = setInterval(pedirNoticia, 5000);
    (<HTMLInputElement>document.getElementById("controlBtn")).value = "Detener";
    document.getElementById("controlBtn").style.backgroundColor = "red";
    document.getElementById("controlBtn").setAttribute("onclick", `solicitar('stop','${intervalId}')`);
    document.getElementById("btnAnterior").setAttribute("onclick", `solicitar('previous','${intervalId}')`);
    document.getElementById("btnSiguiente").setAttribute("onclick", `solicitar('next','${intervalId}')`);
}

function detener(intervalId: number) {
    clearInterval(intervalId);
    (<HTMLInputElement>document.getElementById("controlBtn")).value = "Reanudar";
    document.getElementById("controlBtn").style.backgroundColor = "green";
    document.getElementById("controlBtn").setAttribute("onclick", `solicitar('continue','null')`);
    document.getElementById("btnAnterior").setAttribute("onclick", `solicitar('previous','null')`);
    document.getElementById("btnSiguiente").setAttribute("onclick", `solicitar('next','null')`);
}

function pedirNoticia() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let fecha: Date = new Date();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            (<HTMLDivElement>document.getElementById("news")).innerHTML = xhttp.response + "<br/>" +
                `Recepcion: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
                resaltar("orange");
                setTimeout(resaltar,500,"white");
            }
    }
    xhttp.open("GET", "./PHP/noticias.php", true);
    xhttp.send();
}