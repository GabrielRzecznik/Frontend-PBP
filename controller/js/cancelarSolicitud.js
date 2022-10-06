$id_solicitud = null;

function ModalCancelarSolicitud(id_solicitud) {
    //Abrir Modal - Cancelar Solicitud
    var myModal2 = new bootstrap.Modal(
      document.getElementById("ventana-modal-cancelar-solicitud")
    );
    myModal2.toggle();
    //Cerrar Modal - Cancelar Solicitud
    document.getElementById("close-cancelar-solicitud").addEventListener("click", function () {
        myModal2.hide();
    });
    //Cerrar Modal - Cancelar Solicitud
    document.getElementById("cancelar-cancelar-solicitud").addEventListener("click", function () {
        myModal2.hide();
    });
     
    $id_solicitud = id_solicitud;
}

document.getElementById("cancelar-solicitud").addEventListener("click", function () {
    cancelarSolicitud($id_solicitud);
});