"use strict";
function mostrar() {
    var nombre = document.getElementById("1").value;
    var edad = document.getElementById("2").value;
    var edad2 = parseInt(edad);
    console.log(edad2);
    edad = (isNaN(parseInt(edad))) ? "ERROR" : edad;
    console.log("Su nombre es " + nombre + " y su edad " + edad + ".");
    alert("Su nombre es " + nombre + " y su edad " + edad + ".");
    document.getElementById("3").innerHTML = "Nombre: " + nombre + " - Edad: " + edad;
}
//# sourceMappingURL=mostrar.js.map