/// <reference path="./empleado.ts" />
function mostrar( dni : number , nombre : string , apellido : string , sexo : string , legajo : number , sueldo : number) {
    alert( (new Empleado(nombre,apellido,dni,sexo,legajo,sueldo)).ToString() );
}