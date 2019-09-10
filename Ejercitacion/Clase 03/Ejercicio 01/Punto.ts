namespace Geometria {
    export class Punto {
        //Atributos
        private _x : number;
        private _y : number;
        //Constructor
        public constructor(x : number,y : number) {
            this._x = x;
            this._y = y;
        }
        //Getters
        public GetX() {
            return this._x;
        }
        public GetY() {
            return this._y;
        }
    }
}
