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
     
    document.getElementById("aceptar-solicitud").addEventListener("click", function () {
        document.getElementById("aceptar-solicitud").disabled = false;
        document.getElementById("rechazar-solicitud").disabled = false;
        var respuesta = "Aceptada";
        responderSolicitud(id_solicitud, respuesta);
    });

    document.getElementById("rechazar-solicitud").addEventListener("click", function () {
        document.getElementById("aceptar-solicitud").disabled = false;
        document.getElementById("rechazar-solicitud").disabled = false;
        var respuesta = "Rechazada";
        responderSolicitud(id_solicitud, respuesta);
    });
}