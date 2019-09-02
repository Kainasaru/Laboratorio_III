function mostrar() {
    var radio = document.getElementsByName("rateRadio");
    var userName = document.getElementById("name").value;
    console.log("Usuario: " + userName + "\nCalificaci\u00F3n al sitio: ");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(radio[i].value + "\n");
            break;
        }
    }
}
