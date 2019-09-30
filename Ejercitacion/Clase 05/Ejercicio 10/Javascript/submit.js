function traerCiudades() {
    var xhttp = new XMLHttpRequest();
    var tabla = document.createElement("table");
    var titulos = ["Id", "Nombre", "País", "Coordenadas"];
    tabla.createTHead();
    tabla.border = "1";
    for (var i = 0; i < 5; i++) {
        tabla.tHead.appendChild(document.createElement("th")).textContent = titulos[i];
    }
    tabla.createTBody();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var i = 0; i < json.length; i++) {
                tabla.tBodies[0].insertRow(i);
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i]._id;
                tabla.tBodies[0].rows[i].insertCell().textContent = json[i].name;
                tabla.tBodies[0].rows[i].insertCell().textContent = convert(json[i].country);
                var coord = "longitud " + parseFloat(json[i].coord.lon).toFixed(2) + " -                 latitud " + parseFloat(json[i].coord.lat).toFixed(2) + " ";
                tabla.tBodies[0].rows[i].insertCell().textContent = coord;
            }
            document.getElementById("result").innerHTML = tabla.outerHTML;
        }
    };
    xhttp.open("POST", "./PHP/administrarCiudades.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("option=traerCiudades");
}
function convert(abrev) {
    var result = "";
    switch (abrev) {
        case "AD":
            result = "Andorra";
            break;
        case "AE":
            result = "United Arab Emirates";
            break;
        case "AF":
            result = "Afghanistan";
            break;
        case "AG":
            result = "Antigua and Barbuda";
            break;
        case "AI":
            result = "Anguilla";
            break;
        case "AL":
            result = "Albania";
            break;
        case "AM":
            result = "Armenia";
            break;
        case "AN":
            result = "Netherlands Antilles";
            break;
        case "AO":
            result = "Angola";
            break;
        case "AQ":
            result = "Antarctica";
            break;
        case "AR":
            result = "Argentina";
            break;
        case "AS":
            result = "American Samoa";
            break;
        case "AT":
            result = "Austria";
            break;
        case "AU":
            result = "Australia";
            break;
        case "AW":
            result = "Aruba";
            break;
        case "AX":
            result = "Åland Islands";
            break;
        case "AZ":
            result = "Azerbaijan";
            break;
        case "BA":
            result = "Bosnia and Herzegovina";
            break;
        case "BB":
            result = "Barbados";
            break;
        case "BD":
            result = "Bangladesh";
            break;
        case "BE":
            result = "Belgium";
            break;
        case "BF":
            result = "Burkina Faso";
            break;
        case "BG":
            result = "Bulgaria";
            break;
        case "BH":
            result = "Bahrain";
            break;
        case "BI":
            result = "Burundi";
            break;
        case "BJ":
            result = "Benin";
            break;
        case "BL":
            result = "Saint Barthélemy";
            break;
        case "BM":
            result = "Bermuda";
            break;
        case "BN":
            result = "Brunei Darussalam";
            break;
        case "BO":
            result = "Bolivia, Plurinational State of";
            break;
        case "BR":
            result = "Brazil";
            break;
        case "BS":
            result = "Bahamas";
            break;
        case "BT":
            result = "Bhutan";
            break;
        case "BV":
            result = "Bouvet Island";
            break;
        case "BW":
            result = "Botswana";
            break;
        case "BY":
            result = "Belarus";
            break;
        case "BZ":
            result = "Belize";
            break;
        case "CA":
            result = "Canada";
            break;
        case "CC":
            result = "Cocos (Keeling) Islands";
            break;
        case "CD":
            result = "Congo, the Democratic Republic of the";
            break;
        case "CF":
            result = "Central African Republic";
            break;
        case "CG":
            result = "Congo";
            break;
        case "CH":
            result = "Switzerland";
            break;
        case "CI":
            result = "Côte d'Ivoire";
            break;
        case "CK":
            result = "Cook Islands";
            break;
        case "CL":
            result = "Chile";
            break;
        case "CM":
            result = "Cameroon";
            break;
        case "CN":
            result = "China";
            break;
        case "CO":
            result = "Colombia";
            break;
        case "CR":
            result = "Costa Rica";
            break;
        case "CU":
            result = "Cuba";
            break;
        case "CV":
            result = "Cape Verde";
            break;
        case "CX":
            result = "Christmas Island";
            break;
        case "CY":
            result = "Cyprus";
            break;
        case "CZ":
            result = "Czech Republic";
            break;
        case "DE":
            result = "Germany";
            break;
        case "DJ":
            result = "Djibouti";
            break;
        case "DK":
            result = "Denmark";
            break;
        case "DM":
            result = "Dominica";
            break;
        case "DO":
            result = "Dominican Republic";
            break;
        case "DZ":
            result = "Algeria";
            break;
        case "EC":
            result = "Ecuador";
            break;
        case "EE":
            result = "Estonia";
            break;
        case "EG":
            result = "Egypt";
            break;
        case "EH":
            result = "Western Sahara";
            break;
        case "ER":
            result = "Eritrea";
            break;
        case "ES":
            result = "Spain";
            break;
        case "ET":
            result = "Ethiopia";
            break;
        case "FI":
            result = "Finland";
            break;
        case "FJ":
            result = "Fiji";
            break;
        case "FK":
            result = "Falkland Islands (Malvinas)";
            break;
        case "FM":
            result = "Micronesia, Federated States of";
            break;
        case "FO":
            result = "Faroe Islands";
            break;
        case "FR":
            result = "France";
            break;
        case "GA":
            result = "Gabon";
            break;
        case "GB":
            result = "United Kingdom";
            break;
        case "GD":
            result = "Grenada";
            break;
        case "GE":
            result = "Georgia";
            break;
        case "GF":
            result = "French Guiana";
            break;
        case "GG":
            result = "Guernsey";
            break;
        case "GH":
            result = "Ghana";
            break;
        case "GI":
            result = "Gibraltar";
            break;
        case "GL":
            result = "Greenland";
            break;
        case "GM":
            result = "Gambia";
            break;
        case "GN":
            result = "Guinea";
            break;
        case "GP":
            result = "Guadeloupe";
            break;
        case "GQ":
            result = "Equatorial Guinea";
            break;
        case "GR":
            result = "Greece";
            break;
        case "GS":
            result = "South Georgia and the South Sandwich Islands";
            break;
        case "GT":
            result = "Guatemala";
            break;
        case "GU":
            result = "Guam";
            break;
        case "GW":
            result = "Guinea-Bissau";
            break;
        case "GY":
            result = "Guyana";
            break;
        case "HK":
            result = "Hong Kong";
            break;
        case "HM":
            result = "Heard Island and McDonald Islands";
            break;
        case "HN":
            result = "Honduras";
            break;
        case "HR":
            result = "Croatia";
            break;
        case "HT":
            result = "Haiti";
            break;
        case "HU":
            result = "Hungary";
            break;
        case "ID":
            result = "Indonesia";
            break;
        case "IE":
            result = "Ireland";
            break;
        case "IL":
            result = "Israel";
            break;
        case "IM":
            result = "Isle of Man";
            break;
        case "IN":
            result = "India";
            break;
        case "IO":
            result = "British Indian Ocean Territory";
            break;
        case "IQ":
            result = "Iraq";
            break;
        case "IR":
            result = "Iran, Islamic Republic of";
            break;
        case "IS":
            result = "Iceland";
            break;
        case "IT":
            result = "Italy";
            break;
        case "JE":
            result = "Jersey";
            break;
        case "JM":
            result = "Jamaica";
            break;
        case "JO":
            result = "Jordan";
            break;
        case "JP":
            result = "Japan";
            break;
        case "KE":
            result = "Kenya";
            break;
        case "KG":
            result = "Kyrgyzstan";
            break;
        case "KH":
            result = "Cambodia";
            break;
        case "KI":
            result = "Kiribati";
            break;
        case "KM":
            result = "Comoros";
            break;
        case "KN":
            result = "Saint Kitts and Nevis";
            break;
        case "KP":
            result = "Korea, Democratic People's Republic of";
            break;
        case "KR":
            result = "Korea, Republic of";
            break;
        case "KW":
            result = "Kuwait";
            break;
        case "KY":
            result = "Cayman Islands";
            break;
        case "KZ":
            result = "Kazakhstan";
            break;
        case "LA":
            result = "Lao People's Democratic Republic";
            break;
        case "LB":
            result = "Lebanon";
            break;
        case "LC":
            result = "Saint Lucia";
            break;
        case "LI":
            result = "Liechtenstein";
            break;
        case "LK":
            result = "Sri Lanka";
            break;
        case "LR":
            result = "Liberia";
            break;
        case "LS":
            result = "Lesotho";
            break;
        case "LT":
            result = "Lithuania";
            break;
        case "LU":
            result = "Luxembourg";
            break;
        case "LV":
            result = "Latvia";
            break;
        case "LY":
            result = "Libyan Arab Jamahiriya";
            break;
        case "MA":
            result = "Morocco";
            break;
        case "MC":
            result = "Monaco";
            break;
        case "MD":
            result = "Moldova, Republic of";
            break;
        case "ME":
            result = "Montenegro";
            break;
        case "MF":
            result = "Saint Martin (French part)";
            break;
        case "MG":
            result = "Madagascar";
            break;
        case "MH":
            result = "Marshall Islands";
            break;
        case "MK":
            result = "Macedonia, the former Yugoslav Republic of";
            break;
        case "ML":
            result = "Mali";
            break;
        case "MM":
            result = "Myanmar";
            break;
        case "MN":
            result = "Mongolia";
            break;
        case "MO":
            result = "Macao";
            break;
        case "MP":
            result = "Northern Mariana Islands";
            break;
        case "MQ":
            result = "Martinique";
            break;
        case "MR":
            result = "Mauritania";
            break;
        case "MS":
            result = "Montserrat";
            break;
        case "MT":
            result = "Malta";
            break;
        case "MU":
            result = "Mauritius";
            break;
        case "MV":
            result = "Maldives";
            break;
        case "MW":
            result = "Malawi";
            break;
        case "MX":
            result = "Mexico";
            break;
        case "MY":
            result = "Malaysia";
            break;
        case "MZ":
            result = "Mozambique";
            break;
        case "NA":
            result = "Namibia";
            break;
        case "NC":
            result = "New Caledonia";
            break;
        case "NE":
            result = "Niger";
            break;
        case "NF":
            result = "Norfolk Island";
            break;
        case "NG":
            result = "Nigeria";
            break;
        case "NI":
            result = "Nicaragua";
            break;
        case "NL":
            result = "Netherlands";
            break;
        case "NO":
            result = "Norway";
            break;
        case "NP":
            result = "Nepal";
            break;
        case "NR":
            result = "Nauru";
            break;
        case "NU":
            result = "Niue";
            break;
        case "NZ":
            result = "New Zealand";
            break;
        case "OM":
            result = "Oman";
            break;
        case "PA":
            result = "Panama";
            break;
        case "PE":
            result = "Peru";
            break;
        case "PF":
            result = "French Polynesia";
            break;
        case "PG":
            result = "Papua New Guinea";
            break;
        case "PH":
            result = "Philippines";
            break;
        case "PK":
            result = "Pakistan";
            break;
        case "PL":
            result = "Poland";
            break;
        case "PM":
            result = "Saint Pierre and Miquelon";
            break;
        case "PN":
            result = "Pitcairn";
            break;
        case "PR":
            result = "Puerto Rico";
            break;
        case "PS":
            result = "Palestinian Territory, Occupied";
            break;
        case "PT":
            result = "Portugal";
            break;
        case "PW":
            result = "Palau";
            break;
        case "PY":
            result = "Paraguay";
            break;
        case "QA":
            result = "Qatar";
            break;
        case "RE":
            result = "Réunion";
            break;
        case "RO":
            result = "Romania";
            break;
        case "RS":
            result = "Serbia";
            break;
        case "RU":
            result = "Russian Federation";
            break;
        case "RW":
            result = "Rwanda";
            break;
        case "SA":
            result = "Saudi Arabia";
            break;
        case "SB":
            result = "Solomon Islands";
            break;
        case "SC":
            result = "Seychelles";
            break;
        case "SD":
            result = "Sudan";
            break;
        case "SE":
            result = "Sweden";
            break;
        case "SG":
            result = "Singapore";
            break;
        case "SH":
            result = "Saint Helena, Ascension and Tristan da Cunha";
            break;
        case "SI":
            result = "Slovenia";
            break;
        case "SJ":
            result = "Svalbard and Jan Mayen";
            break;
        case "SK":
            result = "Slovakia";
            break;
        case "SL":
            result = "Sierra Leone";
            break;
        case "SM":
            result = "San Marino";
            break;
        case "SN":
            result = "Senegal";
            break;
        case "SO":
            result = "Somalia";
            break;
        case "SR":
            result = "Suriname";
            break;
        case "SS":
            result = "South Sudan";
            break;
        case "ST":
            result = "Sao Tome and Principe";
            break;
        case "SV":
            result = "El Salvador";
            break;
        case "SY":
            result = "Syrian Arab Republic";
            break;
        case "SZ":
            result = "Swaziland";
            break;
        case "TC":
            result = "Turks and Caicos Islands";
            break;
        case "TD":
            result = "Chad";
            break;
        case "TF":
            result = "French Southern Territories";
            break;
        case "TG":
            result = "Togo";
            break;
        case "TH":
            result = "Thailand";
            break;
        case "TJ":
            result = "Tajikistan";
            break;
        case "TK":
            result = "Tokelau";
            break;
        case "TL":
            result = "Timor-Leste";
            break;
        case "TM":
            result = "Turkmenistan";
            break;
        case "TN":
            result = "Tunisia";
            break;
        case "TO":
            result = "Tonga";
            break;
        case "TR":
            result = "Turkey";
            break;
        case "TT":
            result = "Trinidad and Tobago";
            break;
        case "TV":
            result = "Tuvalu";
            break;
        case "TW":
            result = "Taiwan, Province of China";
            break;
        case "TZ":
            result = "Tanzania, United Republic of";
            break;
        case "UA":
            result = "Ukraine";
            break;
        case "UG":
            result = "Uganda";
            break;
        case "UM":
            result = "United States Minor Outlying Islands";
            break;
        case "US":
            result = "United States";
            break;
        case "UY":
            result = "Uruguay";
            break;
        case "UZ":
            result = "Uzbekistan";
            break;
        case "VA":
            result = "Holy See (Vatican City State)";
            break;
        case "VC":
            result = "Saint Vincent and the Grenadines";
            break;
        case "VE":
            result = "Venezuela, Bolivarian Republic of";
            break;
        case "VG":
            result = "Virgin Islands, British";
            break;
        case "VI":
            result = "Virgin Islands, U.S.";
            break;
        case "VN":
            result = "Viet Nam";
            break;
        case "VU":
            result = "Vanuatu";
            break;
        case "WF":
            result = "Wallis and Futuna";
            break;
        case "WS":
            result = "Samoa";
            break;
        case "YE":
            result = "Yemen";
            break;
        case "YT":
            result = "Mayotte";
            break;
        case "ZA":
            result = "South Africa";
            break;
        case "ZM":
            result = "Zambia";
            break;
        case "ZW":
            result = "Zimbabwe";
            break;
    }
    return result;
}
