function test() {
  let xhttp: XMLHttpRequest = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  }
  xhttp.open("GET", "./Backend/test.php", true);
  xhttp.send();
}

function enviar() {
  let name : string = (<HTMLInputElement>document.getElementById("1")).value;
  let inputName : string = (<HTMLInputElement>document.getElementById("1")). name;
  let xhttp: XMLHttpRequest = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  }
  xhttp.open("GET", `./Backend/test_params.php?${inputName}=${name}`, true);
  xhttp.send();
}
window.onload = () => {
  test();
}