function mostrar() {
    var chBox = document.getElementsByName("langCbx");
    console.log("Películas seleccionadas:\n");
    for (var i = 0; i < chBox.length; i++) {
        if (chBox[i].checked) {
            console.log(chBox[i].value + "\n");
        }
    }
}
