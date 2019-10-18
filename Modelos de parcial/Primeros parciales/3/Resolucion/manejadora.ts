/// <reference path="../Librerias/Jquery/node_modules/@types/jquery/index.d.ts" />
/// <reference path="../Librerias/all.d.ts" />
/// <reference path="./televisor.ts" />

namespace PrimerParcial {
    export class Manejadora {
        public static AgregarTelevisor(async : boolean = true,option : string = "agregar") {
            let onsucess = (option == "modificar")? (response) => {
                Manejadora.MostrarTelevisores();
            } : undefined ;
            let onfail = (option == "modificar")? (status) => {
                alert("No se pudo modificar.");
                console.log("No se pudo modificar.");
            } : undefined ;
            let codigo : number = <number>$("#codigo").val();
            let marca : string = <string>$("#marca").val();
            let precio : number = <number>$("#precio").val();
            let tipo : string = <string>$("#tipo").val();
            let paisOrigen : string = <string>$("#paisOrigen").val();
            let foto : FileList = <FileList>$("#pathFoto").prop("files");
            let tele : Entidades.Televisor = new Entidades.Televisor(codigo,marca,precio,tipo,paisOrigen,"");
            $("#codigo").prop("readonly",false);
            $("#btnAgregar").attr("value","Agregar");
            $("#imgFoto").prop("src","");
            (new Ajax(async,onsucess,onfail)).Binary("./BACKEND/administrar.php",`option=${option}&tele=${ JSON.stringify( tele.ToJSON() )}`,["foto"],foto);
        }
        public static MostrarTelevisores() {
            let onsucess : Function = (response) => {
                let jsonArray = JSON.parse(response);
                let tabla = new Table("Codigo","Marca","Precio","Tipo","Pais de origen","Ruta de la foto","Foto","Acciones");
                for (let i = 0; i < jsonArray.length; i++) {
                    tabla.addRow(jsonArray[i].codigo,jsonArray[i].marca,jsonArray[i].precio,jsonArray[i].tipo,jsonArray[i].paisOrigen,jsonArray[i].pathFoto,
                        "<img src='./BACKEND/"+jsonArray[i].pathFoto+"' width='100px' height='100px' />",
                        "<input type='button' value='Modificar' onclick='PrimerParcial.Manejadora.ModificarTelevisor(&#39;"+ JSON.stringify( jsonArray[i])+"&#39;)'/><br/>",
                        "<input type='button' value='Eliminar' onclick='PrimerParcial.Manejadora.EliminarTelevisor(&#39;"+ JSON.stringify( jsonArray[i])+"&#39;)'/>");
                }
                let tablaFinal : HTMLTableElement = document.createElement("table");
                tablaFinal.innerHTML = tabla.getTable();
                tablaFinal.border = "1";
                $("#result").html(tablaFinal.outerHTML);
            }
            (new Ajax(true,onsucess)).POST("./BACKEND/administrar.php",`option=traer`);
        }
        public static GuardarEnLocalStorage() {
            let onsucess : Function = (response) => {
                localStorage.setItem( "televisores_local_storage",response);
            }
            (new Ajax(true,onsucess)).POST("./BACKEND/administrar.php",`option=traer`);
        }
        public static VerificarExistencia() {
            let jsonArray = JSON.parse( localStorage.getItem("televisores_local_storage"));
            let codigo : number = <number>$("#codigo").val();
            let existe = false;
            for (let i = 0; i < jsonArray.length; i++) {
                if( jsonArray[i].codigo == codigo) {
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
        }
        public static EliminarTelevisor() {

        }
        public static ModificarTelevisor(jsonStr : string) {
            if(jsonStr != null) {
                let jsonObj = JSON.parse(jsonStr);
                $("#codigo").val(jsonObj.codigo);       
                $("#codigo").prop("readonly",true);
                $("#marca").val(jsonObj.marca);            
                $("#precio").val(jsonObj.precio);            
                $("#tipo").val(jsonObj.tipo);            
                $("#paisOrigen").val(jsonObj.paisOrigen);    
                $("#imgFoto").prop("src","./BACKEND/"+jsonObj.pathFoto);
                $("#btnAgregar").attr("value","Modificar");

            }
            else {
                Manejadora.AgregarTelevisor(true,"modificar");
            }
        }
    }
}
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