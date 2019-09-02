function mostrar() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dni = parseInt(document.getElementById("dni").value);
    var cv = document.getElementById("cv").value;
    console.log("Nombre " + nombre + "\nEmail: " + email + "\nDNI: " + dni + "\nCurriculum Vitae: " + cv);
}
