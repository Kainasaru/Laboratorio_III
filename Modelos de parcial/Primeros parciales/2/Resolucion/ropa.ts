namespace Entidades {
    export class Ropa {
        private _codigo : number;
        private _nombre : string;
        private _precio : number;

        public constructor(codigo,nombre,precio) {
            this._codigo = codigo;
            this._nombre = nombre;
            this._precio = precio;            
        }

        public ropaToString() : string {
            return `{"codigo" : ${this._codigo} , "nombre" : "${this._nombre}", "precio" : ${this._precio},`;
        }
    }
}
