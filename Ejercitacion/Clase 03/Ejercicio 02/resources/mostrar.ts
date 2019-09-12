///<reference path="./Rectangulo.ts"/>
///<reference path="./Triangulo.ts"/>
function mostrarForm() {
    let radios: NodeListOf<HTMLElement> = document.getElementsByName("rdo");
    for (let i = 0; i < radios.length; i++) {
        let radio: HTMLInputElement = <HTMLInputElement>radios[i];
        if (radio.checked) {
            if (radio.value == "1") {
                document.getElementById("rec").hidden = true;
                document.getElementById("tri").hidden = false;
                break;
            }
            else {
                document.getElementById("rec").hidden = false;
                document.getElementById("tri").hidden = true;
                break;
            }
        }
    }
}

function mostrarRectangulo() {
    let rectangulo : Entidades.Rectangulo = new Entidades.Rectangulo( (<HTMLInputElement>document.getElementById("recColor")).value ,
    Number((<HTMLInputElement>document.getElementById("recL1")).value),
    Number((<HTMLInputElement>document.getElementById("recL2")).value));
    if( document.getElementById("div") !== null) {
        document.getElementById("div").remove();
    }
    let div = document.body.appendChild(document.createElement("div"));
    div.id = "div";
    div.appendChild( document.createElement("h1")).textContent = "Información";
    div.innerHTML += rectangulo.ToString();
    div.appendChild( document.createElement("h1")).textContent = "Dibujo";
    div.innerHTML += rectangulo.Dibujar();
}
function mostrarTriangulo() {
    let triangulo : Entidades.Triangulo = new Entidades.Triangulo( (<HTMLInputElement>document.getElementById("triColor")).value ,
    Number((<HTMLInputElement>document.getElementById("triBase")).value),
    Number((<HTMLInputElement>document.getElementById("triAltura")).value));
    if( document.getElementById("div") !== null) {
        document.getElementById("div").remove();
    }
    let div = document.body.appendChild(document.createElement("div"));
    div.id = "div";
    div.appendChild( document.createElement("h1")).textContent = "Información";
    div.innerHTML += triangulo.ToString();
    div.appendChild( document.createElement("h1")).textContent = "Dibujo";
    div.innerHTML += triangulo.Dibujar();
}