function confirmarContraseña(formulario, ingreso){
    var formData = new FormData();
    formData.append("usuario", localStorage.getItem("correo"));
    if(ingreso == "Editar"){
        formData.append("password", formulario.passwordValidar.value);
    }if (ingreso == "Deshabilitar") {
        formData.append("password", formulario.passwordValidarDeshabilitar.value);
    }
    
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (ingreso == "Editar") {
                    document.getElementById('cargandoPreValidacionEditar').style.display = 'none';
                    document.getElementById('textoPreValidacionEditar').style.display = 'block';
                    //Cambiar de formulario
                    document.getElementById('formularioEditarUsuarioPreValidacion').style.display = 'none';
                    document.getElementById('formularioEditarUsuario').style.display = 'block';
                    //Mostrar contraseña dentro del input contraseña
                    $guardarContraseña = document.getElementById("passwordValidar").value;
                    $mostrarContraseña = document.getElementById("password");
                    $mostrarContraseña.value = $guardarContraseña;
                }if(ingreso == "Deshabilitar"){
                    document.getElementById('cargandoPreValidacionDeshabilitar').style.display = 'none';
                    document.getElementById('textoPreValidacionDeshabilitar').style.display = 'block';
                    //Cambiar de formulario
                    document.getElementById('formularioDeshabilitarUsuarioPreValidacion').style.display = 'none';
                    document.getElementById('cardDeshabilitarUsuario').style.display = 'block';
                }
            }if (xmlhttp.status == 401) {
                if (ingreso == "Editar") {
                    alert("¡La contraseña no coincide con la actual!");
                    //Cancelar carga
                    document.getElementById('cargandoPreValidacionEditar').style.display = 'none';
                    document.getElementById('textoPreValidacionEditar').style.display = 'block';
                }if(ingreso == "Deshabilitar"){

                }
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
