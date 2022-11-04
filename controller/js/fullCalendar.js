function armadoFullCalendar() {
    //Fecha actual
    let date2 = new Date();
    //let dia = date.getDate();
    //let mes = date.getMonth()+1;
    //let año = date.getFullYear();
    let fechaActual2 = String(date2.getFullYear() + '-' + String(date2.getMonth() + 1).padStart(2, '0') + '-' + String(date2.getDate()).padStart(2, '0'));//Se tratan como String al mes y la fecha ya que si tienen un 0 por delante y es entero lo omite

    //Full Calendar
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
    
    locale: "es",//Idioma
    navLinks: true,
    navLinkWeekClick: function(weekStart, jsEvent) {
        console.log('week start', weekStart.toISOString());
        console.log('coords', jsEvent.pageX, jsEvent.pageY);
      },
    //Cargar Eventos - Solicitudes, Turnos
    events: $arrayTerminadoEventos,

    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
        timeGrid: {
        dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
        }
    },
    slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        //meridiem: 'long'
    },
    //titleFormat: { year: 'numeric', month: 'long' },
    headerToolbar: {
        left: "prev,next,today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    navLinkWeekClick: function(weekStart, jsEvent) {
        console.log('week start', weekStart.toISOString());
        console.log('coords', jsEvent.pageX, jsEvent.pageY);
      }
    ,
    eventClick: function (info) {
        if (info.view.type != "dayGridMonth") {//Si no es clickeado en "MES"
            switch (info.event._def.title.substring(0, 18)) {
                case "Horario disponible":
                    if ($id_prof == localStorage.getItem("id_profesional")) {
                        //DESHABILITAR HORARIO
                        var infoDesdeHorario = String(info.event.start);
                        var infoHastaHorario = String(info.event.end);
                        var profesional = localStorage.getItem("id_profesional");

                        var diaDesde = infoDesdeHorario.substring(8, 10);
                        var diaHasta = infoHastaHorario.substring(8, 10);

                        var mesDesde = infoDesdeHorario.substring(4, 7);

                        switch (mesDesde) {
                            case "Jan":
                                mesDesde = "01";
                                break;
                            case "Feb":
                                mesDesde = "02";
                                break;
                            case "Mar":
                                mesDesde = "03";
                                break;
                            case "Apr":
                                mesDesde = "04";
                                break;
                            case "May":
                                mesDesde = "05";
                                break;
                            case "Jun":
                                mesDesde = "06";
                                break;
                            case "Jul":
                                mesDesde = "07";
                                break;
                            case "Aug":
                                mesDesde = "08";
                                break;
                            case "Sep":
                                mesDesde = "09";
                                break;
                            case "Oct":
                                mesDesde = "10";
                                break;
                            case "Nov":
                                mesDesde = "11";
                                break;
                            case "Dec":
                                mesDesde = "12";
                                break;
                            default:
                                console.log("Ocurrio un error inesperado");
                                break;
                        }

                        var mesHasta = infoHastaHorario.substring(4, 7);

                        switch (mesHasta) {
                            case "Jan":
                                mesHasta = "01";
                                break;
                            case "Feb":
                                mesHasta = "02";
                                break;
                            case "Mar":
                                mesHasta = "03";
                                break;
                            case "Apr":
                                mesHasta = "04";
                                break;
                            case "May":
                                mesHasta = "05";
                                break;
                            case "Jun":
                                mesHasta = "06";
                                break;
                            case "Jul":
                                mesHasta = "07";
                                break;
                            case "Aug":
                                mesHasta = "08";
                                break;
                            case "Sep":
                                mesHasta = "09";
                                break;
                            case "Oct":
                                mesHasta = "10";
                                break;
                            case "Nov":
                                mesHasta = "11";
                                break;
                            case "Dec":
                                mesHasta = "12";
                                break;
                            default:
                                console.log("Ocurrio un error inesperado");
                                break;
                        }
                        
                        var añoDesde = infoDesdeHorario.substring(11, 15);
                        var añoHasta = infoHastaHorario.substring(11, 15);
                        
                        var horaDesde = infoDesdeHorario.substring(16, 24);
                        var horaHasta = infoHastaHorario.substring(16, 24);

                        var infoDesdeHorario = añoDesde+"-"+mesDesde+"-"+diaDesde+" "+horaDesde;
                        var infoHastaHorario = añoHasta+"-"+mesHasta+"-"+diaHasta+" "+horaHasta;
                        
                        ModalCancelarHorario(profesional, infoDesdeHorario, infoHastaHorario);
                    }else{
                        //CREAR SOLICITUD
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
                        var hora = (hora+3);
                        
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
                                    buscarDatosProfesionalCrearSolicitud($id_prof);
                                    ejecutarModalFormularioSolicitud();
                                }else{
                                    alert("No puedes enviar una solicitud sin una anterioridad mayor de 3 horas.");
                                }
                            }else{
                                buscarDatosProfesionalCrearSolicitud($id_prof);
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
                    }
                    break;
                case "Solicitud enviada ":
                    //Cancelar Solicitud
                    var id_solicitud = String(info.event._def.publicId);
                    var tipoSolicitud = "solicitud_enviada";
                    buscarSolicitud(id_solicitud, tipoSolicitud);
                    ModalCancelarSolicitud(id_solicitud);
                    break;
                case "Solicitud recibida":
                    var id_solicitud = String(info.event._def.publicId);
                    var tipoSolicitud = "solicitud_recibida";
                    buscarSolicitud(id_solicitud, tipoSolicitud);
                    ModalResponderSolicitud(id_solicitud);
                    break;
                case "Turno confirmado a":
                    document.getElementById("vista-paciente").style.display = 'none';
                    document.getElementById("vista-profesional").style.display = 'block';
                    var id_turno = String(info.event._def.publicId);
                    var tipoTurno = "turno_confirmado";
                    buscarTurno(id_turno, tipoTurno);
                    $cancelador = "profesional";
                    ModalCancelarTurno(id_turno);
                    break;
                case "Turno confirmado p":
                    document.getElementById("vista-profesional").style.display = 'none';
                    document.getElementById("vista-paciente").style.display = 'block';
                    var id_turno = String(info.event._def.publicId);
                    $cancelador = "paciente";
                    ModalCancelarTurno(id_turno);
                    break;
                case "Horario no disponi":
                    if (parametro == localStorage.getItem("nombreUsuario")) {
                        var id_horario = String(info.event._def.publicId);
                        ModalRehabilitarHorario(id_horario);
                    }
                    break;
                default:
                    break;
            }
        }
    },
    //height: 650,
    //contentHeight: 600,
    slotDuration: $slotDuration,
    slotMinTime: $slotMinTime,
    slotMaxTime: $slotMaxTime
    });
    //calendar.updateSize();
    calendar.render();
    calendar.updateSize();
    
    cargarNavegador();

    let botonDescargarGrilla = document.getElementById("descargarGrilla");
    botonDescargarGrilla.disabled = false;
}

document.getElementById('calendar').classList.add('altoGrilla');
