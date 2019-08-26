/* 10. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
var Case;
(function (Case) {
    Case[Case["mayusculas"] = 0] = "mayusculas";
    Case[Case["minusculas"] = 1] = "minusculas";
    Case[Case["mix"] = 2] = "mix";
})(Case || (Case = {}));
function verifyCase(word) {
    var ret = Case.mix;
    if (word == word.toLowerCase()) {
        ret = Case.minusculas;
    }
    else if (word == word.toUpperCase()) {
        ret = Case.mayusculas;
    }
    return ret;
}
/* 10. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
var word = "leo";
console.log("La palabra que ingreso esta compuesta por: " + Case[verifyCase(word)]);
