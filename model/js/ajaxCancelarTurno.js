function cancelarTurno(id_turno){
    var formJSON=JSON.stringify({"id_turno":id_turno});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                if ($cancelador == "paciente") {
                    $tipoNoti = "Turno cancelado por paciente";
                    enviarNotificacion(id_turno, $tipoNoti);
                }if ($cancelador == "profesional") {
                    $tipoNoti = "Turno cancelado por profesional";
                    enviarNotificacion(id_turno, $tipoNoti);
                }
                
                alert("Turno cancelado con exito!");
                location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Turnos/cancelarTurno',true);
    xmlhttp.send(formJSON);
}
