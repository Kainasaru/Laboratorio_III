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
var Ajax = /** @class */ (function () {
    function Ajax(async, onSucess, onFail) {
        if (async === void 0) { async = true; }
        this._async = async;
        this._onSucess = onSucess;
        this._onFail = onFail;
        this._xhttp = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }
    Object.defineProperty(Ajax.prototype, "async", {
        get: function () {
            return this._async;
        },
        set: function (async) {
            this._async = async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ajax.prototype, "onSucess", {
        set: function (onSucess) {
            this._onSucess = onSucess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ajax.prototype, "onFail", {
        set: function (onFail) {
            this.onFail = onFail;
        },
        enumerable: true,
        configurable: true
    });
    Ajax.prototype.GET = function (url) {
        var _this = this;
        this._xhttp.onreadystatechange = function () {
            if (_this._xhttp.readyState == Ajax.DONE) {
                if (_this._xhttp.status == Ajax.OK && _this._onSucess !== undefined) {
                    _this._onSucess(_this._xhttp.responseText);
                }
                else if (_this._onFail !== undefined) {
                    _this._onFail(_this._xhttp.status);
                }
            }
        };
        this._xhttp.open("GET", url, this.async);
        this._xhttp.send();
    };
    Ajax.prototype.POST = function (url, params) {
        var _this = this;
        this._xhttp.onreadystatechange = function () {
            if (_this._xhttp.readyState == Ajax.DONE) {
                if (_this._xhttp.status == Ajax.OK && _this._onSucess !== undefined) {
                    _this._onSucess(_this._xhttp.responseText);
                }
                else if (_this._onFail !== undefined) {
                    _this._onFail(_this._xhttp.status);
                }
            }
        };
        this._xhttp.open("POST", url, this.async);
        this._xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        this._xhttp.send(params);
    };
    Ajax.prototype.Binary = function (url, commonParams, nameOfFileParams, files) {
        var _this = this;
        var form = new FormData();
        for (var i = 0; i < commonParams.split("&").length; i++) {
            var param = ((commonParams.split("&"))[i]).split("=");
            form.append(param[0], param[1]);
        }
        for (var i = 0; i < nameOfFileParams.length; i++) {
            form.append(nameOfFileParams[i], files[i]);
        }
        this._xhttp.onreadystatechange = function () {
            if (_this._xhttp.readyState == Ajax.DONE) {
                if (_this._xhttp.status == Ajax.OK && _this._onSucess !== undefined) {
                    _this._onSucess(_this._xhttp.responseText);
                }
                else if (_this._onFail !== undefined) {
                    _this._onFail(_this._xhttp.status);
                }
            }
        };
        this._xhttp.open("POST", url, this.async);
        this._xhttp.setRequestHeader("enctype", "multipart/form-data");
        this._xhttp.send(form);
    };
    return Ajax;
}());
var Table = /** @class */ (function () {
    function Table() {
        var header = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            header[_i] = arguments[_i];
        }
        this._table = "<table><thead>%h</thead><tbody>%b</tbody></table>";
        this._tbody = "";
        this._thead = "";
        this.initializeTable(header);
    }
    Table.prototype.initializeTable = function (header) {
        for (var i = 0; i < header.length; i++) {
            this._thead += "<th>" + header[i] + "</th>";
        }
    };
    Table.prototype.getTable = function () {
        var table = this._table;
        table = table.replace("%h", this._thead);
        table = table.replace("%b", this._tbody);
        return table;
    };
    Table.prototype.deleteRowByCellElement = function (cellElement, firstOnly) {
        if (firstOnly === void 0) { firstOnly = true; }
        var rows = this._tbody.match(/<tr>.+?<\/tr>/mg);
        var stopRemoving = false;
        this._tbody = "";
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].search("<td>" + cellElement + "</td>") === -1 || stopRemoving) { //Reviso si el elemento no esta y cargo
                this._tbody += rows[i];
            }
            else if (firstOnly) { //Si el elemento esta en las filas cambio y solo se pide eliminar uno, cambio stopremoving a true para que entre siempre al if anterior
                stopRemoving = true;
            }
        }
    };
    Table.prototype.replaceThead = function () {
        var header = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            header[_i] = arguments[_i];
        }
        this._thead = "";
        this.initializeTable(header);
    };
    Table.prototype.addRow = function () {
        var body = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            body[_i] = arguments[_i];
        }
        this._tbody += "<tr>";
        for (var i = 0; i < body.length; i++) {
            this._tbody += "<td>" + body[i] + "</td>";
        }
        this._tbody += "</tr>";
        return this.getTable();
    };
    return Table;
}());
var Entidades;
(function (Entidades) {
    var Ropa = /** @class */ (function () {
        function Ropa(codigo, nombre, precio) {
            this._codigo = codigo;
            this._nombre = nombre;
            this._precio = precio;
        }
        Ropa.prototype.ropaToString = function () {
            return "{\"codigo\" : " + this._codigo + " , \"nombre\" : \"" + this._nombre + "\", \"precio\" : " + this._precio + ",";
        };
        return Ropa;
    }());
    Entidades.Ropa = Ropa;
})(Entidades || (Entidades = {}));
/// <reference path="./ropa.ts"/>
var Entidades;
(function (Entidades) {
    var Campera = /** @class */ (function (_super) {
        __extends(Campera, _super);
        function Campera(codigo, nombre, precio, talle, color, pathFoto) {
            var _this = _super.call(this, codigo, nombre, precio) || this;
            _this._talle = talle;
            _this._color = color;
            _this._pathFoto = pathFoto;
            return _this;
        }
        Campera.prototype.camperaToJson = function () {
            return JSON.parse(_super.prototype.ropaToString.call(this) + ("\"talle\" :  \"" + this._talle + "\", \"color\" : \"" + this._color + "\",\"pathFoto\": \"" + this._pathFoto + "\" }"));
        };
        return Campera;
    }(Entidades.Ropa));
    Entidades.Campera = Campera;
})(Entidades || (Entidades = {}));
/*La función se llamará AdministrarValidaciones y será la encargada de invocar a otras funciones que verifiquen:
 Campos no vacíos (todos).
o ValidarCamposVacios(string): boolean. Recibe como parámetro el valor del atributo id del campo a ser validado. Retorna true si
no está vacío o false caso contrario.
 Talles correctos (talle).
o ValidarTalles(string, string[]): boolean. Recibe como parámetro el valor a ser validado y los valores permitidos para los talles
(S, M, L, X, XL, XXL). Retorna true si el valor pertenece a los talles o false caso contrario.
 Selección del código (código).
o ValidarCodigo(number): boolean. Recibe como parámetro el valor del código a ser validado y retorna true si el mismo es mayor o
 igual a 523 y menor a 1000. False caso contrario.
Si algún campo no pasa la validación, se mostrará un * al lado de dicho campo y no se permitirá el envío de la información. Si
 todos los campos pasan todas las validaciones, se enviará la información correspondiente.
Aplicarlo tanto para el alta como para la modificación de las camperas.*/
/// <reference path="./manejadora.ts" />
function AdministrarValidaciones(mode) {
    var ids = ["codigo", "nombre", "precio", "talle", "color", "pathFoto"];
    var valido = true;
    for (var i = 0; i < ids.length; i++) {
        $("#" + ids[i] + "Ast").prop("hidden", true); //Borro los asteriscos en caso de que este mal se vuelven a colocar correctamente
        if (ids[i] == "codigo") {
            if (!ValidarCodigo($("#codigo").val())) {
                $("#codigoAst").prop("hidden", false);
                valido = false;
            }
        }
        else if (ids[i] == "talle") {
            if (!ValidarTalles($("#talle").val(), ["S", "M", "L", "X", "XL", "XXL"])) {
                $("#talleAst").prop("hidden", false);
                valido = false;
            }
        }
        else if (!ValidarCamposVacios(ids[i])) {
            $("#" + ids[i] + "Ast").prop("hidden", false);
            valido = false;
        }
    }
    if (valido) {
        if (mode == "agregar") {
            Test.Manejadora.AgregarCampera();
        }
        else if (mode == "modificar") {
            Test.Manejadora.ModificarCampera(null);
        }
        Test.Manejadora.LimpiarForm();
    }
}
function ValidarCamposVacios(id) {
    return $("#" + id).val() != "";
}
function ValidarTalles(talle, tallesPermitidos) {
    return tallesPermitidos.some(function (value) { return value == talle; });
}
function ValidarCodigo(codigo) {
    return codigo >= 523 && codigo < 1000;
}
/// <reference path="../Librerias/Jquery/node_modules/@types/jquery/index.d.ts" />
/// <reference path="../Librerias/all.d.ts" />
/// <reference path="./campera.ts" />
/// <reference path="./administrarValidaciones.ts" />
var Test;
(function (Test) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        /*1- AgregarCampera. Tomará los distintos valores desde la página index.html, creará
un objeto de tipo Campera, que se enviará (por AJAX) junto al parámetro caso
(con valor “agregar”), hacia “./BACKEND/adminstrar.php”. En esta página se
guardará al ciudadano en el archivo “./BACKEND/camperas.json”.*/
        Manejadora.AgregarCampera = function () {
            var codigo = $("#codigo").val();
            var nombre = $("#nombre").val();
            var precio = $("#precio").val();
            var talle = $("#talle").val();
            var color = $("#color").val();
            var file = $("#pathFoto").prop("files");
            var campera = new Entidades.Campera(codigo, nombre, precio, talle, color, "");
            this.AdministrarSpinner(false);
            (new Ajax(true)).Binary("./BACKEND/administrar.php", "option=agregar&campera=" + JSON.stringify(campera.camperaToJson()), ["foto"], file);
        };
        /*2- MostrarCamperas. Recuperará (por AJAX) a todas las camperas del archivo
        .json (caso=”mostrar”) y generará un listado dinámico (en el FRONTEND) que
        mostrará toda la información de cada una de las camperas. Agregar columnas al
        listado que permitan: Eliminar y Modificar a la campera elegida. */
        Manejadora.MostrarCamperas = function (filtrarPorColor) {
            var onsucess = function (response) {
                var table = new Table("Codigo", "Nombre", "Precio", "Talle", "Color", "Foto", "Modficacion", "Eliminacion");
                var jsonArray = JSON.parse(response);
                for (var i = 0; i < jsonArray.length; i++) {
                    if (filtrarPorColor === undefined || jsonArray[i].color.toLowerCase() == filtrarPorColor.toLowerCase()) {
                        table.addRow(jsonArray[i].codigo, jsonArray[i].nombre, jsonArray[i].precio, jsonArray[i].talle, jsonArray[i].color, "<img src='./BACKEND/" + jsonArray[i].pathFoto + "' width='100px' height='100px' />", "<input type='button' value='Modificar' onclick='Test.Manejadora.ModificarCampera(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)' />", "<input type='button' value='Eliminar' onclick='Test.Manejadora.EliminarCampera(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)' />");
                    }
                }
                var tabla = document.createElement("table");
                tabla.innerHTML = table.getTable();
                tabla.border = "1";
                $("#camperas").html(tabla.outerHTML);
            };
            this.AdministrarSpinner(false);
            (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", "option=mostrar");
        };
        /*3- EliminarCampera. Eliminará a la campera del archivo (por AJAX)
(caso=”eliminar”). Recibe como parámetro al objeto JSON que se ha de eliminar.
Pedir confirmación, mostrando código y talle, antes de eliminar. Refrescar el
listado para visualizar los cambios.*/
        Manejadora.EliminarCampera = function (jsonStr) {
            var _this = this;
            var jsonObj = JSON.parse(jsonStr);
            if (confirm("Desea eliminar la campera con codigo " + jsonObj.codigo + " y talle " + jsonObj.talle + ".")) {
                var onsucess = function (response) {
                    _this.MostrarCamperas();
                };
                this.AdministrarSpinner(false);
                (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", "option=eliminar&campera=" + jsonStr);
            }
        };
        /*4- ModificarCampera. Mostrará todos los datos de la campera que recibe por
parámetro (objeto JSON), en el formulario. Permitirá modificar cualquier campo, a
excepción del código.*/
        Manejadora.ModificarCampera = function (jsonStr) {
            if (jsonStr !== null) {
                this.AdministrarSpinner(true);
                var jsonObj = JSON.parse(jsonStr);
                $("#codigo").val(jsonObj.codigo);
                $("#codigo").prop("readonly", true);
                $("#agregarBtn").attr("value", "Modificar");
                $("#agregarBtn").attr("onclick", "AdministrarValidaciones('modificar')");
                $("#nombre").val(jsonObj.nombre);
                $("#precio").val(jsonObj.precio);
                $("#talle").val(jsonObj.talle);
                $("#color").val(jsonObj.color);
            }
            else {
                $("#codigo").prop("readonly", false);
                $("#agregarBtn").attr("value", "Agregar");
                $("#agregarBtn").attr("onclick", "Test.Manejadora.AgregarCampera()");
                var codigo = $("#codigo").val();
                var nombre = $("#nombre").val();
                var precio = $("#precio").val();
                var talle = $("#talle").val();
                var color = $("#color").val();
                var file = $("#pathFoto").prop("files");
                var campera = new Entidades.Campera(codigo, nombre, precio, talle, color, "");
                this.AdministrarSpinner(false);
                (new Ajax(true)).Binary("./BACKEND/administrar.php", "option=modificar&campera=" + JSON.stringify(campera.camperaToJson()), ["foto"], file);
            }
        };
        /*5- FiltrarCamperasPorColor. Mostrará (por AJAX) (caso=”mostrar”) un listado
dinámico (en el FRONTEND) de todas las camperas según el color seleccionado
en el combo (cboColor).*/
        Manejadora.FiltrarCamperasPorColor = function () {
            this.MostrarCamperas($("#cboColor").val());
        };
        /*6- CargarColoresJSON. Cargará (por AJAX) (caso=”colores”) en el combo
(cboColor) con el contenido del archivo “./BACKEND/colores.json”.*/
        Manejadora.CargarColoresJSON = function () {
            var onsucess = function (response) {
                var jsonObj = JSON.parse(response);
                for (var i = 0; i < jsonObj.length; i++) {
                    $('#cboColor').append($('<option>', { value: jsonObj[i].color, text: jsonObj[i].color }));
                }
            };
            (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", "option=colores");
        };
        Manejadora.LimpiarForm = function () {
            document.getElementById("form").reset();
            var options = document.getElementById("cboColor").options;
            for (var i = 0; i < options.length; i++) {
                if (options[i].value == "Azul") {
                    options[i].selected = true;
                    break;
                }
            }
        };
        Manejadora.AdministrarSpinner = function (ver) {
            $("#gif").prop("hidden", ver);
        };
        return Manejadora;
    }());
    Test.Manejadora = Manejadora;
})(Test || (Test = {}));
/*
8- LimpiarForm. Vaciará todos los campos del formulario y colocará el combo
(cboColor) en “Azul”. Este método se invocará cada vez que se realice una acción
sobre el formulario.
9- AdministrarSpinner. Este método mostrará u ocultará el archivo
“./BACKEND/gif-load.gif”, de acuerdo al parámetro booleano que recibe como
parámetro. Aplicar la llamada de este método en cada acción que invoque a un
AJAX.*/ 
//# sourceMappingURL=app.js.map