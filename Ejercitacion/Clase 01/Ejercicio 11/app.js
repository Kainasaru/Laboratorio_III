/*11. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
 es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
 "La ruta nos aporto otro paso natural".*/
function isPalindrome(word) {
    word = word.toLowerCase();
    word = word.split(" ").join(""); //Borrado de espacios.
    return word == word.split("").reverse().join("");
}
var word2 = "nah";
console.log(word2 + (isPalindrome(word2) ? " es un palindromo." : " no es un palindromo."));
