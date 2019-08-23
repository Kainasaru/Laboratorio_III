var miFuncion = function (param1, param2) {
    if (param2 !== undefined) {
        for (var i = 0; i < param1; i++) {
            console.log(param2 + " (" + (i + 1) + ")");
        }
    }
    else {
        console.log("1 / " + param1 + " = " + 1 / param1);
    }
};
/* 3. Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro. */
miFuncion(4);
