function agregarEnLista(listname : string , item : string ) : void{
    let lista : HTMLOListElement  = <HTMLOListElement>document.getElementById(listname);
    lista.appendChild( document.createElement("li")).textContent = item;
}