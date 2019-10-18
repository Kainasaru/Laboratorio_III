/*La función se llamará AdministrarValidaciones y será la encargada de invocar a otras funciones que verifiquen:
 Campos no vacíos (todos).
o ValidarCamposVacios(string): boolean. Recibe como parámetro el valor del atributo id del campo a ser validado. Retorna true si 
no está vacío o false caso contrario.
 Talles correctos (talle).
o ValidarTalles(string, string[]): boolean. Recibe como parámetro el valor a ser validado y los valores permitidos para los talles 
(S, M, L, X, XL, XXL). Retorna true si el valor pertenece a los talles o false caso contrario.
 Selección del código (código).
o ValidarCodigo(number): boolean. Recibe como parámetro el valor del código a ser validado y retorna true si el mismo es mayor o
 igual a 523 y menor a 1000. False caso contrario.
Si algún campo no pasa la validación, se mostrará un * al lado de dicho campo y no se permitirá el envío de la información. Si
 todos los campos pasan todas las validaciones, se enviará la información correspondiente.
Aplicarlo tanto para el alta como para la modificación de las camperas.*/

/// <reference path="./manejadora.ts" />

function AdministrarValidaciones(mode: string) {
    let ids: string[] = ["codigo", "nombre", "precio", "talle", "color", "pathFoto"];
    let valido = true;
    for (let i = 0; i < ids.length; i++) {
        $(`#${ids[i]}Ast`).prop("hidden", true); //Borro los asteriscos en caso de que este mal se vuelven a colocar correctamente
        if (ids[i] == "codigo") {
            if (!ValidarCodigo(<number>$("#codigo").val())) {
                $("#codigoAst").prop("hidden", false);
                valido = false;
            }
        }
        else if (ids[i] == "talle") {
            if (!ValidarTalles(<string>$("#talle").val(), ["S", "M", "L", "X", "XL", "XXL"])) {
                $("#talleAst").prop("hidden", false);
                valido = false;
            }
        }
        else if (!ValidarCamposVacios(ids[i])) {
            $(`#${ids[i]}Ast`).prop("hidden", false);
            valido = false;
        }
    }
    if (valido) {
        if (mode == "agregar") {
            Test.Manejadora.AgregarCampera();
        }
        else if (mode == "modificar") {
            Test.Manejadora.ModificarCampera(null);
        }
        Test.Manejadora.LimpiarForm();
    }
}
function ValidarCamposVacios(id: string): boolean {
    return $(`#${id}`).val() != "";
}
function ValidarTalles(talle: string, tallesPermitidos: string[]) {
    return tallesPermitidos.some((value: string) => { return value == talle })
}
function ValidarCodigo(codigo: number) {
    return codigo >= 523 && codigo < 1000;
}