function buscarConfGrillaProf(){
    var formData = new FormData(); //Las keys corresponden al atributo name de cada elemento  
    formData.append("nombreUsuario", parametro);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                if (localStorage.getItem("id_profesional") != "") {//parametro != localStorage.getItem("nombreUsuario")      
                    var data=JSON.parse(xmlhttp.responseText);
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
    
                    $slotDuration = duracion;
                    $slotMinTime = $rangoHorarioDiaDesde;
                    $slotMaxTime = $rangoHorarioDiaHasta;
                }else{
                    $slotDuration = '00:30';
                    $slotMinTime = '00:00';
                    $slotMaxTime = '24:00';
                }
                gestorMostrarGrilla(parametro);
               
            }else if (xmlhttp.status == 500) {                
                alert("¡Ocurrio un error inesperado con el correo ingresado!");
            }else{
                alert("¡Fallo la conexión con el servidor!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/ConfiguracionGrillaProfesional/buscarConfiguracionGrillaProfesional',true);
    xmlhttp.send(formJSON);
} 

