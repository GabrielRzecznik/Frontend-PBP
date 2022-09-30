function ModalCancelarTurno(id_turno) {
    //Abrir Modal - Cancelar Turno
    var myModal2 = new bootstrap.Modal(
      document.getElementById("ventana-modal-cancelar-turno")
    );
    myModal2.toggle();
    //Cerrar Modal - Cancelar Turno
    document.getElementById("close-cancelar-turno").addEventListener("click", function () {
        myModal2.hide();
    });
    //Cerrar Modal - Cancelar Turno
    document.getElementById("cancelar-cancelar-turno").addEventListener("click", function () {
        myModal2.hide();
    });
     
    document.getElementById("cancelar-turno").addEventListener("click", function () {
        cancelarTurno(id_turno);
    });
}