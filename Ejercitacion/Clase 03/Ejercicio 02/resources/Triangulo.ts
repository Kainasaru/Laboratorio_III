///<reference path="./FiguraGeometrica.ts"/>
namespace Entidades {
    export class Triangulo extends FiguraGeometrica {
        //Atributos
        private _altura: number;
        private _base: number;
        //Constructor
        public constructor(color: string, b: number, h: number) {
            super(color);
            this._base = Math.abs(b);
            this._altura = Math.abs(h);
            this.CalcularDatos();
        }
        //Metodos
        public Dibujar(): string {
            let dibujo = "<font color='" + super.GetColor() + "'>";
            for (let i = 0; i < this._altura; i++) {
                if (i == this._altura - 1) {
                    dibujo += this.repeat("*", this._base);
                }
                else {
                    dibujo += (i + 1 >= this._base) ? super.repeat("*", this._base) : super.repeat("*", i + 1);
                }
                dibujo += "<br/>"
            }
            dibujo += "</font>";
            return dibujo;
        }
        public ToString(): string {
            return `Tri&aacute;ngulo:<br/> ${super.ToString()}Base: ${this._base}<br/>Altura:
            ${this._altura}<br/>`;
        }
        protected CalcularDatos(): void {
            this._superficie = (this._base * this._altura) / 2;
            this._perimetro = "No se puede calcular.";
        }
    }
}