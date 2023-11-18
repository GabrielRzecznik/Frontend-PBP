//#region Opción Configuración profesional
if (localStorage.getItem("id_profesional") !== "" && localStorage.getItem("estadoProfesional") !== "Activo") {
    //#region Configuración profesional
    const campoConfiguracionProfesional = {
        diasAtencion: false,
        duracionConsulta: false,
        descanso: false,
        rangoHorarioDiaDesde: false,
        rangoHorarioDiaHasta: false,
        deshabilitarHorarios: false
    };

    //Validar Días de Atención
    var checkLunes = document.getElementById("lunes");
    var checkMartes = document.getElementById("martes");
    var checkMiercoles = document.getElementById("miercoles");
    var checkJueves = document.getElementById("jueves");
    var checkViernes = document.getElementById("viernes");
    var checkSabado = document.getElementById("sabado");
    var checkDomingo = document.getElementById("domingo");

    document.getElementById("lunes").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("martes").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("miercoles").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("jueves").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("viernes").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("sabado").addEventListener("click", function() {
        validarDiasAtencion();
    });

    document.getElementById("domingo").addEventListener("click", function() {
        validarDiasAtencion();
    });


    $dias = [];
    function validarDiasAtencion() {
        if (checkLunes.checked === true || checkMartes.checked === true || checkMiercoles.checked === true || checkJueves.checked === true || checkViernes.checked === true ||  checkSabado.checked === true ||  checkDomingo.checked === true ) {
            $dias = [];//Vaciar
            if (checkLunes.checked === true) {
                $dias.push('Lunes');
            }if (checkMartes.checked === true) {
                $dias.push('Martes');
            }if (checkMiercoles.checked === true) {
                $dias.push('Miércoles'); 
            }if (checkJueves.checked === true) {
                $dias.push('Jueves');
            }if (checkViernes.checked === true) {
                $dias.push('Viernes');
            }if (checkSabado.checked === true) {
                $dias.push('Sábado'); 
            }if (checkDomingo.checked === true) {
                $dias.push('Domingo'); 
            }
            
            document.getElementById('iconoDiasAtencion').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
            document.getElementById('iconoDiasAtencion').classList.add('mostrar','bi-check-circle-fill','validado');
            
            //Mensaje de error
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            //Validar
            campoConfiguracionProfesional['diasAtencion'] = true;
        }else{
            //Mensaje de error
            document.getElementById('alertDiasAtencion').classList.add('alertaError');
            //Limpiar mensaje
            document.getElementById('alertDuracionConsulta').classList.remove('alertaError');
            campoConfiguracionProfesional["diasAtencion"] = false;

            document.getElementById('iconoDiasAtencion').classList.remove('bi-exclamation-circle-fill','signo','bi-check-circle-fill','validado');
            document.getElementById('iconoDiasAtencion').classList.add('mostrar','bi-x-circle-fill','noValidado');
        }   
    }

    //Validar Rango Horario Dia Desde
    const selectDuracionConsulta = document.getElementById('duracionConsulta');
    const selectDescanso = document.getElementById('descanso');
    const selectRangoHorarioDiaDesde = document.getElementById('rangoHorarioDiaDesde');
    const selectRangoHorarioDiaHasta = document.getElementById('rangoHorarioDiaHasta');
    let armarSelectRangoHorarioDiaHasta = document.getElementById('rangoHorarioDiaHasta');

    //Validar Duración de Consulta
    document.getElementById("duracionConsulta").addEventListener('change', (event) => {
        mostrarHorariosFrom.innerHTML = "¡Complete los campos anteriores previamente!";
        if (event.target.value !== 0) {
            document.getElementById('iconoDuracionConsulta').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
            document.getElementById('iconoDuracionConsulta').classList.add('validado','bi-check-circle-fill');
            //Mensaje de error
            document.getElementById('alertDuracionConsulta').classList.remove('alertaError');
            //Validar
            campoConfiguracionProfesional['duracionConsulta'] = true;

            if (campoConfiguracionProfesional.duracionConsulta === true && campoConfiguracionProfesional.descanso === true && campoConfiguracionProfesional.rangoHorarioDiaDesde === true) {
                document.getElementById('iconoRangoHorarioDia').classList.remove('validado','bi-check-circle-fill','bi-x-circle-fill');
                document.getElementById('iconoRangoHorarioDia').classList.add('signo','noValidado','bi-exclamation-circle-fill');
                completarSelectRangoDiaHasta();
                campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
                selectRangoHorarioDiaHasta.disabled = false;
            }
        }else{
            selectRangoHorarioDiaHasta.value = 0;
            selectRangoHorarioDiaHasta.disabled = true;

            document.getElementById('iconoDuracionConsulta').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
            document.getElementById('iconoDuracionConsulta').classList.add('noValidado','bi-x-circle-fill');
            //Mensaje de error
            document.getElementById('alertDuracionConsulta').classList.add('alertaError');
            //Limpiar mensaje
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            campoConfiguracionProfesional['duracionConsulta'] = false;
        }
    });

    if (duracionConsulta.value === 0) {
        document.getElementById('iconoDuracionConsulta').classList.add('mostrar');//Agregar
        document.getElementById('iconoDuracionConsulta').classList.remove('bi-check-circle-fill');//Borrar
        campoConfiguracionProfesional['duracionConsulta'] = false;

        selectRangoHorarioDiaHasta.value = 0;
        selectRangoHorarioDiaHasta.disabled = true;
    }
    //#endregion

    //Validar Duración de Descanso entre Consultas
    document.getElementById("descanso").addEventListener('change', (event) => {
        mostrarHorariosFrom.innerHTML = "¡Complete los campos anteriores previamente!";
        if (event.target.value != 0) {
            document.getElementById('iconoDescanso').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
            document.getElementById('iconoDescanso').classList.add('validado','bi-check-circle-fill');
            //Mensaje de error
            document.getElementById('alertDescanso').classList.remove('alertaError');
            //Validar
            campoConfiguracionProfesional['descanso'] = true;

            if (campoConfiguracionProfesional.duracionConsulta === true && campoConfiguracionProfesional.descanso === true && campoConfiguracionProfesional.rangoHorarioDiaDesde === true) {
                document.getElementById('iconoRangoHorarioDia').classList.remove('validado','bi-check-circle-fill','bi-x-circle-fill');
                document.getElementById('iconoRangoHorarioDia').classList.add('signo','noValidado','bi-exclamation-circle-fill');
                completarSelectRangoDiaHasta();
                campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
                selectRangoHorarioDiaHasta.disabled = false;
            }
        }else{
            selectRangoHorarioDiaHasta.value = 0;
            selectRangoHorarioDiaHasta.disabled = true;
            
            document.getElementById('iconoDescanso').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
            document.getElementById('iconoDescanso').classList.add('noValidado','bi-x-circle-fill');
            //Mensaje de error
            document.getElementById('alertDescanso').classList.add('alertaError');
            //Limpiar mensaje
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            campoConfiguracionProfesional['descanso'] = false;
        }
    });

    if (descanso.value === 0) {
        document.getElementById('iconoDescanso').classList.add('mostrar');//Agregar
        document.getElementById('iconoDescanso').classList.remove('bi-check-circle-fill');//Borrar
        campoConfiguracionProfesional['descanso'] = false;

        selectRangoHorarioDiaHasta.value = 0;
        selectRangoHorarioDiaHasta.disabled = true;
    }
    //#endregion

    document.getElementById("rangoHorarioDiaDesde").addEventListener('change', (event) => {
        mostrarHorariosFrom.innerHTML = "¡Complete los campos anteriores previamente!";
        if (event.target.value != 0) {
            //Validar
            campoConfiguracionProfesional['rangoHorarioDiaDesde'] = true;
            
            //Completas Select Rango Horario Dia Hasta
            if(campoConfiguracionProfesional.rangoHorarioDiaHasta == true){
                document.getElementById('iconoRangoHorarioDia').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
                document.getElementById('iconoRangoHorarioDia').classList.add('validado','bi-check-circle-fill');
            }
            
            if (campoConfiguracionProfesional.duracionConsulta == true && campoConfiguracionProfesional.descanso == true && campoConfiguracionProfesional.rangoHorarioDiaDesde == true) {
                document.getElementById('iconoRangoHorarioDia').classList.remove('validado','bi-check-circle-fill','bi-x-circle-fill');
                document.getElementById('iconoRangoHorarioDia').classList.add('signo','noValidado','bi-exclamation-circle-fill');
                completarSelectRangoDiaHasta();
                campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
                selectRangoHorarioDiaHasta.disabled = false;
            }
            
            //Mensaje de error
            document.getElementById('alertRangoHorarioDiaDesde').classList.remove('alertaError');
        }else{
            selectRangoHorarioDiaHasta.value = 0;
            selectRangoHorarioDiaHasta.disabled = true;

            document.getElementById('iconoRangoHorarioDia').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
            document.getElementById('iconoRangoHorarioDia').classList.add('noValidado','bi-x-circle-fill');
            //Mensaje de error
            document.getElementById('alertRangoHorarioDiaDesde').classList.add('alertaError');
            //Limpiar mensaje
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            campoConfiguracionProfesional['rangoHorarioDiaDesde'] = false;
        }
    });

    if (rangoHorarioDiaDesde.value == 0) {
        document.getElementById('iconoRangoHorarioDia').classList.add('mostrar');//Agregar
        document.getElementById('iconoRangoHorarioDia').classList.remove('bi-check-circle-fill');//Borrar
        campoConfiguracionProfesional['rangoHorarioDiaDesde'] = false;

        selectRangoHorarioDiaHasta.value = 0;
        selectRangoHorarioDiaHasta.disabled = true;
    }
    //#endregion

    function completarSelectRangoDiaHasta() {
        let duracionConsulta = selectDuracionConsulta.value;
        let descanso = selectDescanso.value;
        let rangoHorarioDiaDesde = selectRangoHorarioDiaDesde.value;

        //Inicio del día
        let inicio_hora = rangoHorarioDiaDesde.substring(0,2);
        let inicio_minutos = rangoHorarioDiaDesde.substring(3,5);

        inicio_hora *= 60;
        $inicio = inicio_hora + Number(inicio_minutos);

        //Duración Consulta
        let consulta_hora = duracionConsulta.substring(0,2);
        let consulta_minutos = duracionConsulta.substring(3,5);

        consulta_hora *= 60;
        let rango1 = consulta_hora + Number(consulta_minutos);

        //Duración Descanso
        let descanso_hora = descanso.substring(0,2);
        let descanso_minutos = descanso.substring(3,5);

        descanso_hora *= 60;
        let rango2 = descanso_hora + Number(descanso_minutos);

        //Rango total
        let rango = rango1 + rango2;
        
        armarSelectRangoHorarioDiaHasta.innerHTML = 
        '<option value="0" selected="true" disabled="disabled">Hora de finalización</option>';

        while (($inicio + rango) <= 1440) {
            $inicio += rango;

            var horas = Math.floor($inicio / 60);          
            var minutos = $inicio % 60;
        
            if (horas < 10) {
                horas = "0" + horas;    
            }if (minutos < 10) {
                minutos = "0" + minutos;    
            }

            armarSelectRangoHorarioDiaHasta.innerHTML += 
            '<option value="'+horas+':'+minutos+'">'+horas+':'+minutos+' hs</option>';            
        }
        
    }

    //Validar Rango Horario Dia Hasta
    document.getElementById("rangoHorarioDiaHasta").addEventListener('change', (event) => {
        if (event.target.value != 0) {
            if(campoConfiguracionProfesional.rangoHorarioDiaDesde == true){
                document.getElementById('iconoRangoHorarioDia').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
                document.getElementById('iconoRangoHorarioDia').classList.add('validado','bi-check-circle-fill');
            }
            //Mensaje de error
            document.getElementById('alertRangoHorarioDiaHasta').classList.remove('alertaError');
            //Validar
            campoConfiguracionProfesional['rangoHorarioDiaHasta'] = true;
            mostrarHorarios();
            }else{
            mostrarHorariosFrom.innerHTML = "¡Complete los campos anteriores previamente!";
            document.getElementById('iconoRangoHorarioDia').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
            document.getElementById('iconoRangoHorarioDia').classList.add('noValidado','bi-x-circle-fill');
            //Mensaje de error
            document.getElementById('alertRangoHorarioDiaHasta').classList.add('alertaError');
            //Limpiar mensaje
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
        }
    });

    //Validar Rango Horario Día Hasta
    document.getElementById("rangoHorarioDiaHasta").addEventListener('change', (event) => {
        if (event.target.value != 0) {
            document.getElementById('iconoRangoHorarioDia').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
            document.getElementById('iconoRangoHorarioDia').classList.add('validado','bi-check-circle-fill');
            //Mensaje de error
            document.getElementById('alertDiasAtencion').classList.remove('alertaError');
            //Validar
            campoConfiguracionProfesional['rangoHorarioDiaHasta'] = true;
        }else{
            document.getElementById('iconoRangoHorarioDia').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
            document.getElementById('iconoRangoHorarioDia').classList.add('noValidado','bi-x-circle-fill');
            //Mensaje de error
            document.getElementById('alertDiasAtencion').classList.add('alertaError');
            //Limpiar mensaje
        
            campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
        }
    });
    //#endregion

    //Mostrar Horarios
    let mostrarHorariosFrom = document.getElementById('mostrarHorarios');

    function mostrarHorarios() {
        let duracionConsulta = selectDuracionConsulta.value;
        let descanso = selectDescanso.value;
        let rangoHorarioDiaDesde = selectRangoHorarioDiaDesde.value;
        let rangoHorarioDiaHasta = selectRangoHorarioDiaHasta.value;
        
        //Inicio del día
        let inicio_hora = rangoHorarioDiaDesde.substring(0,2);
        let inicio_minutos = rangoHorarioDiaDesde.substring(3,5);

        inicio_hora *= 60;
        $inicio = inicio_hora + Number(inicio_minutos);

        //Finalización
        let fin_hora = rangoHorarioDiaHasta.substring(0,2);
        let fin_minutos = rangoHorarioDiaHasta.substring(3,5);
        
        fin_hora *= 60;
        $fin = fin_hora + Number(fin_minutos);

        //Duración Consulta
        let consulta_hora = duracionConsulta.substring(0,2);
        let consulta_minutos = duracionConsulta.substring(3,5);

        consulta_hora *= 60;
        let rango1 = consulta_hora + Number(consulta_minutos);

        //Duración Descanso
        let descanso_hora = descanso.substring(0,2);
        let descanso_minutos = descanso.substring(3,5);

        descanso_hora *= 60;
        let rango2 = descanso_hora + Number(descanso_minutos);

        //Rango total
        let rango = rango1 + rango2;
        
        mostrarHorariosFrom.innerHTML = "";

        $id = 0;

        while (($inicio + rango) <= $fin) {
            var horas = Math.floor($inicio / 60);          
            var minutos = $inicio % 60;
        
            if (horas < 10) {
                horas = "0" + horas;    
            }if (minutos < 10) {
                minutos = "0" + minutos;    
            }

            $id++;

            var horaFinalizacion = Math.floor(($inicio + rango) / 60);          
            var minutosFinalizacion = ($inicio + rango) % 60;

            if (horaFinalizacion < 10) {
                horaFinalizacion = "0" + horaFinalizacion;    
            }if (minutosFinalizacion < 10) {
                minutosFinalizacion = "0" + minutosFinalizacion;    
            }

            mostrarHorariosFrom.innerHTML += 
            '<button id="horario'+$id+'" type="button" class="btn btn-primary botonesHorarios">Horario disponible '+horas+':'+minutos+' a '+horaFinalizacion+':'+minutosFinalizacion+'</button>'; 
            $inicio += rango;
        }
    }

    //#region Envia Formulario Configuración Grilla Profesional
    const formConfProf = document.getElementById('formConfProf');
    //ESTOY AQUI
    formConfProf.addEventListener('submit', (e) => {
        e.preventDefault();//evita que se envien los datos y se refresque la pagina

        if (campoConfiguracionProfesional.diasAtencion && campoConfiguracionProfesional.duracionConsulta && campoConfiguracionProfesional.descanso && campoConfiguracionProfesional.rangoHorarioDiaDesde && campoConfiguracionProfesional.rangoHorarioDiaHasta) {
            document.getElementById('cargandoConfiguracionGrilla').style.display = 'block';
            document.getElementById('configurarGrilla').style.display = 'none';

            configurarGrillaProfesional(formConfProf, $dias);
        }else{
            alert("¡Debe completar todos los campos!")
        }
    });
    //#endregion
}else{
    document.getElementById('confProf').remove();
}
//#endregion