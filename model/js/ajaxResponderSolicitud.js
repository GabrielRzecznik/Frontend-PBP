function responderSolicitud(id_solicitud, estadoSolicitud){
    var formJSON=JSON.stringify({"id_solicitud":id_solicitud});
    var formJSON=JSON.stringify({"estadoSolicitud":estadoSolicitud});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Solicitud aceptada con exito!");
                alert("¡Solicitud rechazada con exito!");
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
