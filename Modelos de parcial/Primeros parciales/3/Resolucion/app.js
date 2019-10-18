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
    var Producto = /** @class */ (function () {
        function Producto(codigo, marca, precio) {
            this._codigo = codigo;
            this._marca = marca;
            this._precio = precio;
        }
        Producto.prototype.ToString = function () {
            return "{ \"codigo\" : " + this._codigo + ",\"marca\": \"" + this._marca + "\" ,\"precio\" : " + this._precio + ",";
        };
        return Producto;
    }());
    Entidades.Producto = Producto;
})(Entidades || (Entidades = {}));
/// <reference path="./producto.ts" />
var Entidades;
(function (Entidades) {
    var Televisor = /** @class */ (function (_super) {
        __extends(Televisor, _super);
        function Televisor(codigo, marca, precio, tipo, paisOrigen, pathFoto) {
            var _this = _super.call(this, codigo, marca, precio) || this;
            _this._tipo = tipo;
            _this._paisOrigen = paisOrigen;
            _this._pathFoto = pathFoto;
            return _this;
        }
        Televisor.prototype.ToJSON = function () {
            return JSON.parse(_super.prototype.ToString.call(this) + ("\"tipo\" : \"" + this._tipo + "\" ,\"paisOrigen\" : \"" + this._paisOrigen + "\" ,\"pathFoto\" : \"" + this._pathFoto + "\" }"));
        };
        return Televisor;
    }(Entidades.Producto));
    Entidades.Televisor = Televisor;
})(Entidades || (Entidades = {}));
/// <reference path="../Librerias/Jquery/node_modules/@types/jquery/index.d.ts" />
/// <reference path="../Librerias/all.d.ts" />
/// <reference path="./televisor.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarTelevisor = function (async, option) {
            if (async === void 0) { async = true; }
            if (option === void 0) { option = "agregar"; }
            var onsucess = (option == "modificar") ? function (response) {
                Manejadora.MostrarTelevisores();
            } : undefined;
            var onfail = (option == "modificar") ? function (status) {
                alert("No se pudo modificar.");
                console.log("No se pudo modificar.");
            } : undefined;
            var codigo = $("#codigo").val();
            var marca = $("#marca").val();
            var precio = $("#precio").val();
            var tipo = $("#tipo").val();
            var paisOrigen = $("#paisOrigen").val();
            var foto = $("#pathFoto").prop("files");
            var tele = new Entidades.Televisor(codigo, marca, precio, tipo, paisOrigen, "");
            $("#codigo").prop("readonly", false);
            $("#btnAgregar").attr("value", "Agregar");
            $("#imgFoto").prop("src", "");
            (new Ajax(async, onsucess, onfail)).Binary("./BACKEND/administrar.php", "option=" + option + "&tele=" + JSON.stringify(tele.ToJSON()), ["foto"], foto);
        };
        Manejadora.MostrarTelevisores = function () {
            var onsucess = function (response) {
                var jsonArray = JSON.parse(response);
                var tabla = new Table("Codigo", "Marca", "Precio", "Tipo", "Pais de origen", "Ruta de la foto", "Foto", "Acciones");
                for (var i = 0; i < jsonArray.length; i++) {
                    tabla.addRow(jsonArray[i].codigo, jsonArray[i].marca, jsonArray[i].precio, jsonArray[i].tipo, jsonArray[i].paisOrigen, jsonArray[i].pathFoto, "<img src='./BACKEND/" + jsonArray[i].pathFoto + "' width='100px' height='100px' />", "<input type='button' value='Modificar' onclick='PrimerParcial.Manejadora.ModificarTelevisor(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)'/><br/>", "<input type='button' value='Eliminar' onclick='PrimerParcial.Manejadora.EliminarTelevisor(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)'/>");
                }
                var tablaFinal = document.createElement("table");
                tablaFinal.innerHTML = tabla.getTable();
                tablaFinal.border = "1";
                $("#result").html(tablaFinal.outerHTML);
            };
            (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", "option=traer");
        };
        Manejadora.GuardarEnLocalStorage = function () {
            var onsucess = function (response) {
                localStorage.setItem("televisores_local_storage", response);
            };
            (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", "option=traer");
        };
        Manejadora.VerificarExistencia = function () {
            var jsonArray = JSON.parse(localStorage.getItem("televisores_local_storage"));
            var codigo = $("#codigo").val();
            var existe = false;
            for (var i = 0; i < jsonArray.length; i++) {
                if (jsonArray[i].codigo == codigo) {
                    console.log("El televisor ya existe. No se agrega.");
                    alert("El televisor ya existe. No se agrega.");
                    existe = true;
                    break;
                }
            }
            if (!existe) {
                Manejadora.AgregarTelevisor(false);
                Manejadora.GuardarEnLocalStorage();
            }
        };
        Manejadora.EliminarTelevisor = function () {
        };
        Manejadora.ModificarTelevisor = function (jsonStr) {
            if (jsonStr != null) {
                var jsonObj = JSON.parse(jsonStr);
                $("#codigo").val(jsonObj.codigo);
                $("#codigo").prop("readonly", true);
                $("#marca").val(jsonObj.marca);
                $("#precio").val(jsonObj.precio);
                $("#tipo").val(jsonObj.tipo);
                $("#paisOrigen").val(jsonObj.paisOrigen);
                $("#imgFoto").prop("src", "./BACKEND/" + jsonObj.pathFoto);
                $("#btnAgregar").attr("value", "Modificar");
            }
            else {
                Manejadora.AgregarTelevisor(true, "modificar");
            }
        };
        return Manejadora;
    }());
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
/*Agregar una columna (Acciones) al listado de televisores que permita: Eliminar y Modificar al televisor elegido. Para ello,
agregue dos botones (input [type=button]) que invoquen a las funciones EliminarTelevisor y ModificarTelevisor, respectivamente.
En la clase Manejadora, agregar:
EliminarTelevisor. Eliminará al televisor del archivo (por AJAX) (caso=”eliminar”). Recibe como parámetro al objeto JSON que se ha
 de eliminar. Pedir confirmación, mostrando código y el tipo, antes de eliminar. Refrescar el listado para visualizar los cambios.
ModificarTelevisor. Mostrará todos los datos del televisor que recibe por parámetro (objeto JSON), en el formulario, incluida la foto
(mostrarla en “imgFoto”). Permitirá modificar cualquier campo, a excepción del código, dejarlo como de solo lectura.
Modificar el método AgregarTelevisor para cambiar el caso de “agregar” a “modificar” y el texto del botón de “Agregar” a “Modificar”,
 según corresponda.
Refrescar el listado solo si se pudo modificar, caso contrario, informar (por alert y consola) de lo acontecido.*/ 
//# sourceMappingURL=app.js.map