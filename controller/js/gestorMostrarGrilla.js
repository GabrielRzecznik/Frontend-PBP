tipoVista = "paciente";

if (tipoVista == "paciente") {
    //Enviar AJAX según tipoVista = Paciente
    console.log(localStorage.getItem("id_paciente"));
    mostrarSolicitudes(id_paciente);
    //mostrarTurnos(id_paciente);
}else if (tipoVista == "paciente_a_profesional") {
    //Enviar AJAX según tipoVista = Paciente a Profesional
    
}else if (tipoVista == "profesional"){
    //Enviar AJAX según tipoVista = Profesional
    
}else{
    alert("Error inesperado: No se definieron los parametros para la generación de la grilla");
}