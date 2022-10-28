let nombreSolicitudResponder = document.getElementById('nombreSolicitudResponder');
let apellidoSolicitudResponder = document.getElementById('apellidoSolicitudResponder');
let tipoConsultaResponder = document.getElementById('tipoConsultaResponder');
let ObraSocialResponder = document.getElementById('ObraSocialResponder');

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
                nombreSolicitudResponder.innerHTML = '';
                apellidoSolicitudResponder.innerHTML = '';

                if (tipoSolicitud = "solicitud_recibida") {
                    nombreSolicitudResponder.innerHTML = data["nombre"];
                    apellidoSolicitudResponder.innerHTML = data["apellido"];
                    tipoConsultaResponder.innerHTML = data["seleccionConsulta"];
                    ObraSocialResponder.innerHTML = data["obraSocialSolicitud"];
                }
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}
