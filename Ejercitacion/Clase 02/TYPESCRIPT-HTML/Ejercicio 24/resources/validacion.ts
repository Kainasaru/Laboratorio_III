enum GenderInfo {
    upperCase,
    mixed,
    lowercase
}
function validarDatos() : void {
    let name : string = (<HTMLInputElement>document.getElementById("name")).value;
    let surname : string = (<HTMLInputElement>document.getElementById("surname")).value;
    let dni : number = Number((<HTMLInputElement>document.getElementById("dni")).value);
    let gender : string = (<HTMLInputElement>document.getElementById("gender")).value;
    (<HTMLInputElement>document.getElementById("nameResult")).value = (isEmptyStr(name))?"Error" : "Ok";
    (<HTMLInputElement>document.getElementById("surnameResult")).value = (isEmptyStr(surname))?"Error" : "Ok";
    (<HTMLInputElement>document.getElementById("dniResult")).value = ( isNaN(Number(dni)) || Number(dni) <= 0 )?"Error" : "Ok";
    (<HTMLInputElement>document.getElementById("genderResult")).value = ( !isGender(gender,GenderInfo.lowercase ))? "Error" : "Ok";
}
function isEmptyStr(str : string) : boolean{
    return str === "";
}
function isGender(gender : string , caseSelection : GenderInfo = GenderInfo.lowercase ) : boolean{
    let ret : boolean = false;
    switch(caseSelection) {
        case GenderInfo.upperCase:
        ret = gender == "M" || gender == "F";
        break;
        case GenderInfo.mixed:
        ret = gender.toLowerCase() == "m" || gender.toLowerCase() == "f";
        break;
        default:
        ret = gender == "m" || gender == "f";
        break;
    }
    return ret;
}