function MostrarNumero( num : number ) : void {
    console.log(`El número ${num} es ${ ((num % 2 == 0)? "par" : "impar") }, siendo ${num} el número recibido como parámetro.`);
}