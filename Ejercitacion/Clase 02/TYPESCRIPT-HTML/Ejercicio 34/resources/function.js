/*34- Agregarle al ejercicio del ingreso de datos la siguiente funcionalidad:
a. Colocar todos los controles deshabilitados (disabled) menos el del número de trámite, que además deberá tener foco.
b. Al ingresar un valor y pulsar ‘enter’ se invocará a una función que se encargue de validar dicho control y
de habilitar y pasarle el foco al control siguiente, únicamente si el valor del control es válido.
c. Si el usuario pulsa la tecla ‘esc’ el control deberá deshabilitarse y el foco será pasado al control anterior.*/
function focusAndEnable(control) {
    var lastChar = event.key;
    var inputValue = control.value;
    console.log(control.value);
    if (lastChar == "Enter" && validar(inputValue)) { //Verifico que los valoreas sean 0
        document.getElementById((parseInt(control.id) + 1).toString()).disabled = false;
        setFocus((parseInt(control.id) + 1).toString());
    }
    else if (lastChar == "Escape" && validar(inputValue) && parseInt(control.id) > 1) {
        console.log("entre");
        control.disabled = true;
        control.value = "";
        setFocus((parseInt(control.id) - 1).toString());
    }
}
function setFocus(inputId) {
    document.getElementById(inputId).focus();
}
function validar(str) {
    return !isNaN(Number(str));
}
