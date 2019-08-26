/*-13. Un número de Smith es un número entero tal que la suma de sus dígitos es igual a la suma de los dígitos de los
 números restantes tras la factorización en primos (la factorización debe estar escrita sin exponentes, repitiendo los
    números todas las veces necesarias). Por ejemplo, 378 = 2 × 3 × 3 × 3 × 7 es un número de Smith en base 10, porque
     3 + 7 + 8 = 2 + 3 + 3 + 3 + 7. Por definición, se deben contar los dígitos de los factores.
      Por ejemplo, 22 en base 10 es 2 × 11, y se deben contar los tres dígitos: 2, 1, 1.
       Por lo tanto 22 es un número de Smith porque 2 + 2 = 2 + 1 + 1
Nota: Utilice tres funciones, una realiza la comparación, otra descompone el numero en sus factores primos y suma los
coeficientes, y la última función suma cada termino.*/
function EsNumeroSmith(num) {
    return num > 1 && !esPrimo(num) && SumarDigitos(num) == SumarFactoresPrimos(num);
}
function SumarDigitos(num) {
    var sumaDigitos = 0;
    var strNum = num.toString();
    for (var i = 0; i < strNum.length; i++) {
        sumaDigitos += parseInt(strNum[i]);
    }
    return sumaDigitos;
}
function SumarFactoresPrimos(num) {
    var sumaPrimos = 0;
    while (num > 1) {
        var divisor = 2;
        while (num % divisor != 0) {
            divisor++;
        }
        for (var i = 0; i < divisor.toString().length; i++) {
            sumaPrimos += parseInt((divisor.toString())[i]);
        }
        num /= divisor;
    }
    return sumaPrimos;
}
function esPrimo(num) {
    var ret = (num < 2) ? false : true;
    if (ret) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                ret = false;
                break;
            }
        }
    }
    return ret;
}
console.log(EsNumeroSmith(8));
