function generarOpciones(options : number) : void {
    document.getElementById("div").innerHTML = "";
    let select : HTMLSelectElement = document.getElementById("div").appendChild(document.createElement("select"));
    for(let i = 0 ; i < options ; i++) {
        select.appendChild(document.createElement("option")).textContent = `Opción ${i+1}`;
    }
}