/*a. Ente: cuadrante(cadena), edad(entero) y altura(flotante) como atributos. Un constructor 
que reciba tres parámetros. Un método, ToString():string, que retorne la representación de la 
clase en formato cadena (preparar la cadena para que, al juntarse con el método ToJSON, forme 
    una cadena JSON válida).*/
namespace Entidades {
    export class Ente {
        private _cuadrante : string;            
        private _edad : number;        
        private _altura : number;       
        
        public constructor(cuadrante  : string ,edad : number,altura : number) {
            this._cuadrante = cuadrante;
            this._edad = edad;
            this._altura = altura;
        }

        public ToString():string {
            return `{"cuadrante" : "${this._cuadrante}", "edad" : ${this._edad}, "altura" : ${this._altura }, `;
        }
    }

}