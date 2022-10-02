function ModalFormularioSolicitud() {
    //Abrir Modal - Crear Solicitud
    var myModal = new bootstrap.Modal(
      document.getElementById("ventana-modal")
    );
    myModal.toggle();
    //Cerrar Modal - Crear Solicitud
    document.getElementById("close").addEventListener("click", function () {
        myModal.hide();
    });
    //Cerrar Modal - Crear Solicitud
    document.getElementById("cancelar").addEventListener("click", function () {
        myModal.hide();
    });
     
    document.getElementById("enviar").addEventListener("click", function () {
      //Cuerpo Modal
      document.getElementById('formularioEnviarSolicitud').style.display = 'none';
      document.getElementById('avisoConfirmarEnviarSolicitud').style.display = 'block';
      //Pie Modal
      document.getElementById('botonesEnviarSolicitud').style.display = 'none';
      document.getElementById('botonesConfirmarEnviarSolicitud').style.display = 'block';
  
      //Opcion Atrás
      document.getElementById("volverAtras").addEventListener("click", function () {
        //Cuerpo Modal
        document.getElementById('formularioEnviarSolicitud').style.display = 'block';
        document.getElementById('avisoConfirmarEnviarSolicitud').style.display = 'none';
        //Pie Modal
        document.getElementById('botonesEnviarSolicitud').style.display = 'block';
        document.getElementById('botonesConfirmarEnviarSolicitud').style.display = 'none';
      });
    });
}

//#region Crear Solicitud
document.getElementById('confSoliCarg').style.display = 'none';
document.getElementById('confSoliCarg').style.width = '19.5px';
document.getElementById('confSoliCarg').style.height = '19.5px';

const formularioCrearSolicitud = document.getElementById('crearSolicitud');

formularioCrearSolicitud.addEventListener('submit', (e) => {
    document.getElementById('enviarSolicitud').disabled = true;
    const fechaSolicitudValue = fechaSolicitud.value.trim();
    const seleccionConsultaeValue = seleccionConsulta.value.trim();
    const obraSocialSolicitudValue = obraSocialSolicitud.value.trim();
    const horaDesdeSolicitudValue = horaDesdeSolicitud.value.trim();
    const horaHastaSolicitudValue = horaHastaSolicitud.value.trim();

    $horaDesdeSolicitud = fechaSolicitudValue + " " + horaDesdeSolicitudValue;
    $horaHastaSolicitud = fechaSolicitudValue + " " + horaHastaSolicitudValue;

    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    //Enviar AJAX
    document.getElementById('confirmarSolicitud').style.display = 'none';
    document.getElementById('confSoliCarg').style.display = 'block';

    $id_paciente = localStorage.getItem("id_paciente");

    crearSolicitud(seleccionConsultaeValue, obraSocialSolicitudValue, $horaDesdeSolicitud, $horaHastaSolicitud, $id_paciente, parametro);
}); 
//#endregion