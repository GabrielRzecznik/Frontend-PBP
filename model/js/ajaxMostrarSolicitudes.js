function mostrarSolicitudes(id_paciente){
    var formJSON=JSON.stringify({"id_paciente":id_paciente});

    //console.log(formJSON);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                
                //localStorage.setItem("correo", document.getElementById("correo").value);//Me guarda el correo
                
                //Tranforma la información que ataja en un JSON que puede ser leido mediante el data[][""]
                //var data=JSON.parse(xmlhttp.responseText);

                //localStorage.setItem("id_usuario", data[0]["id_usuario"]);//Me guarda el id_usuario de la bd
                //localStorage.setItem("id_paciente", data[0]["id_paciente"]);//Me guarda el id_usuario de la bd
                //localStorage.setItem("id_profesional", data[0]["id_profesional"]);//Me guarda el id_usuario de la bd
                //localStorage.setItem("nombreUsuario", data[0]["nombreUsuario"]);//Me guarda el nombreUsuario de la bd
                //localStorage.setItem("correo", data[0]["correo"]);//Me guarda el correo de la bd
                
                //Me redirige a la pagina principal
                //window.location.href = "https://frontend-pbp.herokuapp.com/view/inicioBusqueda.html";
            }if (xmlhttp.status == 401) {
                alert("¡No se encontro solicitudes para este Paciente!");
                //document.querySelector('#loguearse').classList.remove('invisible');
                //document.querySelector('#cargando').classList.add('invisible');
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Solicitudes/buscarSolicitudes',true);
    xmlhttp.send(formJSON);
}
