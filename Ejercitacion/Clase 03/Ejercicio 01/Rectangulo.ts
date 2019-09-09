/// <reference path="./Punto.ts" />
class Rectangulo {
    //Atributos
    private _area : number;
    private _ladoDos : number;
    private _ladoUno : number;
    private _perimetro : number;
    private _vertice1 : Punto;
    private _vertice2 : Punto;
    private _vertice3 : Punto;
    private _vertice4 : Punto;
    //Constructor
    public constructor(v1 : Punto,v3 : Punto) {
        this._vertice1 = v1;
        this._vertice2 = new Punto( v3.GetX(),v1.GetY());
        this._vertice3 = v3;
        this._vertice4 = new Punto( v1.GetX(),v3.GetY() );
    }
    //Getters
    public GetArea() {
        this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX()); 
        this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY()); 
        return this._ladoUno * this._ladoDos;
    }
    public GetPerimetro() {
        this._ladoUno = Math.abs(this._vertice1.GetX() - this._vertice2.GetX()); 
        this._ladoDos = Math.abs(this._vertice4.GetY() - this._vertice1.GetY()); 
        return 2 * (this._ladoUno + this._ladoDos);
    }
    //Metodos
    public ToString() {
        return "";
    }
}