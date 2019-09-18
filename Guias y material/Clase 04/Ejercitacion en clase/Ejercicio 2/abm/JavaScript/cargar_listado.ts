let xhttp: XMLHttpRequest = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200 && xhttp.response == 0) {
        window.location.replace("./login/login.php");
    }
    else { //Si el usuario esta logueado cargo sus productos
        let xhttp2: XMLHttpRequest = new XMLHttpRequest();
        xhttp2.onreadystatechange = () => {
            if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                document.getElementById("divGrilla").innerHTML = xhttp2.response;
            }
        };
        xhttp2.open("POST", "./administracion.php", true);
        xhttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp2.send("queHago=mostrarGrilla");
    }
};
xhttp.open("POST", "./verificar_usuario.php", true);
xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhttp.send("verify=user");