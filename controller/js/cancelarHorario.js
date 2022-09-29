function ModalCancelarHorario() {//Pasar 3 parametros
    //Abrir Modal - Cancelar Horario
    var myModal3 = new bootstrap.Modal(
      document.getElementById("ventana-modal-cancelar-horario")
    );
    myModal2.toggle();
    //Cerrar Modal - Crear Horario
    document.getElementById("close-cancelar-horario").addEventListener("click", function () {
        myModal3.hide();
    });
    //Cerrar Modal - Crear Horario
    document.getElementById("cancelar-cancelar-horario").addEventListener("click", function () {
        myModal3.hide();
    });
     
    document.getElementById("cancelar-horario").addEventListener("click", function () {
        cancelarHorario(id_pro, inicio, fin);
    });
}