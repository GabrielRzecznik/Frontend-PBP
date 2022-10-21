function verificarChatExistente($data) {
    let nuevoChat = true;
    let chatPorHash = location.hash;
    chatPorHash = chatPorHash.slice(1);

    if (chatPorHash != "") {
        for (let i = 0; i < $data.length; i++) {
            if (chatPorHash == $data[i]["nombreUsuario"]) {
                //Chat existente
                if ($data[i]["id_pacChat"] == localStorage.getItem("id_paciente")) {
                    buscarMensajes($data[i]["id_chat"],$data[i]["nombre"],$data[i]["apellido"],'@'+$data[i]["nombreUsuario"],$data[i]["id_pacChat"],$data[i]["id_proChat"],'Paciente');
                }else{
                    buscarMensajes($data[i]["id_chat"],$data[i]["nombre"],$data[i]["apellido"],'@'+$data[i]["nombreUsuario"],$data[i]["id_proChat"],$data[i]["id_pacChat"],'Profesional');
                }
                nuevoChat = false;
            }
        }
        if (nuevoChat) {
            //Nuevo chat
            

            $cha = "Nuevo";
            $rem = localStorage.getItem("id_paciente");
            $des = "";
            //$rol = rol;

            let nomC = document.getElementById('nombreChat');
            let apeC = document.getElementById('apellidoChat');
            let nuC = document.getElementById('nombreUsuarioChat');
            let opcionesChat = document.getElementById('opcionesChat');

            opcionesChat.innerHTML = '<div class="flex-shrink-1 dropdown">' +
                '<span href="#" class="boton-opciones-chat" id="dropdownOption1" data-bs-toggle="dropdown" aria-expanded="false">' +
                    '<span data-bs-dismiss="modal2" aria-label="Close"><i class="bi bi-three-dots-vertical"></i></span>' +
                '</span>' +
                '<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownOption1">' +
                    '<li><a class="dropdown-item" href="#" id="">Ver perfil</a></li>' +
                    //'<li><hr class="dropdown-divider"></li>' +
                    //'<li><a class="dropdown-item" href="#" id="borrarChat">Borrar chat</a></li>' +
                '</ul>' +
            '</div>';

            console.log("nuevo chat");
            nomC.innerHTML = "nombre";
            apeC.innerHTML = "apellido";
            nuC.innerHTML = '@'+"nombreUsuario" + '<hr>';

            mensajes.innerHTML = '<div class="alert alert-warning enviarNuevoMensaje">¡Enviale un mensaje al<br>profesional <b>Gabriel Rzecznik.</b><br>Para crear un nuevo chat!</div>';

            document.getElementById('mensajes').classList.remove('contenedor-sin-chat');
            document.getElementById('mensajes').classList.add('contenedor-chat');
            document.getElementById('fromEnvMen').classList.remove('ocultar');
        }
    }else{
        document.getElementById('loader').classList.add("ocultar");
    }
}