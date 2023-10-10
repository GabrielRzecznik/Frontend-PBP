function enviarNotificacion(id_evento, tipoNoti){

    var formJSON=JSON.stringify({"id_evento":id_evento, "tipoNoti":tipoNoti});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien   
                location.reload();
            }else{
                alert("¡Ocurrio un error inesperado al enviar la notificación!");
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Notificaciones/enviarNotificacion',true);
    xmlhttp.send(formJSON);
}
