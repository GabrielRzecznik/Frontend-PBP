//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let rol = "";
var data = "";
let dataAnteriorChat = ["", ""];
let chats = document.getElementById('chats');
$primeraCargaChats = true;
$sumatoriaMensajesSinLeer = 0;

function buscarChats(){
    //Actualiza cada 1 segundo
    if ($primeraCargaChats) {
        $actualizarChats = setInterval(actualizarChatsEnTiempoReal, 1000);
        $pestaña = "Chat";
        cargarNavegador($pestaña);
    }else{
        actualizarChatsEnTiempoReal();
    }
    
    function actualizarChatsEnTiempoReal() {        
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
                    data=JSON.parse(xmlhttp.responseText);
                    if (data == "") {
                        if ($primeraCargaChats) {
                            verificarChatExistente(data);
                        }
                        //clearInterval($actualizarChats);
                        chats.innerHTML = '<div class="centrar-mensaje"><i class="bi bi-chat-square-text-fill"> Aun no tienes chats</i></div>';
                        document.getElementById("loader").classList.add("ocultar");
                    }
                    

                    for (var i = 0; i < data.length; i++) {
                        console.log(dataAnteriorChat[i]);
                        //console.log(dataAnteriorChat[i]);
                        if ((data[i]["ultimoMensaje"] != dataAnteriorChat[i]["ultimoMensaje"]) || (data[i]["ultimoMensajeHora"] != dataAnteriorChat[i]["ultimoMensajeHora"]) || (data[i]["mensajesSinLeer"] != dataAnteriorChat[i]["mensajesSinLeer"])) {
                            if (data != "") { 
                                chats.innerHTML = '';
                                for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                                    $sumatoriaMensajesSinLeer += data[i]["mensajesSinLeer"]
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
                                        $remChat = $id_pacChat;
                                        $desChat = $id_proChat;
                                        $rolChat = "'"+"Paciente"+"'";
                                        rol = "Paciente";
                                    }else{
                                        $remChat = $id_proChat;
                                        $desChat = $id_pacChat;
                                        $rolChat = "'"+"Profesional"+"'";
                                        rol = "Profesional";
                                    }
            
                                    if (data[i]["mensajesSinLeer"] == 0) {//
                                        chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" onclick="buscarMensajes(' + data[i]["id_chat"] + ',' + $nombreChat + ',' + $apellidoChat + ',' + $nombreUsuarioChat + ',' + $remChat + ',' + $desChat + ',' + $rolChat + ', true)" class="py-3 lh-sm item-chat" aria-current="true">' +
                                            '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                                '<b class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</b>' +
                                                '<small>' + $tiempoEnvio + ' </small>' +
                                            '</div>' +
                                            '<div class="col-10 mb-1 small">' +
                                                '<span id = "ultimoMensaje' + $id_chat + '">' + data[i]["ultimoMensaje"] + '</span>' +
                                            '</div>' +
                                        '</a>';
                                    }else{
                                        chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] + '" onclick="buscarMensajes(' + data[i]["id_chat"] + ',' + $nombreChat + ',' + $apellidoChat + ',' + $nombreUsuarioChat + ',' + $remChat + ',' + $desChat + ',' + $rolChat + ', true)" class="py-3 lh-sm item-chat" aria-current="true">' +
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
                                if ($primeraCargaChats) {
                                    verificarChatExistente(data);
                                }
                                dataAnteriorChat = [];
                                dataAnteriorChat.push(data);
                            }
                            if ($primeraCargaChats != true) {
                                mensajesNuevos();
                            }
                        }
                    }
                    $sumatoriaMensajesSinLeer = 0;

                    $primeraCargaChats = false;
                }else{
                    alert("Ocurrio un error al trar los chats");
                }
            }
        }
        xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Chats/buscarChats',true);
        xmlhttp.send(formJSON);
    }
}

