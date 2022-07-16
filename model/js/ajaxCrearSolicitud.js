function crearSolicitud(seleccionConsulta, obraSocialSolicitud, horaDesdeSolicitud, horaHastaSolicitud){
    var formJSON=JSON.stringify({"seleccionConsulta":seleccionConsulta, "obraSocialSolicitud":obraSocialSolicitud, "horaDesdeSolicitud":horaDesdeSolicitud, "horaHastaSolicitud":horaHastaSolicitud});

    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("Solicitud enviada con exito!");

            }if (xmlhttp.status == 401) {
                alert("No se pudo crear la solicitud");
            }if (xmlhttp.status == 500) {
                alert("No se pudo crear la solicitud");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/crearSolicitud',true);
    xmlhttp.send(formJSON);
}
