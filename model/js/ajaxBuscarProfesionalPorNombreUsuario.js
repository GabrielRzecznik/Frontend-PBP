function buscarProfesionalPorNombreUsuario(nombreUsuario){
    clearInterval($actualizarMensajes);
    clearInterval($actualizarChats);

    let mensajeNuevoChat = document.getElementById('mensajeNuevoChat');
    let nomC = document.getElementById('nombreChat');
    let apeC = document.getElementById('apellidoChat');
    let nuC = document.getElementById('nombreUsuarioChat');
    let opcionesChat = document.getElementById('opcionesChat');
    
    var formData= new FormData();
    formData.append("nombreUsuario", nombreUsuario);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                nomC.innerHTML = data["nombre"];
                apeC.innerHTML = data["apellido"];
                nuC.innerHTML = '@' + nombreUsuario + '<hr>';

                $nom = data["nombre"];
                $ape = data["apellido"];
                $nuc = '@' + nombreUsuario;

                //Información importante del chat
                $cha = "Nuevo";
                $rem = localStorage.getItem("id_paciente");
                $des = nombreUsuario;
                $rol = "Paciente";
                
                $id_pro = data["id_profesional"];
                
                opcionesChat.innerHTML = '<div class="flex-shrink-1 dropdown">' +
                    '<span href="#" class="boton-opciones-chat" id="dropdownOption1" data-bs-toggle="dropdown" aria-expanded="false">' +
                        '<span data-bs-dismiss="modal2" aria-label="Close"><i class="bi bi-three-dots-vertical"></i></span>' +
                    '</span>' +
                    '<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownOption1">' +
                        '<li><a class="dropdown-item" href="./perfil.php?' + nombreUsuario + '" id="">Ver perfil</a></li>' +
                        //'<li><hr class="dropdown-divider"></li>' +
                        //'<li><a class="dropdown-item" href="#" id="borrarChat">Borrar chat</a></li>' +
                    '</ul>' +
                '</div>';
                mensajeNuevoChat.innerHTML = '<div class="alert alert-warning enviarNuevoMensaje">¡Enviale un mensaje al<br>profesional <b>' + data["nombre"] + ' ' + data["apellido"] + '.</b><br>Para crear un nuevo chat!</div>';
                
                //Actualiza cada 1 segundo
                $actCht = setInterval(actCht, 1000);
            }else{
                alert("Ocurrio un error al enviar el mensaje");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarProfesionalPorNombreUsuario',true);
    xmlhttp.send(formJSON);
}

function actCht() {
    buscarChats();
}