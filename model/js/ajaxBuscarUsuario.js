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
                
                if (data[0]["estadoUsuario"] === "Activo") {
                    //Estado Usuario Activo
                    localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                    localStorage.setItem("id_paciente", data[0]["id_paciente"]);
                    if(data[0]["id_profesional"] !== null){
                        localStorage.setItem("id_profesional", data[0]["id_profesional"]);
                    }else{
                        localStorage.setItem("id_profesional", "");
                    }
                    localStorage.setItem("nombre", data[0]["nombre"]);
                    localStorage.setItem("apellido", data[0]["apellido"]);
                    localStorage.setItem("foto", data[0]["foto"]);
                    localStorage.setItem("correo", data[0]["correo"]);
                    localStorage.setItem("nombreUsuario", data[0]["nombreUsuario"]);
                    localStorage.setItem("estadoProfesional", data[0]["estadoProfesional"]);
                    localStorage.setItem("latitud", data[0]["latitud"]);
                    localStorage.setItem("longitud", data[0]["longitud"]);
                    //Redirigir             
                    window.location.href = "./view/inicioBusqueda.php";
                }if (data[0]["estadoUsuario"] === "En creación") {
                    //Estado Usuario En creación
                    localStorage.setItem("id_usuario", data[0]["id_usuario"]);
                    localStorage.setItem("estadoUsuario", data[0]["estadoUsuario"]);
                    
                    if (data[0]["id_paciente"] !== null) {
                        localStorage.setItem("id_paciente", data[0]["id_paciente"]);
                    }else{
                        localStorage.setItem("id_paciente", null);
                    }
                    //Redirigir
                    window.location.href = "./view/registroPerfil.php";
                }if (data[0]["estadoUsuario"] == "Oculto") {
                    //Estado Usuario Oculto
                    alert("No se encontró el usuario!");
                    //Cancelar carga
                    document.getElementById('cargando').style.display = 'none';
                    document.getElementById('loguearse').style.display = 'block';
                }   
            }if (xmlhttp.status == 401) {
                const tipoAlert = "danger";
                const textoAlert = '<strong>Error al iniciar sesión:</strong> No se encontro el usuario, revise sus credenciales e inténtalo nuevamente.';

                mostrarAlertSuperior(tipoAlert, textoAlert);
                
                //Cancelar carga
                document.getElementById('cargando').style.display = 'none';
                document.getElementById('loguearse').style.display = 'block';  
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
