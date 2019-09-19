function enviar() {
    var xhttp = new XMLHttpRequest();
    var num = document.getElementById("number").value;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            if (xhttp.response == "error") {
                document.getElementById("err").hidden = false;
            }
            else {
                document.getElementById("err").hidden = true;
                document.getElementById("result").value = xhttp.responseText;
            }
        }
    };
    xhttp.open("GET", "./php/numeros.php?num=" + num);
    document.getElementById("result").value = "";
    xhttp.send();
}
