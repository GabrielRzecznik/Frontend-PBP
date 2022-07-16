//#region Envia Formulario
const formulario = document.getElementById('crearSolicitud');

formulario.addEventListener('submit', (e) => {
    //const seleccionConsultaValue = seleccionConsulta.value.trim();
    //const obraSocialSolicitudValue = obraSocialSolicitud.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    //JSON
    var Solicitud = {};
    Solicitud.seleccionConsulta = seleccionConsulta.value;
    Solicitud.obraSocialSolicitud =  obraSocialSolicitud.value;
    Solicitud.horaDesdeSolicitud = fecha.value + " " + horaDesdeSolicitud.value;
    Solicitud.horaHastaSolicitud = fecha.value + " " + horaHastaSolicitud.value;
    
    //Enviar AJAX
    crearSolicitud(Solicitud);
    
}); 
//#endregion