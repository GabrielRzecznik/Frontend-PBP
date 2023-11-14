//Verificar si hay logueo
window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    const instancia = "navegador";
    controlAcceso(instancia);
});

//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

buscarPerfil(parametro);

let botonGrilla = document.getElementById('botonGrilla');

botonGrilla.innerHTML = '<a href="./view/grilla.php?'+parametro+'" class="btn btn-primary btn-sm botonSolicitarTurno">Solicitar Turno</a>';

let botonChat = document.getElementById('botonChat');

botonChat.innerHTML = '<a href="./view/chats.php#'+parametro+'" class="btn btn-success btn-sm botonEnviarMensaje">Enviar Mensaje</a>';

document.getElementById("mostrarLapiz").addEventListener("click", function() {
    cerrarTodosLosMensajes();
});