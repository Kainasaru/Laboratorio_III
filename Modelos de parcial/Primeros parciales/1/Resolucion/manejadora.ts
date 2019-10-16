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

namespace RecuperatorioPrimerParcial {
       export class Manejadora implements IParte2 {
        /*EliminarAlien. Eliminará al alien del archivo (por AJAX) y del LocalStorage. Recibe como parámetro
         al objeto JSON que se ha de eliminar. Pedir confirmación, mostrando cuadrante y raza, antes de eliminar. 
         Refrescar el listado para visualizar los cambios.*/
        public EliminarAlien(alien: string) {
            var alienJson = JSON.parse(alien);
            if (confirm(`¿Desea eliminar el alien de cuadrante ${alienJson.cuadrante} y raza ${alienJson.raza}?`)) {
                let onSucess = (response) => {
                    let aliens = JSON.parse(localStorage.getItem("aliens_local_storage"));
                    for (let i = 0; i < aliens.length; i++) {
                        if (aliens[i].cuadrante == alienJson.cuadrante &&
                            aliens[i].raza == alienJson.raza) {
                            aliens.splice(i, 1);
                            break;
                        }
                    }
                    localStorage.setItem("aliens_local_storage", JSON.stringify(aliens));
                    this.MostrarAliens();
                }
                let ajax: Ajax = new Ajax(true, onSucess);
                ajax.POST("./BACKEND/administrar.php", `option=eliminar&raza=${alienJson.raza}&cuadrante=${alienJson.cuadrante}`);
            }

        }
        public ModificarAlien(json: string) {
            if (json == undefined) {
                let cuadrante: string = <string>$("#cuadrante").val();
                let edad: number = <number>$("#edad").val();
                let altura: number = <number>$("#altura").val();
                let raza: string = <string>$("#raza").val();
                let planetaOrigen: string = <string>$("#planetaOrigen").val();
                let pathFoto : string = <string>$("#imgFoto").prop("src");
                let file: FileList = <FileList>$("#pathFoto").prop("files");
                let alien: Entidades.Alien = new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto);
                let onsucess = (response) => {
                    if (response == 1) {
                        this.MostrarAliens();
                    }
                    else {
                        console.log("No se pudo modificar el alien.");
                        alert("No se pudo modificar el alien.");
                    }
                }
                $("#cuadrante").prop("readonly", false);
                $("#fotoTitulo").prop("hidden", true);
                $("#imgFoto").prop("hidden", true);
                $("#btnAgregar").attr("value", "Agregar");
                $("#btnAgregar").attr("onclick", "procesar('agregar')");
                let ajax: Ajax = new Ajax(true, onsucess);
                ajax.Binary("./BACKEND/administrar.php", "option=modificar&alien=" + JSON.stringify(alien.ToJSON()), ["foto"], file);
            }
            else {
                let jsonObj = JSON.parse(json);
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
        }
        public AgregarAlien() {
            let cuadrante: string = <string>$("#cuadrante").val();
            let edad: number = <number>$("#edad").val();
            let altura: number = <number>$("#altura").val();
            let raza: string = <string>$("#raza").val();
            let planetaOrigen: string = <string>$("#planetaOrigen").val();
            let file: FileList = <FileList>$("#pathFoto").prop("files");
            let alien: Entidades.Alien = new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, "");
            let onsucess = (response) => {
                this.MostrarAliens();
            }
            let ajax: Ajax = new Ajax(true,onsucess);
            ajax.Binary("./BACKEND/administrar.php", "option=agregar&alien=" + JSON.stringify(alien.ToJSON()), ["foto"], file);
        }
        public MostrarAliens() {
            let onSucess: Function = (response) => {
                let json = JSON.parse(response);
                let tabla: Table = new Table("Cuadrante", "Edad", "Altura", "Raza", "Planeta de origen", "Foto", "Acciones");
                for (let i = 0; i < json.length; i++) {
                    tabla.addRow(json[i].cuadrante, json[i].edad, json[i].altura, json[i].raza, json[i].planetaOrigen,
                        "<img src='" + json[i].pathFoto + "' width='100px' height='100px'>",
                        "<input type='button' value='modificar' onclick='procesar(&#39modificar&#39,&#39" +
                        JSON.stringify(json[i]) + "&#39)' style='width:7em;'><br/>\
                         <input type='button' value='Eliminar' onclick='procesar(&#39eliminar&#39,&#39"+
                        JSON.stringify(json[i]) + "&#39)' style='width:7em;'>");
                }
                let table: HTMLTableElement = document.createElement("table");
                table.innerHTML = tabla.getTable();
                table.border = "1";
                (<HTMLDivElement>document.getElementById("result")).innerHTML = table.outerHTML;
            }
            let ajax: Ajax = new Ajax(true, onSucess);
            ajax.POST("./BACKEND/administrar.php", "option=mostrar");
        }
        public GuardarEnLocalStorage() {
            let onSucess: Function = (response) => {
                localStorage.setItem("aliens_local_storage", response);
            }
            let ajax: Ajax = new Ajax(true, onSucess);
            ajax.POST("./BACKEND/administrar.php", "option=mostrar");
        }
        public VerificarExistencia() {
            let cuadrante: string = <string>$("#cuadrante").val();
            let edad: number = <number>$("#edad").val();
            let altura: number = <number>$("#altura").val();
            let raza: string = <string>$("#raza").val();
            let planetaOrigen: string = <string>$("#planetaOrigen").val();
            let pathFoto: string = <string>$("#pathFoto").val();
            pathFoto = pathFoto.replace(/\\/g, "/");
            let alien: any = (new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto)).ToJSON();
            let listaAliens: any = [];
            let existe = false;
            if ((listaAliens = localStorage.getItem("aliens_local_storage")) != null) {
                listaAliens = JSON.parse(listaAliens);
                for (let i = 0; i < listaAliens.length; i++) {
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
        }
        public ObtenerAliensPorCuadrante() {
            let listaAliens;
            let cuadrantes = new Array();
            let cantidades = new Array();

            if ((listaAliens = localStorage.getItem("aliens_local_storage")) != null) {
                listaAliens = JSON.parse(listaAliens);
                for (let i = 0; i < listaAliens.length; i++) {
                    if (cuadrantes.indexOf(listaAliens[i].cuadrante) == -1) {
                        cuadrantes.push(listaAliens[i].cuadrante);
                        cantidades.push(1);
                    }
                    else {
                        cantidades[cuadrantes.indexOf(listaAliens[i].cuadrante)]++;
                    }
                }
                //Ordeno los arrays de mayor a menor
                for (let i = 0; i < cantidades.length - 1; i++) {
                    for (let j = i + 1; j < cantidades.length; j++) {
                        if (cantidades[j] > cantidades[i]) {
                            let aux = cantidades[i];
                            cantidades[i] = cantidades[j];
                            cantidades[j] = aux;

                            aux = cuadrantes[i];
                            cuadrantes[i] = cuadrantes[j];
                            cuadrantes[j] = aux;
                        }
                    }
                }

                if (cantidades.every((value, index, array) => { return value == array[0] })) {
                    console.log("Todos los cuadrantes tiene la misma cantidad de aliens.");
                }
                else {
                    let last;
                    let i = 0;
                    do {
                        console.log("El cuadrante " + cuadrantes[i] + " es el que más aliens tiene con " + cantidades[i] + " aliens.");
                        last = cantidades[i];
                        i++;
                    }
                    while (cantidades[i] == last);

                    i = cantidades.length - 1;
                    do {
                        console.log("El cuadrante " + cuadrantes[i] + " es el que menos aliens tiene con " + cantidades[i] + " aliens.");
                        last = cantidades[i];
                        i--;
                    }
                    while (cantidades[i] == last);
                }

                //Busco los que tienen mas aliens.
            }

        }
    }
}
