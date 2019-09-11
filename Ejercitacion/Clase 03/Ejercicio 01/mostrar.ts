/// <reference path="./Rectangulo.ts"/>
function mostrar() {
    let vertice1 : Geometria.Punto = new Geometria.Punto( Number((<HTMLInputElement>document.getElementById("v1x")).value),
    Number((<HTMLInputElement>document.getElementById("v1y")).value));
    let vertice3 : Geometria.Punto = new Geometria.Punto( Number((<HTMLInputElement>document.getElementById("v3x")).value),
    Number((<HTMLInputElement>document.getElementById("v3y")).value));
    let rec: Geometria.Rectangulo = new Geometria.Rectangulo(vertice1,vertice3);
    console.log(rec.ToString());
    let td : HTMLTableDataCellElement = document.createElement("td");
    td.innerHTML = rec.ToString();
    td.colSpan = 2;

    if( typeof (<HTMLTableElement>document.getElementById("table")).tBodies[0].rows[4] === "undefined") {
        (<HTMLTableElement>document.getElementById("table")).tBodies[0].insertRow();
        (<HTMLTableElement>document.getElementById("table")).tBodies[0].rows[4].appendChild(td);
    }
    else {
        (<HTMLTableElement>document.getElementById("table")).tBodies[0].rows[4].cells[0].replaceWith(td);
    }
}
