class Main {
    public static BorrarProducto(id : string) {
        let xhttp : XMLHttpRequest = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                window.location.reload();
            }
        }
        xhttp.open("POST","./administracion.php",true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send(`queHago=eliminar&codBarra=${id}`);
    }
    public static ModificarProducto(codBarra : string , nombre : string) {
        (<HTMLInputElement>document.getElementById("codBarra")).value = codBarra;
        (<HTMLInputElement>document.getElementById("nombre")).value = nombre;
        (<HTMLInputElement>document.getElementById("hdnQueHago")).value = "modificar";
    }
    public static AgregarProducto() {
        let xhttp : XMLHttpRequest = new XMLHttpRequest();
        (<HTMLFormElement>document.getElementById("frm")).submit();
        (<HTMLInputElement>document.getElementById("hdnQueHago")).value = "agregar";
    }
}