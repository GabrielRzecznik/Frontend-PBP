let mensajes = document.getElementById('mensajes');

var data = "";

$nom = "";
$ape = "";
$nuc = "";

$cha = "";
$rem = "";
$des = "";
$rol = "";

$actualizarMensajes = "";

$ultimoId_mensajeAnterior = 0;

var ids_mensaje = []; 

function buscarMensajes(id_chat, nombreChat, apellidoChat, nombreUsuarioChat, rem, des, rol, priCar){
    document.getElementById('ocultarLista').classList.add('ocultarSoloCelulares');
    document.getElementById('ocultarChat').classList.remove('ocultarSoloCelulares');

    clearInterval($actualizarMensajes);
    clearInterval($actualizarChats);
    
    document.getElementById("mensaje").disabled = false;

    //Actualiza cada 1 segundo
    $actualizarMensajes = setInterval(actualizarMensajesEnTiempoReal, 1000);
    
    let nomC = document.getElementById('nombreChat');
    let apeC = document.getElementById('apellidoChat');
    let nuC = document.getElementById('nombreUsuarioChat');
    let opcionesChat = document.getElementById('opcionesChat');
    
    var primerEjecucionChat = true;

    function actualizarMensajesEnTiempoReal() {
        
       
        $nom = nombreChat;
        $ape = apellidoChat;
        $nuc = nombreUsuarioChat;
        
        $cha = id_chat;
        $rem = rem;
        $des = des;
        $rol = rol;
        
        var formData = new FormData();
        formData.append("id_chat", id_chat);
        var formJSON=JSON.stringify(Object.fromEntries(formData));
       
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
                if (xmlhttp.status == 200) {//Volvio Bien
                    document.getElementById('fromEnvMen').classList.remove('ocultar');
    
                    data=JSON.parse(xmlhttp.responseText);
                    
                    nomC.innerHTML = nombreChat;
                    apeC.innerHTML = apellidoChat;
                    nuC.innerHTML = nombreUsuarioChat + '<hr>';

                    document.getElementById('mensajes').classList.remove('contenedor-sin-chat');
                    document.getElementById('mensajes').classList.add('contenedor-chat');
                    
                    $ultimoId_mensaje = 0;

                    for (let i = 0; i < data.length; i++) {
                        if (data[i]["id_mensaje"] > $ultimoId_mensaje) {
                            $ultimoId_mensaje = data[i]["id_mensaje"];
                            $remitenteMensaje = data[i]["remitente"];
                            $destinatarioMensaje = data[i]["destinatario"];
                        }
                    }

                    //REPLANTEAR
                    if (($ultimoId_mensaje > $ultimoId_mensajeAnterior) || ($remitenteMensaje == $remitenteMensajeAnterior) && ($destinatarioMensaje == $destinatarioMensajeAnterior)) {//Pensar mañana tranquilo
                        console.log("Actualización")
                        //console.log(data[1]);
                        //console.log($dataAnterior[1]);
                        opcionesChat.innerHTML = '<div class="flex-shrink-1 dropdown">' +
                            '<span href="#" class="boton-opciones-chat" id="dropdownOption1" data-bs-toggle="dropdown" aria-expanded="false">' +
                                '<span data-bs-dismiss="modal2" aria-label="Close"><i class="bi bi-three-dots-vertical"></i></span>' +
                            '</span>' +
                            '<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownOption1">' +
                                '<li><a class="dropdown-item" href="./perfil.php?' + nombreUsuarioChat.substr(1) + '" id="">Ver perfil</a></li>' +
                                //'<li><hr class="dropdown-divider"></li>' +
                                //'<li><a class="dropdown-item" href="#" id="borrarChat">Borrar chat</a></li>' +
                            '</ul>' +
                        '</div>';
                        
                        mensajes.innerHTML = "";
        
                        $fechaAxuliar = "";
                        $hoy = false;
                        $vis = false;
        
                        if (data != "") {
                            //var ultimoMensaje = document.getElementById('ultimoMensaje'+data[0]["id_cha"]);
                            //var ultimoMensajeHora = document.getElementById('ultimoMensajeHora'+data[0]["id_cha"]);
                            //let mensajeAnterior = 0;

                            for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                                if (rol == "Paciente") {
                                    if (data[i]["destinatario"] == localStorage.getItem("id_paciente") && data[i]["visto"] == false) {
                                        ids_mensaje.push(data[i]["id_mensaje"]);
                                    }
                                }else{
                                    if (data[i]["destinatario"] == localStorage.getItem("id_profesional") && data[i]["visto"] == false) {
                                        ids_mensaje.push(data[i]["id_mensaje"]);
                                    }
                                }
                                
                                if ((primerEjecucionChat) && (data[i]["visto"] == false) && ((data[i]["destinatario"] == localStorage.getItem("id_paciente") || data[i]["destinatario"] == localStorage.getItem("id_profesional")))) {
                                    $vis = true;
                                    mensajes.innerHTML += '<div class="indicadorDia">Nuevo</div>';
                                    primerEjecucionChat = false;
                                }

                                $fechaHoraMen = data[i]["fechaHora"];
                                $fechaMen = $fechaHoraMen.slice(0, 10);
                                $añoMen = $fechaHoraMen.slice(0, 4);
                                $mesMen = $fechaHoraMen.slice(5, 7);
                                $diaMen = $fechaHoraMen.slice(8, 10);
        
                                if ($diaMen < 10) {
                                    $diaMen = $fechaHoraMen.slice(9, 10);//Testear
                                }
        
                                $horaMen = $fechaHoraMen.slice(14, 19);
                                
                                if ($fechaMen == fechaActual) {
                                    if ($hoy == false) {
                                        $hoy = true;
                                        mensajes.innerHTML += '<div class="indicadorDia">Hoy</div>';
                                    }
                                }else{
                                    $fechaMen = new Date($fechaMen).getDay();
            
                                    switch ($fechaMen) {
                                        case 0:
                                            $diaSemana = "Domingo";
                                            break;
                                        case 1:
                                            $diaSemana = "Lunes";
                                            break;
                                        case 2:
                                            $diaSemana = "Martes";
                                            break;
                                        case 3:
                                            $diaSemana = "Miércoles";
                                            break;
                                        case 4:
                                            $diaSemana = "Jueves";
                                            break;
                                        case 5:
                                            $diaSemana = "Viernes";
                                            break;
                                            case 6:
                                            $diaSemana = "Sábado";
                                            break;
                                        default:
                                            break;
                                    }
        
                                    switch ($mesMen) {
                                        case "01":
                                            $mesMen = "Enero";
                                            break;
                                        case "02":
                                            $mesMen = "Febrero";
                                            break;
                                        case "03":
                                            $mesMen = "Marzo";
                                            break;
                                        case "04":
                                            $mesMen = "Abril";
                                            break;
                                        case "05":
                                            $mesMen = "Mayo";
                                            break;
                                        case "06":
                                            $mesMen = "Junio";
                                            break;
                                        case "07":
                                            $mesMen = "Julio";
                                            break;
                                        case "08":
                                            $mesMen = "Agosto";
                                            break;
                                        case "09":
                                            $mesMen = "Septiembre";
                                            break;
                                        case "10":
                                            $mesMen = "Octubre";
                                            break;
                                        case "11":
                                            $mesMen = "Noviembre";
                                            break;
                                        case "12":
                                            $mesMen = "Diciembre";
                                            break;
                                        default:
                                            break;
                                    }
                                    
                                    if ($fechaMen != $fechaAxuliar) {
                                        mensajes.innerHTML += '<div class="indicadorDia">'+ $diaSemana +' ' + $diaMen + ' de ' + $mesMen + ' '+ $añoMen +'</div>';
                                    }
                                }
        
                                if (data[i]["remitente"] == localStorage.getItem("id_paciente") || data[i]["remitente"] == localStorage.getItem("id_profesional")) {
                                    //Mensaje Enviado
                                    mensajes.innerHTML += '<div class="mensajeEspacio">' +
                                        '<div class="mensajeEnviado">' +
                                            '<div class="contenidoMensajeEnviado">' +
                                                data[i]["descripcion"] + '&nbsp' +
                                                '<div class="horaMensajeRecibido">' +
                                                    $horaMen + '&nbsp' +
                                                    /*'<span class="borrarMensaje">' +
                                                        '<i class="bi bi-trash-fill"></i>' +
                                                    '</span>' +*/
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';
                                }else{
                                    //Mensaje Recibido
                                    mensajes.innerHTML += '<div class="mensajeEspacio">' +
                                        '<div class="mensajeRecibido">' +
                                            '<div class="contenidoMensajeRecibido">' +
                                                data[i]["descripcion"] + '&nbsp' +
                                                '<div class="horaMensajeRecibido">' + $horaMen + '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';
                                }
        
                                $fechaAxuliar = $fechaMen;
                            }

                            //ultimoMensaje.innerHTML = $ultimoMensaje;
                            //ultimoMensajeHora.innerHTML = $ultimoMensajeHora;

                            //Scroll
                            var men = document.getElementById("mensajes");
                            men.scrollTop = men.scrollHeight;
                        }
                    }

                    $remitenteMensajeAnterior = $remitenteMensaje;
                    $destinatarioMensajeAnterior = $destinatarioMensaje;

                    if ($ultimoId_mensaje > $ultimoId_mensajeAnterior) {
                        $ultimoId_mensajeAnterior = $ultimoId_mensaje;
                    }

                    $dataAnterior = data;

 
                    if (ids_mensaje != "") {
                        mensajesVistos(ids_mensaje);                    
                    }else{
                        buscarChats();
                    } 
                }
                primerEjecucionChat = false;
            }
        }
        xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/buscarMensajes',true);
        xmlhttp.send(formJSON);
    }
}