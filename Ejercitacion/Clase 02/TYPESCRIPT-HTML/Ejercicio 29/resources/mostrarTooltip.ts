function mostrarTooltip(inputId : string , message : string) : void {
    (<HTMLInputElement>document.getElementById(inputId)).title = message;
}