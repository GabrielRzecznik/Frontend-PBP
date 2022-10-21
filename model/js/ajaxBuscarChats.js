//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let rol = "";
let chats = document.getElementById('chats');

function buscarChats(){
    var formData= new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") != "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", 0);
    }
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);

                chats.innerHTML = '';
                
                if (data != "") {        
                    for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                        $fechaHora = data[i]["ultimoMensajeHora"];
    
                        $fecha = $fechaHora.slice(0, 10);
                        $hora = $fechaHora.slice(14, 19);
    
                        if ($fecha == fechaActual) {
                            $tiempoEnvio = $hora;
                        }else{
                            $fecha = new Date($fecha).getDay();
    
                            switch ($fecha) {
                                case 0:
                                    $tiempoEnvio = "Domingo";
                                    break;
                                case 1:
                                    $tiempoEnvio = "Lunes";
                                    break;
                                case 2:
                                    $tiempoEnvio = "Martes";
                                    break;
                                case 3:
                                    $tiempoEnvio = "Miércoles";
                                    break;
                                case 4:
                                    $tiempoEnvio = "Jueves";
                                    break;
                                case 5:
                                    $tiempoEnvio = "Viernes";
                                    break;
                                    case 6:
                                    $tiempoEnvio = "Sabado";
                                    break;
                                default:
                                    break;
                            }
                        }

                        //Cargar variables con valores del chat
                        $id_chat = data[i]["id_chat"];
                        $id_pacChat = data[i]["id_pacChat"];
                        $id_proChat = data[i]["id_proChat"];
    
                        $nombreChat = String("'" + data[i]["nombre"] + "'");
                        $apellidoChat = String("'" + data[i]["apellido"] + "'");
                        $nombreUsuarioChat = String("'@" + data[i]["nombreUsuario"] + "'");

                        if ($id_pacChat == localStorage.getItem("id_paciente")) {
                            $rem = $id_pacChat;
                            $des = $id_proChat;
                            $rol = "'"+"Paciente"+"'";
                            rol = "Paciente";
                        }else{
                            $rem = $id_proChat;
                            $des = $id_pacChat;
                            $rol = "'"+"Profesional"+"'";
                            rol = "Profesional";
                        }

                        if (data[i]["mensajesSinLeer"] == 0) {//
                            chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" onclick="buscarMensajes(' + data[i]["id_chat"] + ',' + $nombreChat + ',' + $apellidoChat + ',' + $nombreUsuarioChat + ',' + $rem + ',' + $des + ',' + $rol + ')" class="py-3 lh-sm item-chat" aria-current="true">' +
                                '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                    '<b class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</b>' +
                                    '<small>' + $tiempoEnvio + ' </small>' +
                                '</div>' +
                                '<div class="col-10 mb-1 small">' +
                                    '<span id = "ultimoMensaje' + $id_chat + '">' + data[i]["ultimoMensaje"] + '</span>' +
                                '</div>' +
                            '</a>';
                        }else{
                            chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" onclick="buscarMensajes(' + data[i]["id_chat"] + ',' + $nombreChat + ',' + $apellidoChat + ',' + $nombreUsuarioChat + ',' + $rem + ',' + $des + ',' + $rol + ')" class="py-3 lh-sm item-chat" aria-current="true">' +
                                '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                    '<b class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</b>' +
                                    '<small>' +
                                        '<span id="ultimoMensajeHora' + $id_chat + '" class="textoAzul">' + $tiempoEnvio + ' </span>' +
                                        '<span class="badge rounded-pill bg-primary nuevosMensajes">' + data[i]["mensajesSinLeer"] + '</span>' +
                                    '</small>' +    
                                '</div>' +
                                '<div class="col-10 mb-1 small">' +
                                    '<span id = "ultimoMensaje' + $id_chat + '">' + data[i]["ultimoMensaje"] + '</span>' +
                                '</div>' +
                            '</a>';
                        }
                    }
                    verificarChatExistente(data);
                }else{
                    chats.innerHTML = 'Aun no tienes chats';
                    verificarChatExistente(data);
                }

            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Chats/buscarChats',true);
    xmlhttp.send(formJSON);
}

