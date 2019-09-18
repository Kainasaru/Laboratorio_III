var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200 && xhttp.response == 0) {
        window.location.replace("./login/login.php");
    }
    else { //Si el usuario esta logueado cargo sus productos
        var xhttp2_1 = new XMLHttpRequest();
        xhttp2_1.onreadystatechange = function () {
            if (xhttp2_1.readyState == 4 && xhttp2_1.status == 200) {
                document.getElementById("divGrilla").innerHTML = xhttp2_1.response;
            }
        };
        xhttp2_1.open("POST", "./administracion.php", true);
        xhttp2_1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp2_1.send("queHago=mostrarGrilla");
    }
};
xhttp.open("POST", "./verificar_usuario.php", true);
xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhttp.send("verify=user");
