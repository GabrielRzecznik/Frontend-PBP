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
     
    document.getElementById("responder-solicitud").addEventListener("click", function () {
        responderSolicitud(id_solicitud);
    });
}