function notificacionesVistas($arrayNotificaciones){
    var formData = new FormData();
    formData.append("notificaciones", $arrayNotificaciones);
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
            }else{
                console.log("Ocurrio un error inesperado en el procesamiento de las notificaciones");
            }
        }
    }

    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Notificaciones/notificacionesVisualizadas',true);
    xmlhttp.send(formJSON);
}