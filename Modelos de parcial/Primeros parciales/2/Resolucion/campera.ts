/// <reference path="./ropa.ts"/>
namespace Entidades {
    export class Campera extends Ropa{
        private _talle : string;
        private _color : string;
        private _pathFoto : string;

        public constructor(codigo,nombre,precio,talle,color,pathFoto) {
            super(codigo,nombre,precio);
            this._talle = talle;
            this._color = color;
            this._pathFoto = pathFoto;
        }


        public camperaToJson() {
            return JSON.parse( super.ropaToString() + `"talle" :  "${this._talle}", "color" : "${this._color}","pathFoto": "${this._pathFoto}" }`);
        }
    }
}