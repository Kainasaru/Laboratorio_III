function mostrar() : void {
    var radio : NodeListOf<HTMLElement> = document.getElementsByName("rateRadio");
    var userName : string = (<HTMLInputElement>document.getElementById("name")).value;
    console.log(`Usuario: ${userName}\nCalificación al sitio: `);
    for( let i = 0 ; i < radio.length ; i++) {
        if( (<HTMLInputElement>radio[i]).checked ) {
            console.log((<HTMLInputElement>radio[i]).value + "\n");
            break;
        }
    }
}