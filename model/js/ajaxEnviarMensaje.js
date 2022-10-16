function enviarMensaje(id_chat, remitente, destinatario, descripcion, fechaHora){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    formData.append("remitente", remitente);
    formData.append("destinatario", destinatario);
    formData.append("descripcion", descripcion);
    formData.append("fechaHora", fechaHora);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
   
    console.log(formJSON);
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
               
            }else{
                
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
