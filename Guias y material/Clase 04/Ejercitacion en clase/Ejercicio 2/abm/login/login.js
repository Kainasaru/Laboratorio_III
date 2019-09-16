function loguear() {
    if (localStorage.getItem("Empleados") === null) {
        localStorage.setItem("Empleados", "Juan-123,Rosa-456,Carlos-666");
    }
    var emps = String(localStorage.getItem("Empleados")).split(",");
    var empName = document.getElementById("name").value;
    var empFile = document.getElementById("file").value;
    var redirect = false;
    /* Creo el elemento font con el mensaje en caso de error */
    var msgElement = document.createElement("font");
    msgElement.id = "msg1";
    msgElement.color = "red";
    msgElement.textContent = "ERROR durante login.";
    if (document.getElementById("msg1") !== null) {
        document.getElementById("msg1").remove();
    }
    /**/
    for (var i = 0; i < emps.length; i++) {
        var emp = emps[i].split("-");
        if (emp[0].toLowerCase() == empName.toLowerCase() && emp[1].toLowerCase() == empFile.toLowerCase()) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "../autenticar.php", false);
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("login=user");
            window.location.replace("../index.php");
            redirect = true;
            break;
        }
    }
    if (!redirect) {
        document.getElementById("div1").appendChild(msgElement);
    }
}
