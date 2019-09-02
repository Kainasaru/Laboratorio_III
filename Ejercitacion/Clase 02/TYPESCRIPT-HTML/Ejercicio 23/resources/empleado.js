function calcularSalario() {
    var horasSemana = Number(document.getElementById("hours").value);
    var salario = horasSemana * 4 * obtenerCoeficiente();
    document.getElementById("result").value = (salario < 0 || horasSemana > 168) ? "ERROR" : "$" + salario.toString();
}
function obtenerCoeficiente() {
    return 6.88;
}
//# sourceMappingURL=empleado.js.map