let notificaciones = document.getElementById('notificaciones');

function buscarNotificaciones(){
    var formData= new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") !== "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", "0");
    }
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                
                notificaciones.innerHTML = '';

                if (data == "") {
                    notificaciones.innerHTML = '<i class="bi bi-file-earmark-medical centrarMensaje"> No se encontraron notificaciones.</i>';
                }else{
                    //Creación de cartas profesionales
                    for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                        switch (data[i]["tipoNoti"]) {
                            case "Solicitud recibida":
                                notificaciones.innerHTML += '<div class="alert alert-success" role="alert">' +
                                    '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                    '<b>Solicitud recibida</b>' +
                                    '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                '</div>';
                                break;
                            case "Solicitud cancelada":
                                notificaciones.innerHTML += '<div class="alert alert-warning" role="alert">' +
                                    '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                    '<b>Solicitud cancelada</b>' +
                                    '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                '</div>';
                                break;
                            case "Solicitud aceptada":
                                notificaciones.innerHTML += '<div class="alert alert-success" role="alert">' +
                                    '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                    '<b>Solicitud aceptada</b>' +
                                    '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                '</div>';
                                break;
                            case "Solicitud rechazada":
                                notificaciones.innerHTML += '<div class="alert alert-danger" role="alert">' +
                                    '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                    '<b>Solicitud rechazada</b>' +
                                    '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                '</div>';
                                break;
                            case "Turno cancelado":
                                notificaciones.innerHTML += '<div class="alert alert-danger" role="alert">' +
                                    '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                    '<b>Turno cancelado</b>' +
                                    '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                '</div>';
                                break;
                            default:
                                break;
                        }
                    }
                }
            }else{
                console.log("Ocurrio un error inesperado al cargar las notificaciones");
            }
        }
    }
    console.log(formJSON);
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Notificaciones/buscarNotificaciones',true);
    xmlhttp.send(formJSON);
}