var instancia = "navegador";

window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    controlAcceso(instancia);
    buscarEspecialidades(instancia);
});

//Mostrar Usuario
document.getElementById('usuario').innerHTML = localStorage["nombreUsuario"];

//Opcion Ir a mi Grilla
let irAMiGrilla = document.getElementById('irAMiGrilla');
irAMiGrilla.innerHTML = '<a class="dropdown-item" href="../view/grilla.php?'+localStorage["nombreUsuario"]+'">Mi Grilla</a>';

//Mostrar Foto
if (localStorage.getItem("foto") != "Array" && localStorage.getItem("foto") != "") {
    document.getElementById('fotoUsuario').innerHTML = '<img class="fotoUsuario" src="'+localStorage["foto"]+'" alt="">';
    //Mostrar Foto Editar
    document.getElementById('fotoUsuarioEditar').innerHTML = '<img class="fotoUsuarioEditar" src="'+localStorage["foto"]+'" alt="">';
}else{
    document.getElementById('fotoUsuarioEditar').innerHTML = '<img class="fotoUsuarioEditar" src="../view/img/user.png" alt="">';
}

//Ir a mi perfil
document.getElementById("irMiPerfil").addEventListener("click", function() {
    window.location.href = "../view/perfil.php?"+localStorage.getItem("nombreUsuario");
});

function cargarNavegador(pestaña) {
    mensajesNuevos();
    var iconoInicio = document.getElementById('in');
    var iconoNotificaciones = document.getElementById('no');
    var iconoChats = document.getElementById('ch');

    if (pestaña === "Notificaciones") {
        iconoInicio.classList.remove("seleccionado");
        iconoInicio.classList.add("noSeleccionado");
        iconoNotificaciones.classList.add("seleccionado");
        iconoNotificaciones.classList.remove("noSeleccionado");
        iconoChats.classList.remove("seleccionado");
        iconoChats.classList.add("noSeleccionado");
    }

    if (pestaña === "Inicio") {
        iconoInicio.classList.add("seleccionado");
        iconoInicio.classList.remove("noSeleccionado");
        iconoNotificaciones.classList.remove("seleccionado");
        iconoNotificaciones.classList.add("noSeleccionado");
        iconoChats.classList.remove("seleccionado");
        iconoChats.classList.add("noSeleccionado");
    }

    if (pestaña === "Chat") {
        iconoInicio.classList.remove("seleccionado");
        iconoInicio.classList.add("noSeleccionado");
        iconoNotificaciones.classList.remove("seleccionado");
        iconoNotificaciones.classList.add("noSeleccionado");
        iconoChats.classList.add("seleccionado");
        iconoChats.classList.remove("noSeleccionado");
    }

    if (parametro === localStorage.getItem("nombreUsuario")) {
        if ($accesoPerfil === true) {
            //Ir a editar perfil
            document.getElementById("ejecutarEditarPerfil").addEventListener("click", function() {
                dispararFormEditarPaciente();
            });
        }
    }   
}

function dispararFormEditarPaciente() {
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

    //Boton acordion - Configuración perfil paciente
    document.getElementById("confPerPac").classList.remove('collapsed');
    document.getElementById("confPerPac").classList.add('accordion-button', 'rounded');
    //Resetear acordion
    document.getElementById("confUsu").classList.remove('accordion-button', 'rounded');
    document.getElementById("confUsu").classList.add('accordion-button', 'collapsed', 'rounded');
    
    //Mostrar contenido - Configuración perfil paciente
    document.getElementById("flush-collapseTwo").classList.add('show');
    //Resetear contenidos
    document.getElementById("flush-collapseOne").classList.remove('show');
    
    document.getElementById("ediPerfil").classList.add('show');
    
    document.getElementById("ediUsu").classList.remove('show');
    document.getElementById("desUsu").classList.remove('show');
    
    if (localStorage.getItem("id_profesional") != "" && localStorage.getItem("estadoProfesional") != "Activo") {
        document.getElementById("confPro").classList.remove('accordion-button', 'rounded');
        document.getElementById("confPro").classList.add('accordion-button', 'collapsed', 'rounded');
        
        document.getElementById("flush-collapseThree").classList.remove('show');
    }
}

//Modal configuración
document.getElementById("conf").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');

    var configuracion = new bootstrap.Modal(
        document.getElementById("configuracion-modal")
        );
        configuracion.toggle();
    
    //Cerrar Modal
    document.getElementById("cerrar").addEventListener("click", function () {
        configuracion.hide();
        //Tenia algo de solicitud, controlar despues
    });

    //Resetear acordion
    document.getElementById("confPerPac").classList.remove('accordion-button', 'rounded');
    document.getElementById("confPerPac").classList.add('accordion-button', 'collapsed', 'rounded');
    document.getElementById("confUsu").classList.remove('accordion-button', 'rounded');
    document.getElementById("confUsu").classList.add('accordion-button', 'collapsed', 'rounded');

    //Resetear contenidos
    document.getElementById("flush-collapseOne").classList.remove('show');
    document.getElementById("flush-collapseTwo").classList.remove('show');
    
    document.getElementById("ediPerfil").classList.remove('show');
    document.getElementById("ediUsu").classList.remove('show');
    document.getElementById("desUsu").classList.remove('show');

    if (localStorage.getItem("id_profesional") !== "" && localStorage.getItem("estadoProfesional") !== "Activo") {
        document.getElementById("flush-collapseThree").classList.remove('show');
        
        document.getElementById("confPro").classList.remove('accordion-button', 'rounded');
        document.getElementById("confPro").classList.add('accordion-button', 'collapsed', 'rounded');
    }
});

//#region Validación de Campos
const inputsEditarPaciente = document.querySelectorAll('#formEditarPaciente input');

const expresionesEditarPaciente = {
    nombre: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    apellido: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    telefono: /^[0-9\s]{5,15}$/,
    localidad: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calle: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü 0-9\s]{2,35}$/,
    altura: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamento: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,5}$/
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

//#region Select Provincia
document.getElementById("provincia").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoProvincia.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoProvincia.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        camposEditarPaciente['provincia'] = true;
    }else{
        iconoProvincia.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoProvincia.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Provincia</strong> ¡Debes ingresar una provincia de residencia!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        camposEditarPaciente['provincia'] = false;
    }
});

if (selectProvincia.value === 0) {
    iconoProvincia.classList.add('mostrar');
    iconoProvincia.classList.remove('bi-check-circle-fill');
    
    camposEditarPaciente['localidad'] = false;
}
//#endregion

//#region Select Localidad
document.getElementById("localidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoLocalidad.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoLocalidad.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        camposEditarPaciente['localidad'] = true;
    }else{
        iconoLocalidad.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoLocalidad.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Localidad</strong> ¡Debes ingresar una localidad de residencia!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        camposEditarPaciente['localidad'] = false;
    }
});

if (localidad.value === 0) {
    iconoLocalidad.classList.add('mostrar');
    iconoLocalidad.classList.remove('bi-check-circle-fill');
    
    camposEditarPaciente['localidad'] = false;
}
//#endregion

inputsEditarPaciente.forEach((input) => {
    input.addEventListener('keyup' , validarFormularioEditarPaciente);
    input.addEventListener('keydown' , validarFormularioEditarPaciente);
    input.addEventListener('blur' , validarFormularioEditarPaciente);
});
//#endregion

//Editar Foto
document.getElementById("editarFoto").addEventListener("click", function() {
    alert("Proximamente");
    //document.getElementById('mostrarFotoEditar').classList.add('ocultarFotoEditar');
    //document.getElementById('inputEditarFoto').classList.remove('ocultarInputFoto');
});

//#region Envia Formulario Editar Paciente
const formularioEditarPaciente = document.getElementById('formEditarPaciente');

formularioEditarPaciente.addEventListener('submit', (e) => {
    const nombreValue = inputNombre.value.trim();
    const apellidoValue = inputApellido.value.trim();
    const dniValue = inputDni.value.trim();
    const fechaNacimientoValue = inputFechaNacimiento.value.trim();
    const sexoPacienteValue = selectSexoPaciente.value.trim();
    const fotoValue = inputFoto.value.trim();
    const telefonoValue = inputTelefono.value.trim();
    const provinciaValue = selectProvincia.value.trim();
    const localidadValue = selectLocalidad.value.trim();
    const calleValue = inputCalle.value.trim();
    const alturaValue = inputAltura.value.trim();
    const departamentoValue = inputDepartamento.value.trim();
    
    e.preventDefault();
    
    if (nombreValue === "" || apellidoValue === "" || dniValue === "" || fechaNacimientoValue === "" || sexoPacienteValue === "0" || fotoValue === "" || telefonoValue === "" || provinciaValue === "0" || localidadValue === "0" || calleValue === "" || alturaValue === "") {
        const tipoAlert = "danger";
        const textoAlert = '<strong>Editar perfil:</strong> ¡Debe completar todos los campos obligatorios!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }else{
        if((camposEditarPaciente.nombre === false && nombreValue !== "") || (camposEditarPaciente.apellido === false && apellidoValue !== "") || (camposEditarPaciente.dni === false && dniValue !== "") || (camposEditarPaciente.fechaNacimiento === false) || (camposEditarPaciente.sexoPaciente === false && sexoPacienteValue !== "0")  || (camposEditarPaciente.foto === false && fotoValue !== "") || (camposEditarPaciente.telefono === false && telefonoValue !== "") || (camposEditarPaciente.provincia === false && provinciaValue !== "0") || (camposEditarPaciente.localidad === false && localidadValue !== "0") || (camposEditarPaciente.calle === false && calleValue !== "") || (camposEditarPaciente.altura === false && alturaValue !== "") || (camposEditarPaciente.departamento === false)){
            const tipoAlert = "danger";
            const textoAlert = '<strong>Editar perfil:</strong> Error al ingresar los datos: ¡Formato no valido, verifique los mismos e intente nuevamente!';

            mostrarAlertSuperior(tipoAlert, textoAlert);
        }
    }

    if (camposEditarPaciente.nombre && camposEditarPaciente.apellido && camposEditarPaciente.dni && camposEditarPaciente.fechaNacimiento && camposEditarPaciente.sexoPaciente && camposEditarPaciente.foto && camposEditarPaciente.telefono && camposEditarPaciente.provincia && camposEditarPaciente.localidad && camposEditarPaciente.calle && camposEditarPaciente.altura && camposEditarPaciente.departamento) {
        if (nombreValue !== localStorage.getItem("nombre") || apellidoValue !== localStorage.getItem("apellido") || apellidoValue !== localStorage.getItem("dni") || fechaNacimientoValue !== localStorage.getItem("fechaNacimiento") || sexoPacienteValue !== localStorage.getItem("sexo") || telefonoValue !== localStorage.getItem("telefono") || provinciaValue !== localStorage.getItem("provincia") || localidadValue !== localStorage.getItem("localidad") || calleValue !== localStorage.getItem("calle") || alturaValue !== localStorage.getItem("altura") || departamentoValue !== localStorage.getItem("departamento")) {
            document.getElementById('textoEditarPaciente').style.display = 'none';
            document.getElementById('cargandoEditarPaciente').style.display = 'block';

            definirGeoLocalizacion(instancia);
        }else{
            iconoNombre.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoNombre.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoApellido.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoApellido.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoDni.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoDni.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoFechaNacimiento.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoFechaNacimiento.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoSexoPaciente.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoSexoPaciente.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoTelefono.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoTelefono.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoProvincia.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoProvincia.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoLocalidad.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoLocalidad.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoCalle.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoCalle.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoAltura.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoAltura.classList.add('signo','bi-check-circle-fill','noValidado');
            iconoDepartamento.classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            iconoDepartamento.classList.add('signo','bi-check-circle-fill','noValidado');

            const tipoAlert = "warning";
            const textoAlert = '<strong>Editar perfil:</strong> ¡No se registraron cambios!';

            mostrarAlertSuperior(tipoAlert, textoAlert);
        }
    }

}); 
//#endregion

//Cerrar Mensajes de Configuración
document.getElementById("confUsu").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');
});

document.getElementById("confPerPac").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');
});

if (localStorage.getItem("estadoProfesional") == "Sin Configuración") {
    document.getElementById("confPro").addEventListener("click", function() {
        alertSuperior.classList.remove('alertaError');
    });
}

document.getElementById("editarCuentaUsuario").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');
});

document.getElementById("deshabilitarCuentaUsuario").addEventListener("click", function() {
    alertSuperior.classList.remove('alertaError');
});

document.getElementById("editarPerfil").addEventListener("click", function() {
    nombreUsuario = localStorage.getItem("nombreUsuario");
    acceso = "navegador";
    buscarPorNombreUsuario(nombreUsuario, acceso);
    alertSuperior.classList.remove('alertaError');
});
