function buscarUsuario(formulario){
    var formData = new FormData(formulario);
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    //console.log(formJSON);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //Tranforma la información que ataja en un JSON que puede ser leido mediante el data[][""]
                var data=JSON.parse(xmlhttp.responseText);
                
                if (data[0]["estadoUsuario"] == "Activo") {
                    //Estado Usuario Activo
                    localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                    localStorage.setItem("id_paciente", data[0]["id_paciente"]);
                    localStorage.setItem("id_profesional", data[0]["id_profesional"]);
                    localStorage.setItem("nombreUsuario", data[0]["nombreUsuario"]);
                    localStorage.setItem("correo", data[0]["correo"]);
                    //Redirigir
                    window.location.href = "https://frontend-pbp.herokuapp.com/view/inicioBusqueda.html";
                }if (data[0]["estadoUsuario"] == "En creación") {
                    //Estado Usuario En creación
                    localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                    //Redirigir
                    window.location.href = "https://frontend-pbp.herokuapp.com/view/registroPerfil.html";
                }if (data[0]["estadoUsuario"] == "Oculto") {
                    //Estado Usuario Oculto
                    alert("No se encontro el usuario!");
                    //Cancelar carga
                    document.getElementById('cargando').style.display = 'none';
                    document.getElementById('loguearse').style.display = 'block';
                }   
            }if (xmlhttp.status == 401) {
                alert("No se encontro el usuario!");
                document.getElementById('cargando').style.display = 'none';
                document.getElementById('loguearse').style.display = 'block';
                //document.querySelector('#loguearse').classList.remove('invisible');
                //document.querySelector('#cargando').classList.add('invisible');
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
