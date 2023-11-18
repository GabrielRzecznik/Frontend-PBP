//#region Validar Contraseña en editar usuario
var inputPasswordValidar = document.getElementById('passwordValidar');
var iconoPasswordValidar = document.getElementById('iconoPasswordValidar');

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
                iconoPasswordValidar.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoPasswordValidar.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campoValidarContraseña['passwordValidar'] = true;
            }else{
                iconoPasswordValidar.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoPasswordValidar.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Contraseña:</strong> La contraseña debe tener de 8 a 16 caracteres. <br>Debe contener al menos una "mayúscula" y un "digito".';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campoValidarContraseña['passwordValidar'] = false;
            }
        break;
    }
};

inputsValidarContraseña.forEach((input) => {
    input.addEventListener('keyup' , validarContraseña);
    input.addEventListener('keydown' , validarContraseña);
    input.addEventListener('blur' , validarContraseña);
});

const formEditarUsuarioPreValidacion = document.getElementById('formEditarUsuarioPreValidacion');

formEditarUsuarioPreValidacion.addEventListener('submit', (e) => {
    const passwordValidarValue = inputPasswordValidar.value.trim();
    
    e.preventDefault();
    
    if (passwordValidarValue === "") {
        const tipoAlert = "danger";
        const textoAlert = '<strong>Error al comprobar contraseña:</strong> ¡Debe completar el campo contraseña actual!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }

    if(campoValidarContraseña.passwordValidar === false && passwordValidarValue !== ""){
        const tipoAlert = "danger";
        const textoAlert = '<strong>Error al comprobar contraseña:</strong> ¡Formato no valido, verifique el mismo e intente nuevamente!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }
    
    if (campoValidarContraseña.passwordValidar) {
        document.getElementById('cargandoPreValidacionEditar').style.display = 'block';
        document.getElementById('textoPreValidacionEditar').style.display = 'none';
        
        var ingreso = "Editar";

        confirmarContraseña(formEditarUsuarioPreValidacion, ingreso);
    }
}); 
//#endregion

//Setear Inputs - Editar Usuario
document.getElementById('nombreUsuario').value = localStorage["nombreUsuario"];

//#region Validación de Campos Editar Usuario
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
                iconoNombreUsuario.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoNombreUsuario.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                camposEditar['nombreUsuario'] = true;
            }else{
                iconoNombreUsuario.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoNombreUsuario.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Nombre de usuario:</strong> El nombre de usuario debe tener de 8 a 16 caracteres. Debe contener al menos una "mayúscula", un "digito" y no puede contener espacios en blanco. <br>Nombre de usuario: "Ejemplo1234"';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                camposEditar['nombreUsuario'] = false;
            }
            break;
        case 'password':
            if (expresionesEditar.password.test(e.target.value)) {
                iconoPassword.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoPassword.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
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
    input.addEventListener('keyup' , validarFormulario);
    input.addEventListener('keydown' , validarFormulario);
    input.addEventListener('blur' , validarFormulario);
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
    }else{
        if ((camposEditar.nombreUsuario == false && nombreUsuarioValue !== "") || (camposEditar.password == false && contraseñaValue !== "")) {
            alert("Error al ingresar los datos: ¡Formato no valido, verifique los mismos e intente nuevamente!");
        }
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
        }else{
            document.getElementById('iconoNombreUsuario').classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            document.getElementById('iconoNombreUsuario').classList.add('signo','bi-check-circle-fill','noValidado');
            document.getElementById('iconoPassword').classList.remove('validado','bi-exclamation-circle-fill','signo','mostrar','bi-x-circle-fill');
            document.getElementById('iconoPassword').classList.add('signo','bi-check-circle-fill','noValidado');
            alert("¡No se registraron cambios!");
        }
    }

}); 
//#endregion