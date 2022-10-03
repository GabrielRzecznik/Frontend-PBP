let date3 = new Date();
let diaDisponible = date3.getDate();
let mesDisponible = date3.getMonth()+1;
let añoDisponible = date3.getFullYear();

/*if (parametro === localStorage.getItem("nombreUsuario") && localStorage.getItem("id_profesional") === "") {
    $slotDuration = '00:30';
    $slotMinTime = '00:00';
    $slotMaxTime = '24:00';
    gestorMostrarGrilla(parametro);
}*/

if (parametro === localStorage.getItem("nombreUsuario") && localStorage.getItem("id_profesional") === "") {
    $slotDuration = '00:30';
    $slotMinTime = '00:00';
    $slotMaxTime = '24:00';
    gestorMostrarGrilla(parametro);
}

if (parametro === localStorage.getItem("nombreUsuario") && localStorage.getItem("estadoProfesional") === "Sin configurar") {
    $slotDuration = '00:30';
    //$slotMinTime = '00:00';
    //$slotMaxTime = '24:00';
    gestorMostrarGrilla(parametro);
}

function gestorMostrarGrilla($nombreUsuario){
    var formData = new FormData();
    formData.append("nombreUsuario", $nombreUsuario);
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);

                //console.log(data[2]["id_pacSolicitud"]);
                //console.log(data[2]["id_proSolicitud"]);

                $arrayTerminadoEventos = [];

                $arrayEventos = data;

                console.log(data);
                        
                //$provincias = "";

                $color = '';
                $borde = '';
                $arrayEventos.forEach(function(eventos) {
                    //Armado Solicitud enviada
                    if (eventos["descripcion"] == "Solicitud enviada" && eventos["id_pacSolicitud"] == localStorage.getItem("id_paciente")) {
                        $color = '#bddbb0';
                        $borde = '#A3C197';
                        $titulo = 'Solicitud enviada '+eventos["profesional"];
                        $arrayTerminadoEventos.push(
                            {
                                id: eventos["id_solicitud"],
                                title: $titulo,
                                start: eventos["horaDesdeSolicitud"],
                                end: eventos["horaHastaSolicitud"],
                                backgroundColor: $color,
                                borderColor: $borde
                            }
                        );
                    }
                    //Armado Solicitud recibido
                    if (eventos["descripcion"] == "Solicitud enviada" && eventos["id_pacSolicitud"] != localStorage.getItem("id_paciente")) {
                        $color = '#87b972';
                        $borde = '#6aa84f';
                        $titulo = 'Solicitud recibida de '+eventos["paciente"];
                        $arrayTerminadoEventos.push(
                            {
                                id: eventos["id_solicitud"],
                                title: $titulo,
                                start: eventos["horaDesdeSolicitud"],
                                end: eventos["horaHastaSolicitud"],
                                backgroundColor: $color,
                                borderColor: $borde
                            }
                        );
                    }
                    //Armado Turno confirmado a (Recibido)
                    if (eventos["descripcionTurno"] == "Turno confirmado" && eventos["estadoTurno"] == "Activo" && eventos["id_pacSolicitud"] == localStorage.getItem("id_paciente")) {
                        $color = '#ffaa24';
                        $borde = '#cc881c';
                        $titulo = 'Turno confirmado de '+eventos["profesional"];
                        $arrayTerminadoEventos.push(
                            {
                                id: eventos["id_turno"],
                                title: $titulo,
                                start: eventos["horaDesdeSolicitud"],
                                end: eventos["horaHastaSolicitud"],
                                backgroundColor: $color,
                                borderColor: $borde
                            }
                        );
                    }
                    //Armado Turno confirmado a (Enviada)
                    if ((eventos["descripcionTurno"] == "Turno confirmado" && eventos["estadoTurno"] == "Activo") && (eventos["id_pacSolicitud"] != localStorage.getItem("id_paciente") && eventos["id_proSolicitud"] == localStorage.getItem("id_profesional"))) {
                        $color = '#ffc365';
                        $borde = '#ffb239';
                        $titulo = 'Turno confirmado a '+eventos["paciente"];
                        $arrayTerminadoEventos.push(
                            {
                                id: eventos["id_turno"],
                                title: $titulo,
                                start: eventos["horaDesdeSolicitud"],
                                end: eventos["horaHastaSolicitud"],
                                backgroundColor: $color,
                                borderColor: $borde
                            }
                        );
                    }
                    //Armado Turno confirmado a (Enviada)
                    if ((eventos["descripcionTurno"] == "Turno confirmado" && eventos["estadoTurno"] == "Activo") && (eventos["id_pacSolicitud"] != localStorage.getItem("id_paciente") && eventos["id_proSolicitud"] != localStorage.getItem("id_profesional"))) {
                        $color = '#bcbcbc';
                        $borde = '#969696';
                        $arrayTerminadoEventos.push(
                            {
                                id: eventos["id_turno"],
                                title: "Horario ocupado",
                                start: eventos["horaDesdeSolicitud"],
                                end: eventos["horaHastaSolicitud"],
                                backgroundColor: $color,
                                borderColor: $borde
                            }
                        );
                    }
                   
                });

                var eventosEnBaseDeDatos = $arrayEventos;
                
                if (((parametro != localStorage.getItem("nombreUsuario")) || localStorage.getItem("id_profesional")) && $sinConfigurar == false) {
                    //Generar Horarios Disponibles
    
                    //Pasaje a Minutos Rango Horario Dia Desde
                    var hora_rangoHorarioDiaDesde = $rangoHorarioDiaDesde.substring(0,2);
                    var minutos_rangoHorarioDiaDesde = $rangoHorarioDiaDesde.substring(3,5);
                    hora_rangoHorarioDiaDesde *= 60;
                    var rangoHorarioDiaDesde = hora_rangoHorarioDiaDesde + Number(minutos_rangoHorarioDiaDesde);
    
                    //Pasaje a Minutos Rango Horario Dia Hasta
                    var hora_rangoHorarioDiaHasta = $rangoHorarioDiaHasta.substring(0,2);
                    var minutos_rangoHorarioDiaHasta = $rangoHorarioDiaHasta.substring(3,5);
                    hora_rangoHorarioDiaHasta *= 60;
                    var rangoHorarioDiaHasta = hora_rangoHorarioDiaHasta + Number(minutos_rangoHorarioDiaHasta);
                    
                    //Pasaje a minutos duracion consulta
                    var hora_duracionConsulta = $duracionConsulta.substring(0,2);
                    var minutos_duracionConsulta = $duracionConsulta.substring(3,5);
                    hora_duracionConsulta *= 60;
                    var duracionConsulta = hora_duracionConsulta + Number(minutos_duracionConsulta);
    
                    //Pasaje a minutos descanso
                    var hora_descanso = $descanso.substring(0,2);
                    var minutos_descanso = $descanso.substring(3,5);
                    hora_descanso *= 60;
                    var descanso = hora_descanso + Number(minutos_descanso);
    
                    var duracion = duracionConsulta + descanso;
    
                    $id = -1000;
                    $id_dia = 0;
    
                    $diaD = "";
                    $mesD = "";
    
                    const RangoHorarioDiaDesde = rangoHorarioDiaDesde;
    
                    $fechaGenerada = "";
                        
                    //Crear Horarios Disponibles Desde "HOY" a "UN MES"
                    for (let index = 0; index < 62; index++) {
                        //Calcular nombre de dia de semana
                        if (diaDisponible < 10) {
                            $diaCalcularNombreSemana = '0'+diaDisponible;
                        }else{
                            $diaCalcularNombreSemana = diaDisponible;
                        }
                        if (mesDisponible < 10) {
                            $mesCalcularNombreSemana = '0'+mesDisponible;
                        }else{
                            $mesCalcularNombreSemana = mesDisponible;
                        }
                        
                        rangoHorarioDiaDesde = RangoHorarioDiaDesde;
    
                        //Generar horarios
                        while ((rangoHorarioDiaDesde + duracion) <= rangoHorarioDiaHasta) {
                            //EL DÍA ES HABIL?
        
                            var fechaCalcularNombreSemana = añoDisponible + "-" + $mesCalcularNombreSemana + "-" + $diaCalcularNombreSemana + " 00:00:00";
        
                            var diaDeSemana = new Date(fechaCalcularNombreSemana).getDay();// VALOR EJEMPLO = 4
        
                            $transformarArrayDiasAtencion = $diasAtencion;
                            $transformarArrayDiasAtencion = $transformarArrayDiasAtencion.replace(/{/,'');
                            $transformarArrayDiasAtencion = $transformarArrayDiasAtencion.replace(/}/,'');
                            
                            $arrayDiasAtencion =  $transformarArrayDiasAtencion.split(','); 
                            
                            $arrayDiasAtencion.forEach(function(elemento) {
                                if(elemento == "Domingo"){
                                    elemento = 0;
                                }if(elemento == "Lunes"){
                                    elemento = 1;
                                }if(elemento == "Martes"){
                                    elemento = 2;
                                }if(elemento == "Miércoles"){
                                    elemento = 3;
                                }if(elemento == "Jueves"){
                                    elemento = 4;
                                }if(elemento == "Viernes"){
                                    elemento = 5;
                                }if(elemento == "Sábado"){
                                    elemento = 6;
                                }
        
                                if (elemento == diaDeSemana) {
                                    //Acá
                                    var hor = Math.floor(rangoHorarioDiaDesde / 60);          
                                    var min = rangoHorarioDiaDesde % 60;
                                
                                    if (hor < 10) {
                                        hor = "0" + hor;    
                                    }if (min < 10) {
                                        min = "0" + min;    
                                    }       
                                    
                                    $id++;
                
                                    var horaFinalizacion = Math.floor((rangoHorarioDiaDesde + duracion) / 60);          
                                    var minutosFinalizacion = (rangoHorarioDiaDesde + duracion) % 60;
                
                                    if (horaFinalizacion < 10) {
                                        horaFinalizacion = "0" + horaFinalizacion;    
                                    }if (minutosFinalizacion < 10) {
                                        minutosFinalizacion = "0" + minutosFinalizacion;    
                                    }
                
                                    var finalizacion = horaFinalizacion + ':' + minutosFinalizacion;
                
                                    //Pasaje a minutos de finalizacion
                                    var hora_finalizacion = finalizacion.substring(0,2);
                                    var minutos_finalizacion = finalizacion.substring(3,5);
                                    hora_finalizacion *= 60;
                                    finalizacion = hora_finalizacion + Number(minutos_finalizacion);
                        
                                    finalizacion -= descanso;
                
                                    var horaFinalizacion = Math.floor(finalizacion / 60);          
                                    var minutosFinalizacion = finalizacion % 60;
                
                                    if (horaFinalizacion < 10) {
                                        horaFinalizacion = "0" + horaFinalizacion;    
                                    }if (minutosFinalizacion < 10) {
                                        minutosFinalizacion = "0" + minutosFinalizacion;    
                                    }
                
                                    if (diaDisponible < 10) {
                                        $diaD = '0'+diaDisponible;
                                    }else{
                                        $diaD = diaDisponible;
                                    }
                                    if (mesDisponible < 10) {
                                        $mesD = '0'+mesDisponible;
                                    }else{
                                        $mesD = mesDisponible;
                                    }
                
                                    var inicioHorario = añoDisponible + '-' + $mesD + '-' + $diaD + ' ' + hor + ':' + min + ':00';
                                    var finHorario = añoDisponible + '-' + $mesD + '-' + $diaD + ' ' + horaFinalizacion + ':' + minutosFinalizacion + ':00';
                
                                    $fechaGenerada = inicioHorario.substring(0,10);
    
                                    $crearHorarioDisponible = true;

                                    //Hay algun evento superpuesto?
                                    eventosEnBaseDeDatos.forEach(function(elemento) {
                                        $hds = elemento.horaDesdeSolicitud;
                                        $hhs = elemento.horaHastaSolicitud;
                                       
                                        if ((inicioHorario >= $hds) && (inicioHorario <= $hhs) || (finHorario >= $hds) && (finHorario <= $hhs)) {
                                            $crearHorarioDisponible = false; 
                                        }
                                    });

                                    if ($crearHorarioDisponible) {
                                        //Armado
                                        $arrayTerminadoEventos.push(
                                            {
                                                id: $id,
                                                title: "Horario disponible",
                                                start: inicioHorario,
                                                end: finHorario,
                                                backgroundColor: "#94c2e5",
                                                borderColor: "#69aadb"
                                            }
                                        );
                                    }

                                }
                            });                        
                            rangoHorarioDiaDesde += duracion; 
                        }
                        
                        var MyDate = new Date();
    
                        var strMyDate = MyDate.toString();
    
                        $añoGenerado = strMyDate.substring(11,15);
                        $mesGenerado = strMyDate.substring(4,7);
                        $diaGenerado = parseInt(strMyDate.substring(8,10));
    
                        switch ($mesGenerado) {
                            case "Jan":
                                $mesGenerado = "1";
                                break;
                            case "Feb":
                                $mesGenerado = "2";
                                break;
                            case "Mar":
                                $mesGenerado = "3";
                                break;
                            case "Apr":
                                $mesGenerado = "4";
                                break;
                            case "May":
                                $mesGenerado = "5";
                                break;
                            case "Jun":
                                $mesGenerado = "6";
                                break;
                            case "Jul":
                                $mesGenerado = "7";
                                break;
                            case "Aug":
                                $mesGenerado = "8";
                                break;
                            case "Sep":
                                $mesGenerado = "9";
                                break;
                            case "Oct":
                                $mesGenerado = "10";
                                break;
                            case "Nov":
                                $mesGenerado = "11";
                                break;
                            case "Dec":
                                $mesGenerado = "12";
                                break;
                        }
                        
                        var d = new Date($añoGenerado, $mesGenerado, $diaGenerado);
                        MyDate.setDate(d.getDate() + index+1);
                        
                        var fechaActualizada = MyDate.toString();
                        
                        $añoGenerado = fechaActualizada.substring(11,15);
                        $mesGenerado = fechaActualizada.substring(4,7);
                        $diaGenerado = parseInt(fechaActualizada.substring(8,10));
                        
                        switch ($mesGenerado) {
                            case "Jan":
                                $mesGenerado = "1";
                                break;
                            case "Feb":
                                $mesGenerado = "2";
                                break;
                            case "Mar":
                                $mesGenerado = "3";
                                break;
                            case "Apr":
                                $mesGenerado = "4";
                                break;
                            case "May":
                                $mesGenerado = "5";
                                break;
                            case "Jun":
                                $mesGenerado = "6";
                                break;
                            case "Jul":
                                $mesGenerado = "7";
                                break;
                            case "Aug":
                                $mesGenerado = "8";
                                break;
                            case "Sep":
                                $mesGenerado = "9";
                                break;
                            case "Oct":
                                $mesGenerado = "10";
                                break;
                            case "Nov":
                                $mesGenerado = "11";
                                break;
                            case "Dec":
                                $mesGenerado = "12";
                                break;
                        }
        
                        //var strFecha = d.toString();
    
                       
                        
                        //Sumar un día a la fecha
                        diaDisponible = $diaGenerado;
                        mesDisponible = $mesGenerado;
                        añoDisponible = $añoGenerado;
                    }
                }


                //Armar Calendario
                armadoFullCalendar();
            }else {
                alert("Ocurrio un error inesperado");
            }
        }
    }
    //Crear nueva consulta, la cual tenga relacion con SOLICITUDES, TURNOS, HORARIOS
    console.log(formJSON);
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Pacientes/buscarEventos',false);
    xmlhttp.send(formJSON);
}

