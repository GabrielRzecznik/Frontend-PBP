let nombreSolicitudResponder = document.getElementById('nombreSolicitudResponder');
let apellidoSolicitudResponder = document.getElementById('apellidoSolicitudResponder');
let tipoConsultaResponder = document.getElementById('tipoConsultaResponder');
let ObraSocialResponder = document.getElementById('ObraSocialResponder');
let horaDesdeResponder = document.getElementById('horaDesdeResponder');
let horaHastaResponder = document.getElementById('horaHastaResponder');

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

                    $fechaResponder = new Date(data["horaDesdeSolicitud"].substring(0,10)).getDay();
                    console.log($fechaResponder);
                    switch ($fechaResponder) {
                        case 0:
                            $tiempoResponder = "Lunes";
                            break;
                        case 1:
                            $tiempoResponder = "Martes";
                            break;
                        case 2:
                            $tiempoResponder = "Miércoles";
                            break;
                        case 3:
                            $tiempoResponder = "Jueves";
                            break;
                        case 4:
                            $tiempoResponder = "Viernes";
                            break;
                        case 5:
                            $tiempoResponder = "Sábado";
                            break;
                        case 6:
                            $tiempoResponder = "Domingo";
                            break;
                        default:
                            break;
                    }

                    horaDesdeResponder.innerHTML = data["horaDesdeSolicitud"].substring(11,16) + " del " + $tiempoResponder;
                    horaHastaResponder.innerHTML = data["horaHastaSolicitud"].substring(11,16) + " del " + $tiempoResponder;
                }
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}
