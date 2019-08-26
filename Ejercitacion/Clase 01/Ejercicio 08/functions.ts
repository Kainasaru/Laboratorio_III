/*8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()*/

function MostrarFactorial(num: number): boolean {
    let isOk = num >= 0;
    let factorial = 1;
    if (isOk) {
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        console.log(factorial);
    }
    return isOk;
}