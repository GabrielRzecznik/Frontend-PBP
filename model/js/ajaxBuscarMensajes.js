let mensajes = document.getElementById('mensajes');

function buscarMensajes(id_chat, nombreChat, apellidoChat, nombreUsuarioChat){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
   
    let nomC = document.getElementById('nombreChat');
    let apeC = document.getElementById('apellidoChat');
    let nuC = document.getElementById('nombreUsuarioChat');
    let opcionesChat = document.getElementById('opcionesChat');
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                document.getElementById('fromEnvMen').classList.remove('ocultar');

                nomC.innerHTML = nombreChat;
                apeC.innerHTML = apellidoChat;
                nuC.innerHTML = nombreUsuarioChat + '<hr>';

                opcionesChat.innerHTML = '<div class="flex-shrink-1 dropdown">' +
                    '<span href="#" class="boton-opciones-chat" id="dropdownOption1" data-bs-toggle="dropdown" aria-expanded="false">' +
                        '<span data-bs-dismiss="modal2" aria-label="Close"><i class="bi bi-three-dots-vertical"></i></span>' +
                    '</span>' +
                    '<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownOption1">' +
                        '<li><a class="dropdown-item" href="#" id="">Ver perfil</a></li>' +
                        '<li><hr class="dropdown-divider"></li>' +
                        '<li><a class="dropdown-item" href="#" id="borrarChat">Borrar chat</a></li>' +
                    '</ul>' +
                '</div>';
                
                mensajes.innerHTML = "";

                var data=JSON.parse(xmlhttp.responseText);

                
                if (data != "") {        
                    for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                        mensajes.innerHTML += '<div class="indicadorDia">Lunes 7 de mayo 2022</div>';
                        
                        $fechaHoraMen = data[i]["fechaHora"];
                        $fechaMen = $fechaHoraMen.slice(0, 10);
                        $horaMen = $fechaHoraMen.slice(14, 19);
    
                        if ($fechaMen == fechaActual) {
                            $tiempoEnvio = $horaMen;
                        }else{
                            $fechaMen = new Date($fechaMen).getDay();
    
                            switch ($fechaMen) {
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

                        if (data[i]["remitente"] == localStorage.getItem("id_paciente") || data[i]["remitente"] == localStorage.getItem("id_profesional")) {
                            //Mensaje Enviado
                            mensajes.innerHTML += '<div class="mensajeEspacio">' +
                                '<div class="mensajeEnviado">' +
                                    '<div class="contenidoMensajeEnviado">' +
                                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!' +
                                        '<div class="horaMensajeEnviado">'+  +'</div>' +
                                    '</div>' +
                                '</div>' +
						    '</div>';
                        }else{
                            mensajes.innerHTML += '<div class="mensajeEspacio">' +
                                '<div class="mensajeRecibido">' +
                                    '<div class="contenidoMensajeRecibido">' +
                                        'Hola, buenos dias!' +
                                        '<div class="horaMensajeRecibido">23:56</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
                        }


                    }
                }

                /*mensajes.innerHTML = '<main class="scrollarea contenedor-chat">' +
						'<!--Indicador día-->' +
						'' +
						
						
						'<div class="mensajeEspacio">' +
							'<div class="mensajeRecibido">' +
								'<div class="contenidoMensajeRecibido">' +
									'Me gustaria solicitar un turno!' +
									'<div class="horaMensajeRecibido">23:56</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<!--Indicador día-->' +
						'<div class="indicadorMensajesNoLeidos">Mensajes no leídos</div>' +
						'<!--Mensaje Enviado-->' +
						'<div class="mensajeEspacio">' +
							'<div class="mensajeEnviado">' +
								'<div class="contenidoMensajeEnviado">' +
									'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!' +
									'<div class="horaMensajeEnviado">' +
										'23:56' +
										'<span class="borrarMensaje">' +
											'<i class="bi bi-trash-fill"></i>' +
										'</span>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="mensajeEspacio">' +
							'<div class="mensajeEnviado">' +
								'<div class="contenidoMensajeEnviado">' +
									'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!' +
									'<div class="horaMensajeEnviado">' +
										'23:56' +
										'<span class="borrarMensaje">' +
											'<i class="bi bi-trash-fill"></i>' +
										'</span>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</main>';*/
                

                
            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/buscarMensajes',true);
    xmlhttp.send(formJSON);
}
