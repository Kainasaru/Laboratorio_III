/*5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán
pasadas como parámetro de la función MostrarNombreApellido, que mostrará el apellido en mayúscula y el
 nombre solo con la primera letra en mayúsculas y el resto en minúsculas. El apellido y el nombre se mostrarán
 separados por una coma (,).
Nota: Utilizar console.log()*/
var nombre = "levi";
var apellido = "mariño";
MostrarNombreApellido(nombre, apellido);
/*5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán
pasadas como parámetro de la función MostrarNombreApellido, que mostrará el apellido en mayúscula y el
 nombre solo con la primera letra en mayúsculas y el resto en minúsculas. El apellido y el nombre se mostrarán
 separados por una coma (,).
Nota: Utilizar console.log()*/
function MostrarNombreApellido(nombre, apellido) {
    apellido = apellido.toUpperCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1);
    console.log(apellido + ", " + nombre);
}
