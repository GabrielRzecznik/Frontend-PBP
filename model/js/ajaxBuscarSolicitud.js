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
                    switch ($fechaResponder) {
                        case 0:
                            $diaResponder = "Lunes";
                            break;
                        case 1:
                            $diaResponder = "Martes";
                            break;
                        case 2:
                            $diaResponder = "Miércoles";
                            break;
                        case 3:
                            $diaResponder = "Jueves";
                            break;
                        case 4:
                            $diaResponder = "Viernes";
                            break;
                        case 5:
                            $diaResponder = "Sábado";
                            break;
                        case 6:
                            $diaResponder = "Domingo";
                            break;
                        default:
                            break;
                    }

                    $mesResponder = data["horaDesdeSolicitud"].substring(5,7);

                    switch ($mesResponder) {
                        case "01":
                            $mesResponder = "Enero";
                            break;
                        case "02":
                            $mesResponder = "Febrero";
                            break;
                        case "03":
                            $mesResponder = "Marzo";
                            break;
                        case "04":
                            $mesResponder = "Abril";
                            break;
                        case "05":
                            $mesResponder = "Mayo";
                            break;
                        case "06":
                            $mesResponder = "Junio";
                            break;
                        case "07":
                            $mesResponder = "Julio";
                            break;
                        case "08":
                            $mesResponder = "Agosto";
                            break;
                        case "09":
                            $mesResponder = "Septiembre";
                            break;
                        case "10":
                            $mesResponder = "Octubre";
                            break;
                        case "11":
                            $mesResponder = "Noviembre";
                            break;
                        case "12":
                            $mesResponder = "Diciembre";
                            break;
                        default:
                            break;
                    }

                    horaDesdeResponder.innerHTML = data["horaDesdeSolicitud"].substring(11,16) + " del " + $diaResponder + " " + data["horaDesdeSolicitud"].substring(8,10) + " de " + $mesResponder + " del " + data["horaHastaSolicitud"].substring(0,4);
                    horaHastaResponder.innerHTML = data["horaHastaSolicitud"].substring(11,16) + " del " + $diaResponder + " " + data["horaHastaSolicitud"].substring(8,10) + " de " + $mesResponder + " del " + data["horaHastaSolicitud"].substring(0,4);
                }
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}
