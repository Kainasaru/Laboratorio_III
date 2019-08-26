/*6. Realizar una función que reciba como parámetro un número y que retorne el cubo del mismo.
Nota: La función retornará el cubo del parámetro ingresado.
 Realizar una función que invoque a esta última y permita mostrar por consola el resultado.*/

function ObtenerCubo (num : number) : number{
    return num ** 3;
}

function MostrarCubo (num : number) : void {
    console.log(ObtenerCubo(num));
}