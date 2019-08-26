/*4. Realizar una función que reciba un número y que muestre (por consola) un mensaje como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro.*/
MostrarNumero(-1);
function MostrarNumero(num) {
    console.log("El n\u00FAmero " + num + " es " + ((num % 2 == 0) ? "par" : "impar") + ", siendo " + num + " el n\u00FAmero recibido como par\u00E1metro.");
}
