//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null) {
    window.location.href = "https://frontend-pbp.herokuapp.com/";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Mostrar Usuario
document.getElementById('nombreUsuario').innerHTML = localStorage["nombreUsuario"];

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
    usuario: /^(?=\w*\d*)(\S)\S{8,40}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])\S{8,24}$/
};

const campos = {
    usuario: false,
    password: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
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

//#region Envia Formulario Editar Cuenta Usuario
const formulario = document.getElementById('formEditarUsuario');

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
        document.getElementById('cargandoEditar').style.display = 'block';
        document.getElementById('editarUsuario').style.display = 'none';
        editarUsuario(formulario);

        //Cargando
        //document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
        //document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
    }

}); 
//#endregion