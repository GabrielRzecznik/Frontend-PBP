var instancia = "login";

window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    controlAcceso(instancia);
});

//#region Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^(?=\w*\d*)(\S)\S{8,40}$/, //entre 8 y 40 caracteres
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/ //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    usuario: false,
    password: false
};

var inputUsuario = document.getElementById('usuario');
var inputPassword = document.getElementById('password');

var iconoUsuario = document.getElementById('iconoUsuario');
var iconoPassword = document.getElementById('iconoPassword');

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'usuario':
            if (expresiones.usuario.test(e.target.value)) {
                iconoUsuario.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                iconoUsuario.classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                
                alertSuperior.classList.remove('alertaError');
                
                campos['usuario'] = true;
            }else{
                iconoUsuario.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoUsuario.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Correo o Nombre de usuario:</strong> El correo o nombre de usuario ingresado no es válido. Recuerde que no puede dejar espacios en blanco.<br>Correo: "ejemplo@gmail.com"<br>Nombre de usuario: "ejemplo1234"';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['usuario'] = false;
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                iconoPassword.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                iconoPassword.classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                
                alertSuperior.classList.remove('alertaError');
                
                campos['password'] = true;
            }else{
                iconoPassword.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoPassword.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Correo o Nombre de usuario:</strong> El correo o nombre de usuario ingresado no es válido. <br>Recuerde que no puede dejar espacios en blanco. <br>Correo: "ejemplo@gmail.com"<br>Nombre de usuario: "ejemplo1234"';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['password'] = false;
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

//#region Envia Formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const usuarioValue = inputUsuario.value.trim();
    const passwordValue = inputPassword.value.trim();
    
    e.preventDefault();

    if (usuarioValue === "" || passwordValue === "") {
        if (usuarioValue === "" && passwordValue !== "") {
            iconoUsuario.classList.add('mostrar','bi-x-circle-fill','noValidado');
        }else if (usuarioValue !== "" && passwordValue === "") {
            iconoPassword.classList.add('mostrar','bi-x-circle-fill','noValidado');   
        }else{
            iconoUsuario.classList.add('mostrar','bi-x-circle-fill','noValidado');
            iconoPassword.classList.add('mostrar','bi-x-circle-fill','noValidado');
        }

        const tipoAlert = "danger";
        const textoAlert = '<strong>Error al iniciar sesión:</strong> Debe completar todos los campos.';

        mostrarAlertSuperior(tipoAlert, textoAlert);
    }else{
        if ((campos.usuario === false && usuarioValue !== "") || (campos.password === false && passwordValue !== "")) {
            const tipoAlert = "danger";
            const textoAlert = '<strong>Error al iniciar sesión:</strong> ¡Formato no valido! Verifique los campos e intente nuevamente.';

            mostrarAlertSuperior(tipoAlert, textoAlert);
        }
    }
    
    if (campos.usuario && campos.password) {
        //Enviar AJAX
        document.getElementById('cargando').style.display = 'block';
        document.getElementById('loguearse').style.display = 'none';
        buscarUsuario(formulario);
    }
});
//#endregion