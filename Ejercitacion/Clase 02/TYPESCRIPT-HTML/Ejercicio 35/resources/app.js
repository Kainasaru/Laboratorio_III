/*11. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
 es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
 "La ruta nos aporto otro paso natural".*/
function isPalindrome(word) {
    word = word.toLowerCase();
    word = word.split(" ").join(""); //Borrado de espacios.
    return word == word.split("").reverse().join("");
}
/*35- Generar una función en TypeScript que determine si el contenido de un cuadro de texto (INPUT type=text) es un
palíndromo o no. Si lo es, mostrará un mensaje escrito en un <span>, si no lo es, el mensaje se mostrará en un
alert.*/
/// <reference path="./functions.ts"/>
function foo(inputId) {
    var inputValue = document.getElementById(inputId).value;
    var span = document.createElement("span");
    if (document.getElementById("sp1") != null) {
        document.getElementById("sp1").remove();
    }
    if (isPalindrome(inputValue)) {
        span.id = "sp1";
        span.style.border = "solid";
        span.style.borderColor = "red";
        span.innerText = inputValue + " es pal\u00EDndromo.";
        document.body.appendChild(span);
    }
    else {
        alert(inputValue + " no es un pal\u00EDndromo.");
    }
}
