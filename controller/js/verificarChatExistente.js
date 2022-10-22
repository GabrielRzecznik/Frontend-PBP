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
            buscarProfesionalPorNombreUsuario(chatPorHash);
            
            document.getElementById('mensajes').classList.add('contenedor-chat');
            document.getElementById('mensajes').classList.remove('contenedor-sin-chat');
            document.getElementById('tituloSinChat').classList.add('ocultar');
            //document.getElementById('fromEnvMen').classList.remove('ocultar');
            document.getElementById('fromEnvMen').classList.remove('ocultar');
        }
    }else{
        document.getElementById('loader').classList.add("ocultar");
    }
}