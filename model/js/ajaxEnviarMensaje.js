function enviarMensaje(id_chat, paciente, profesional, rol, fechaHora, formularioEnviarMensaje){
    var formData= new FormData(formularioEnviarMensaje);
    formData.append("id_chat", id_chat);
    formData.append("id_pacMen", paciente);
    formData.append("id_proMen", profesional);
    formData.append("rol", rol);
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
