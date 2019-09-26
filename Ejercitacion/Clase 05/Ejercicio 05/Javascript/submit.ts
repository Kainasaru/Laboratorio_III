window.onload = function submitJSON() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let prod = JSON.parse(xhttp.responseText);
            let info : string = `Codigo de barra: ${prod.codigoBarra} - Nombre: ${prod.nombre} - `;
            info += `Precio: ${prod.precio}`;
            alert(info);
            console.log(info);
        }
    }
    xhttp.open("GET", "./PHP/recibirJson.php", true);
    xhttp.send();
}