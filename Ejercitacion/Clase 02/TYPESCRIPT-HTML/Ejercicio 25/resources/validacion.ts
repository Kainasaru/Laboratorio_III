enum GenderInfo {
    upperCase,
    mixed,
    lowercase
}
function validarDatos() : void {
    let name : string = (<HTMLInputElement>document.getElementById("name")).value;
    let surname : string = (<HTMLInputElement>document.getElementById("surname")).value;
    let dni : string = (<HTMLInputElement>document.getElementById("dni")).value;
    let gender : string = (<HTMLInputElement>document.getElementById("gender")).value;

    let nameResult : HTMLInputElement = (<HTMLInputElement>document.getElementById("nameResult"));
    let surnameResult : HTMLInputElement = (<HTMLInputElement>document.getElementById("surnameResult"));
    let dniResult : HTMLInputElement = (<HTMLInputElement>document.getElementById("dniResult"));
    let genderResult : HTMLInputElement =  (<HTMLInputElement>document.getElementById("genderResult"));

    if(isEmptyStr(name)) {
        nameResult.style.color = "red";
        nameResult.value = "Error";
    }
    else {
        nameResult.style.color = "black";
        nameResult.value = "Ok";
    }

    if(isEmptyStr(surname)) {
        surnameResult.style.color = "red";
        surnameResult.value = "Error";
    }
    else {
        surnameResult.style.color = "black";
        surnameResult.value = "Ok";
    }
    if( !isNumeric(dni) || Number(dni) <= 0 ) {
        dniResult.style.color = "red";
        dniResult.value = "Error";
    }
    else {
        dniResult.style.color = "black";
        dniResult.value = "Ok";
    }
    if(!isGender(gender)) {
        genderResult.style.color = "red";
        genderResult.value = "Error";
    }
    else {
        genderResult.style.color = "black";
        genderResult.value = "Ok";
    }
}
function isEmptyStr(str : string) : boolean{
    return str == "";
}
function isNumeric(str : string) {
    return !isNaN(Number(str));
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