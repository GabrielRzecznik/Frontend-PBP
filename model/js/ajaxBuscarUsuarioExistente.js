function buscarUsuarioExistente(correo, nombreUsuario){
    var formData= new FormData();
    formData.append("correo", correo);
    formData.append("nombreUsuario", nombreUsuario);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //Cambia de Formulario
                document.getElementById('formulario').style.display = 'none';
                document.getElementById('activador').style.display = 'block';
                //Envia Correo
                enviarCorreo(correo.value.trim());
            }if (xmlhttp.status == 401) {
                alert("El correo o el usuario ya se encuentra registrado");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuarioExistente',true);
    xmlhttp.send(formJSON);
}
