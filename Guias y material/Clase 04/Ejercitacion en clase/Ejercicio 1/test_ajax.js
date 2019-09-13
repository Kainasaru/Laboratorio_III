function test() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", "./Backend/test.php", true);
    xhttp.send();
}
function enviar() {
    var name = document.getElementById("1").value;
    var inputName = document.getElementById("1").name;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", "./Backend/test_params.php?" + inputName + "=" + name, true);
    xhttp.send();
}
window.onload = function () {
    test();
};
