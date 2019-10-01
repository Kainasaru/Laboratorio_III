var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Clase Persona
Atributos (todos privados)
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (abstracto). Retorna un string.
 ToString. Retorna un string mostrando todos los datos de la persona, separados por un guión medio (-).
 getters para cada uno de los atributos.*/
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, dni, sexo) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
        this._sexo = sexo;
    }
    Persona.prototype.GetApellido = function () {
        return this._apellido;
    };
    Persona.prototype.GetDni = function () {
        return this._dni;
    };
    Persona.prototype.GetNombre = function () {
        return this._nombre;
    };
    Persona.prototype.GetSexo = function () {
        return this._sexo;
    };
    Persona.prototype.ToString = function () {
        return this._dni + " - " + this._nombre + " - " + this._apellido + " - " + this._sexo;
    };
    return Persona;
}());
/// <reference path="./persona.ts" />
/*Clase Empleado
Atributos (todos protegidos)
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (polimorfismo). Retorna un string con el formato “El empleado habla Español”, siendo Español, el valor recibido por parámetro.
 ToString (polimorfismo). Retorna un string mostrando todos los datos del empleado, separados por un guión medio (-).
 getters para cada uno de los atributos.*/
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
        var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
        _this._legajo = legajo;
        _this._sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.GetLegajo = function () {
        return this._legajo;
    };
    Empleado.prototype.GetSueldo = function () {
        return this._sueldo;
    };
    Empleado.prototype.hablar = function (idioma) {
        return (idioma.toLowerCase() == "español") ? "El empleado habla español." : "El empleado no habla español.";
    };
    Empleado.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + " - " + this.GetLegajo() + " - " + this.GetSueldo() + "\r\n";
    };
    return Empleado;
}(Persona));
/// <reference path="./empleado.ts" />
function mostrar(dni, nombre, apellido, sexo, legajo, sueldo) {
    alert((new Empleado(nombre, apellido, dni, sexo, legajo, sueldo)).ToString());
}
//# sourceMappingURL=mostrar.js.map