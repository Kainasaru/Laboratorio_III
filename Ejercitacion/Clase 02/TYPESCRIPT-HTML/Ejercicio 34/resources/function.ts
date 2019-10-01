/*34- Agregarle al ejercicio del ingreso de datos la siguiente funcionalidad:
a. Colocar todos los controles deshabilitados (disabled) menos el del número de trámite, que además deberá tener foco.
b. Al ingresar un valor y pulsar ‘enter’ se invocará a una función que se encargue de validar dicho control y
de habilitar y pasarle el foco al control siguiente, únicamente si el valor del control es válido.
c. Si el usuario pulsa la tecla ‘esc’ el control deberá deshabilitarse y el foco será pasado al control anterior.*/

function focusNextPrev(control : HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    let lastChar: number = (<KeyboardEvent>event).keyCode;
    let nextControl : HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = null;
    let prevControl : HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement  = null;
    if(control.nodeName == "TEXTAREA") {
        control = <HTMLTextAreaElement>control;
        nextControl = <HTMLTextAreaElement>document.getElementById( (Number(control.id)+1).toString() );
        prevControl = <HTMLTextAreaElement>document.getElementById((Number(control.id)-1).toString() );
    }
    else if( control.nodeName == "SELECT") {
        control = <HTMLSelectElement>control;
        nextControl = <HTMLSelectElement>document.getElementById( (Number(control.id)+1).toString() );
        prevControl = <HTMLSelectElement>document.getElementById((Number(control.id)-1).toString() );
    }
    else if( control.nodeName == "INPUT") {
        control = <HTMLInputElement>control;
        nextControl = <HTMLInputElement>document.getElementById( (Number(control.id)+1).toString() );
        prevControl = <HTMLInputElement>document.getElementById((Number(control.id)-1).toString() );
    }
    if (lastChar === 13 && validar(control.value)) {
        nextControl.disabled = false;
        setFocus( nextControl );
      }
    else if (lastChar === 27 && Number(control.id) > 1) {
        control.disabled = true;
        setFocus(prevControl);
    }
}
function setFocus( input : HTMLElement  ) {
    input.focus();
}

function validar(str: string): boolean {
    return str != "";
}
