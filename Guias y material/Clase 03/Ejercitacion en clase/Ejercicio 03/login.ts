function loguear() {
  /*if( localStorage.getItem("Empleados") === null ) {
    localStorage.setItem("Empleados","Juan-123,Rosa-456,Carlos-666");
  }*/
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
 if( enLista(empName,empFile)) {
   window.location.href = "./principal.html";
 }
 (<HTMLDivElement>document.getElementById("div1")).appendChild(msgElement);
}

function registrar() {
  let emps : string = (localStorage.getItem("Empleados") === null)? "" : localStorage.getItem("Empleados");
  emps += "," + (<HTMLInputElement>document.getElementById("name")).value + "-" +
  (<HTMLInputElement>document.getElementById("file")).value;
  localStorage.setItem("Empleados",emps);
  window.location.href = "./registro.html";
}

function enLista(empName : string, empFile : string ) : boolean {
  let ret : boolean = localStorage.getItem("Empleados") !== null;
  let emps : string[] = String(localStorage.getItem("Empleados")).split(",");
  if( ret) {
    for(let i = 0 ; i < emps.length ; i++) {
      let emp : string[] = emps[i].split("-");
      if(emp[0].toLowerCase() == empName.toLowerCase() && emp[1].toLowerCase() == empFile.toLowerCase()) {
        break;
      }
      ret = (i == emps.length - 1)? false : ret;
    }
  }
  return ret;
}

