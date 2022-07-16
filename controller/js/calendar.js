//Fecha actual
let date = new Date();
//let dia = date.getDate();
//let mes = date.getMonth()+1;
//let año = date.getFullYear();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));//Se tratan como String al mes y la fecha ya que si tienen un 0 por delante y es entero lo omite

//Full Calendar
document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      locale: "es",//Idioma
      
      //Cargar Eventos - Solicitudes, Turnos
      events: [
        {
          //Estilo Solicitud
          id: 'solicitud',
          title: 'Solicitud Enviada!',
          start: '2022-07-29 10:00:00',
          end: '2022-07-29 10:45:00',
          backgroundColor: '#72a400',
          borderColor: '#649000'
        },
        {
          //Estilo Turno
          id: 'turno',
          title: 'Turno Confirmado!',
          start: '2022-07-29 09:00:00',
          end: '2022-07-29 09:45:00',
          backgroundColor: '#CC8400',
          borderColor: '#b77600'
        },
        {
          //Estilo Horario
          id: 'horarioDisponible',
          title: 'Horario Disponible',
          start: '2022-07-29 08:00:00',
          end: '2022-07-29 08:45:00',
          backgroundColor: '#3264c1',
          borderColor: '#003eb2'
        },
        {
          //Estilo Horario No Disponible
          id: 'horarioNoDisponible',
          title: 'Horario No Disponible',
          start: '2022-07-29 07:00:00',
          end: '2022-07-29 07:45:00',
          backgroundColor: '#838383',
          borderColor: '#707070'
        }

      ],

      dayHeaderFormat: {
        weekday: 'long'
      },
      
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        //meridiem: 'long'
      },

      slotDuration: '01:00',//Tiempo de consulta + descanso
      slotMinTime: '07:00',//Día desde
      slotMaxTime: '21:00',//Día hasta
      titleFormat: {//Texto parte superior
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
        weekday: 'long'
      },
      headerToolbar: {
        left: "prev,next,today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      eventClick: function (info) {
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
            console.log("Error en el switch del armado de mes del evento");
            break;
        }
        var dia = infoDesde.substring(8, 10);
        
        var fecha = año + "-" + mes + "-" + dia;

        var hora = myDate.getHours();
        var minutos = myDate.getMinutes();
        var segundos = myDate.getSeconds();
        var horaActual = hora + ":" + minutos + ":" + segundos;

        var horaDesde = infoDesde.substring(16,24);
        var horaHasta = infoHasta.substring(16,24);

        if (fecha >= fechaActual) {
          console.log(horaActual);
          
          

          console.log(infoDesde);
          console.log(fecha);
          console.log(fechaActual);
          //Enviar Info - Campos Modal - Crear Solicitud
          document.getElementById("fecha").value = fecha;
          document.getElementById("horaDesdeSolicitud").value = horaDesde;
          document.getElementById("horaHastaSolicitud").value = horaHasta;
          
          //Ejecutar Modal - Crear Solicitud
          ModalFormularioSolicitud();
        }else{
          alert("No se puede enviar solicitud a una fecha anterior a la actual");
        }
       
        /*var manejoDeInfo = info.dateStr;
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
   //Cerrar Modal - Crear Solicitud
   document.getElementById("enviar").addEventListener("click", function () {
    myModal.hide();
    ModalConfirmación();
  });
}

function ModalConfirmación(){
  //Abrir Modal - Confirmar Envio Solicitud
  var ConfirmaciónModal = new bootstrap.Modal(
    document.getElementById("confirmación-modal")
  );
  ConfirmaciónModal.toggle();
  //Cerrar Modal - Confirmar Envio Solicitud - VER SI NO SE PUEDEN UNIFICAR
  document.getElementById("volverAtras").addEventListener("click", function () {
    ConfirmaciónModal.hide();
    ModalFormularioSolicitud();
  });
  
  document.getElementById("cancelarConfirmación").addEventListener("click", function () {
      ConfirmaciónModal.hide();
  });
}