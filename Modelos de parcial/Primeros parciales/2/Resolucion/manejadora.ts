/// <reference path="../Librerias/Jquery/node_modules/@types/jquery/index.d.ts" />
/// <reference path="../Librerias/all.d.ts" />
/// <reference path="./campera.ts" />
/// <reference path="./administrarValidaciones.ts" />


namespace Test {
    export class Manejadora {
        /*1- AgregarCampera. Tomará los distintos valores desde la página index.html, creará
un objeto de tipo Campera, que se enviará (por AJAX) junto al parámetro caso
(con valor “agregar”), hacia “./BACKEND/adminstrar.php”. En esta página se
guardará al ciudadano en el archivo “./BACKEND/camperas.json”.*/
        public static AgregarCampera() {
            let codigo: number = <number>$("#codigo").val();
            let nombre: string = <string>$("#nombre").val();
            let precio: number = <number>$("#precio").val();
            let talle: string = <string>$("#talle").val();
            let color: string = <string>$("#color").val();
            let file : FileList = <FileList>$("#pathFoto").prop("files");
            let campera = new Entidades.Campera(codigo, nombre, precio, talle, color,"");
            this.AdministrarSpinner(false);
            (new Ajax(true)).Binary("./BACKEND/administrar.php", `option=agregar&campera=${JSON.stringify(campera.camperaToJson())}`,
            ["foto"],file);
        }
        /*2- MostrarCamperas. Recuperará (por AJAX) a todas las camperas del archivo
        .json (caso=”mostrar”) y generará un listado dinámico (en el FRONTEND) que
        mostrará toda la información de cada una de las camperas. Agregar columnas al
        listado que permitan: Eliminar y Modificar a la campera elegida. */
        public static MostrarCamperas(filtrarPorColor? : string) {
            let onsucess: Function = (response) => {
                let table: Table = new Table("Codigo", "Nombre", "Precio", "Talle", "Color","Foto", "Modficacion", "Eliminacion");
                let jsonArray = JSON.parse(response);
                for (let i = 0; i < jsonArray.length; i++) {
                    if(filtrarPorColor === undefined || (<string>jsonArray[i].color).toLowerCase() == (<string>filtrarPorColor).toLowerCase() ) {
                        table.addRow(jsonArray[i].codigo, jsonArray[i].nombre, jsonArray[i].precio, jsonArray[i].talle, jsonArray[i].color,
                            "<img src='./BACKEND/"+jsonArray[i].pathFoto+"' width='100px' height='100px' />",
                            "<input type='button' value='Modificar' onclick='Test.Manejadora.ModificarCampera(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)' />",
                            "<input type='button' value='Eliminar' onclick='Test.Manejadora.EliminarCampera(&#39;" + JSON.stringify(jsonArray[i]) + "&#39;)' />");

                    }
                }
                let tabla: HTMLTableElement = document.createElement("table");
                tabla.innerHTML = table.getTable();
                tabla.border = "1";
                $("#camperas").html(tabla.outerHTML);
            }
            this.AdministrarSpinner(false);
            (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", `option=mostrar`);
        }
        /*3- EliminarCampera. Eliminará a la campera del archivo (por AJAX)
(caso=”eliminar”). Recibe como parámetro al objeto JSON que se ha de eliminar.
Pedir confirmación, mostrando código y talle, antes de eliminar. Refrescar el
listado para visualizar los cambios.*/
        public static EliminarCampera(jsonStr: string) {
            let jsonObj = JSON.parse(jsonStr);
            if (confirm("Desea eliminar la campera con codigo " + jsonObj.codigo + " y talle " + jsonObj.talle + ".")) {
                let onsucess: Function = (response) => {
                    this.MostrarCamperas();
                }
                this.AdministrarSpinner(false);
                (new Ajax(true, onsucess)).POST("./BACKEND/administrar.php", `option=eliminar&campera=${jsonStr}`);
            }
        }
        /*4- ModificarCampera. Mostrará todos los datos de la campera que recibe por
parámetro (objeto JSON), en el formulario. Permitirá modificar cualquier campo, a
excepción del código.*/
        public static ModificarCampera(jsonStr: string) {
            if (jsonStr !== null) {
                this.AdministrarSpinner(true);
                let jsonObj = JSON.parse(jsonStr);
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
                let codigo : number = <number>$("#codigo").val();
                let nombre : string = <string>$("#nombre").val();
                let precio : number = <number>$("#precio").val();
                let talle : string = <string>$("#talle").val();
                let color : string = <string>$("#color").val();
                let file : FileList = <FileList>$("#pathFoto").prop("files");
                let campera = new Entidades.Campera(codigo,nombre,precio,talle,color,"");
                this.AdministrarSpinner(false);
                (new Ajax(true)).Binary("./BACKEND/administrar.php", `option=modificar&campera=${JSON.stringify( campera.camperaToJson())}`,
                ["foto"],file);
            }

        }
        /*5- FiltrarCamperasPorColor. Mostrará (por AJAX) (caso=”mostrar”) un listado
dinámico (en el FRONTEND) de todas las camperas según el color seleccionado
en el combo (cboColor).*/
        public static FiltrarCamperasPorColor() {
            this.MostrarCamperas( <string>$("#cboColor").val());
        }
        /*6- CargarColoresJSON. Cargará (por AJAX) (caso=”colores”) en el combo
(cboColor) con el contenido del archivo “./BACKEND/colores.json”.*/
        public static CargarColoresJSON() {
            let onsucess = (response ) => {
                let jsonObj = JSON.parse(response);
                for (let i = 0; i < jsonObj.length; i++) {
                    $('#cboColor').append($('<option>', { value: jsonObj[i].color , text: jsonObj[i].color}));
                }
            }
            (new Ajax(true,onsucess)).POST("./BACKEND/administrar.php", `option=colores`);
        }
        public static LimpiarForm() {
            (<HTMLFormElement>document.getElementById("form")).reset();
            let options : HTMLOptionsCollection = (<HTMLSelectElement>document.getElementById("cboColor")).options;
            for (let i = 0; i < options.length ; i++) {
                if(options[i].value == "Azul") {
                    options[i].selected = true;
                    break;
                }
            }
        }
        public static AdministrarSpinner(ver : boolean) {
            $("#gif").prop("hidden",ver);
        }
    }
}

/*
8- LimpiarForm. Vaciará todos los campos del formulario y colocará el combo
(cboColor) en “Azul”. Este método se invocará cada vez que se realice una acción
sobre el formulario.
9- AdministrarSpinner. Este método mostrará u ocultará el archivo
“./BACKEND/gif-load.gif”, de acuerdo al parámetro booleano que recibe como
parámetro. Aplicar la llamada de este método en cada acción que invoque a un
AJAX.*/