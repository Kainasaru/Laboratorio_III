function loguear() {
  if( localStorage.getItem("Empleados") === null ) {
    localStorage.setItem("Empleados","Juan-123,Rosa-456,Carlos-666");
  }
  let emps : string[] = String(localStorage.getItem("Empleados")).split(",");
  let empName : string = (<HTMLInputElement>document.getElementById("name")).value;
  let empFile : string = (<HTMLInputElement>document.getElementById("file")).value;
  /* Creo el elemento font con el mensaje en caso de error */
  let msgElement : HTMLFontElement = document.createElement("font");
  msgElement.id = "msg1";
  msgElement.color = "red";
  msgElement.textContent = "ERROR durante login.";
  if( document.getElementById("msg1") !== null) {
    (<HTMLFontElement>document.getElementById("msg1")).remove();
  }
  /**/
  for(let i = 0 ; i < emps.length ; i++) {
    let emp : string[] = emps[i].split("-");
    if(emp[0] == empName && emp[1] == empFile) {
      window.location.href = "./principal.html";
      break;
    }
  }
  (<HTMLDivElement>document.getElementById("div1")).appendChild(msgElement);
}

