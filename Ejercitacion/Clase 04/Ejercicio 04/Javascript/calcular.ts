function calcular() {
    let operator: string = (<HTMLSelectElement>document.getElementById("selOp")).selectedOptions[0].value;
    let op1: string = (<HTMLInputElement>document.getElementById("op1")).value;
    let op2: string = (<HTMLInputElement>document.getElementById("op2")).value;
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let span: HTMLSpanElement = (document.getElementById("result") === null )? 
            document.body.appendChild(document.createElement("span")) : document.getElementById("result");
            span.style.border = "solid";
            span.style.borderColor = "blue";
            span.id = "result";
            span.innerHTML = `${op1} ${operator} ${op2} = ${xhttp.response}`;
        }
    }
    xhttp.open("GET", `./PHP/calcular.php?op1=${op1}&op2=${op2}&operator=${operator}`);
    xhttp.send();
}