if (!MostrarFactorial(4)) {
    console.log("ERROR.");
}
/*8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()*/
function MostrarFactorial(num) {
    var isOk = num >= 0;
    var factorial = 1;
    if (isOk) {
        for (var i = 2; i <= num; i++) {
            factorial *= i;
        }
        console.log(factorial);
    }
    return isOk;
}
