/*Clase Persona
Atributos (todos privados)
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (abstracto). Retorna un string.
 ToString. Retorna un string mostrando todos los datos de la persona, separados por un guión medio (-).
 getters para cada uno de los atributos.*/

abstract class Persona {
    private _apellido : string;
    private _dni : number;
    private _nombre : string;
    private _sexo : string;

    constructor(nombre : string , apellido : string , dni : number, sexo : string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
        this._sexo = sexo;
    }

    public GetApellido() : string{
        return this._apellido;
    }
    public GetDni() : number {
        return this._dni;
    }
    public GetNombre() : string {
        return this._nombre;
    }
    public GetSexo() : string {
        return this._sexo;
    }
    public abstract hablar(idioma : string );
    public ToString() : string {
        return `${this._dni} - ${this._nombre} - ${this._apellido} - ${this._sexo}`;
    }
}