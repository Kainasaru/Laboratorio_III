/*7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una función.
Nota: Utilizar console.log()*/

function Mostrar20Primos() : void {
    let primos : number = 0;
    for( let posiblePrimo = 2 ; primos < 20 ; posiblePrimo++)
    {
        let esPrimo : boolean = true;
        for( let divisor = 2 ; divisor < posiblePrimo ; divisor++)
        {
            if( posiblePrimo % divisor == 0)
            {
                esPrimo = false;
                break;
            }
        }
        if( esPrimo )
        {
            console.log(posiblePrimo);
            primos++;
        }
    }
}