var inputPasswordValidarDeshabilitar = document.getElementById('passwordValidarDeshabilitar');
var iconoPasswordValidarDeshabilitar = document.getElementById('iconoPasswordValidarDeshabilitar');

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
                iconoPasswordValidarDeshabilitar.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                iconoPasswordValidarDeshabilitar.classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                
                alertSuperior.classList.remove('alertaError');

                campoValidarContraseñaDeshabilitar['passwordValidarDeshabilitar'] = true;
            }else{
                iconoPasswordValidarDeshabilitar.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoPasswordValidarDeshabilitar.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Contraseña:</strong> La contraseña debe tener de 8 a 16 caracteres. <br>Debe contener al menos una "mayúscula" y un "digito".';

                mostrarAlertSuperior(tipoAlert, textoAlert);
                
                campoValidarContraseñaDeshabilitar['passwordValidar'] = false;
            }
        break;
    }
};

inputsValidarContraseñaDeshabilitar.forEach((input) => {
    input.addEventListener('keyup' , validarContraseñaDeshabilitar);
    input.addEventListener('keydown' , validarContraseñaDeshabilitar);
    input.addEventListener('blur' , validarContraseñaDeshabilitar);
});

const formDeshabilitarUsuarioPreValidacion = document.getElementById('formDeshabilitarUsuarioPreValidacion');

formDeshabilitarUsuarioPreValidacion.addEventListener('submit', (e) => {
    const passwordValidarDeshabilitarValue = inputPasswordValidarDeshabilitar.value.trim();
    
    e.preventDefault();
    
    if (passwordValidarDeshabilitarValue === "") {
        const tipoAlert = "danger";
        const textoAlert = '<strong>Error al comprobar contraseña:</strong> ¡Debe completar el campo contraseña actual!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }
    
    if(campoValidarContraseñaDeshabilitar.passwordValidarDeshabilitar == false && passwordValidarDeshabilitarValue !== ""){
        const tipoAlert = "danger";
        const textoAlert = '<strong>Error al comprobar contraseña:</strong> ¡Formato no valido, verifique el mismo e intente nuevamente!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }

    if (campoValidarContraseñaDeshabilitar.passwordValidarDeshabilitar) {
        document.getElementById('cargandoPreValidacionDeshabilitar').style.display = 'block';
        document.getElementById('textoPreValidacionDeshabilitar').style.display = 'none';
        var ingreso = "Deshabilitar";
        confirmarContraseña(formDeshabilitarUsuarioPreValidacion, ingreso);
    }
});

document.getElementById("deshabilitarUsuario").addEventListener("click", function(){
    deshabilitarUsuario();
});