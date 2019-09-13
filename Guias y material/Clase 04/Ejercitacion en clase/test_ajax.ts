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

window.onload = () => {
  test();
}

