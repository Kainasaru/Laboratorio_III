function loguear() {
    if (localStorage.getItem("Empleados") === null) {
        localStorage.setItem("Empleados", "Juan-123,Rosa-456,Carlos-666");
    }
    var emps = String(localStorage.getItem("Empleados")).split(",");
    var empName = document.getElementById("name").value;
    var empFile = document.getElementById("file").value;
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
        if (emp[0] == empName && emp[1] == empFile) {
            window.location.href = "./principal.html";
            break;
        }
    }
    document.getElementById("div1").appendChild(msgElement);
}
//# sourceMappingURL=login.js.map