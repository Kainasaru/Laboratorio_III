///<reference path="./FiguraGeometrica.ts"/>
namespace Entidades {
    export class Rectangulo extends FiguraGeometrica {
        //Atributos
        private _ladoDos: number;
        private _ladoUno: number;
        //Constructor
        public constructor(color: string, l1: number, l2: number) {
            super(color);
            this._ladoUno = Math.abs(l1);
            this._ladoDos = Math.abs(l2);
            this.CalcularDatos();
        }
        //Metodos
        protected CalcularDatos(): void {
            this._perimetro = 2 * (this._ladoUno + this._ladoDos);
            this._superficie = this._ladoUno * this._ladoDos;
        }
        public Dibujar(): string {
            let dibujo = "<font color='" + super.GetColor() + "'>";
            for (let i = 0; i < this._ladoDos; i++) {
                dibujo += super.repeat("*",this._ladoUno) + "<br/>";
            }
            dibujo += "</font>"
            return dibujo;
        }
        public ToString(): string {
            return `Rect&aacute;ngulo:<br/>${super.ToString()}.Lado 1: ${this._ladoUno} - 
                Lado 2: ${this._ladoDos}<br/>`;
        }   
    }
}