/// <reference path="./Persona.ts"/>
namespace Entidades {
  export class Empleado extends Persona {
    //Atributos
    protected _legajo: number;
    protected _sueldo: number;
    //Constructor
    public constructor(nombre: string, apellido: string, dni: number, sexo: string, legajo: number, sueldo: number) {
      super(nombre, apellido, dni, sexo);
      this._legajo = legajo;
      this._sueldo = sueldo;
    }
    //Implementaciones
    public Hablar(idioma: string): string {
      return (idioma.toLowerCase() == "español") ? "El empleado habla <i>Español</i>" : "";
    }
    public ToString(): string {
      return ` ${super.ToString()} - ${this.getLegajo()} - ${this.getSueldo()}`;
    }
    //Getters
    public getLegajo(): number {
      return this._legajo;
    }
    public getSueldo(): number {
      return this._sueldo;
    }
  }
}
