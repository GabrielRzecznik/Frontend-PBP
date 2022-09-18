function crearSolicitud(seleccionConsulta, obraSocialSolicitud, horaDesdeSolicitud, horaHastaSolicitud, id_paciente, profesional){
    var formJSON=JSON.stringify({"seleccionConsulta":seleccionConsulta, "obraSocialSolicitud":obraSocialSolicitud, "horaDesdeSolicitud":horaDesdeSolicitud, "horaHastaSolicitud":horaHastaSolicitud, "id_paciente":id_paciente, "profesional":profesional});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("¡Solicitud enviada con exito!");
                location.reload();
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/crearSolicitud',true);
    xmlhttp.send(formJSON);
}
