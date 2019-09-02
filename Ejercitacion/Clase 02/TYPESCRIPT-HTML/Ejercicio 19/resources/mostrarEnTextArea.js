function mostrarEnTextArea() {
    var select = document.getElementById("cboMail").selectedOptions;
    document.getElementById("txtArea").value = "";
    for (var i = 0; i < select.length; i++) {
        document.getElementById("txtArea").value += select[i].value + "\n";
    }
}
//# sourceMappingURL=mostrarEnTextArea.js.map