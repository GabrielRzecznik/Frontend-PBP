function registrarUsuario(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                //var respuestaResivida = xmlhttp.responseText;
                //alert(respuestaResivida);
                
                //window.location.href = "https://frontend-pbp.herokuapp.com/view/registroPaciente.html";
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
    //xmlhttp.open("GET",'https://tp-final-pp-liv-ferz-backend.herokuapp.com/Usuarios/registro'+'/'+nombre+'/'+apellido,true);
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/crearUsuario',true);
    xmlhttp.send(formJSON);
}

