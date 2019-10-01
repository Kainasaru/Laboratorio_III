<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Empleado</title>
</head>
<body>
    <form id="sendForm" method="POST" action="./administracion.php">
        <fieldset style="width:10em;">
            <legend>Cargar empleado</legend>
            Dni:<br/>
            <input type="text" name="dni" /><br/>
            Nombre:<br/>
            <input type="text" name="nombre" /><br/>
            Apellido:<br/>
            <input type="text" name="apellido" /><br/>
            Sexo:<br/>
            <input type="text" name="sexo" /><br/>
            Legajo:<br/>
            <input type="text" name="legajo" /><br/>
            Sueldo:<br/>
            <input type="text" name="sueldo" /><br/>
            <input type="submit" value="Enviar" />
        </fieldset>
    </form>
</body>
</html>