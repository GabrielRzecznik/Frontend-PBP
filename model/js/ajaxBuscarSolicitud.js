function buscarSolicitud(id_solicitud, tipoSolicitud){
    var formData= new FormData();
    formData.append("id_solicitud", id_solicitud);
    formData.append("tipoSolicitud", tipoSolicitud);
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data);
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}
