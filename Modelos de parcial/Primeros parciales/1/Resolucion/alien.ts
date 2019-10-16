/*Alien, hereda de Ente, posee como atributos raza(cadena), planetaOrigen(cadena) y pathFoto(cadena). Un 
constructor para inicializar los atributos. Un método ToJSON():JSON, que retornará la representación del 
objeto en formato JSON. Se debe de reutilizar el método ToString de la clase Ente.*/
/// <reference path='./ente.ts'/>
namespace Entidades {
    export class Alien extends Ente {
        private _raza : string;            
        private _planetaOrigen : string;        
        private _pathFoto : string;       
        
        public constructor( cuadrante : string, edad : number ,altura : number ,raza : string ,
            planetaOrigen : string ,pathFoto : string ) {
            super(cuadrante,edad,altura);
            this._raza = raza;
            this._planetaOrigen = planetaOrigen;
            this._pathFoto = pathFoto;
        }

        public ToJSON():JSON {
            return JSON.parse( super.ToString() + `"raza" : "${this._raza}", "planetaOrigen" : "${this._planetaOrigen}", "pathFoto" : "${this._pathFoto}" }`) ;
        }
    }

}