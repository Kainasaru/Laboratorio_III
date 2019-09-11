var Geometria;
(function (Geometria) {
    var Punto = /** @class */ (function () {
        //Constructor
        function Punto(x, y) {
            this._x = x;
            this._y = y;
        }
        //Getters
        Punto.prototype.GetX = function () {
            return this._x;
        };
        Punto.prototype.GetY = function () {
            return this._y;
        };
        return Punto;
    }());
    Geometria.Punto = Punto;
})(Geometria || (Geometria = {}));
/// <reference path="./Punto.ts" />
var Geometria;
(function (Geometria) {
    var Rectangulo = /** @class */ (function () {
        //Constructor
        function Rectangulo(v1, v3) {
            this._vertice1 = v1;
            this._vertice2 = new Geometria.Punto(v3.GetX(), v1.GetY());
            this._vertice3 = v3;
            this._vertice4 = new Geometria.Punto(v1.GetX(), v3.GetY());
            this._area = null;
            this._perimetro = null;
            this._ladoUno = null;
            this._ladoDos = null;
        }
        //Getters
        Rectangulo.prototype.GetArea = function () {
            if (this._area === null) {
                this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX());
                this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY());
                this._area = this._ladoDos * this._ladoUno;
            }
            return this._area;
        };
        Rectangulo.prototype.GetPerimetro = function () {
            if (this._perimetro === null) {
                this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX());
                this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY());
                this._perimetro = 2 * (this._ladoUno + this._ladoDos);
            }
            return this._perimetro;
        };
        //Metodos
        Rectangulo.prototype.ToString = function () {
            if (this._perimetro === null || this._area === null) {
                this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX());
                this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY());
                this._area = this._ladoDos * this._ladoUno;
                this._perimetro = 2 * (this._ladoUno + this._ladoDos);
            }
            return "Rect&aacute;ngulo:<br/>Lado uno: " + this._ladoUno + ". Lado dos: " + this._ladoDos + ".<br/>" +
                ("Per&iacute;metro: " + this._perimetro + ".<br/>Area: " + this._area + "<br/>") +
                ("V&eacute;rtice 1: (" + this._vertice1.GetX() + ";" + this._vertice1.GetY() + ")<br/>") +
                ("V&eacute;rtice 2: (" + this._vertice2.GetX() + ";" + this._vertice2.GetY() + ")<br/>") +
                ("V&eacute;rtice 3: (" + this._vertice3.GetX() + ";" + this._vertice3.GetY() + ")<br/>") +
                ("V&eacute;rtice 4: (" + this._vertice4.GetX() + ";" + this._vertice4.GetY() + ")<br/>");
        };
        return Rectangulo;
    }());
    Geometria.Rectangulo = Rectangulo;
})(Geometria || (Geometria = {}));
/// <reference path="./Rectangulo.ts"/>
function mostrar() {
    var vertice1 = new Geometria.Punto(Number(document.getElementById("v1x").value), Number(document.getElementById("v1y").value));
    var vertice3 = new Geometria.Punto(Number(document.getElementById("v3x").value), Number(document.getElementById("v3y").value));
    var rec = new Geometria.Rectangulo(vertice1, vertice3);
    console.log(rec.ToString());
    var td = document.createElement("td");
    td.innerHTML = rec.ToString();
    td.colSpan = 2;
    if (typeof document.getElementById("table").tBodies[0].rows[4] === "undefined") {
        document.getElementById("table").tBodies[0].insertRow();
        document.getElementById("table").tBodies[0].rows[4].appendChild(td);
    }
    else {
        document.getElementById("table").tBodies[0].rows[4].cells[0].replaceWith(td);
    }
}
//# sourceMappingURL=app.js.map