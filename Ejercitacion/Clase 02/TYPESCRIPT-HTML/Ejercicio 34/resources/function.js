/*34- Agregarle al ejercicio del ingreso de datos la siguiente funcionalidad:
a. Colocar todos los controles deshabilitados (disabled) menos el del número de trámite, que además deberá tener foco.
b. Al ingresar un valor y pulsar ‘enter’ se invocará a una función que se encargue de validar dicho control y
de habilitar y pasarle el foco al control siguiente, únicamente si el valor del control es válido.
c. Si el usuario pulsa la tecla ‘esc’ el control deberá deshabilitarse y el foco será pasado al control anterior.*/
function focusAndEnable(control) {
    var lastChar = event.keyCode;
    var nextControl = document.getElementById((Number(control.id) + 1).toString());
    console.log(lastChar);
    if (lastChar === 13 /*&& validar(inputValue)*/) {
        control.disabled = true;
        setFocus(nextControl);
        nextControl.disabled = false;
    }
    else if (lastChar === 27 /*&& validar(inputValue) && parseInt(control.id) > 1*/) {
        console.log("entre");
    }
}
function setFocus(input) {
    input.focus();
}
function validar(str) {
    return !isNaN(Number(str));
}
