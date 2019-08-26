/* 10. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

enum Case
{
    mayusculas,
    minusculas,
    mix
}

function verifyCase(word : string ) : Case {
    let ret : Case  = Case.mix;
    if( word == word.toLowerCase()) {
        ret = Case.minusculas;
    }
    else if( word == word.toUpperCase()) {
        ret = Case.mayusculas;
    }
    return ret;
}