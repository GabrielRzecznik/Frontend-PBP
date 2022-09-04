//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null && localStorage.getItem("nombreUsuario") == null) {
    window.location.href = "https://frontend-pbp.herokuapp.com/";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Mostrar Usuario
document.getElementById('usuario').innerHTML = localStorage["nombreUsuario"];
document.getElementById('nombreUsuario').value = localStorage["nombreUsuario"];

//Cerrar sesión
function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "https://frontend-pbp.herokuapp.com/";
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
                document.getElementById('alertPassword').classList.add('alertaError');
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

//#region Configuración profesional
if (localStorage.getItem("id_profesional") != "null") {
    document.getElementById('confProf').classList.remove('mostrar');
}
//#endregion

