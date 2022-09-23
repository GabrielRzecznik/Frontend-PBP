//#region Metodo Load
window.addEventListener('load',load);

function load(){
    nombreUsuario.focus();
}
//#endregion

//#region Validación Formulario
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombreUsuario: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/, //entre 8 y 24 caracteres
    correo: /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, // maximo 24 caracteres, permitido caracteres y _ - solamente
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/, //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
    password2: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/ //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    nombreUsuario: false,
    correo: false,
    password: false,
    password2: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'nombreUsuario':
            if (expresiones.nombreUsuario.test(e.target.value)) {
                document.getElementById('iconoNombreUsuario').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                //Validar campo
                campos['nombreUsuario'] = true;
            }else{
                document.getElementById('iconoNombreUsuario').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertNombreUsuario').classList.add('alertaError');
                document.getElementById('alertCorreo').classList.remove('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos['nombreUsuario'] = false;
            }
            break;
        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('iconoCorreo').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoCorreo').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertCorreo').classList.remove('alertaError');
                //Validar campo
                campos['correo'] = true;
            }else{
                document.getElementById('iconoCorreo').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoCorreo').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertCorreo').classList.add('alertaError');
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos['correo'] = false;
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('iconoPassword').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoPassword').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertPassword').classList.remove('alertaError');
                //Validar
                campos['password'] = true;
            }else{
                document.getElementById('iconoPassword').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoPassword').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error contraseña
                document.getElementById('alertPassword').classList.add('alertaError');
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                document.getElementById('alertCorreo').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos['password'] = false;
            }
            break;
        case 'password2':
            if (expresiones.password2.test(e.target.value)) {
                document.getElementById('iconoPassword2').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoPassword2').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertPassword2').classList.remove('alertaError');
                //Validar
                campos['password2'] = true;
            }else{
                document.getElementById('iconoPassword2').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoPassword2').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error contraseña
                document.getElementById('alertPassword2').classList.add('alertaError');
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                document.getElementById('alertCorreo').classList.remove('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                campos['password2'] = false;
            }
            break;
   } 
};

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const nombreUsuarioValue = nombreUsuario.value.trim();
    const correoValue = correo.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (nombreUsuarioValue === "" || correoValue === "" || passwordValue === "" || password2Value === "") {
        alert("¡Debe completar todos los campos!");
    }else if (passwordValue !== password2Value) {
        alert("¡Las contraseñas no coinciden!")
    }
    
    if (campos.nombreUsuario == false || campos.correo == false || campos.password == false || campos.password2 == false) {
        alert("Error al ingresar los datos: ¡Formato no valido, verifique los mismos e intente nuevamente!.");
    }

    if (campos.correo && campos.password && (passwordValue === password2Value)) {
        //Enviar AJAX
        document.getElementById('tituloBuscar').style.display = 'none';
        document.getElementById('cargandoBuscar').style.display = 'block';
        buscarUsuarioExistente(correo.value.trim(), nombreUsuario.value.trim());
    }
});
//#endregion

//#region Funcionalidades de botónes "Activar"
document.getElementById("activado").addEventListener("click", function() {
    document.getElementById('activador').style.display = 'none';
    document.getElementById('formularioValidar').style.display = 'block';
    $asignarDuracion = true;
    enviarCorreo2(correo.value.trim(), $asignarDuracion);
});

document.getElementById("volverAtras").addEventListener("click", function() {
    document.getElementById('activador').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
});
//#endregion

//#region Validación Formulario Validar
const inputs2 = document.querySelectorAll('#formularioValidar input');

const expresiones2 = {
    codigo: /^[0-9]{4}$/ // maximo 24 caracteres, permitido caracteres y _ - solamente
};

const campos2 = {
    codigo: false
};

const validarFormulario2 = (e) => {
   switch (e.target.name) {
        case 'codigo':
            if (expresiones2.codigo.test(e.target.value)) {
                document.getElementById('iconoCodigo').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoCodigo').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertCodigo').classList.remove('alertaError');
                //Validar
                campos2['codigo'] = true;
            }else{
                document.getElementById('iconoCodigo').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoCodigo').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error codigo
                document.getElementById('alertCodigo').classList.add('alertaError');
                campos2['codigo'] = false;
            }
            break;
    } 
};

inputs2.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario2);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario2);//cuando me salgo y preciono fuera del input
});
//#endregion
  
//#region Envia Formulario Validar
const formulario2 = document.getElementById('formularioValidar');

formulario2.addEventListener('submit', (e) => {
    const codigoValue = codigo.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (codigoValue === "") {
        alert("¡Complete el campo código!");
    }

    if (campos2.codigo) {
        //Enviar AJAX
        if (codigoGenerado == codigoValue) {
            document.getElementById('tituloRegistrar').style.display = 'none';
            document.getElementById('cargandoRegistrar').style.display = 'block';
            registrarUsuario(formulario);
        }else{
            alert("El código ingresado es invalido!");//"Mensaje validado en su caso de uso"
            document.getElementById("codigo").value = "";
            document.getElementById('iconoCodigo').classList.remove('bi-check-circle-fill');
        }
    }

}); 
//#endregion

//#region Funcionalidades de botónes Formulario Validar
document.getElementById("atras").addEventListener("click", function() {
    //Cambiar Formulario Validar por Formulario
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('formularioValidar').style.display = 'none';
    //Borrar contenido input código
    document.getElementById("codigo").value = "";
    document.querySelector('#iconoCodigo').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoCodigo').classList.remove('bi-check-circle-fill');
    //Cancelar Cargando
    document.getElementById('tituloBuscar').style.display = 'block';
    document.getElementById('cargandoBuscar').style.display = 'none';
});
  
//Reenviar Código
document.getElementById("reenviar").addEventListener("click", function() {
    asignarDuracion = true;
    enviarCorreo1(correo.value.trim(), $asignarDuracion);
    //Bloquear bóton por 20 segundos
    const botonReenviar = document.getElementById('reenviar');
    botonReenviar.disabled = true;
    var minutos = 19;
    let t = setInterval(mostrarTemporizador, 1000);
    
    function mostrarTemporizador() {
        document.getElementById('temporizador').innerHTML=' (00:'+minutos+')';
        minutos--;
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (minutos == "00") {
            clearInterval(t);  
        }
    }
    
    bloqueadoTemporal = setTimeout(activarBoton, 20000);
    function activarBoton() {
        document.getElementById('temporizador').innerHTML='';
        botonReenviar.disabled = false;
    }
});
//#endregion