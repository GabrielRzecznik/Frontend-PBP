//#region Metodo Load
window.addEventListener('load',load);

function load(){
    correo.focus();
}
//#endregion

//#region Validación formulario 1
const inputs = document.querySelectorAll('#form1 input');

const expresiones = {
    correo: /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ // maximo 24 caracteres, permitido caracteres y _ - solamente
};

const campos = {
    correo: false,
};

const validarFormulario = (e) => {
   switch (e.target.name) {
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
                campos['correo'] = false;
            }
            break;
    } 
};

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario 1
const formulario = document.getElementById('form1');

formulario.addEventListener('submit', (e) => {
    const correoValue = correo.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (correoValue === "") {
        alert("Complete el campo correo.");
    }
    
    if (campos.correo) {
        //Cargando
        document.getElementById('tituloBuscar').style.display = 'none';
        document.getElementById('cargandoBuscar').style.display = 'block';
        //Enviar AJAX
        buscarUsuarioDeshabilitado(correoValue);
    }

}); 
//#endregion

//#region Validación Formulario 2
const inputs2 = document.querySelectorAll('#form2 input');

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

//#region Envia Formulario 2
const formulario2 = document.getElementById('form2');

formulario2.addEventListener('submit', (e) => {
    const codigoValue = codigo.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (codigoValue === "") {
        alert("Complete el campo código");
    }
    
    if (campos2.codigo) {
        //Enviar AJAX
        if (codigoGenerado == codigoValue) {
            //Cambio de Formulario 2 por Formulario 3
            document.getElementById('form2').style.display = 'none';
            document.getElementById('form3').style.display = 'block';
        }else{
            alert("El código ingresado es invalido!");//"Mensaje validado en su caso de uso"
            document.getElementById("codigo").value = "";
            document.querySelector('#iconoCodigo').classList.remove('bi-check-circle-fill');
        }
    }

}); 
//#endregion

//#region Funcionalidades de botones auxiliares 2
document.getElementById("atras").addEventListener("click", function() {
    //Cambiar Formulario 2 por Formulario 1
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
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
    enviarCorreo(correo.value.trim());
    //Bloquear bóton por 20 segundos
    const botonReenviar = document.getElementById('reenviar');
    botonReenviar.disabled = true;
    var minutos = 20;
    for (let i = 0; i < 19; i++) {
        minutos--;
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        document.getElementById('temporizador').innerHTML='(00:'+minutos+')';
    }
    bloqueadoTemporal = setTimeout(activarBoton, 20000);
    function activarBoton() {
        document.getElementById('temporizador').innerHTML='';
        botonReenviar.disabled = false;
    }
});
//#endregion

//#region Validación formulario 3

const inputs3 = document.querySelectorAll('#form3 input');

const expresiones3 = {
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/, //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
    password2: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/ //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
};

const campos3 = {
    password: false,
    password2: false
};

const validarFormulario3 = (e) => {
    switch (e.target.name) {
        case 'password':
            if (expresiones3.password.test(e.target.value)) {
                document.getElementById('iconoPassword').classList.add('validado');
                document.querySelector('#iconoPassword').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoPassword').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword').classList.remove('alertaError');
                //Validar contraseña
                campos3['password'] = true;
            }else{
                document.getElementById('iconoPassword').classList.add('error');
                document.getElementById('iconoPassword').classList.remove('validado');
                document.querySelector('#iconoPassword').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPassword').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword').classList.add('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
                campos3['password'] = false;
            }
            break;
        case 'password2':
            if (expresiones3.password2.test(e.target.value)) {
                document.getElementById('iconoPassword2').classList.add('validado');
                document.querySelector('#iconoPassword2').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoPassword2').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword2').classList.remove('alertaError');
                //Validar contraseña
                campos3['password2'] = true;
            }else{
                document.getElementById('iconoPassword2').classList.add('error');
                document.getElementById('iconoPassword2').classList.remove('validado');
                document.querySelector('#iconoPassword2').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPassword2').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword2').classList.add('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                campos3['password2'] = false;
            }
            break;
    } 
};

inputs3.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario3);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario3);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario 3
const formulario3 = document.getElementById('form3');

formulario3.addEventListener('submit', (e) => {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (passwordValue === "" && password2Value === "") {
        alert("Debe completar todos los campos!");
    }else{
        if (passwordValue === "") {
            alert("Complete el campo contraseña!");
        }if (password2Value === "") {
            alert("Complete el campo confirmación de contraseña!");
        }else if (passwordValue !== password2Value) {
            alert("Las contraseñas no coinciden!");
        }
    }
    

    if (campos3.password && (passwordValue === password2Value)) {
        //Modal confirmación

        //Abrir Modal
        var confirmacionRestablecer = new bootstrap.Modal(
            document.getElementById("confirmacion-restablecer-modal")
        );
        confirmacionRestablecer.toggle();
        
        //Enviar AJAX
        document.getElementById("confirmar-envio").addEventListener("click", function(){
            //Cargando
            document.getElementById('tituloConfirmar').style.display = 'none';
            document.getElementById('cargandoConfirmar').style.display = 'block';
            restablecerUsuario(formulario3);
        });

        //Cerrar Modal
        document.getElementById("cerrar").addEventListener("click", function () {
            confirmacionRestablecer.hide();
        });
    }
}); 
//#endregion