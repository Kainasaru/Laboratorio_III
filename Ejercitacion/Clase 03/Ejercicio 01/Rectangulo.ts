/// <reference path="./Punto.ts" />
namespace Geometria {
    export class Rectangulo {
        //Atributos
        private _area : number;
        private _ladoDos : number;
        private _ladoUno : number;
        private _perimetro : number;
        private _vertice1 : Geometria.Punto;
        private _vertice2 : Geometria.Punto;
        private _vertice3 : Geometria.Punto;
        private _vertice4 : Geometria.Punto;
        //Constructor
        public constructor(v1 : Geometria.Punto,v3 : Geometria.Punto) {
            this._vertice1 = v1;
            this._vertice2 = new Geometria.Punto( v3.GetX(),v1.GetY());
            this._vertice3 = v3;
            this._vertice4 = new Geometria.Punto( v1.GetX(),v3.GetY() );
            this._area = null;
            this._perimetro = null;
            this._ladoUno = null;
            this._ladoDos = null;
        }
        //Getters
        public GetArea() {
            if(this._area === null) {
                this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX()); 
                this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY()); 
                this._area = this._ladoDos * this._ladoUno;
            }
            return this._area;
        }
        public GetPerimetro() {
            if( this._perimetro === null) {
                this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX()); 
                this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY()); 
                this._perimetro = 2 * (this._ladoUno + this._ladoDos);
            }
            return this._perimetro;
        }
        //Metodos
        public ToString() {
            return `Rect&aacute;ngulo:<br/>Lado uno: ${this._ladoUno}. Lado dos: ${this._ladoDos}.<br/>` +
            `Per&iacute;metro: ${this._perimetro}.<br/>Area: ${this._area}<br/>` +
            `V&eacute;rtice 1: (${this._vertice1.GetX()};${this._vertice1.GetY()})<br/>` +
            `V&eacute;rtice 2: (${this._vertice2.GetX()};${this._vertice2.GetY()})<br/>` +
            `V&eacute;rtice 2: (${this._vertice3.GetX()};${this._vertice3.GetY()})<br/>` +
            `V&eacute;rtice 2: (${this._vertice4.GetX()};${this._vertice4.GetY()})<br/>`;
        }
    }

}
