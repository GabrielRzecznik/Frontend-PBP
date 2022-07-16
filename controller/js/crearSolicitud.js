//#region Envia Formulario
const formulario = document.getElementById('crearSolicitud');

formulario.addEventListener('submit', (e) => {
    const seleccionConsultaValue = seleccionConsulta.value.trim();
    const obraSocialSolicitudValue = obraSocialSolicitud.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
           
    //Enviar AJAX
    
    var horaDesdeS = horaDesdeSolicitud.value + " " + fecha.value;
    var horaHastaS =  horaHastaSolicitud.value + " " + fecha.value;
    
    console.log(horaDesdeS);
    console.log(horaHastaS);
   
    crearSolicitud();
    

}); 
//#endregion