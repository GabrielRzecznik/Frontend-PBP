let nombreCancelarTurno = document.getElementById('nombreCancelarTurno');
let apellidoCancelarTurno = document.getElementById('apellidoCancelarTurno');
let tipoConsultaCancelarTurno = document.getElementById('tipoConsultaCancelarTurno');
let ObraSocialCancelarTurno = document.getElementById('ObraSocialCancelarTurno');
let horaDesdeCancelarTurno = document.getElementById('horaDesdeCancelarTurno');
let horaHastaCancelarTurno = document.getElementById('horaHastaCancelarTurno');

let rolCancelarTurno = document.getElementById('rolCancelarTurno');

function buscarTurno(id_turno, tipoTurno){
    var formData= new FormData();
    formData.append("id_turno", id_turno);
    formData.append("tipoTurno", tipoTurno);
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);

                if (tipoTurno == 'turno_confirmado') {
                    //Mostrar paciente
                    rolCancelarTurno.innerHTML = 'al paciente';
                }else{
                    //Mostrar profesional
                    rolCancelarTurno.innerHTML = 'con el profesional';
                }
                
                nombreCancelarTurno.innerHTML = '';
                apellidoCancelarTurno.innerHTML = '';
                nombreCancelarTurno.innerHTML = data["nombre"];
                apellidoCancelarTurno.innerHTML = data["apellido"];
                tipoConsultaCancelarTurno.innerHTML = data["seleccionConsulta"];
                ObraSocialCancelarTurno.innerHTML = data["obraSocialSolicitud"];

                $fechaEvento = new Date(data["horaDesdeSolicitud"].substring(0,10)).getDay();

                calcularFechaEvento();

                $mesEvento = data["horaDesdeSolicitud"].substring(5,7);

                calcularMesEvento();

                horaDesdeCancelarTurno.innerHTML = data["horaDesdeSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaDesdeSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
                horaHastaCancelarTurno.innerHTML = data["horaHastaSolicitud"].substring(11,16) + " del " + $diaEvento + " " + data["horaHastaSolicitud"].substring(8,10) + " de " + $mesEvento + " del " + data["horaHastaSolicitud"].substring(0,4);
            }else{
                alert("¡Ocurrio un error inesperado al buscar los datos del turno!");
            }
        }
    }
    console.log(formJSON);
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Turnos/buscarTurno',true);
    xmlhttp.send(formJSON);
}