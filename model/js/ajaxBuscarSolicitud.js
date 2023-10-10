let nombreSolicitudResponder = document.getElementById('nombreSolicitudResponder');
let apellidoSolicitudResponder = document.getElementById('apellidoSolicitudResponder');
let tipoConsultaResponder = document.getElementById('tipoConsultaResponder');
let ObraSocialResponder = document.getElementById('ObraSocialResponder');
let horaDesdeResponder = document.getElementById('horaDesdeResponder');
let horaHastaResponder = document.getElementById('horaHastaResponder');

let nombreCancelarSolicitud = document.getElementById('nombreCancelarSolicitud');
let apellidoCancelarSolicitud = document.getElementById('apellidoCancelarSolicitud');
let tipoConsultaCancelarSolicitud = document.getElementById('tipoConsultaCancelarSolicitud');
let ObraSocialCancelarSolicitud = document.getElementById('ObraSocialCancelarSolicitud');
let horaDesdeCancelarSolicitud = document.getElementById('horaDesdeCancelarSolicitud');
let horaHastaCancelarSolicitud = document.getElementById('horaHastaCancelarSolicitud');

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
                }if (tipoSolicitud = "solicitud_enviada") {
                    nombreCancelarSolicitud.innerHTML = '';
                    apellidoCancelarSolicitud.innerHTML = '';
                    nombreCancelarSolicitud.innerHTML = data["nombre"];
                    apellidoCancelarSolicitud.innerHTML = data["apellido"];
                    tipoConsultaCancelarSolicitud.innerHTML = data["seleccionConsulta"];
                    ObraSocialCancelarSolicitud.innerHTML = data["obraSocialSolicitud"];

                    $fechaEvento = new Date(data["horaDesdeSolicitud"].substring(0,10)).getDay();

                    calcularFechaEvento();

                    $mesEvento = data["horaDesdeSolicitud"].substring(5,7);

                    calcularMesEvento();

                    horaDesdeCancelarSolicitud.innerHTML = data["horaDesdeSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaDesdeSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
                    horaHastaCancelarSolicitud.innerHTML = data["horaHastaSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaHastaSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
                }
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos de la solicitud!");
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Solicitudes/buscarSolicitud',true);
    xmlhttp.send(formJSON);
}