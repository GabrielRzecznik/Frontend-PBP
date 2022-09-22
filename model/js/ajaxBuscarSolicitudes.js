function buscarSolicitudes(){
    var id_paciente = localStorage["id_usuario"];//Cambiar id usuario x paciente
    var formJSON=JSON.stringify({"id_paciente":id_paciente});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                data.forEach(element => {
                    var horaDesde = data[element]["horaDesdeSolicitud"];
                    var horaHasta = data[element]["horaHastaSolicitud"];
                    var fecha = data[element]["fecha"];
    
                    var title = "Solicitud Enviada";
                    var start = fecha + ' ' + horaDesde;
                    var end = fecha + ' ' + horaHasta;
    
                    let eventos = [title, start, end];
                    return eventos; 
                });
                
                //La grilla pertenece a un profesional?
                $prof = localStorage.getItem("id_profesional");
                        
            }if (xmlhttp.status == 401) {
                alert("¡No se encontraron solicitudes ni turnos!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Solicitudes/buscarSolicitudes',true);
    xmlhttp.send(formJSON);
}
