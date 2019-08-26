/*9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.*/
/// <reference path="../Ejercicio 06/functions.ts" />
/// <reference path="../Ejercicio 08/functions.ts" />

function CuboFactorial( num : number) : void {
    if( num >= 0) {
        MostrarFactorial(num);
    }
    else {
        MostrarCubo(num);
    }
}