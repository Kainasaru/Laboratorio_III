"use strict";
/// <reference path="node_modules\@types\jquery\index.d.ts" />
function MostrarMensaje() {
    var mensaje = $("#mensaje").val();
    if ($("#archivo").val() === "") {
        return;
    }
    //$("#foto1").attr("src", "");
    //$("#lblFoto").html("");
    var mi_archivo = $("#archivo");
    //mi_archivo.prop("files")[0];
    //let archivo : any = (<HTMLInputElement>document.getElementById("archivo"));
    var formData = new FormData();
    //formData.append("archivo",archivo.files[0]);
    formData.append("archivo", mi_archivo.prop("files")[0]);
    formData.append("caso", "1");
    formData.append("mensaje", mensaje);
    var jqxhr = $.ajax({
        type: 'POST',
        url: 'BACKEND/test.php',
        data: formData,
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
    }).done(function (jsonObj) {
        console.log(jsonObj);
        $("#div_mensaje").html("Fecha:" + jsonObj.fecha + " - Mensaje: " + jsonObj.mensaje + " - Path: " + jsonObj.foto);
        $("#img1").attr("src", jsonObj.foto);
    })
        .fail(function (err) {
    });
}
//# sourceMappingURL=test.js.map