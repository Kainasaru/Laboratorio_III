/// <reference path="./persona.ts" />
/*Clase Empleado
Atributos (todos protegidos)
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (polimorfismo). Retorna un string con el formato “El empleado habla Español”, siendo Español, el valor recibido por parámetro.
 ToString (polimorfismo). Retorna un string mostrando todos los datos del empleado, separados por un guión medio (-).
 getters para cada uno de los atributos.*/ 
class Empleado extends Persona {
    protected _legajo : number;
    protected _sueldo : number;

    constructor(nombre : string , apellido : string , dni : number,sexo : string, legajo : number, sueldo : number) {
        super(nombre,apellido,dni,sexo);
        this._legajo = legajo;
        this._sueldo = sueldo;
    }

    public GetLegajo() : number {
        return this._legajo;
    }
    public GetSueldo() : number {
        return this._sueldo;
    }
    public hablar(idioma : string ) : string {
        return (idioma.toLowerCase() == "español")? "El empleado habla español." : "El empleado no habla español.";
    }
    public ToString() : string {
        return `${super.ToString()} - ${this.GetLegajo()} - ${this.GetSueldo()}\r\n`;
    }
}

