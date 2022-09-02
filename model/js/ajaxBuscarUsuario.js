function buscarUsuario(formulario){
    var formData = new FormData(formulario);
    if (localStorage.getItem("id_usuario") == "") {
        formData.append("correo", localStorage.getItem("correo"));
    }
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                
                var data=JSON.parse(xmlhttp.responseText);
                
                if (data[0]["estadoUsuario"] == "Activo") {
                    //Estado Usuario Activo
                    if (localStorage.getItem("id_usuario") == "") {
                        localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                        localStorage.setItem("id_paciente", data[0]["id_paciente"]);
                        localStorage.setItem("id_profesional", data[0]["id_profesional"]);
                        localStorage.setItem("correo", data[0]["correo"]);
                        localStorage.setItem("nombreUsuario", data[0]["nombreUsuario"]);
                        localStorage.setItem("latitud", data[0]["latitud"]);
                        localStorage.setItem("longitud", data[0]["longitud"]);
                        //Redirigir
                        window.location.href = "https://frontend-pbp.herokuapp.com/view/inicioBusqueda.html";
                    }else{
                        
                    }
                }if (data[0]["estadoUsuario"] == "En Creación") {
                    //Estado Usuario En creación
                    localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                    //Redirigir
                    window.location.href = "https://frontend-pbp.herokuapp.com/view/registroPerfil.html";
                }if (data[0]["estadoUsuario"] == "Oculto") {
                    //Estado Usuario Oculto
                    alert("No se encontró el usuario!");
                    //Cancelar carga
                    document.getElementById('cargando').style.display = 'none';
                    document.getElementById('loguearse').style.display = 'block';
                }   
            }if (xmlhttp.status == 401) {
                alert("¡No se encontro el usuario!");
                //Cancelar carga
                document.getElementById('cargando').style.display = 'none';
                document.getElementById('loguearse').style.display = 'block';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
