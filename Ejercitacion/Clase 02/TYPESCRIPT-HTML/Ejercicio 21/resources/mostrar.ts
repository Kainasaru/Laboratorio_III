function mostrar() : void{
    let radioInput : NodeListOf<HTMLElement> = document.getElementsByName("opRdo");
    let operador : string = "";
    let op1 : number = parseInt((<HTMLInputElement>document.getElementById("op1")).value);
    let op2 : number = parseInt((<HTMLInputElement>document.getElementById("op2")).value);
    let result : number = Number.NaN;
    for( let i =0 ; i < radioInput.length ; i++) {
        if( (<HTMLInputElement>radioInput[i]).checked ) {
            operador = (<HTMLInputElement>radioInput[i]).value;
            break;
        }
    }
    switch(operador) {
        case "+":
            result = op1 + op2;
            break;
        case "-":
            result = op1 - op2;
            break;
        case "*":
                result = op1 * op2;
            break;
        case "/":
                result = (op2 == 0)? NaN : op1 / op2;
            break;
    }
    console.log(`El resultado de la operación es ${result}.\n`);
    (<HTMLInputElement>document.getElementById("result")).value = result.toString();
}