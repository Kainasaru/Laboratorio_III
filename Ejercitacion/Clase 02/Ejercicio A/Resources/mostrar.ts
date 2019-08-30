function mostrar() {
  let nombre : string =(<HTMLInputElement>document.getElementById("1")).value;
  let edad : string = (<HTMLInputElement>document.getElementById("2")).value;
  let edad2 : number = parseInt(edad);
  console.log(edad2);


  edad = ( isNaN(parseInt(edad)) )? "ERROR" : edad;

  console.log(`Su nombre es ${nombre} y su edad ${edad}.`);
  alert(`Su nombre es ${nombre} y su edad ${edad}.`);
  (<HTMLDivElement>document.getElementById("3")).innerHTML = `Nombre: ${nombre} - Edad: ${edad}`;
}
