function enviarMensaje(id_chat, remitente, destinatario, rol, descripcion, fechaHora){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    formData.append("remitente", remitente);
    formData.append("destinatario", destinatario);
    formData.append("rol", rol);
    formData.append("descripcion", descripcion);
    formData.append("fechaHora", fechaHora);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                if ($cha != "Nuevo") {
                    buscarMensajes($cha, $nom, $ape, $nuc, $rem, $des, $rol);
                }else{
                    buscarMensajes(data[0], $nom, $ape, $nuc, $rem, $des, $rol);
                }
            }else{
                alert("Ocurrio un error al enviar el mensaje");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
