function enviarMensaje(id_chat, remitente, destinatario, descripcion, fechaHora){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    formData.append("remitente", remitente);
    formData.append("destinatario", destinatario);
    formData.append("descripcion", descripcion);
    formData.append("fechaHora", fechaHora);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                console.log("Todo correcto");
                //buscarMensajes($cha, $nom, $ape, $nuc, $rem, $des, $rol);
            }else{
                alert("Ocurrio un error al enviar el mensaje");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
