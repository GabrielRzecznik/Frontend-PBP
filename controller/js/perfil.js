//Obtener parametro de URL 
var parametro = location.search;
parametro = parametro.slice(1);
var acceso = "perfil";
buscarPorNombreUsuario(parametro, acceso);

let botonGrilla = document.getElementById('botonGrilla');

botonGrilla.innerHTML = '<a href="../view/grilla.php?'+parametro+'" class="btn btn-primary btn-sm botonSolicitarTurno">Solicitar Turno</a>';

let botonChat = document.getElementById('botonChat');

botonChat.innerHTML = '<a href="../view/chats.php#'+parametro+'" class="btn btn-success btn-sm botonEnviarMensaje">Enviar Mensaje</a>';

document.getElementById("mostrarLapiz").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');
    
    var acceso = "navegador";
    var nombreUsuario = localStorage.getItem("nombreUsuario");
    
    buscarPorNombreUsuario(nombreUsuario, acceso);
    dispararFormEditarPaciente();
});