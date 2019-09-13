window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log("estoy");
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //window.location.href = "./login/login.php";
            console.log("Respuesta: " + xhttp.response);
        }
    };
    xhttp.open("GET", "./verificacion.php?verify=user", true);
    xhttp.send();
    /* xhttp.onreadystatechange = () => {
         if(xhttp.readyState == 4 && xhttp.status == 200) {
             document.getElementById("divGrilla").innerHTML = xhttp.response;
         }
     }
     xhttp.open("POST","./administracion.php",true);
     xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
     xhttp.send("queHago=mostrarGrilla");*/
};
