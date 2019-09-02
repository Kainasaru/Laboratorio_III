function mostrar() : void {
    let nombre : string = (<HTMLInputElement>document.getElementById("name")).value;
    let email : string = (<HTMLInputElement>document.getElementById("email")).value;
    let dni : number = parseInt((<HTMLInputElement>document.getElementById("dni")).value);
    let cv : string = (<HTMLTextAreaElement>document.getElementById("cv")).value;
    console.log(`Nombre ${nombre}\nEmail: ${email}\nDNI: ${dni}\nCurriculum Vitae: ${cv}`);
}