<?php
$codProvincia = $_POST["codProvincia"];
$default = "<option>La Matanza</option> 
            <option>Quilmes</option>
            <option>Mar del Plata</option>
            <option>La Plata</option>"; //Texto de la opcion por defecto
switch ($codProvincia) {
    case "1":
        echo "<option>La Matanza</option>";
        echo "<option>Quilmes</option>";
        echo "<option>Mar del Plata</option>";
        echo "<option>La Plata</option>";
        break;
    case "2":
        echo "<option>San Fernando Del Valle De Catamarca</option>";
        echo "<option>Achalco</option>";
        echo "<option>Acostilla</option>";
        echo "<option>Ampolla</option>";
        break;
    case "3":
        echo "<option>Resistencia</option>";
        echo "<option>Agua Buena</option>";
        echo "<option>Colonia Fortuni</option>";
        echo "<option>Cacui</option>";
        break;
    case "4":
        echo "<option>Rawson</option>";
        echo "<option>Cachel</option>";
        echo "<option>Corralitos</option>";
        echo "<option>Corcovado</option>";
        break;
    case "5":
        echo "<option>Córdoba</option>";
        echo "<option>Villa Carlos Paz</option>";
        echo "<option>Río Cuarto</option>";
        echo "<option>Capilla del Monte</option>";
        break;
    case "6":
        echo "<option>Corrientes</option>";
        echo "<option>Centinela</option>";
        echo "<option>Cerrito</option>";
        echo "<option>Cerrudo Cué</option>";
        break;
    case "7":
        echo "<option>Paraná</option>";
        echo "<option>Colón</option>";
        echo "<option>Concepción del Uruguay</option>";
        echo "<option>Gualeguaychú</option>";
        break;
    case "8":
        echo "<option>Formosa</option>";
        echo "<option>Bahia Negra</option>";
        echo "<option>Bajo Hondo</option>";
        echo "<option>Bajo Verde</option>";
        break;
    case "9":
        echo "<option>San Salvador de Jujuy</option>";
        echo "<option>El Cucho</option>";
        echo "<option>El Durazno</option>";
        echo "<option>El Fuerte</option>";
        break;
    case "10":
        echo "<option>Santa Rosa</option>";
        echo "<option>Cachirulo</option>";
        echo "<option>Caichue</option>";
        echo "<option>Caimi</option>";
        break;
    case "11":
        echo "<option>La Rioja</option>";
        echo "<option>Banda Florida</option>";
        echo "<option>Barranquitas</option>";
        echo "<option>Barrio de Galli</option>";
        break;
    case "12":
        echo "<option>Mendoza</option>";
        echo "<option>San Rafael</option>";
        echo "<option>Cerro de los Burros</option>";
        echo "<option>Cerro de Los Dedos</option>";
        break;
    case "13":
        echo "<option>Posadas</option>";
        echo "<option>Puerto Iguazú</option>";
        echo "<option>El Lapacho</option>";
        echo "<option>El Macaco</option>";
        break;
    case "14":
        echo "<option>Neuquén</option>";
        echo "<option>Haichol</option>";
        echo "<option>Haras Patria</option>";
        echo "<option>Haycu</option>";
        break;
    case "15":
        echo "<option>Viedma</option>";
        echo "<option>Balneario Las Grutas</option>";
        echo "<option>Bajo Rico</option>";
        echo "<option>Balneario El Cóndor</option>";
        break;
    case "16":
        echo "<option>Salta</option>";
        echo "<option>Gallinato</option>";
        echo "<option>Gaona</option>";
        echo "<option>General Alvarado</option>";
        break;
    case "17":
        echo "<option>San Juan</option>";
        echo "<option>La Moral</option>";
        echo "<option>La Orilla</option>";
        echo "<option>La Orqueta</option>";
        break;
    case "18":
        echo "<option>San Luis</option>";
        echo "<option>Merlo</option>";
        echo "<option>General Pedernera</option>";
        echo "<option>General Urquiza</option>";
        break;
    case "19":
        echo "<option>Río Gallegos</option>";
        echo "<option>Palermo Aike</option>";
        echo "<option>Pali Aike</option>";
        echo "<option>Pampa Verdum</option>";
        break;
    case "20":
        echo "<option>Santa Fé</option>";
        echo "<option>Ciudad de Galvez</option>";
        echo "<option>Rosario</option>";
        echo "<option>Cabal</option>";
        break;
    case "21":
        echo "<option>Santiago del Estero</option>";
        echo "<option>Famatina</option>";
        echo "<option>Farol</option>";
        echo "<option>Favorina</option>";
        break;
    case "22":
        echo "<option>Ushuaia</option>";
        echo "<option>El Páramo</option>";
        echo "<option>Estacion Aeronaval</option>";
        echo "<option>Estacion Cientifica Alte Brown</option>";
        break;
    case "23":
        echo "<option>San Miguel de Tucumán</option>";
        echo "<option>El Aguilar</option>";
        echo "<option>El Alpizar</option>";
        echo "<option>El Antigal</option>";
        break;
    default:
        echo '<option onclick="solicitar(\'1\')"  value="1" selected>Buenos Aires</option>';
        echo '<option onclick="solicitar(\'2\')"  value="2">Catamarca</option>';
        echo '<option onclick="solicitar(\'3\')"  value="3">Chaco</option>';
        echo '<option onclick="solicitar(\'4\')"  value="4">Chubut</option>';
        echo '<option onclick="solicitar(\'5\')"  value="5">Córdoba</option>';
        echo '<option onclick="solicitar(\'6\')"  value="6">Corrientes</option>';
        echo '<option onclick="solicitar(\'7\')"  value="7">Entre Ríos</option>';
        echo '<option onclick="solicitar(\'8\')"  value="8">Formosa</option>';
        echo '<option onclick="solicitar(\'9\')"  value="9">Jujuy</option>';
        echo '<option onclick="solicitar(\'10\')" value="10">La Pampa</option>';
        echo '<option onclick="solicitar(\'11\')" value="11">La Rioja</option>';
        echo '<option onclick="solicitar(\'12\')" value="12">Mendoza</option>';
        echo '<option onclick="solicitar(\'13\')" value="13">Misiones</option>';
        echo '<option onclick="solicitar(\'14\')" value="14">Neuquén</option>';
        echo '<option onclick="solicitar(\'15\')" value="15">Río Negro</option>';
        echo '<option onclick="solicitar(\'16\')" value="16">Salta</option>';
        echo '<option onclick="solicitar(\'17\')" value="17">San Juan</option>';
        echo '<option onclick="solicitar(\'18\')" value="18">San Luis</option>';
        echo '<option onclick="solicitar(\'19\')" value="19">Santa Cruz</option>';
        echo '<option onclick="solicitar(\'20\')" value="20">Santa Fe</option>';
        echo '<option onclick="solicitar(\'21\')" value="21">Santiago del Estero</option>';
        echo '<option onclick="solicitar(\'22\')" value="22">Tierra del Fuego, Antártida e Isla del Atlántico Sur</option>';
        echo '<option onclick="solicitar(\'23\')" value="23">Tucumán</option>';
        echo '___'.$default;
        break;
}
