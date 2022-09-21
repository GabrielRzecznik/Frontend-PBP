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
                console.log($arrayTerminadoEventos);
            }if (xmlhttp.status == 401) {
                
            }
        }
    }
    //Crear nueva consulta, la cual tenga relacion con SOLICITUDES, TURNOS, HORARIOS
    xmlhttp.open("GET",'https://backend-pbp.herokuapp.com/Pacientes/buscarEventos/'+$nombreUsuario,false);
    xmlhttp.send();
}
