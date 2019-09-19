function enviar() {
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let num : string = (<HTMLInputElement>document.getElementById("number")).value;
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            if(xhttp.response == "error") {
                document.getElementById("err").hidden = false;
            }
            else {
                document.getElementById("err").hidden = true;
                (<HTMLInputElement>document.getElementById("result")).value = xhttp.responseText;
            }
        }
    }
    xhttp.open("GET",`./php/numeros.php?num=${num}`);
    (<HTMLInputElement>document.getElementById("result")).value = "";
    xhttp.send();
}