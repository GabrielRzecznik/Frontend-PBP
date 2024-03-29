function buscarConfGrillaProf(){
    //Invertir
    if ((localStorage.getItem("nombreUsuario") === parametro) && localStorage.getItem("id_profesional") === "") {
    
    }else{
        var formData = new FormData(); //Las keys corresponden al atributo name de cada elemento  
        formData.append("nombreUsuario", parametro);
        var formJSON=JSON.stringify(Object.fromEntries(formData));
    
        xmlhttp = new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
                if (xmlhttp.status == 200) {
                    var data=JSON.parse(xmlhttp.responseText);
    
                    $sinConfigurar = false;
    
                    if (data == "") {
                        $sinConfigurar = true;
                    }
    
                    if (data != "") {//localStorage.getItem("id_profesional") != "" && data != ""   
                        $duracionConsulta = data[0]["duracionConsulta"];
                        $descanso = data[0]["descanso"];
                        $rangoHorarioDiaDesde = data[0]["rangoHorarioDiaDesde"];
                        $rangoHorarioDiaHasta = data[0]["rangoHorarioDiaHasta"];
                        $diasAtencion = data[0]["diasAtencion"];
                        $id_prof = data[0]["id_prof"];
    
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
        
                        var horas = Math.floor(duracion / 60);          
                        var minutos = duracion % 60;
        
                        if (horas < 10) {
                            horas = "0" + horas;    
                        }if (minutos < 10) {
                            minutos = "0" + minutos;    
                        }
            
                        duracion = horas +':'+ minutos;
        
                        if(localStorage.getItem("nombreUsuario") === parametro && localStorage.getItem("id_profesional") !== ""){
                            $slotDuration = '01:00';
                            $slotMinTime = '00:00';
                            $slotMaxTime = '24:00';
                        }else{
                            $slotDuration = duracion;
                            $slotMinTime = $rangoHorarioDiaDesde;
                            $slotMaxTime = $rangoHorarioDiaHasta;
                        }
                    }/*else{
                        $slotDuration = '00:30';
                        $slotMinTime = '00:00';
                        $slotMaxTime = '24:00';
                    }*/
                    
                    gestorMostrarGrilla(parametro);
                   
                }else if (xmlhttp.status == 500) {                
                    alert("¡Ocurrio un error inesperado con el correo ingresado!");
                }else{
                    alert("¡Fallo la conexión con el servidor al cargar la configuración de la grilla solicitada!");
                }
            }else{
                $slotDuration = '00:30';
            }
        }
        xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/ConfiguracionGrillaProfesional/buscarConfiguracionGrillaProfesional',true);
        xmlhttp.send(formJSON);

    }
    
    //}
} 

/*
    
*/