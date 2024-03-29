let notificaciones = document.getElementById('notificaciones');

function buscarNotificaciones(){
    var formData = new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") !== "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", "0");
    }
    
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                var arrayNotificaciones = [];

                notificaciones.innerHTML = '';

                if (data == "") {
                    notificaciones.innerHTML = '<div class="centrar-texto"><i class="bi bi-bell-slash-fill"></i> Aun no tiene notificaciones</i></div>';
                }else{
                    //Creación de cartas profesionales
                    $vista = false;
                    
                    for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                        switch (data[i]["tipoNoti"]) {
                            case "Solicitud recibida":
                                if (data[i]["estadoNoti"] == "Pendiente") {
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-success" role="alert">' +
                                        '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                        '<b>Solicitud recibida: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                        ' <span class="badge bg-primary">Nueva</span>' +
                                    '</div>';
                                }else{
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-success" role="alert">' +
                                        '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                        '<b>Solicitud recibida: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                    '</div>';
                                }                                
                                break;
                            case "Solicitud cancelada":
                                if (data[i]["estadoNoti"] == "Pendiente") {
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-warning" role="alert">' +    
                                        '<i class="bi bi-calendar2-x-fill margen-derecho"></i>' +
                                        '<b>Solicitud cancelada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                        ' <span class="badge bg-primary">Nueva</span>' +
                                    '</div>';
                                }else{
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-warning" role="alert">' +
                                        '<i class="bi bi-calendar2-x-fill margen-derecho"></i>' +
                                        '<b>Solicitud cancelada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                    '</div>';
                                }
                                break;
                            case "Solicitud aceptada":
                                if (data[i]["estadoNoti"] == "Pendiente") {
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-success" role="alert">' +
                                        '<i class="bi bi-calendar2-check-fill margen-derecho"></i>' +
                                        '<b>Solicitud aceptada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                        ' <span class="badge bg-primary">Nueva</span>' +
                                    '</div>';
                                }else{
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-success" role="alert">' +
                                        '<i class="bi bi-calendar2-check-fill margen-derecho"></i>' +
                                        '<b>Solicitud aceptada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                    '</div>';
                                }
                                break;
                            case "Solicitud rechazada":
                                if (data[i]["estadoNoti"] == "Pendiente") {
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-danger" role="alert">' +
                                        '<i class="bi bi-calendar2-x-fill margen-derecho"></i>' +
                                        '<b>Solicitud rechazada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                        ' <span class="badge bg-primary">Nueva</span>' +
                                    '</div>';
                                }else{
                                    notificaciones.innerHTML += '<div class="tamaño-letra alert alert-danger" role="alert">' +
                                        '<i class="bi bi-calendar2-x-fill margen-derecho"></i>' +
                                        '<b>Solicitud rechazada: </b>' +
                                        '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                    '</div>';
                                }
                                break;
                                case "Turno cancelado por paciente":
                                case "Turno cancelado por profesional":
                                    if (data[i]["estadoNoti"] == "Pendiente") {
                                        notificaciones.innerHTML += '<div class="tamaño-letra alert alert-danger" role="alert">' +
                                            '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                            '<b>Turno cancelado: </b>' +
                                            '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                            ' <span class="badge bg-primary">Nueva</span>' +
                                        '</div>';
                                    }else{
                                        notificaciones.innerHTML += '<div class="tamaño-letra alert alert-danger" role="alert">' +
                                            '<i class="bi bi-calendar2-plus-fill margen-derecho"></i>' +
                                            '<b>Turno cancelado: </b>' +
                                            '<span>'+data[i]["descripcionNoti"]+'</span>' +
                                        '</div>';
                                    }
                                break;
                            default:
                                break;
                        }

                        if (data[i]["estadoNoti"] == "Pendiente") {
                            $vista = true;
                        }

                        arrayNotificaciones.push(data[i]["id_notificacion"]);
                    }

                    if ($vista) {
                        notificacionesVistas(arrayNotificaciones);
                    }

                }
                $pestaña = "Notificaciones";
                cargarNavegador($pestaña);
            }else{
                console.log("Ocurrio un error inesperado al cargar las notificaciones");
            }
        }
    }
   
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Notificaciones/buscarNotificaciones',true);
    xmlhttp.send(formJSON);
}