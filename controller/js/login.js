//#region Metodo Load
window.addEventListener('load',load);

function load(){
    usuario.focus();
}
//#endregion

//#region Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    
    //correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //entre 4 y 24 caracteres, permitido caracteres y _ - solamente
    usuario: /^(?=\w*\d*)(\S)\S{8,40}$/, //entre 8 y 40 caracteres
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/ //entre 8 y 24 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    usuario: false,
    password: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {//identifica el nombre del input manipulado
        case 'usuario':
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById('iconoUsuario').classList.add('validado');
                document.querySelector('#iconoUsuario').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoUsuario').classList.add('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUsuario').classList.remove('alertaError');
                //Validar usuario
                campos['usuario'] = true;
            }else{
                document.getElementById('iconoUsuario').classList.add('error');
                document.getElementById('iconoUsuario').classList.remove('validado');
                document.querySelector('#iconoUsuario').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoUsuario').classList.remove('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUsuario').classList.add('alertaError');
                document.getElementById('alertCont').classList.remove('alertaError');
                campos['usuario'] = false;
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('iconoC').classList.add('validado');
                document.querySelector('#iconoC').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertCont').classList.remove('alertaError');
                //Validar contraseña
                campos['password'] = true;
            }else{
                document.getElementById('iconoC').classList.add('error');
                document.getElementById('iconoC').classList.remove('validado');
                document.querySelector('#iconoC').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertCont').classList.add('alertaError');
                document.getElementById('alertUsuario').classList.remove('alertaError');
                campos['password'] = false;
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
    const usuarioValue = usuario.value.trim();
    const contraseñaValue = password.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (usuarioValue === "") {
        alert("Usuario vacio");
    }if (contraseñaValue === "") {
        alert("Contraseña vacia")
    }
    
    if (campos.usuario && campos.password) {
        //Enviar AJAX
        document.getElementById('cargando').style.display = 'block';
        document.getElementById('loguearse').style.display = 'none';
        buscarUsuario(formulario);

        //Cargando
        //document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
        //document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
    }

}); 
//#endregion
    
  