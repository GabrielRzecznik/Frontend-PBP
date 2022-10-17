//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));

let mensajes = document.getElementById('mensajes');

function buscarMensajes(id_chat, rol){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    formData.append("rol", rol);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
   
    console.log(formJSON);
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                mensajes.innerHTML = '';
                
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
    
                        if (data[i]["mensajesSinLeer"] == 0) {
                            chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" id="abrirChat" class="py-3 lh-sm item-chat" aria-current="true">' +
                                '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                    '<strong class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</strong>' +
                                    '<small>' + $tiempoEnvio + ' </small>' +
                                '</div>' +
                                '<div class="col-10 mb-1 small">' +
                                    data[i]["ultimoMensaje"] +
                                '</div>' +
                            '</a>';
                        }else{
                            chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" id="abrirChat" class="py-3 lh-sm item-chat" aria-current="true">' +
                                '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                    '<strong class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</strong>' +
                                    '<small>' +
                                        '<span class="textoAzul">' + $tiempoEnvio + ' </span>' +
                                        '<span class="badge rounded-pill bg-primary nuevosMensajes">' + data[i]["mensajesSinLeer"] + '</span>' +
                                    '</small>' +    
                                '</div>' +
                                '<div class="col-10 mb-1 small">' +
                                    data[i]["ultimoMensaje"] +
                                '</div>' +
                            '</a>';
                        }
                        
                        //Cargar variables con valores del chat
                        $id_chat = data[i]["id_chat"];
                        $id_pacChat = data[i]["id_pacChat"];
                        $id_proChat = data[i]["id_proChat"];

                        if ($id_pacChat == localStorage.getItem("id_paciente")) {
                            $rol = "Paciente";
                        }else if($id_proChat == localStorage.getItem("id_profesional")) {
                            $rol = "Profesional";
                        }

                        $buscarMensajes($id_chat, $rol);
                    }
                }else{
                    chats.innerHTML = 'Aun no tienes chats';
                }

            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/buscarMensajes',true);
    xmlhttp.send(formJSON);
}
