function mensajesVistos($ids_mensaje){
    var formData= new FormData();
    formData.append("ids_mensaje", $ids_mensaje);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                buscarChats();
            }else{
                alert("Ocurrio un error al verificar mensajes vistos");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Mensajes/mensajesVistos',true);
    xmlhttp.send(formJSON);
}
