function calcular() {
    var operator = document.getElementById("selOp").selectedOptions[0].value;
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var span = (document.getElementById("result") === null) ?
                document.body.appendChild(document.createElement("span")) : document.getElementById("result");
            span.style.border = "solid";
            span.style.borderColor = "blue";
            span.id = "result";
            span.innerHTML = op1 + " " + operator + " " + op2 + " = " + xhttp.response;
        }
    };
    xhttp.open("GET", "./PHP/calcular.php?op1=" + op1 + "&op2=" + op2 + "&operator=" + operator);
    xhttp.send();
}
//# sourceMappingURL=calcular.js.map