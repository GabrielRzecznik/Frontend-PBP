$id_horario = null;

function ModalRehabilitarHorario(id_horario) {
    //Abrir Modal - Rehabilitar Horario
    var myModal3 = new bootstrap.Modal(
      document.getElementById("ventana-modal-rehabilitar-horario")
    );
    myModal3.toggle();
    //Cerrar Modal - Rehabilitar Horario
    document.getElementById("close-rehabilitar-horario").addEventListener("click", function () {
        myModal3.hide();
    });
    //Cerrar Modal - Rehabilitar Horario
    document.getElementById("cancelar-rehabilitar-horario").addEventListener("click", function () {
        myModal3.hide();
    });
     
    $id_horario = id_horario;
}

document.getElementById("rehabilitar-horario").addEventListener("click", function () {
    document.getElementById("rehabilitar-horario").disabled = true;
    rehabilitarHorario($id_horario);
});