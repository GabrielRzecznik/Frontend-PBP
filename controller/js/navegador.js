//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null && localStorage.getItem("nombreUsuario") == null) {
    window.location.href = "https://frontend-pbp.herokuapp.com/";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Mostrar Usuario
document.getElementById('nombreUsuario').innerHTML = localStorage["nombreUsuario"];
document.getElementById('usuario').value = localStorage["nombreUsuario"];

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

const expresiones = {
    nombreUsuario: /^(?=\w*\d*)(\S)\S{8,40}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const campos = {
    nombreUsuario: false,
    password: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'usuario':
            if (expresiones.nombreUsuario.test(e.target.value)) {
                document.getElementById('iconoUsuario').classList.add('validado');
                document.querySelector('#iconoUsuario').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoUsuario').classList.add('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUsuario').classList.remove('alertaError');
                //Validar usuario
                campos['nombreUsuario'] = true;
            }else{
                document.getElementById('iconoUsuario').classList.add('error');
                document.getElementById('iconoUsuario').classList.remove('validado');
                document.querySelector('#iconoUsuario').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoUsuario').classList.remove('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUsuario').classList.add('alertaError');
                document.getElementById('alertCont').classList.remove('alertaError');
                campos['nombreUsuario'] = false;
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('iconoC').classList.add('validado');
                document.querySelector('#iconoC').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertPassword').classList.remove('alertaError');
                //Validar contraseña
                campos['password'] = true;
            }else{
                document.getElementById('iconoC').classList.add('error');
                document.getElementById('iconoC').classList.remove('validado');
                document.querySelector('#iconoC').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
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

//#region Envia Formulario Editar Cuenta Usuario
const formulario = document.getElementById('formEditarUsuario');

formulario.addEventListener('submit', (e) => {
    const nombreUsuarioValue = nombreUsuario.value.trim();
    const contraseñaValue = password.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (nombreUsuarioValue === "") {
        alert("Usuario vacio");
    }if (contraseñaValue === "") {
        alert("Contraseña vacia")
    }
    
    if (campos.usuario && campos.password) {
        //Enviar AJAX
        document.getElementById('cargandoEditar').style.display = 'block';
        document.getElementById('editarUsuario').style.display = 'none';
        editarUsuario(formulario);
    }

}); 
//#endregion