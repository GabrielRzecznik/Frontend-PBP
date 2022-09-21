//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

gestorMostrarGrilla(parametro);

//No existe acceso externo al navegador para edición de perfil
$accesoPerfil = false;

//Fecha actual
let date2 = new Date();
//let dia = date.getDate();
//let mes = date.getMonth()+1;
//let año = date.getFullYear();
let fechaActual2 = String(date2.getFullYear() + '-' + String(date2.getMonth() + 1).padStart(2, '0') + '-' + String(date2.getDate()).padStart(2, '0'));//Se tratan como String al mes y la fecha ya que si tienen un 0 por delante y es entero lo omite

//La grilla pertenece a un profesional?
$prof = localStorage.getItem("id_profesional");


if ($prof != null) {
    buscarConfGrillaProf();
    $slotDuration = $duracionConsulta;
    $slotMinTime = $rangoHorarioDiaDesde;
    $slotMaxTime = $rangoHorarioDiaHasta;
}else{
    $slotDuration = '00:30';
    $slotMinTime = '00:00';
    $slotMaxTime = '24:00';
}

//Full Calendar
document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
    
    locale: "es",//Idioma
    
    //Cargar Eventos - Solicitudes, Turnos
    events: $arrayTerminadoEventos,

    slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        //meridiem: 'long'
    },

    slotDuration: $slotDuration,//Tiempo de consulta + descanso
    slotMinTime: $slotMinTime,//Día desde
    slotMaxTime: $slotMaxTime,//Día hasta
    //titleFormat: { year: 'numeric', month: 'long' },
    headerToolbar: {
        left: "prev,next,today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    eventClick: function (info) {
        console.log(info);
        console.log(info.event);

        var infoDesde = String(info.event.start);
        var infoHasta = String(info.event.end);
        
        var año = infoDesde.substring(11, 15);
        var mes = infoDesde.substring(4, 7);
        switch (mes) {
        case "Jan":
            mes = "01";
            break;
        case "Feb":
            mes = "02";
            break;
        case "Mar":
            mes = "03";
            break;
        case "Apr":
            mes = "04";
            break;
        case "May":
            mes = "05";
            break;
        case "Jun":
            mes = "06";
            break;
        case "Jul":
            mes = "07";
            break;
        case "Aug":
            mes = "08";
            break;
        case "Sep":
            mes = "09";
            break;
        case "Oct":
            mes = "10";
            break;
        case "Nov":
            mes = "11";
            break;
        case "Dec":
            mes = "12";
            break;
        default:
            console.log("Ocurrio un error inesperado");
            break;
        }
        var dia = infoDesde.substring(8, 10);
        
        var fecha = año + "-" + mes + "-" + dia;

        var h = new Date();
        var hora = h.getHours();
        var hora = (hora-3)
        if(hora < 10){
        hora = "0" + hora;
        }
        var minutos = h.getMinutes();
        if(minutos < 10){
        minutos = "0" + minutos;
        }

        var tresHorasAntes = hora + ":" + minutos + ":00";

        var horaDesde = infoDesde.substring(16,24);
        var horaHasta = infoHasta.substring(16,24);

        if (fecha >= fechaActual2) {

        //Setea el Modal Crear Solicitud
        //Cuerpo Modal
        document.getElementById('formularioEnviarSolicitud').style.display = 'block';
        document.getElementById('avisoConfirmarEnviarSolicitud').style.display = 'none';
        //Pie Modal
        document.getElementById('botonesEnviarSolicitud').style.display = 'block';
        document.getElementById('botonesConfirmarEnviarSolicitud').style.display = 'none';
        
        //console.log("Hora desde: "+horaDesde);
        //console.log("tres Horas Antes: "+tresHorasAntes);

        if (fecha == fechaActual2) {
            if(tresHorasAntes <= horaDesde){
            ejecutarModalFormularioSolicitud();
            }else{
            alert("No puedes enviar una solicitud sin una anterioridad mayor de 3 horas.");
            }
        }else{
            ejecutarModalFormularioSolicitud();
        }
        }else{
        alert("No se puede enviar solicitud a una fecha anterior a la actual");
        }
        
        function ejecutarModalFormularioSolicitud() {
        //Enviar Info - Campos Modal - Crear Solicitud
        document.getElementById("fechaSolicitud").value = fecha;
        document.getElementById("horaDesdeSolicitud").value = horaDesde;
        document.getElementById("horaHastaSolicitud").value = horaHasta;
        
        //Ejecutar Modal - Crear Solicitud
        ModalFormularioSolicitud();
        }
        /*
        var manejoDeInfo = info.dateStr;
        //Guardar datos
        
        //Tomamos solamente la fecha del día
        fechaClickeada = manejoDeInfo.substring(0, 10);
        //console.log(fechaClickeada);

        //Tomamos solamente la hora desde 
        var horaDesdeClickeada = manejoDeInfo.substring(11, 16);
        //console.log(horaDesdeClickeada);

        var horaHastaClickeada = horaDesdeClickeada.substring(0, 3) + 45;//Se suma segun la configuración del profesional
        //console.log(horaHastaClickeada);

        //Identificar que solo se ejecute si no esta en la vista mes
        if (horaHastaClickeada != 45) {
        var fechaSeleccionada = info.dateStr;
        //La fecha seleccionada debe mayor o igual a la fecha actual
        if (fechaSeleccionada >= fecha) {
            //Mostrar Información de Fecha y Hora
            document.getElementById("fecha").value = fechaClickeada;
            document.getElementById("horaDesdeSolicitud").value = horaDesdeClickeada;
            document.getElementById("horaHastaSolicitud").value = horaHastaClickeada;
            ModalFormularioSolicitud();
        }else{
            alert("No se puede enviar solicitud a una fecha anterior a la actual");
        }
        }else{
        alert("Ir al día");
        }
    */ 
    }
    });
    calendar.render();
});