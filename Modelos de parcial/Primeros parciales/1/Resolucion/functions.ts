/// <reference path="./manejadora.ts" />
function procesar(option : string,json? : string) {
    switch(option) {
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