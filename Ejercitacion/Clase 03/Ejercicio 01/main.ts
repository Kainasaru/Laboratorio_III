/// <reference path="./Rectangulo.ts"/>
function mostrar(id : string) {
    let rec: Geometria.Rectangulo = new Geometria.Rectangulo(new Geometria.Punto(5, 5), new Geometria.Punto(7, 7));
    console.log(rec.ToString());
    document.getElementById(id).textContent = rec.ToString();
}
