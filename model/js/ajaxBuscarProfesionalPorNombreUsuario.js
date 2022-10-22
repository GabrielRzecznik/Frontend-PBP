function buscarProfesionalPorNombreUsuario(nombreUsuario){
    var formData= new FormData();
    formData.append("nombreUsuario", nombreUsuario);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
            }else{
                alert("Ocurrio un error al enviar el mensaje");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
