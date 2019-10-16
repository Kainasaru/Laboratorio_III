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
/*a. Ente: cuadrante(cadena), edad(entero) y altura(flotante) como atributos. Un constructor
que reciba tres parámetros. Un método, ToString():string, que retorne la representación de la
clase en formato cadena (preparar la cadena para que, al juntarse con el método ToJSON, forme
    una cadena JSON válida).*/
var Entidades;
(function (Entidades) {
    var Ente = /** @class */ (function () {
        function Ente(cuadrante, edad, altura) {
            this._cuadrante = cuadrante;
            this._edad = edad;
            this._altura = altura;
        }
        Ente.prototype.ToString = function () {
            return "{\"cuadrante\" : \"" + this._cuadrante + "\", \"edad\" : " + this._edad + ", \"altura\" : " + this._altura + ", ";
        };
        return Ente;
    }());
    Entidades.Ente = Ente;
})(Entidades || (Entidades = {}));
/*Alien, hereda de Ente, posee como atributos raza(cadena), planetaOrigen(cadena) y pathFoto(cadena). Un
constructor para inicializar los atributos. Un método ToJSON():JSON, que retornará la representación del
objeto en formato JSON. Se debe de reutilizar el método ToString de la clase Ente.*/
/// <reference path='./ente.ts'/>
var Entidades;
(function (Entidades) {
    var Alien = /** @class */ (function (_super) {
        __extends(Alien, _super);
        function Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto) {
            var _this = _super.call(this, cuadrante, edad, altura) || this;
            _this._raza = raza;
            _this._planetaOrigen = planetaOrigen;
            _this._pathFoto = pathFoto;
            return _this;
        }
        Alien.prototype.ToJSON = function () {
            return JSON.parse(_super.prototype.ToString.call(this) + ("\"raza\" : \"" + this._raza + "\", \"planetaOrigen\" : \"" + this._planetaOrigen + "\", \"pathFoto\" : \"" + this._pathFoto + "\" }"));
        };
        return Alien;
    }(Entidades.Ente));
    Entidades.Alien = Alien;
})(Entidades || (Entidades = {}));
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
/*Crear en TypeScript la clase Manejadora (en el namespace RecuperatorioPrimerParcial) que posea los siguientes
métodos y funcionalidades:
AgregarAlien. Tomará los distintos valores desde la página index.html (incluida la foto),
creará un objeto de tipo Alien, que se enviará (por AJAX) hacia “./BACKEND/adminstrar.php”.
En esta página se guardará al alien en el archivo “./BACKEND/alien.json” y la foto en “./BACKEND/fotos”.

MostrarAliens. Recuperará (por AJAX) todos los aliens del archivo .json y generará un listado dinámico
 (en el FRONTEND) que mostrará toda la información de cada uno de los aliens (incluida la foto).

GuardarEnLocalStorage. Recuperará (por AJAX) todos los aliens del archivo .json y los guarda en el LocalStorage,
con la clave “aliens_local_storage”.

VerificarExistencia. Verifica que el alien que se quiere agregar no exista. Para ello, comparará los cuadrantes
y la raza de los aliens guardados en el LocalStorage. Si el alien existe, se mostrará (por consola y alert) lo
 acontecido. Caso contrario, agregará el nuevo alien y se actualizará el LocalStorage.

ObtenerAliensPorCuadrante. Recupera del LocalStorage todos los aliens y muestra, por consola, que cuadrante o
cuadrantes poseen más aliens (y su cantidad) y que cuadrante o cuadrantes poseen menos aliens (y su cantidad).*/
/// <reference path="../Libreria/Jquery/node_modules/@types/jquery/index.d.ts" />
/// <reference path='./alien.ts'/>
/// <reference path='./iparte2.ts'/>
/// <reference path='../Libreria/TYPESCRIPT/all.d.ts'/>
var RecuperatorioPrimerParcial;
(function (RecuperatorioPrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        /*EliminarAlien. Eliminará al alien del archivo (por AJAX) y del LocalStorage. Recibe como parámetro
         al objeto JSON que se ha de eliminar. Pedir confirmación, mostrando cuadrante y raza, antes de eliminar.
         Refrescar el listado para visualizar los cambios.*/
        Manejadora.prototype.EliminarAlien = function (alien) {
            var _this = this;
            var alienJson = JSON.parse(alien);
            if (confirm("\u00BFDesea eliminar el alien de cuadrante " + alienJson.cuadrante + " y raza " + alienJson.raza + "?")) {
                var onSucess = function (response) {
                    var aliens = JSON.parse(localStorage.getItem("aliens_local_storage"));
                    for (var i = 0; i < aliens.length; i++) {
                        if (aliens[i].cuadrante == alienJson.cuadrante &&
                            aliens[i].raza == alienJson.raza) {
                            aliens.splice(i, 1);
                            break;
                        }
                    }
                    localStorage.setItem("aliens_local_storage", JSON.stringify(aliens));
                    _this.MostrarAliens();
                };
                var ajax = new Ajax(true, onSucess);
                ajax.POST("./BACKEND/administrar.php", "option=eliminar&raza=" + alienJson.raza + "&cuadrante=" + alienJson.cuadrante);
            }
        };
        Manejadora.prototype.ModificarAlien = function (json) {
            var _this = this;
            if (json == undefined) {
                var cuadrante = $("#cuadrante").val();
                var edad = $("#edad").val();
                var altura = $("#altura").val();
                var raza = $("#raza").val();
                var planetaOrigen = $("#planetaOrigen").val();
                var pathFoto = $("#imgFoto").prop("src");
                var file = $("#pathFoto").prop("files");
                var alien = new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto);
                var onsucess = function (response) {
                    if (response == 1) {
                        _this.MostrarAliens();
                    }
                    else {
                        console.log("No se pudo modificar el alien.");
                        alert("No se pudo modificar el alien.");
                    }
                };
                $("#cuadrante").prop("readonly", false);
                $("#fotoTitulo").prop("hidden", true);
                $("#imgFoto").prop("hidden", true);
                $("#btnAgregar").attr("value", "Agregar");
                $("#btnAgregar").attr("onclick", "procesar('agregar')");
                var ajax = new Ajax(true, onsucess);
                ajax.Binary("./BACKEND/administrar.php", "option=modificar&alien=" + JSON.stringify(alien.ToJSON()), ["foto"], file);
            }
            else {
                var jsonObj = JSON.parse(json);
                $("#cuadrante").val(jsonObj.cuadrante);
                $("#cuadrante").prop("readonly", true);
                $("#edad").val(jsonObj.edad);
                $("#altura").val(jsonObj.altura);
                $("#raza").val(jsonObj.raza);
                $("#planetaOrigen").val(jsonObj.planetaOrigen);
                $("#fotoTitulo").prop("hidden", false);
                $("#imgFoto").prop("hidden", false);
                $("#imgFoto").prop("src", jsonObj.pathFoto);
                $("#btnAgregar").attr("value", "Modificar");
                $("#btnAgregar").attr("onclick", "procesar('modificar')");
            }
        };
        Manejadora.prototype.AgregarAlien = function () {
            var _this = this;
            var cuadrante = $("#cuadrante").val();
            var edad = $("#edad").val();
            var altura = $("#altura").val();
            var raza = $("#raza").val();
            var planetaOrigen = $("#planetaOrigen").val();
            var file = $("#pathFoto").prop("files");
            var alien = new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, "");
            var onsucess = function (response) {
                _this.MostrarAliens();
            };
            var ajax = new Ajax(true, onsucess);
            ajax.Binary("./BACKEND/administrar.php", "option=agregar&alien=" + JSON.stringify(alien.ToJSON()), ["foto"], file);
        };
        Manejadora.prototype.MostrarAliens = function () {
            var onSucess = function (response) {
                var json = JSON.parse(response);
                var tabla = new Table("Cuadrante", "Edad", "Altura", "Raza", "Planeta de origen", "Foto", "Acciones");
                for (var i = 0; i < json.length; i++) {
                    tabla.addRow(json[i].cuadrante, json[i].edad, json[i].altura, json[i].raza, json[i].planetaOrigen, "<img src='" + json[i].pathFoto + "' width='100px' height='100px'>", "<input type='button' value='modificar' onclick='procesar(&#39modificar&#39,&#39" +
                        JSON.stringify(json[i]) + "&#39)' style='width:7em;'><br/>\
                         <input type='button' value='Eliminar' onclick='procesar(&#39eliminar&#39,&#39" +
                        JSON.stringify(json[i]) + "&#39)' style='width:7em;'>");
                }
                var table = document.createElement("table");
                table.innerHTML = tabla.getTable();
                table.border = "1";
                document.getElementById("result").innerHTML = table.outerHTML;
            };
            var ajax = new Ajax(true, onSucess);
            ajax.POST("./BACKEND/administrar.php", "option=mostrar");
        };
        Manejadora.prototype.GuardarEnLocalStorage = function () {
            var onSucess = function (response) {
                localStorage.setItem("aliens_local_storage", response);
            };
            var ajax = new Ajax(true, onSucess);
            ajax.POST("./BACKEND/administrar.php", "option=mostrar");
        };
        Manejadora.prototype.VerificarExistencia = function () {
            var cuadrante = $("#cuadrante").val();
            var edad = $("#edad").val();
            var altura = $("#altura").val();
            var raza = $("#raza").val();
            var planetaOrigen = $("#planetaOrigen").val();
            var pathFoto = $("#pathFoto").val();
            pathFoto = pathFoto.replace(/\\/g, "/");
            var alien = (new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto)).ToJSON();
            var listaAliens = [];
            var existe = false;
            if ((listaAliens = localStorage.getItem("aliens_local_storage")) != null) {
                listaAliens = JSON.parse(listaAliens);
                for (var i = 0; i < listaAliens.length; i++) {
                    if (listaAliens[i].cuadrante == alien.cuadrante && listaAliens[i].raza == alien.raza) {
                        console.log("El alien ya existe en el local storage.");
                        alert("El alien ya existe en el local storage.");
                        existe = true;
                        break;
                    }
                }
            }
            if (!existe) {
                listaAliens.push(alien);
                localStorage.setItem("aliens_local_storage", JSON.stringify(listaAliens));
            }
        };
        Manejadora.prototype.ObtenerAliensPorCuadrante = function () {
            var listaAliens;
            var cuadrantes = new Array();
            var cantidades = new Array();
            if ((listaAliens = localStorage.getItem("aliens_local_storage")) != null) {
                listaAliens = JSON.parse(listaAliens);
                for (var i = 0; i < listaAliens.length; i++) {
                    if (cuadrantes.indexOf(listaAliens[i].cuadrante) == -1) {
                        cuadrantes.push(listaAliens[i].cuadrante);
                        cantidades.push(1);
                    }
                    else {
                        cantidades[cuadrantes.indexOf(listaAliens[i].cuadrante)]++;
                    }
                }
                //Ordeno los arrays de mayor a menor
                for (var i = 0; i < cantidades.length - 1; i++) {
                    for (var j = i + 1; j < cantidades.length; j++) {
                        if (cantidades[j] > cantidades[i]) {
                            var aux = cantidades[i];
                            cantidades[i] = cantidades[j];
                            cantidades[j] = aux;
                            aux = cuadrantes[i];
                            cuadrantes[i] = cuadrantes[j];
                            cuadrantes[j] = aux;
                        }
                    }
                }
                if (cantidades.every(function (value, index, array) { return value == array[0]; })) {
                    console.log("Todos los cuadrantes tiene la misma cantidad de aliens.");
                }
                else {
                    var last = void 0;
                    var i = 0;
                    do {
                        console.log("El cuadrante " + cuadrantes[i] + " es el que más aliens tiene con " + cantidades[i] + " aliens.");
                        last = cantidades[i];
                        i++;
                    } while (cantidades[i] == last);
                    i = cantidades.length - 1;
                    do {
                        console.log("El cuadrante " + cuadrantes[i] + " es el que menos aliens tiene con " + cantidades[i] + " aliens.");
                        last = cantidades[i];
                        i--;
                    } while (cantidades[i] == last);
                }
                //Busco los que tienen mas aliens.
            }
        };
        return Manejadora;
    }());
    RecuperatorioPrimerParcial.Manejadora = Manejadora;
})(RecuperatorioPrimerParcial || (RecuperatorioPrimerParcial = {}));
/// <reference path="./manejadora.ts" />
function procesar(option, json) {
    switch (option) {
        case "agregar":
            (new RecuperatorioPrimerParcial.Manejadora()).AgregarAlien();
            break;
        case "mostrar":
            (new RecuperatorioPrimerParcial.Manejadora()).MostrarAliens();
            break;
        case "localstorage":
            (new RecuperatorioPrimerParcial.Manejadora()).GuardarEnLocalStorage();
            break;
        case "verificar":
            (new RecuperatorioPrimerParcial.Manejadora()).VerificarExistencia();
            break;
        case "cuadrantes":
            (new RecuperatorioPrimerParcial.Manejadora()).ObtenerAliensPorCuadrante();
            break;
        case "eliminar":
            (new RecuperatorioPrimerParcial.Manejadora()).EliminarAlien(json);
            break;
        case "modificar":
            (new RecuperatorioPrimerParcial.Manejadora()).ModificarAlien(json);
            break;
    }
}
