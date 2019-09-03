var GenderInfo;
(function (GenderInfo) {
    GenderInfo[GenderInfo["upperCase"] = 0] = "upperCase";
    GenderInfo[GenderInfo["mixed"] = 1] = "mixed";
    GenderInfo[GenderInfo["lowercase"] = 2] = "lowercase";
})(GenderInfo || (GenderInfo = {}));
function validarDatos() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var dni = Number(document.getElementById("dni").value);
    var gender = document.getElementById("gender").value;
    document.getElementById("nameResult").value = (isEmptyStr(name)) ? "Error" : "Ok";
    document.getElementById("surnameResult").value = (isEmptyStr(surname)) ? "Error" : "Ok";
    document.getElementById("dniResult").value = (isNaN(Number(dni)) || Number(dni) <= 0) ? "Error" : "Ok";
    document.getElementById("genderResult").value = (!isGender(gender, GenderInfo.lowercase)) ? "Error" : "Ok";
}
function isEmptyStr(str) {
    return str === "";
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
