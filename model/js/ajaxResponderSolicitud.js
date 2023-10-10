function responderSolicitud(id_solicitud, respuesta){
    var formData= new FormData();
    formData.append("id_solicitud",id_solicitud);
    formData.append("estadoSolicitud",respuesta);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                if (respuesta == "Aceptada") {
                    $tipoNoti = "Solicitud aceptada";
                    enviarNotificacion(id_solicitud, $tipoNoti);
                    alert("¡Solicitud aceptada con exito!");
                }else{
                    $tipoNoti = "Solicitud rechazada";
                    enviarNotificacion(id_solicitud, $tipoNoti);
                    alert("¡Solicitud rechazada con exito!");
                }
                //location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'http://localhost/phpapp/Backend-PBP/Solicitudes/responderSolicitud',true);
    xmlhttp.send(formJSON);
}
