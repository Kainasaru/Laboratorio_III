function mostrar() {
    var nombre = document.getElementById("1").value;
    var edad = document.getElementById("2").value;
    edad = (isNaN(Number(edad))) ? "ERROR" : edad;
    console.log("Su nombre es " + nombre + " y su edad " + edad + ".");
    alert("Su nombre es " + nombre + " y su edad " + edad + ".");
    document.getElementById("3").innerHTML = "Nombre: " + nombre + " - Edad: " + edad;
}
function borrar() {
    document.getElementById("3").innerHTML = "";
}
//# sourceMappingURL=mostrar.js.map