function mostrar() {
    var radioInput = document.getElementsByName("opRdo");
    var operador = "";
    var op1 = parseInt(document.getElementById("op1").value);
    var op2 = parseInt(document.getElementById("op2").value);
    var result = Number.NaN;
    for (var i = 0; i < radioInput.length; i++) {
        if (radioInput[i].checked) {
            operador = radioInput[i].value;
            break;
        }
    }
    switch (operador) {
        case "+":
            result = op1 + op2;
            break;
        case "-":
            result = op1 - op2;
            break;
        case "*":
            result = op1 * op2;
            break;
        case "/":
            result = (op2 == 0) ? NaN : op1 / op2;
            break;
    }
    console.log("El resultado de la operaci\u00F3n es " + result + ".\n");
    document.getElementById("result").value = result.toString();
}
//# sourceMappingURL=mostrar.js.map