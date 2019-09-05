function mostrar(): void {
    let checkbox: NodeListOf<HTMLElement> = document.getElementsByName("mChbox");
    let meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"];
    let oldTabla: HTMLTableElement = <HTMLTableElement>document.getElementById("tab1"); 
    let tabla: HTMLTableElement = document.createElement("table");
    let tableHead: HTMLTableSectionElement = tabla.createTHead();
    let tableBody: HTMLTableSectionElement = tabla.createTBody();
    let isName = false;
    let isNum = false;
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tab1");

    for (let i = 0; i < checkbox.length; i++) {
        if ((<HTMLInputElement>checkbox[i]).checked == true && (<HTMLInputElement>checkbox[i]).value == "name") {
            isName = true;
        }
        else if ((<HTMLInputElement>checkbox[i]).checked == true && (<HTMLInputElement>checkbox[i]).value == "num") {
            isNum = true;
        }
    }
    if (oldTabla != null) {
        oldTabla.remove(); //Elimino la tabla anterior para insertar la nueva
    }
    for (let i = 0; i < 12 && (isNum || isName); i++) {
        tableBody.insertRow();
        if (isNum) {
            if (i == 0) {
                tableHead.appendChild(document.createElement("th")).textContent = "Número:";
            }
            tableBody.rows.item(i).insertCell().textContent = (i + 1).toString();
        }
        if (isName) {
            if (i == 0) {
                tableHead.appendChild(document.createElement("th")).textContent = "Mes:";
            }
            tableBody.rows.item(i).insertCell().textContent = meses[i];
        }
    }
    if (isNum || isName) {
        tabla.appendChild(tableHead);
        tabla.appendChild(tableBody);
        document.body.appendChild(tabla);
    }
}


