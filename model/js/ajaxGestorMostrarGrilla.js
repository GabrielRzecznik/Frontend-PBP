let date3 = new Date();
let diaDisponible = date3.getDate();
let mesDisponible = date3.getMonth()+1;
let añoDisponible = date3.getFullYear();

function gestorMostrarGrilla($nombreUsuario){
    //var id_paciente = localStorage["id_usuario"];//Cambiar id usuario x paciente
    //var formJSON=JSON.stringify({"id_paciente":id_paciente});
    xmlhttp = new XMLHttpRequest();
 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                
                $arrayTerminadoEventos = [];

                $arrayEventos = data;
                        
                //$provincias = "";

                $color = '';
                $borde = '';
                $arrayEventos.forEach(function(eventos) {
                    //Color Solicitud enviada
                    if (eventos["descripcion"] == "Solicitud enviada") {
                        $color = '#bddbb0';
                        $borde = '#A3C197';
                    }
                    //Armado
                    $arrayTerminadoEventos.push(
                        {
                            id: eventos["id_solicitud"],
                            title: eventos["descripcion"],
                            start: eventos["horaDesdeSolicitud"],
                            end: eventos["horaHastaSolicitud"],
                            backgroundColor: $color,
                            borderColor: $borde
                        }
                    );

                });

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

                $diaD = "";
                $mesD = "";

                while ((rangoHorarioDiaDesde + duracion) <= rangoHorarioDiaHasta) {
                    //EL DÍA ES HABIL?

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

                    var fechaCalcularNombreSemana = añoDisponible + "-" + $mesCalcularNombreSemana + "-" + $diaCalcularNombreSemana + " 00:00:00";

                    var diaDeSemana = new Date(fechaCalcularNombreSemana).getDay();// VALOR EJEMPLO = 4

                    console.log($diasAtencion);//{Lunes,Martes,Miércoles,Jueves,Viernes}

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

                        console.log(elemento + "<->" + diaDeSemana);

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
        
                            //Armado
                            $arrayTerminadoEventos.push(
                                {
                                    id: $id,
                                    title: "Horario disponible",
                                    start: inicioHorario,
                                    end: finHorario,
                                    backgroundColor: "#D2E2FF",
                                    borderColor: "73A3FA"
                                }
                            );
        
                            console.log($id);
                            console.log("Horario disponible");
                            console.log(inicioHorario);
                            console.log(finHorario);
                        }
                    });

                    
                   /*/////////////////////////////////////////////////
                        
    
                        *///////////////////////////////////////////
                    rangoHorarioDiaDesde += duracion; 
                }




                console.log($arrayTerminadoEventos);
                //console.log($rangoHorarioDiaDesde);
                //console.log($rangoHorarioDiaHasta);
                //console.log($duracionConsulta);
                //console.log($descanso);
                //console.log($diasAtencion);

                //Armar Calendario
                armadoFullCalendar();
            }else {
                alert("Ocurrio un error inesperado");
            }
        }
    }
    //Crear nueva consulta, la cual tenga relacion con SOLICITUDES, TURNOS, HORARIOS
    xmlhttp.open("GET",'https://backend-pbp.herokuapp.com/Pacientes/buscarEventos/'+$nombreUsuario,false);
    xmlhttp.send();
}

