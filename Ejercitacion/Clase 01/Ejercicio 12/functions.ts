/*12. Crear una función que reciba como único parámetro una cadena que contenga el día, mes y año 
de nacimiento de una persona (con formato dd-mm-yyyy). La función mostrará por consola a que signo corresponde
 dicha fecha de nacimiento. Nota: Para descomponer la fecha recibida como parámetro utilice la función split.*/
function determinarSignoZodiaco(fecha: string): boolean {
    let ret: boolean = isValidDate(fecha);
    let fechas : string[] = fecha.split("-");
    let fecha2: Date = new Date(`${fechas[2]}-${fechas[1]}-${fechas[0]}`);
    let aries: Date = new Date(`${fecha2.getFullYear().toString()}-3-21`);
    let tauro: Date = new Date(`${fecha2.getFullYear().toString()}-4-20`);
    let geminis: Date = new Date(`${fecha2.getFullYear().toString()}-5-21`);
    let cancer: Date = new Date(`${fecha2.getFullYear().toString()}-6-21`);
    let leo: Date = new Date(`${fecha2.getFullYear().toString()}-7-23`);
    let virgo: Date = new Date(`${fecha2.getFullYear().toString()}-8-23`);
    let libra: Date = new Date(`${fecha2.getFullYear().toString()}-9-23`);
    let escorpio: Date = new Date(`${fecha2.getFullYear().toString()}-10-23`);
    let sagitario: Date = new Date(`${fecha2.getFullYear().toString()}-11-22`);
    let capricornio: Date = new Date(`${fecha2.getFullYear().toString()}-12-22`);
    let acuario: Date = new Date(`${fecha2.getFullYear().toString()}-1-20`);
    let piscis: Date = new Date(`${fecha2.getFullYear().toString()}-2-19`);
    if (ret) {
        if( fecha2 < acuario ) {
            console.log("Usted es de Capricornio.");
        }
        else if( fecha2 >= acuario && fecha2 < piscis ) {
            console.log("Usted es de Acuario.");
        }
        else if( fecha2 >= piscis && fecha2 < aries ) {
            console.log("Usted es de Piscis.");
        }
        else if (fecha2 >= aries && fecha2 < tauro) {
            console.log("Usted es de Aries.");
        }
        else if (fecha2 >= tauro && fecha2 < geminis) {
            console.log("Usted es de tauro.");
        }
        else if (fecha2 >= geminis && fecha2 < cancer) {
            console.log("Usted es de Geminis.");
        }
        else if (fecha2 >= cancer && fecha2 < leo) {
            console.log("Usted es de Cancer.");
        }
        else if( fecha2 >= leo && fecha2 < virgo ) {
            console.log("Usted es de Leo.");
        }
        else if( fecha2 >= virgo && fecha2 < libra ) {
            console.log("Usted es de Virgo.");
        }
        else if( fecha2 >= libra && fecha2 < escorpio ) {
            console.log("Usted es de Libra.");
        }
        else if( fecha2 >= escorpio && fecha2 < sagitario ) {
            console.log("Usted es de Escorpio.");
        }
        else if( fecha2 >= sagitario && fecha2 < capricornio ) {
            console.log("Usted es de Sagitario.");
        }
        else  {
            console.log("Usted es de Capricornio.");
        }
    }
    return ret;
}
function isValidDate(fecha: string): boolean {
    let ret = false;
    let fechas: string[] = fecha.split("-");
    let validarFecha = new Date(`${fechas[2]}-${fechas[1]}-${fechas[0]}`);
    if (fechas.length == 3 && validarFecha.toString() != "Invalid Date" && validarFecha.getDate() == parseInt(fechas[0])
        && validarFecha.getMonth()+1 == parseInt(fechas[1]) && validarFecha.getFullYear() == parseInt(fechas[2])) {
        ret = true;
    }
    return ret;
}
