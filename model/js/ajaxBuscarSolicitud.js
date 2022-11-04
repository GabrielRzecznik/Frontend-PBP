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
                
                if (tipoSolicitud = "solicitud_recibida") {
                    nombreSolicitudResponder.innerHTML = '';
                    apellidoSolicitudResponder.innerHTML = '';
                    nombreSolicitudResponder.innerHTML = data["nombre"];
                    apellidoSolicitudResponder.innerHTML = data["apellido"];
                    tipoConsultaResponder.innerHTML = data["seleccionConsulta"];
                    ObraSocialResponder.innerHTML = data["obraSocialSolicitud"];

                    $fechaEvento = new Date(data["horaDesdeSolicitud"].substring(0,10)).getDay();

                    calcularFechaEvento();

                    $mesEvento = data["horaDesdeSolicitud"].substring(5,7);

                    calcularMesEvento();

                    horaDesdeResponder.innerHTML = data["horaDesdeSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaDesdeSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
                    horaHastaResponder.innerHTML = data["horaHastaSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaHastaSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
                }
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}

function calcularFechaEvento() {
    switch ($fechaEvento) {
        case 0:
            $diaEvento = "Lunes";
            break;
        case 1:
            $diaEvento = "Martes";
            break;
        case 2:
            $diaEvento = "Miércoles";
            break;
        case 3:
            $diaEvento = "Jueves";
            break;
        case 4:
            $diaEvento = "Viernes";
            break;
        case 5:
            $diaEvento = "Sábado";
            break;
        case 6:
            $diaEvento = "Domingo";
            break;
        default:
            break;
    }
}

function calcularMesEvento() {
    switch ($mesEvento) {
        case "01":
            $mesEvento = "Enero";
            break;
        case "02":
            $mesEvento = "Febrero";
            break;
        case "03":
            $mesEvento = "Marzo";
            break;
        case "04":
            $mesEvento = "Abril";
            break;
        case "05":
            $mesEvento = "Mayo";
            break;
        case "06":
            $mesEvento = "Junio";
            break;
        case "07":
            $mesEvento = "Julio";
            break;
        case "08":
            $mesEvento = "Agosto";
            break;
        case "09":
            $mesEvento = "Septiembre";
            break;
        case "10":
            $mesEvento = "Octubre";
            break;
        case "11":
            $mesEvento = "Noviembre";
            break;
        case "12":
            $mesEvento = "Diciembre";
            break;
        default:
            break;
    }
}