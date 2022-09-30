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
                if (estadoSolicitud == "Aceptada") {
                    alert("¡Solicitud aceptada con exito!");
                }else{
                    alert("¡Solicitud rechazada con exito!");
                }
                location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Solicitudes/responderSolicitud',true);
    xmlhttp.send(formJSON);
}
