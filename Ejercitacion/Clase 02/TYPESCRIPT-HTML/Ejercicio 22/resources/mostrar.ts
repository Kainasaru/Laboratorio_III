function mostrar() : void {
    let checkbox: NodeListOf<HTMLElement> = document.getElementsByName("mChbox");
    let meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"];
    let tabla : HTMLTableElement = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tab1");
    tabla.createTHead();
    tabla.createTBody();
    for (let i = 0; i < 12; i++) {
        tabla.tBodies.item(0).insertRow();
    }
    for (let i = 0; i < checkbox.length; i++) {
        if ((<HTMLInputElement>checkbox[i]).checked == true && (<HTMLInputElement>checkbox[i]).value == "name") {
            tabla.tHead.insertBefore(document.createElement("th"), tabla.tHead[1]).textContent = "Mes: ";
            for (let i = 0; i < 12; i++) {
                tabla.tBodies.item(0).rows.item(i).insertCell().textContent = meses[i];
            }
        }
        else if ((<HTMLInputElement>checkbox[i]).checked == true && (<HTMLInputElement>checkbox[i]).value == "num") {
            tabla.tHead.appendChild(document.createElement("th")).textContent = "Número: ";
            for (let i = 0; i < 12; i++) {
                tabla.tBodies.item(0).rows.item(i).insertCell().textContent = (i + 1).toString();
            }
        }
    }
    if (tabla.tHead.children.length == 0) {
        if (document.getElementById("tab1")) {
            document.body.removeChild(document.getElementById("tab1"));
        }
    }
    else if (document.getElementById("tab1")) {
        document.body.replaceChild(tabla, document.getElementById("tab1"));
    }
    else {
        document.body.appendChild(tabla);
    }
}

