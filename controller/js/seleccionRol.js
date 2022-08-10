//Click en solo paciente
document.getElementById("paciente").addEventListener("click", function( event ) {
    //event = console.log("Soy paciente");
    respuesta = "Activo";
    seleccionRol(respuesta);
});

//Click en profesional
document.getElementById("profesional").addEventListener("click", function( event ) {
    //event = console.log("Soy profesional");
    window.location.href = "https://frontend-pbp.herokuapp.com/view/registroProfesional.html";
});