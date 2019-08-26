var numero = 2;
MostrarCubo(numero);
/*6. Realizar una función que reciba como parámetro un número y que retorne el cubo del mismo.
Nota: La función retornará el cubo del parámetro ingresado.
 Realizar una función que invoque a esta última y permita mostrar por consola el resultado.*/
function ObtenerCubo(num) {
    return Math.pow(num, 3);
}
function MostrarCubo(num) {
    console.log(ObtenerCubo(num));
}
