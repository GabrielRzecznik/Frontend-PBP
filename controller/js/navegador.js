//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null && localStorage.getItem("nombreUsuario") == null) {
    window.location.href = "../";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Mostrar Usuario
document.getElementById('usuario').innerHTML = localStorage["nombreUsuario"];

//Setear inputs - Editar Usuario
document.getElementById('nombreUsuario').value = localStorage["nombreUsuario"];

//Setear inputs - Editar Paciente/Perfil
buscarProvincias();
if (localStorage["departamento"] != "") {
    document.getElementById('iconoDepartamento').classList.add('signo','bi-check-circle-fill','noValidado');
    document.getElementById('departamento').value = localStorage["departamento"];
}
document.getElementById('nombre').value = localStorage["nombre"];
document.getElementById('apellido').value = localStorage["apellido"];
document.getElementById('fechaNacimiento').value = localStorage["fechaNacimiento"];
document.getElementById('sexoPaciente').value = localStorage["sexo"];
document.getElementById('telefono').value = localStorage["telefono"];
document.getElementById('localidad').value = localStorage["localidad"];
document.getElementById('calle').value = localStorage["calle"];
document.getElementById('altura').value = localStorage["altura"];


//Cerrar sesión
function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "../";
}

//Modal configuración
document.getElementById("conf").addEventListener("click", function() {
        //Abrir Modal
        var configuracion = new bootstrap.Modal(
            document.getElementById("configuracion-modal")
          );
          configuracion.toggle();
        
        //Cerrar Modal
        document.getElementById("cerrar").addEventListener("click", function () {
            configuracion.hide();
            //Tenia algo de solicitud, controlar despues
        });
});

//Deshabilitar cuenta Usuario
document.getElementById("deshabilitarUsuario").addEventListener("click", function(){
    deshabilitarUsuario();
});

//#region Validar Formulario Editar Cuenta Usuario
const inputs = document.querySelectorAll('#formEditarUsuario input');

const expresionesEditar = {
    nombreUsuario: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/, //entre 8 y 24 caractere
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const camposEditar = {
    nombreUsuario: true,
    password: true
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'nombreUsuario':
            if (expresionesEditar.nombreUsuario.test(e.target.value)) {
                document.getElementById('iconoNombreUsuario').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                //Validar
                camposEditar['nombreUsuario'] = true;
            }else{
                document.getElementById('iconoNombreUsuario').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertNombreUsuario').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPasswordValidar').classList.remove('alertaError');
                camposEditar['nombreUsuario'] = false;
            }
            break;
        case 'password':
            if (expresionesEditar.password.test(e.target.value)) {
                document.getElementById('iconoPassword').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoPassword').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertPassword').classList.remove('alertaError');
                //Validar
                camposEditar['password'] = true;
            }else{
                document.getElementById('iconoPassword').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoPassword').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertPassword').classList.add('alertaError');
                camposEditar['password'] = false;
            }
            break;
   } 
};

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario Editar Cuenta Usuario
const formularioEditar = document.getElementById('formEditarUsuario');

formularioEditar.addEventListener('submit', (e) => {
    const nombreUsuarioValue = nombreUsuario.value.trim();
    const contraseñaValue = password.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (nombreUsuarioValue === "" || contraseñaValue === "") {
        alert("¡Debe completar todos los campos!");
    }
    
    if (camposEditar.nombreUsuario && camposEditar.password) {
        if (nombreUsuarioValue != localStorage.getItem("nombreUsuario") || contraseñaValue !=  passwordValidar.value.trim()) {   
            //Enviar AJAX
            document.getElementById('cargandoEditar').style.display = 'block';
            document.getElementById('editarUsuario').style.display = 'none';
            const correo = "No buscar";
            if (nombreUsuarioValue == localStorage.getItem("nombreUsuario")) {
                editarUsuario(formularioEditar);
            }else{
                buscarUsuarioExistente(correo, nombreUsuarioValue);
            }
        }
    }

}); 
//#endregion

//#region Validar Contraseña en editar usuario
const inputsValidarContraseña = document.querySelectorAll('#formEditarUsuarioPreValidacion input');

const expresionValidarContraseña = {
    passwordValidar: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const campoValidarContraseña = {
    passwordValidar: false
};

const validarContraseña = (e) => {
    switch (e.target.name) {
        case 'passwordValidar':
            if (expresionValidarContraseña.passwordValidar.test(e.target.value)) {
                document.getElementById('iconoPasswordValidar').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoPasswordValidar').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertPasswordValidar').classList.remove('alertaError');
                //Validar
                campoValidarContraseña['passwordValidar'] = true;
            }else{
                document.getElementById('iconoPasswordValidar').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoPasswordValidar').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertPasswordValidar').classList.add('alertaError');
                campoValidarContraseña['passwordValidar'] = false;
            }
        break;
    }
};

inputsValidarContraseña.forEach((input) => {
    input.addEventListener('keyup' , validarContraseña);
    input.addEventListener('blur' , validarContraseña);
});

const formEditarUsuarioPreValidacion = document.getElementById('formEditarUsuarioPreValidacion');

formEditarUsuarioPreValidacion.addEventListener('submit', (e) => {
    const passwordValidarValue = passwordValidar.value.trim();
    
    e.preventDefault();
    
    if (passwordValidarValue === "") {
        alert("¡Debe completar el campo contraseña actual!");
    }
    
    if (campoValidarContraseña.passwordValidar) {
        //Enviar AJAX
        document.getElementById('cargandoPreValidacionEditar').style.display = 'block';
        document.getElementById('textoPreValidacionEditar').style.display = 'none';
        $ingreso = "Editar";
        confirmarContraseña(formEditarUsuarioPreValidacion, $ingreso);
    }
}); 

//#endregion

//#region Validar Contraseña en Deshabilitar Usuario
const inputsValidarContraseñaDeshabilitar = document.querySelectorAll('#formDeshabilitarUsuarioPreValidacion input');

const expresionValidarContraseñaDeshabilitar = {
    passwordValidarDeshabilitar: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const campoValidarContraseñaDeshabilitar = {
    passwordValidarDeshabilitar: false
};

const validarContraseñaDeshabilitar = (e) => {
    switch (e.target.name) {
        case 'passwordValidarDeshabilitar':
            if (expresionValidarContraseñaDeshabilitar.passwordValidarDeshabilitar.test(e.target.value)) {
                document.getElementById('iconoPasswordValidarDeshabilitar').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoPasswordValidarDeshabilitar').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertPasswordValidar').classList.remove('alertaError');
                //Validar
                campoValidarContraseñaDeshabilitar['passwordValidarDeshabilitar'] = true;
            }else{
                document.getElementById('iconoPasswordValidarDeshabilitar').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoPasswordValidarDeshabilitar').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertPasswordValidar').classList.add('alertaError');
                campoValidarContraseñaDeshabilitar['passwordValidar'] = false;
            }
        break;
    }
};

inputsValidarContraseñaDeshabilitar.forEach((input) => {
    input.addEventListener('keyup' , validarContraseñaDeshabilitar);
    input.addEventListener('blur' , validarContraseñaDeshabilitar);
});

const formDeshabilitarUsuarioPreValidacion = document.getElementById('formDeshabilitarUsuarioPreValidacion');

formDeshabilitarUsuarioPreValidacion.addEventListener('submit', (e) => {
    const passwordValidarDeshabilitarValue = passwordValidarDeshabilitar.value.trim();
    
    e.preventDefault();
    
    if (passwordValidarDeshabilitarValue === "") {
        alert("¡Debe completar el campo contraseña actual!");
    }
    
    if (campoValidarContraseñaDeshabilitar.passwordValidarDeshabilitar) {
        //Enviar AJAX
        document.getElementById('cargandoPreValidacionDeshabilitar').style.display = 'block';
        document.getElementById('textoPreValidacionDeshabilitar').style.display = 'none';
        $ingreso = "Deshabilitar";
        confirmarContraseña(formDeshabilitarUsuarioPreValidacion, $ingreso);
    }
}); 
//#endregion

//#region Opción Configuración profesional
if (localStorage.getItem("id_profesional") != "null") {
    document.getElementById('confProf').classList.remove('mostrar');
}
//#endregion

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
    if (checkLunes.checked == true || checkMartes.checked == true || checkMiercoles.checked == true || checkJueves.checked == true || checkViernes.checked == true ||  checkSabado.checked == true ||  checkDomingo.checked == true ) {
        $dias = [];//Vaciar
        if (checkLunes.checked == true) {
            $dias.push('Lunes');
        }if (checkMartes.checked == true) {
            $dias.push('Martes');
        }if (checkMiercoles.checked == true) {
            $dias.push('Miércoles'); 
        }if (checkJueves.checked == true) {
            $dias.push('Jueves');
        }if (checkViernes.checked == true) {
            $dias.push('Viernes');
        }if (checkSabado.checked == true) {
            $dias.push('Sábado'); 
        }if (checkDomingo.checked == true) {
            $dias.push('Domingo'); 
        }

        console.log($dias);
        
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
    if (event.target.value != 0) {
        document.getElementById('iconoDuracionConsulta').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoDuracionConsulta').classList.add('validado','bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertDuracionConsulta').classList.remove('alertaError');
        //Validar
        campoConfiguracionProfesional['duracionConsulta'] = true;

        if (campoConfiguracionProfesional.duracionConsulta == true && campoConfiguracionProfesional.descanso == true && campoConfiguracionProfesional.rangoHorarioDiaDesde == true) {
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

if (duracionConsulta.value == 0) {
    document.getElementById('iconoDuracionConsulta').classList.add('mostrar');//Agregar
    document.getElementById('iconoDuracionConsulta').classList.remove('bi-check-circle-fill');//Borrar
    campoConfiguracionProfesional['duracionConsulta'] = false;

    selectRangoHorarioDiaHasta.value = 0;
    selectRangoHorarioDiaHasta.disabled = true;
}
//#endregion

//Validar Duración de Descanso entre Consultas
document.getElementById("descanso").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.getElementById('iconoDescanso').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoDescanso').classList.add('validado','bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertDescanso').classList.remove('alertaError');
        //Validar
        campoConfiguracionProfesional['descanso'] = true;

        if (campoConfiguracionProfesional.duracionConsulta == true && campoConfiguracionProfesional.descanso == true && campoConfiguracionProfesional.rangoHorarioDiaDesde == true) {
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

if (descanso.value == 0) {
    document.getElementById('iconoDescanso').classList.add('mostrar');//Agregar
    document.getElementById('iconoDescanso').classList.remove('bi-check-circle-fill');//Borrar
    campoConfiguracionProfesional['descanso'] = false;

    selectRangoHorarioDiaHasta.value = 0;
    selectRangoHorarioDiaHasta.disabled = true;
}
//#endregion

document.getElementById("rangoHorarioDiaDesde").addEventListener('change', (event) => {
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

        console.log(horas + ":" + minutos);

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
            mostrarHorarios();
        }
        //Mensaje de error
        document.getElementById('alertRangoHorarioDiaHasta').classList.remove('alertaError');
        //Validar
        campoConfiguracionProfesional['rangoHorarioDiaHasta'] = true;
    }else{
        document.getElementById('iconoRangoHorarioDia').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoRangoHorarioDia').classList.add('noValidado','bi-x-circle-fill');
        //Mensaje de error
        document.getElementById('alertRangoHorarioDiaHasta').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertDiasAtencion').classList.remove('alertaError');
        campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
    }
});

if (rangoHorarioDiaHasta.value == 0) {
    document.getElementById('iconoRangoHorarioDia').classList.add('mostrar');//Agregar
    document.getElementById('iconoRangoHorarioDia').classList.remove('bi-check-circle-fill');//Borrar
    campoConfiguracionProfesional['rangoHorarioDiaHasta'] = false;
}

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
    
    mostrarHorariosFrom.innerHTML = "";

    while (($inicio + rango) <= 1440) {
        $inicio += rango;

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

        mostrarHorariosFrom.innerHTML += 
        '<button id="horario'+$id+'" type="button" class="btn btn-primary botonesHorarios">Horario disponible '+horas+':'+minutos+' a '+horaFinalizacion+':'+minutosFinalizacion+'</button>'; 
    }
}

//#region Envia Formulario Configuración Grilla Profesional
const formConfProf = document.getElementById('formConfProf');
//ESTOY AQUI
formConfProf.addEventListener('submit', (e) => {
    
}); 
//#endregion

//#region Validación de Campos
const inputsEditarPaciente = document.querySelectorAll('#formEditarPaciente input');

const expresionesEditarPaciente = {
    nombre: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    apellido: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    telefono: /^[0-9]\S{5,15}$/,
    localidad: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calle: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü 0-9\s]{2,35}$/,
    altura: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamento: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{2,5}$/
};

const camposEditarPaciente = {
    nombre: true,
    apellido: true,
    fechaNacimiento: true,
    sexoPaciente: true,
    //foto: false,
    telefono: true,
    provincia: true,
    localidad: true,
    calle: true,
    altura: true,
    departamento: true
};

const validarFormularioEditarPaciente = (e) => {
   switch (e.target.name) {//identifica el nombre del input manipulado
        case 'nombre':
            if (expresionesEditarPaciente.nombre.test(e.target.value)) {
                document.getElementById('iconoNombre').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoNombre').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertNombre').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['nombre'] = true;
            }else{
                document.getElementById('iconoNombre').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoNombre').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.add('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['nombre'] = false;
            }
            break;
        case 'apellido':
            if (expresionesEditarPaciente.apellido.test(e.target.value)) {
                document.getElementById('iconoApellido').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoApellido').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertApellido').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['apellido'] = true;
            }else{
                document.getElementById('iconoApellido').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoApellido').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.add('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['apellido'] = false;
            }
            break;
        case 'telefono':
            if (expresionesEditarPaciente.telefono.test(e.target.value)) {
                document.getElementById('iconoTelefono').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoTelefono').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertTelefono').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['telefono'] = true;
            }else{
                document.getElementById('iconoTelefono').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoTelefono').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.add('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['telefono'] = false;
            }
            break;
        case 'localidad':
            if (expresionesEditarPaciente.localidad.test(e.target.value)) {
                document.getElementById('iconoLocalidad').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoLocalidad').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['localidad'] = true;
            }else{
                document.getElementById('iconoLocalidad').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoLocalidad').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.add('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['localidad'] = false;
            }
            break;
        case 'calle':
            if (expresionesEditarPaciente.calle.test(e.target.value)) {
                document.getElementById('iconoCalle').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoCalle').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertCalle').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['calle'] = true;
            }else{
                document.getElementById('iconoCalle').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoCalle').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.add('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['calle'] = false;
            }
            break;
        case 'altura':
            if (expresionesEditarPaciente.altura.test(e.target.value)) {
                document.getElementById('iconoAltura').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoAltura').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertAltura').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['altura'] = true;
            }else{
                document.getElementById('iconoAltura').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoAltura').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.add('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['altura'] = false;
            }
            break;
        case 'departamento':
            if (expresionesEditarPaciente.departamento.test(e.target.value)) {
                document.getElementById('iconoDepartamento').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoDepartamento').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                //Validar campo
                camposEditarPaciente['departamento'] = true;
            }else if(departamento.value.trim() == ""){
                document.getElementById('iconoDepartamento').classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                //Limpiar 
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                camposEditarPaciente['departamento'] = true;
            }else{
                document.getElementById('iconoDepartamento').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoDepartamento').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexoPaciente').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.add('alertaError');
                camposEditarPaciente['departamento'] = false;
            }
            break;
   } 
};

//Validar sexo
document.getElementById("sexoPaciente").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.getElementById('iconoSexoPaciente').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoSexoPaciente').classList.add('validado','bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertSexoPaciente').classList.remove('alertaError');
        //Validar
        camposEditarPaciente['sexoPaciente'] = true;
    }else{
        document.getElementById('iconoSexoPaciente').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoSexoPaciente').classList.add('noValidado','bi-x-circle-fill');
        //Mensaje de error
        document.getElementById('alertSexoPaciente').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertNombre').classList.remove('alertaError');
        document.getElementById('alertApellido').classList.remove('alertaError');
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        //document.getElementById('alertFoto').classList.remove('alertaError');
        document.getElementById('alertTelefono').classList.remove('alertaError');
        document.getElementById('alertProvincia').classList.remove('alertaError');
        document.getElementById('alertLocalidad').classList.remove('alertaError');
        document.getElementById('alertCalle').classList.remove('alertaError');
        document.getElementById('alertAltura').classList.remove('alertaError');
        document.getElementById('alertDepartamento').classList.remove('alertaError');
        camposEditarPaciente['sexoPaciente'] = false;
    }
});

if (sexoPaciente.value == 0) {
    document.getElementById('iconoSexoPaciente').classList.add('mostrar');//Agregar
    camposEditarPaciente['sexoPaciente'] = false;
}

//Validar fecha de nacimiento
document.getElementById("fechaNacimiento").addEventListener('change', (event) => {
    //event.target.value Captura el valor del input date
    fechaIngresada = event.target.value;
    
    var añoIngresado = parseInt(String(fechaIngresada).substring(0,4));
    var mesIngresado = parseInt(String(fechaIngresada).substring(5,7));
    if(mesIngresado < 10){
        mesIngresado = "0" + mesIngresado;
    }
    var diaIngresado = parseInt(String(fechaIngresada).substring(8,10));
    if(diaIngresado < 10){
        diaIngresado = "0" + diaIngresado;
    }
   
    var edad = año - añoIngresado;

    if (mes < mesIngresado) {
        edad--;
    }else if (mes == mesIngresado) {
        if (dia < diaIngresado) {
            edad--;
        }
    }

    if (edad > 16 && edad < 120) {
        document.getElementById('iconoFechaNacimiento').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        document.getElementById('iconoFechaNacimiento').classList.add('mostrar','bi-check-circle-fill','validado');
        //Mensaje de error
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        //Validar
        camposEditarPaciente['fechaNacimiento'] = true;
    }else{
        document.getElementById('iconoFechaNacimiento').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoFechaNacimiento').classList.add('mostrar','noValidado','bi-x-circle-fill');
        //Mensaje de error
        document.getElementById('alertFechaNacimiento').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertNombre').classList.remove('alertaError');
        document.getElementById('alertApellido').classList.remove('alertaError');
        document.getElementById('alertSexoPaciente').classList.remove('alertaError');
        //document.getElementById('alertFoto').classList.remove('alertaError');
        document.getElementById('alertTelefono').classList.remove('alertaError');
        document.getElementById('alertProvincia').classList.remove('alertaError');
        document.getElementById('alertLocalidad').classList.remove('alertaError');
        document.getElementById('alertCalle').classList.remove('alertaError');
        document.getElementById('alertAltura').classList.remove('alertaError');
        document.getElementById('alertDepartamento').classList.remove('alertaError');
        camposEditarPaciente['fechaNacimiento'] = false;
    }
});

//Select Provincia
document.getElementById("provincia").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.getElementById('iconoProvincia').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoProvincia').classList.add('validado','bi-check-circle-fill', 'mostrar');
        //Mensaje de error
        document.getElementById('alertProvincia').classList.remove('alertaError');
        //Validar
        camposEditarPaciente['provincia'] = true;
    }else{
        document.getElementById('iconoProvincia').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoProvincia').classList.add('noValidado','bi-x-circle-fill');
        //Mensaje de error
        document.getElementById('alertProvincia').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertNombre').classList.remove('alertaError');
        document.getElementById('alertApellido').classList.remove('alertaError');
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        document.getElementById('alertSexoPaciente').classList.remove('alertaError');
        //document.getElementById('alertFoto').classList.remove('alertaError');
        document.getElementById('alertTelefono').classList.remove('alertaError');
        document.getElementById('alertLocalidad').classList.remove('alertaError');
        document.getElementById('alertCalle').classList.remove('alertaError');
        document.getElementById('alertAltura').classList.remove('alertaError');
        document.getElementById('alertDepartamento').classList.remove('alertaError');
        camposEditarPaciente['provincia'] = false;
    }
});

if (provincia.value == 0) {
    document.getElementById('iconoProvincia').classList.add('mostrar');//Agregar
}

inputsEditarPaciente.forEach((input) => {
    input.addEventListener('keyup' , validarFormularioEditarPaciente);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormularioEditarPaciente);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario Editar Paciente
const formularioEditarPaciente = document.getElementById('formEditarPaciente');

formularioEditarPaciente.addEventListener('submit', (e) => {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const fechaNacimientoValue = fechaNacimiento.value.trim();
    const sexoPacienteValue = sexoPaciente.value.trim();
    const fotoValue = foto.value.trim();
    const telefonoValue = telefono.value.trim();
    const provinciaValue = provincia.value.trim();
    const localidadValue = localidad.value.trim();
    const calleValue = calle.value.trim();
    const alturaValue = altura.value.trim();
    const departamentoValue = departamento.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (nombreValue === "" || apellidoValue === "" || fechaNacimiento === false || sexoPacienteValue === "0" || telefonoValue === "" || provinciaValue === "0" || localidadValue === "" || calleValue === "" || alturaValue === "") {
        alert("¡Debe completar todos los campos obligatorios!");
    }
    
    if (camposEditarPaciente.nombre && camposEditarPaciente.apellido && camposEditarPaciente.fechaNacimiento && camposEditarPaciente.sexoPaciente && camposEditarPaciente.telefono && camposEditarPaciente.provincia && camposEditarPaciente.localidad && camposEditarPaciente.calle && camposEditarPaciente.altura && camposEditarPaciente.departamento) {
        if (nombreValue != localStorage.getItem("nombre") || apellidoValue != localStorage.getItem("apellido") || fechaNacimientoValue != localStorage.getItem("fechaNacimiento") || sexoPacienteValue != localStorage.getItem("sexo") || fotoValue != localStorage.getItem("foto") || telefonoValue != localStorage.getItem("telefono") || provinciaValue != localStorage.getItem("provincia") || localidadValue != localStorage.getItem("localidad") || calleValue != localStorage.getItem("calle") || alturaValue != localStorage.getItem("altura") || departamentoValue != localStorage.getItem("departamento")) {
            //Enviar AJAX
            document.getElementById('textoEditarPaciente').style.display = 'none';
            document.getElementById('cargandoEditarPaciente').style.display = 'block';
            APP.doSearch();
        }
    }

}); 
//#endregion

//#region Localización - Enviar
const APP = {
    TOKEN: 'pk.890591643afa7bba7e01f73847cf87dc',
    SEARCHURL: `https://us1.locationiq.com/v1/search.php?format=json&`,
    REVERSEURL: `https://us1.locationiq.com/v1/reverse.php?format=json&`,
    MAPURL: `https://maps.locationiq.com/v3/staticmap?`,
    data: null,
    init: () => {
      //document.getElementById('boton').addEventListener('click', APP.doSearch);
    },
    doSearch: () => {
      //ev.preventDefault();
      $ubicacion = provincia.value.trim() +" "+ localidad.value.trim() +" "+ calle.value.trim() +" "+ altura.value.trim();

      let q = $ubicacion;//Ingreso ubicación
      if (!q) return false;
      let url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${q}`;
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          APP.data = data[0];
          APP.showSearchResults();
        })
    },
    showSearchResults: () => {
      //console.log(APP.data['display_name']); - por si despues agregamos codigo postal
      //Enviar Ajax
      editarPaciente(formularioEditarPaciente, APP.data['lat'], APP.data['lon']);
    },
};

document.addEventListener('DOMContentLoaded', APP.init);
//#endregion

