namespace Entidades {
    export abstract class FiguraGeometrica {
        //Atributos
        protected _color: string;
        protected _perimetro: number | string;
        protected _superficie: number;
        //Constructor
        public constructor(color: string) {
            this._color = color;
        }
        //Metodos
        public abstract Dibujar(): string;
        protected abstract CalcularDatos(): void;
        public GetColor(): string {
            return this._color;
        }
        public ToString(): string {
            return `Color: ${this.GetColor()}<br/>Per&iacute;metro: ${this._perimetro}<br/>Superficie: ${this._superficie}<br/>`;
        }
        protected repeat(str : string, count : number) : string {
            let result : string = "";
            for(let i = 0 ; i < count ; i++) {
                result += str;
            }
            return result;
        }
    }
}