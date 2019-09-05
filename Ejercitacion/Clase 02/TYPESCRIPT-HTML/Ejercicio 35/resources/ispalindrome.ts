/*35- Generar una función en TypeScript que determine si el contenido de un cuadro de texto (INPUT type=text) es un
palíndromo o no. Si lo es, mostrará un mensaje escrito en un <span>, si no lo es, el mensaje se mostrará en un
alert.*/
/// <reference path="./functions.ts"/>
function foo(inputId : string) {
    let inputValue = (<HTMLInputElement>document.getElementById(inputId)).value;
    let span  : HTMLSpanElement = document.createElement("span");
    if( document.getElementById("sp1") != null ) {
        document.getElementById("sp1").remove();
    }
    if( isPalindrome(inputValue) ) {
        span.id = "sp1";
        span.style.border = "solid";
        span.style.borderColor = "red";
        span.innerText = `${inputValue} es palíndromo.`;
        document.body.appendChild(span);
    }
    else {
        alert(`${inputValue} no es un palíndromo.`)
    }
}