function loguear() {
    /*if( localStorage.getItem("Empleados") === null ) {
      localStorage.setItem("Empleados","Juan-123,Rosa-456,Carlos-666");
    }*/
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
    if (enLista(empName, empFile)) {
        window.location.href = "./principal.html";
    }
    document.getElementById("div1").appendChild(msgElement);
}
function registrar() {
    var emps = (localStorage.getItem("Empleados") === null) ? "" : localStorage.getItem("Empleados");
    emps += "," + document.getElementById("name").value + "-" +
        document.getElementById("file").value;
    localStorage.setItem("Empleados", emps);
    window.location.href = "./registro.html";
}
function enLista(empName, empFile) {
    var ret = localStorage.getItem("Empleados") !== null;
    var emps = String(localStorage.getItem("Empleados")).split(",");
    if (ret) {
        for (var i = 0; i < emps.length; i++) {
            var emp = emps[i].split("-");
            if (emp[0].toLowerCase() == empName.toLowerCase() && emp[1].toLowerCase() == empFile.toLowerCase()) {
                break;
            }
            ret = (i == emps.length - 1) ? false : ret;
        }
    }
    return ret;
}
//# sourceMappingURL=login.js.map