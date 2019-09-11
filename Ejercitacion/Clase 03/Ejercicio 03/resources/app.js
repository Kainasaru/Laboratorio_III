var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        //Constructor
        function Persona(nombre, apellido, dni, sexo) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }
        //Metodos getters
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
            return this.GetNombre() + " - " + this.GetApellido() + " - " + this.GetDni() + " - " + this.GetSexo();
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
/// <reference path="./Persona.ts"/>
var Entidades;
(function (Entidades) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        //Constructor
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        //Implementaciones
        Empleado.prototype.Hablar = function (idioma) {
            return (idioma.toLowerCase() == "español") ? "El empleado habla <i>Español</i>" : "";
        };
        Empleado.prototype.ToString = function () {
            return " " + _super.prototype.ToString.call(this) + " - " + this.getLegajo() + " - " + this.getSueldo();
        };
        //Getters
        Empleado.prototype.getLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.getSueldo = function () {
            return this._sueldo;
        };
        return Empleado;
    }(Entidades.Persona));
    Entidades.Empleado = Empleado;
})(Entidades || (Entidades = {}));
/// <reference path="./Empleado.ts"/>
/*import {Empleado} from "./Empleado";*/
var emp = new Entidades.Empleado("leonardo", "manassali", 39489767, "m", 107239, 22000);
console.log(emp.Hablar(""));
console.log(emp.ToString());
