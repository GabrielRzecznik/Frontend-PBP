function buscarConfGrillaProf(id_profesional){
    var formData= new FormData(); //Las keys corresponden al atributo name de cada elemento  
    formData.append("id_profesional", id_profesional);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                $duracionConsulta = data[0]["duracionConsulta"];
                $descanso = data[0]["descanso"];
                $rangoHorarioDiaDesde = data[0]["rangoHorarioDiaDesde"];
                $rangoHorarioDiaHasta = data[0]["rangoHorarioDiaHasta"];
                $diasAtencion = data[0]["diasAtencion"];
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

