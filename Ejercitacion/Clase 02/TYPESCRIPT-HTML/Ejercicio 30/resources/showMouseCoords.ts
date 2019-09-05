function showMouseCoords(e : MouseEvent) {
    console.log("Hecho en Firefox.\n");
    console.log( `Posición del mouse (Respecto a la pantalla): X=${e.screenX} Y=${e.screenY}\n`);
    console.log( `Posición del mouse (Respecto a la página): X=${e.pageX} Y=${e.pageY}\n`);
}