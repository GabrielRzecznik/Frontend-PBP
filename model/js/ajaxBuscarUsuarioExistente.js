function buscarUsuarioExistente(correo, nombreUsuario){
    var formData= new FormData();
    formData.append("correo", correo);
    formData.append("nombreUsuario", nombreUsuario);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (correo == "No buscar") {
                    editarUsuario(formularioEditar);
                }else{
                    document.getElementById('tituloBuscar').style.display = 'block';
                    document.getElementById('cargandoBuscar').style.display = 'none';
                    //Cambia de Formulario
                    document.getElementById('formulario').style.display = 'none';
                    document.getElementById('activador').style.display = 'block';
                    //Envia Correo
                    $asignarDuracion = false; 
                    enviarCorreo(correo, $asignarDuracion);
                }
            }if (xmlhttp.status == 401) {
                if (correo == "No buscar") {
                    document.getElementById('editarUsuario').style.display = 'block';
                    document.getElementById('cargandoEditar').style.display = 'none';
                    alert("¡El nombre de usuario ingresado ya se encuentra en uso!");
                }else{
                    document.getElementById('tituloBuscar').style.display = 'block';
                    document.getElementById('cargandoBuscar').style.display = 'none';
                    alert("¡El correo o el usuario ya se encuentra en uso!");
                }
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuarioExistente',true);
    xmlhttp.send(formJSON);
}
