window.onload = function submitJSON() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json : any = JSON.parse(xhttp.responseText);
            let data : string = `Id: ${json.Id} Marca: ${json.Marca} Precio: ${json.Precio} Color: `;
            data += `${json.Color} Modelo: ${json.Modelo}`;
            console.log(data);
            alert(data);
        }
    }
    xhttp.open("GET", "./PHP/traerAuto.php", true);
    xhttp.send();
}