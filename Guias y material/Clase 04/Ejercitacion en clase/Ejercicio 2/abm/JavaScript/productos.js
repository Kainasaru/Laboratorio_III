var Main = /** @class */ (function () {
    function Main() {
    }
    Main.BorrarProducto = function (id) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                window.location.reload();
            }
        };
        xhttp.open("POST", "./administracion.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("queHago=eliminar&codBarra=" + id);
    };
    Main.ModificarProducto = function (codBarra, nombre) {
        document.getElementById("codBarra").value = codBarra;
        document.getElementById("nombre").value = nombre;
        document.getElementById("hdnQueHago").value = "modificar";
    };
    Main.AgregarProducto = function () {
        var xhttp = new XMLHttpRequest();
        document.getElementById("frm").submit();
        document.getElementById("hdnQueHago").value = "agregar";
    };
    return Main;
}());
