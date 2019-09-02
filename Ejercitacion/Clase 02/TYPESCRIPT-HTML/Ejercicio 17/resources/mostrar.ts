function mostrar() : void{
    var chBox : NodeListOf<HTMLElement> = document.getElementsByName("langCbx");
    console.log("Películas seleccionadas:\n");
    for( let i = 0 ; i < chBox.length ; i++) {
        if( (<HTMLInputElement>chBox[i]).checked ) {
            console.log((<HTMLInputElement>chBox[i]).value + "\n");
        }
    }
}