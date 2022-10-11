function enviarMensaje(id_chat, usuario1, usuario2, ){
    var formJSON=JSON.stringify({"seleccionConsulta":seleccionConsulta, "obraSocialSolicitud":obraSocialSolicitud, "horaDesdeSolicitud":horaDesdeSolicitud, "horaHastaSolicitud":horaHastaSolicitud, "id_paciente":id_paciente, "profesional":profesional});
    console.log(formJSON);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                document.getElementById('confirmarSolicitud').style.display = 'block';
                document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Solicitud enviada con exito!");
                location.reload();
            }else{
                document.getElementById('confirmarSolicitud').style.display = 'block';
                document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
