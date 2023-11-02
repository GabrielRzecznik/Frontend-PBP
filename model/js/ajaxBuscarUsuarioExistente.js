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
                    var data=JSON.parse(xmlhttp.responseText);
                    if (data != "") {
                        document.getElementById('tituloBuscar').style.display = 'block';
                        document.getElementById('cargandoBuscar').style.display = 'none';
                        
                        var tipoAlert = "danger";

                        for (var i in data) {
                            if (correo === data[i]["correo"] && nombreUsuario === data[i]["nombreUsuario"]) {
                                document.getElementById('iconoCorreo').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                                document.getElementById('iconoCorreo').classList.add('mostrar','bi-x-circle-fill','noValidado');
                                document.getElementById('iconoNombreUsuario').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-x-circle-fill','noValidado');
                                var textoAlert = '<strong>Error al iniciar sesión:</strong> ¡El correo y el nombre de usuario no estan disponibles!';
                            }else if(correo === data[i]["correo"]){
                                document.getElementById('iconoCorreo').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                                document.getElementById('iconoCorreo').classList.add('mostrar','bi-x-circle-fill','noValidado');
                                var textoAlert = '<strong>Error al iniciar sesión:</strong> ¡El correo no se encuentra disponible!';
                            }else{
                                document.getElementById('iconoNombreUsuario').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                                document.getElementById('iconoNombreUsuario').classList.add('mostrar','bi-x-circle-fill','noValidado');
                                var textoAlert = '<strong>Error al iniciar sesión:</strong> ¡El nombre de usuario no se encuentra disponible!';
                            }
                            mostrarAlertSuperior(tipoAlert, textoAlert);
                          }
                    }else{
                        //Envia Correo
                        $asignarDuracion = true;
                        enviarCorreo1(correo, $asignarDuracion);
                    }
                }
            }if (xmlhttp.status == 401) {
                  

                
            }
        }
    }
   
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Usuarios/buscarUsuarioExistente',true);
    xmlhttp.send(formJSON);
}
