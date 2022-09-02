function validarContraseña(formulario){
    var formData = new FormData(formulario);
    if (localStorage.getItem("id_usuario") != "") {
        formData.append("correo", localStorage.getItem("correo"));
    }
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                
                var data=JSON.parse(xmlhttp.responseText);
                
                if (data[0]["estadoUsuario"] == "Activo") {
                    
                }else{
                        
                }
                
            document.getElementById('cargando').style.display = 'none';
            document.getElementById('loguearse').style.display = 'block';
                   
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
