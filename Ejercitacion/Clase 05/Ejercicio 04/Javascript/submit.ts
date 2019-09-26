window.onload = function submitJSON() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    let productos = '[{ "codigoBarra" : "abc123" , "nombre" : "tomate" , "precio" : 50 },\
            {"codigoBarra" : "123" , "nombre" : "arroz" , "precio" : 45 },\
            {"codigoBarra" : "456" , "nombre" : "pepino" , "precio" : 25} ]';
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.write(xhttp.responseText);
        }
    }
    xhttp.open("POST", "./PHP/mostrarColeccionJson.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send(`json=${productos}`);
}