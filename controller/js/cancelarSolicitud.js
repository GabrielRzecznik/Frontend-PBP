function ModalCancelarSolicitud(id_solicitud) {
    //Abrir Modal - Cancelar Solicitud
    var myModal2 = new bootstrap.Modal(
      document.getElementById("ventana-modal-cancelar-solicitud")
    );
    myModal2.toggle();
    //Cerrar Modal - Crear Solicitud
    document.getElementById("close-cancelar-solicitud").addEventListener("click", function () {
        myModal2.hide();
    });
    //Cerrar Modal - Crear Solicitud
    document.getElementById("cancelar-cancelar-solicitud").addEventListener("click", function () {
        myModal2.hide();
    });
     
    document.getElementById("cancelar-solicitud").addEventListener("click", function () {
        cancelarSolicitud(id_solicitud);
    });
}