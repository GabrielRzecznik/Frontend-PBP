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

const expresiones = {
    nombreUsuario: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/, //entre 8 y 24 caractere
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const campos = {
    nombreUsuario: false,
    password: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'nombreUsuario':
            if (expresiones.nombreUsuario.test(e.target.value)) {
                document.getElementById('iconoNombreUsuario').classList.add('validado');
                document.querySelector('#iconoNombreUsuario').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoNombreUsuario').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertNombreUsuario').classList.remove('alertaError');
                //Validar
                campos['nombreUsuario'] = true;
            }else{
                document.getElementById('iconoNombreUsuario').classList.add('error');
                document.getElementById('iconoNombreUsuario').classList.remove('validado');
                document.querySelector('#iconoNombreUsuario').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoNombreUsuario').classList.remove('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertNombreUsuario').classList.add('alertaError');
                document.getElementById('alertPassword').classList.remove('alertaError');
                campos['nombreUsuario'] = false;
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
    
    if (campos.nombreUsuario && campos.password) {
        //Enviar AJAX
        document.getElementById('cargandoEditar').style.display = 'block';
        document.getElementById('editarUsuario').style.display = 'none';
        editarUsuario(formulario);
    }

}); 
//#endregion