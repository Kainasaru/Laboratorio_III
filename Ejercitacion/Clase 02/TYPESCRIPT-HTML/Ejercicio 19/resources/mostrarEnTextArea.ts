function mostrarEnTextArea() {
    let select: HTMLCollectionOf<HTMLOptionElement> = (<HTMLSelectElement>document.getElementById("cboMail")).selectedOptions;
    (<HTMLTextAreaElement>document.getElementById("txtArea")).value = "";
    for (let i = 0; i < select.length; i++) {
        (<HTMLTextAreaElement>document.getElementById("txtArea")).value += select[i].value + "\n";
    }

}