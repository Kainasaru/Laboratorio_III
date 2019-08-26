var num = 10;
CuboFactorial(num);
/*6. Realizar una función que reciba como parámetro un número y que retorne el cubo del mismo.
Nota: La función retornará el cubo del parámetro ingresado.
 Realizar una función que invoque a esta última y permita mostrar por consola el resultado.*/
function ObtenerCubo(num) {
    return Math.pow(num, 3);
}
function MostrarCubo(num) {
    console.log(ObtenerCubo(num));
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
/*9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.*/
/// <reference path="../Ejercicio 06/functions.ts" />
/// <reference path="../Ejercicio 08/functions.ts" />
function CuboFactorial(num) {
    if (num >= 0) {
        MostrarFactorial(num);
    }
    else {
        MostrarCubo(num);
    }
}
