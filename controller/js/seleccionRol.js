window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    const instancia = "seleccionRol";
    controlAcceso(instancia);
});

document.getElementById("paciente").addEventListener("click", function() {
    var rol = "Paciente";
    seleccionRol(rol);
});

document.getElementById("profesional").addEventListener("click", function() {
    var rol = "Profesional";
    seleccionRol(rol);
});