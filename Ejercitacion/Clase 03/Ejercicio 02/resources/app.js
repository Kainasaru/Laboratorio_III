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
var Entidades;
(function (Entidades) {
    var FiguraGeometrica = /** @class */ (function () {
        //Constructor
        function FiguraGeometrica(color) {
            this._color = color;
        }
        FiguraGeometrica.prototype.GetColor = function () {
            return this._color;
        };
        FiguraGeometrica.prototype.ToString = function () {
            return "Color: " + this.GetColor() + "<br/>Per&iacute;metro: " + this._perimetro + "<br/>Superficie: " + this._superficie + "<br/>";
        };
        FiguraGeometrica.prototype.repeat = function (str, count) {
            var result = "";
            for (var i = 0; i < count; i++) {
                result += str;
            }
            return result;
        };
        return FiguraGeometrica;
    }());
    Entidades.FiguraGeometrica = FiguraGeometrica;
})(Entidades || (Entidades = {}));
///<reference path="./FiguraGeometrica.ts"/>
var Entidades;
(function (Entidades) {
    var Rectangulo = /** @class */ (function (_super) {
        __extends(Rectangulo, _super);
        //Constructor
        function Rectangulo(color, l1, l2) {
            var _this = _super.call(this, color) || this;
            _this._ladoUno = Math.abs(l1);
            _this._ladoDos = Math.abs(l2);
            _this.CalcularDatos();
            return _this;
        }
        //Metodos
        Rectangulo.prototype.CalcularDatos = function () {
            this._perimetro = 2 * (this._ladoUno + this._ladoDos);
            this._superficie = this._ladoUno * this._ladoDos;
        };
        Rectangulo.prototype.Dibujar = function () {
            var dibujo = "<font color='" + _super.prototype.GetColor.call(this) + "'>";
            for (var i = 0; i < this._ladoDos; i++) {
                dibujo += _super.prototype.repeat.call(this, "*", this._ladoUno) + "<br/>";
            }
            dibujo += "</font>";
            return dibujo;
        };
        Rectangulo.prototype.ToString = function () {
            return "Rect&aacute;ngulo:<br/>" + _super.prototype.ToString.call(this) + ".Lado 1: " + this._ladoUno + " - \n                Lado 2: " + this._ladoDos + "<br/>";
        };
        return Rectangulo;
    }(Entidades.FiguraGeometrica));
    Entidades.Rectangulo = Rectangulo;
})(Entidades || (Entidades = {}));
///<reference path="./FiguraGeometrica.ts"/>
var Entidades;
(function (Entidades) {
    var Triangulo = /** @class */ (function (_super) {
        __extends(Triangulo, _super);
        //Constructor
        function Triangulo(color, b, h) {
            var _this = _super.call(this, color) || this;
            _this._base = Math.abs(b);
            _this._altura = Math.abs(h);
            _this.CalcularDatos();
            return _this;
        }
        //Metodos
        Triangulo.prototype.Dibujar = function () {
            var dibujo = "<font color='" + _super.prototype.GetColor.call(this) + "'>";
            for (var i = 0; i < this._altura; i++) {
                if (i == this._altura - 1) {
                    dibujo += this.repeat("*", this._base);
                }
                else {
                    dibujo += (i + 1 >= this._base) ? _super.prototype.repeat.call(this, "*", this._base) : _super.prototype.repeat.call(this, "*", i + 1);
                }
                dibujo += "<br/>";
            }
            dibujo += "</font>";
            return dibujo;
        };
        Triangulo.prototype.ToString = function () {
            return "Tri&aacute;ngulo:<br/> " + _super.prototype.ToString.call(this) + "Base: " + this._base + "<br/>Altura:\n            " + this._altura + "<br/>";
        };
        Triangulo.prototype.CalcularDatos = function () {
            this._superficie = (this._base * this._altura) / 2;
            this._perimetro = "No se puede calcular.";
        };
        return Triangulo;
    }(Entidades.FiguraGeometrica));
    Entidades.Triangulo = Triangulo;
})(Entidades || (Entidades = {}));
///<reference path="./Rectangulo.ts"/>
///<reference path="./Triangulo.ts"/>
function mostrarForm() {
    var radios = document.getElementsByName("rdo");
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (radio.checked) {
            if (radio.value == "1") {
                document.getElementById("rec").hidden = true;
                document.getElementById("tri").hidden = false;
                break;
            }
            else {
                document.getElementById("rec").hidden = false;
                document.getElementById("tri").hidden = true;
                break;
            }
        }
    }
}
function mostrarRectangulo() {
    var rectangulo = new Entidades.Rectangulo(document.getElementById("recColor").value, Number(document.getElementById("recL1").value), Number(document.getElementById("recL2").value));
    if (document.getElementById("div") !== null) {
        document.getElementById("div").remove();
    }
    var div = document.body.appendChild(document.createElement("div"));
    div.id = "div";
    div.appendChild(document.createElement("h1")).textContent = "Información";
    div.innerHTML += rectangulo.ToString();
    div.appendChild(document.createElement("h1")).textContent = "Dibujo";
    div.innerHTML += rectangulo.Dibujar();
}
function mostrarTriangulo() {
    var triangulo = new Entidades.Triangulo(document.getElementById("triColor").value, Number(document.getElementById("triBase").value), Number(document.getElementById("triAltura").value));
    if (document.getElementById("div") !== null) {
        document.getElementById("div").remove();
    }
    var div = document.body.appendChild(document.createElement("div"));
    div.id = "div";
    div.appendChild(document.createElement("h1")).textContent = "Información";
    div.innerHTML += triangulo.ToString();
    div.appendChild(document.createElement("h1")).textContent = "Dibujo";
    div.innerHTML += triangulo.Dibujar();
}
//# sourceMappingURL=app.js.map