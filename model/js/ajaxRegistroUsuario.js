function registrarUsuario(formulario){
    var formData= new FormData(formulario);  
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                localStorage.setItem("estadoUsuario", data[0]["estadoUsuario"]);
                localStorage.setItem("id_paciente", null);

                window.location.href = "../view/registroPerfil.php";
            }else if (xmlhttp.status == 500) {
                alert("¡Ocurrio un error inesperado!");
                //Marcar Correo
                document.getElementById('iconoCorreo').classList.remove('validado');
                document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
            }else{
                alert("¡Fallo la conexión con el servidor!");
            }
        }
    }
    
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Usuarios/crearUsuario',true);
    xmlhttp.send(formJSON);
}

