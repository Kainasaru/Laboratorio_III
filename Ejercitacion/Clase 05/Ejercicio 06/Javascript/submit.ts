window.onload = function submitJSON() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let prods = JSON.parse(xhttp.responseText);
            for(let i = 0 ; i < prods.length ; i++) {
                let info : string = `Codigo de barra: ${prods[i].codigoBarra} - Nombre: ${prods[i].nombre} - `;
                info += `Precio: ${prods[i].precio}\n`;
                alert(info);
                console.log(info);
            }
        }
    }
    xhttp.open("GET", "./PHP/recibirJsones.php", true);
    xhttp.send();
}