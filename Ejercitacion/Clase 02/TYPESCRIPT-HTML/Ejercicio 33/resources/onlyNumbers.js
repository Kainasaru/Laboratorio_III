function onlyNumbers(input) {
    var value = input.value;
    for (var i = 0; i < value.length; i++) {
        if (!isdigit(value[i])) {
            value = value.substring(0, i) + value.substring(i + 1);
        }
    }
    input.value = value;
}
function isdigit(chr) {
    return chr.charCodeAt(0) >= 48 && chr.charCodeAt(0) <= 57;
}
