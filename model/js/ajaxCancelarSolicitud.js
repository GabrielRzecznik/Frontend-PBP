function cancelarSolicitud(id_solicitud){
    var formJSON=JSON.stringify({"id_solicitud":id_solicitud});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                $tipoNoti = "Solicitud cancelada";
                enviarNotificacion(id_solicitud, $tipoNoti);
              
                alert("¡Solicitud cancelada con exito!");
                //location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Solicitudes/cancelarSolicitud',true);
    xmlhttp.send(formJSON);
}
