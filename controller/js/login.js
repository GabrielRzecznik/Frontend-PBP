//#region Metodo Load
window.addEventListener('load',load);

function load(){
    //Verificar si hay logueo
    if (localStorage.getItem("id_usuario") && localStorage.getItem("nombreUsuario")) {
        window.location.href = "../view/inicioBusqueda.php";
    }
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
                document.getElementById('iconoUsuario').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoUsuario').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertUsuario').classList.remove('alertaError');
                //Validar
                campos['usuario'] = true;
            }else{
                document.getElementById('iconoUsuario').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoUsuario').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertUsuario').classList.add('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                campos['usuario'] = false;
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
                //Mensaje de error
                document.getElementById('alertPassword').classList.add('alertaError');
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
    
    if (usuarioValue === "" || contraseñaValue === "") {
        alert("¡Debe completar todos los campos!");
    }

    if (campos.usuario == false || campos.password == false) {
        alert("Error al ingresar los datos: ¡Formato no valido, verifique los mismos e intente nuevamente!.");
    }
    
    if (campos.usuario && campos.password) {
        //Enviar AJAX
        document.getElementById('cargando').style.display = 'block';
        document.getElementById('loguearse').style.display = 'none';
        buscarUsuario(formulario);
    }

}); 
//#endregion
    
  