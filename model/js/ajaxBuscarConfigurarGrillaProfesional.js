function buscarConfigurarGrillaProfesional($id_profesional){
    var formData= new FormData();
    formData.append("id_profesional", $id_profesional);
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


            }else{
                alert("¡Ocurrio un error inesperado al mostrar la configuración de la grilla profesional!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/ConfiguracionGrillaProfesional/buscarConfiguracionGrillaProfesional',true);
    xmlhttp.send(formJSON);
}

