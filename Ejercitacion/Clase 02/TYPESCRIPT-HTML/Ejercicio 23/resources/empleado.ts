function calcularSalario() : void {
    let horasSemana : number = Number((<HTMLInputElement>document.getElementById("hours")).value);
    let salario : number = horasSemana * 4 * obtenerCoeficiente();
    (<HTMLInputElement>document.getElementById("result")).value = (salario < 0 || horasSemana > 168)? "ERROR" : "$" + salario.toString();
}
function obtenerCoeficiente() : number{
    return 6.88;
}
