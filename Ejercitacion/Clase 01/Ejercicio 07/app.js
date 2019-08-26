Mostrar20Primos();
/*7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una función.
Nota: Utilizar console.log()*/
function Mostrar20Primos() {
    var primos = 0;
    for (var posiblePrimo = 2; primos < 20; posiblePrimo++) {
        var esPrimo = true;
        for (var divisor = 2; divisor < posiblePrimo; divisor++) {
            if (posiblePrimo % divisor == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            console.log(posiblePrimo);
            primos++;
        }
    }
}
