function registrarUsuario(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                localStorage.setItem("id_usuario", data[0]["id_usuario"]);//Me guarda el id_usuario de la bd
                window.location.href = "https://frontend-pbp.herokuapp.com/view/registroPerfil.html";
            }else if (xmlhttp.status == 500) {
                alert("Ocurrio un error inesperado con el correo ingresado");
                //Marcar Correo
                document.getElementById('iconoCorreo').classList.remove('validado');
                document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
            }else{
                alert("Fallo la conexión con el servidor!!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/crearUsuario',true);
    xmlhttp.send(formJSON);
}

