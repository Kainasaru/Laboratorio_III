function enviar() {
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let file : string = (<HTMLInputElement>document.getElementById("file")).value;
    let word : string = (<HTMLInputElement>document.getElementById("word")).value;
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            switch(xhttp.response) {
                case "-1":
                    alert("No se pudo abrir el archivo.");
                    break;
                case "0":
                    alert("No se encontró la palabra.");
                    break;
                case "1":
                    alert("Se encontró la palabra en el archivo.");
                    break;
            }
        }  
    }
    xhttp.open("GET",`./php/procesar.php?file=${file}&word=${word}`);
    xhttp.send();
}