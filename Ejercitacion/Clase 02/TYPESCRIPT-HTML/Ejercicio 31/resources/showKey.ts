function showKey(e : KeyboardEvent) {
    document.getElementById("div1").innerText = `Tecla presionada: ${e.key}.\nCódigo de la tecla: ${e.keyCode}.\n`;
}