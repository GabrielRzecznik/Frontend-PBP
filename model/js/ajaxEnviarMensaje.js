function enviarMensaje(id_chat, remitente, destinatario, rol, descripcion, fechaHora){
    if (id_chat == "Nuevo") {
        clearInterval($actCht);
        document.getElementById("mensaje").disabled = true;
    }
    
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    formData.append("remitente", remitente);
    formData.append("destinatario", destinatario);
    formData.append("rol", rol);
    formData.append("descripcion", descripcion);
    formData.append("fechaHora", fechaHora);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                if ($cha != "Nuevo") {
                    $priCar = false;
                    buscarMensajes($cha, $nom, $ape, $nuc, $rem, $des, $rol, $priCar);
                }else{
                    $priCar = false;
                    $des = $id_pro;
                    
                    dataAnteriorChat = ["", ""];
                    
                    buscarMensajes(data[0], $nom, $ape, $nuc, $rem, $des, $rol, $priCar);
                }
            }else{
                alert("Ocurrio un error al enviar el mensaje");
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Mensajes/enviarMensaje',true);
    xmlhttp.send(formJSON);
}
