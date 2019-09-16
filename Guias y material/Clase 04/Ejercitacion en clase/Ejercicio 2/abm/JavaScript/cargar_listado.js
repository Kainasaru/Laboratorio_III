window.onload = function () {
    var xhttp = new XMLHttpRequest();
    var error = false;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200 && xhttp.response == 0) {
            window.location.href = "./login/login.php";
            error = true;
        }
    };
    xhttp.open("GET", "./verificar_usuario.php?verify=user", false);
    xhttp.send();
    if (!error) {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("divGrilla").innerHTML = xhttp.response;
            }
        };
        xhttp.open("POST", "./administracion.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("queHago=mostrarGrilla");
    }
};
window.onunload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./autenticar.php", false);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send();
};
