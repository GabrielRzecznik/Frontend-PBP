//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null && localStorage.getItem("nombreUsuario") == null) {
    window.location.href = "../";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

buscarPerfil(parametro);

let botonGrilla = document.getElementById('botonGrilla');

botonGrilla.innerHTML = '<a href="../view/grilla.php?'+parametro+'" class="btn btn-primary btn-sm botonSolicitarTurno">Solicitar Turno</a>';

let botonChat = document.getElementById('botonChat');

botonChat.innerHTML = '<a href="../view/chats.php#'+parametro+'" class="btn btn-success btn-sm botonEnviarMensaje">Enviar Mensaje</a>';

