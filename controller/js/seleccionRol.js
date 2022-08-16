//Click en solo paciente
document.getElementById("paciente").addEventListener("click", function() {
    var rol = "Paciente";
    seleccionRol(rol);
});

//Click en profesional
document.getElementById("profesional").addEventListener("click", function() {
    var rol = "Profesional";
    seleccionRol(rol);
});