var GenderInfo;
(function (GenderInfo) {
    GenderInfo[GenderInfo["upperCase"] = 0] = "upperCase";
    GenderInfo[GenderInfo["mixed"] = 1] = "mixed";
    GenderInfo[GenderInfo["lowercase"] = 2] = "lowercase";
})(GenderInfo || (GenderInfo = {}));
function validarDatos() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var dni = document.getElementById("dni").value;
    var gender = document.getElementById("gender").value;
    var nameResult = document.getElementById("nameResult");
    var surnameResult = document.getElementById("surnameResult");
    var dniResult = document.getElementById("dniResult");
    var genderResult = document.getElementById("genderResult");
    if (isEmptyStr(name)) {
        nameResult.style.color = "red";
        nameResult.value = "Error";
    }
    else {
        nameResult.style.color = "black";
        nameResult.value = "Ok";
    }
    if (isEmptyStr(surname)) {
        surnameResult.style.color = "red";
        surnameResult.value = "Error";
    }
    else {
        surnameResult.style.color = "black";
        surnameResult.value = "Ok";
    }
    if (!isNumeric(dni) || Number(dni) <= 0) {
        dniResult.style.color = "red";
        dniResult.value = "Error";
    }
    else {
        dniResult.style.color = "black";
        dniResult.value = "Ok";
    }
    if (!isGender(gender)) {
        genderResult.style.color = "red";
        genderResult.value = "Error";
    }
    else {
        genderResult.style.color = "black";
        genderResult.value = "Ok";
    }
}
function isEmptyStr(str) {
    return str == "";
}
function isNumeric(str) {
    return !isNaN(Number(str));
}
function isGender(gender, caseSelection) {
    if (caseSelection === void 0) { caseSelection = GenderInfo.lowercase; }
    var ret = false;
    switch (caseSelection) {
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
