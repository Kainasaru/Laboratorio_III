/*2. Cree una aplicación que muestre, a través de un Array , los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola ( console.log() */

 let funcion = () => {
    let meses : string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre",
    "Noviembre","Diciembre"];
    for(let i = 0 ; i < meses.length ; i++)
    {
        console.log( `Mes: ${meses[i]}. Numero: ${i+1}.`);
    }
}
funcion();
