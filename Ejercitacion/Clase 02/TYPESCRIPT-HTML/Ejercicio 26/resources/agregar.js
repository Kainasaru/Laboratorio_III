function agregarEnLista(listname, item) {
    var lista = document.getElementById(listname);
    lista.appendChild(document.createElement("li")).textContent = item;
}
