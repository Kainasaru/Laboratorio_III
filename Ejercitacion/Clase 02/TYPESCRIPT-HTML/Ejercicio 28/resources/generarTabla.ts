function generarTabla(rows : number , cols : number) : void {
    let tabla : HTMLTableElement = document.createElement("table");
    document.getElementById("div").innerHTML = "";
    tabla.createTBody();
    tabla.createCaption();
    tabla.caption.textContent = "Su tabla";
    tabla.setAttribute("border","1");
    for(let i = 0 ; i < rows ; i++) {
        tabla.tBodies.item(0).insertRow();
        for(let j = 0 ; j < cols ; j++) {
            tabla.tBodies.item(0).rows.item(i).insertCell().textContent = `(${i+1};${j+1})`;
        }
    }
    document.getElementById("div").appendChild(tabla);
}