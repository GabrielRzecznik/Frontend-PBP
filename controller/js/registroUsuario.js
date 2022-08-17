//#region Metodo Load
window.addEventListener('load',load);

function load(){
    nombreUsuario.focus();
}
//#endregion

//#region Validación de Campos
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
   switch (e.target.name) {//identifica el nombre del input manipulado
        case 'nombreUsuario':
            if (expresiones.nombreUsuario.test(e.target.value)) {
                document.getElementById('iconoNombreUsuario').classList.add('validado');
                document.querySelector('#iconoNombreUsuario').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoNombreUsuario').classList.add('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                //Validar correo
                campos['nombreUsuario'] = true;
            }else{
                document.getElementById('iconoNombreUsuario').classList.add('error');
                document.getElementById('iconoNombreUsuario').classList.remove('validado');
                document.querySelector('#iconoNombreUsuario').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoNombreUsuario').classList.remove('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertNombreUsuario').classList.add('alertaError');
                document.getElementById('alertCorreo').classList.remove('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos['nombreUsuario'] = false;
            }
            break;
        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('iconoCorreo').classList.add('validado');
                document.querySelector('#iconoCorreo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.add('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.remove('alertaError');
                //Validar correo
                campos['correo'] = true;
            }else{
                document.getElementById('iconoCorreo').classList.add('error');
                document.getElementById('iconoCorreo').classList.remove('validado');
                document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.add('alertaError');
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos['correo'] = false;
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('iconoPassword').classList.add('validado');
                document.querySelector('#iconoPassword').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoPassword').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword').classList.remove('alertaError');
                //Validar contraseña
                campos['password'] = true;
            }else{
                document.getElementById('iconoPassword').classList.add('error');
                document.getElementById('iconoPassword').classList.remove('validado');
                document.querySelector('#iconoPassword').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPassword').classList.remove('bi-check-circle-fill');
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
                document.getElementById('iconoPassword2').classList.add('validado');
                document.querySelector('#iconoPassword2').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoPassword2').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword2').classList.remove('alertaError');
                //Validar contraseña
                campos['password2'] = true;
            }else{
                document.getElementById('iconoPassword2').classList.add('error');
                document.getElementById('iconoPassword2').classList.remove('validado');
                document.querySelector('#iconoPassword2').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPassword2').classList.remove('bi-check-circle-fill');
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
    
    if (nombreUsuarioValue === "") {
        alert("Complete el campo nombre de usuario");
    }if (correoValue === "") {
        alert("Complete el campo correo");
    }if (passwordValue === "") {
        alert("Complete el campo contraseña")
    }if (passwordValue !== password2Value) {
        alert("Las contraseñas no coinciden")
    }
    
    if (campos.correo && campos.password && (passwordValue === password2Value)) {
        //Enviar AJAX
        buscarUsuarioExistente(correo.value.trim());
    }
});
//#endregion

//#region Funcionalidades de botónes "Activar"
document.getElementById("activar").addEventListener("click", function() {
    document.getElementById('activador').style.display = 'none';
    document.getElementById('formularioValidar').style.display = 'block';
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
                document.getElementById('iconoCodigo').classList.add('validado');
                document.querySelector('#iconoCodigo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCodigo').classList.add('bi-check-circle-fill');
                //Mensaje de error codigo
                document.getElementById('alertCodigo').classList.remove('alertaError');
                //Validar codigo
                campos2['codigo'] = true;
            }else{
                document.getElementById('iconoCodigo').classList.add('error');
                document.getElementById('iconoCodigo').classList.remove('validado');
                document.querySelector('#iconoCodigo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCodigo').classList.remove('bi-check-circle-fill');
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
        alert("Complete el campo código");
    }
    
    if (campos2.codigo) {
        //Enviar AJAX
        if (codigoGenerado == codigoValue) {
            registrarUsuario(formulario);
        }else{
            alert("El código ingresado es invalido!");//"Mensaje validado en su caso de uso"
            document.getElementById("codigo").value = "";
            document.querySelector('#iconoCodigo').classList.remove('bi-check-circle-fill');
        }
    }

}); 
//#endregion