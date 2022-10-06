$id_solicitud = null;

function ModalResponderSolicitud(id_solicitud) {
    //Abrir Modal - Responder Solicitud
    var myModal4 = new bootstrap.Modal(
      document.getElementById("ventana-modal-responder-solicitud")
    );
    myModal4.toggle();
    
    //Cerrar Modal - Responder Solicitud
    document.getElementById("close-responder-solicitud").addEventListener("click", function () {
        myModal4.hide();
    });

    //Cerrar Modal - Responder Solicitud
    document.getElementById("cancelar-responder-solicitud").addEventListener("click", function () {
        myModal4.hide();
    });

    $id_solicitud = id_solicitud;
}

//Aceptar Solicitud
document.getElementById('cargando-boton-aceptar-solicitud').style.display = 'none';
document.getElementById('cargando-boton-aceptar-solicitud').style.width = '19.5px';
document.getElementById('cargando-boton-aceptar-solicitud').style.height = '19.5px';
 
document.getElementById("aceptar-solicitud").addEventListener("click", function () {
    document.getElementById("aceptar-solicitud").disabled = true;
    document.getElementById("rechazar-solicitud").disabled = true;
    
    document.getElementById('texto-boton-aceptar-solicitud').style.display = 'none';
    document.getElementById('cargando-boton-aceptar-solicitud').style.display = 'block';
    
    var respuesta = "Aceptada";
    responderSolicitud($id_solicitud, respuesta);
});

//Rechazar Solicitud
document.getElementById('cargando-boton-rechazar-solicitud').style.display = 'none';
document.getElementById('cargando-boton-rechazar-solicitud').style.width = '19.5px';
document.getElementById('cargando-boton-rechazar-solicitud').style.height = '19.5px';

document.getElementById("rechazar-solicitud").addEventListener("click", function () {
    document.getElementById("aceptar-solicitud").disabled = true;
    document.getElementById("rechazar-solicitud").disabled = true;

    document.getElementById('texto-boton-rechazar-solicitud').style.display = 'none';
    document.getElementById('cargando-boton-rechazar-solicitud').style.display = 'block';

    var respuesta = "Rechazada";
    responderSolicitud($id_solicitud, respuesta);
});