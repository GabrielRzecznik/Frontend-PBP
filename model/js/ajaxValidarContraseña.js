function validarContraseña(formulario, ingreso){
    var formData = new FormData(formulario);
    formData.append("correo", localStorage.getItem("correo"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (ingreso == "Editar") {
                    
                }
                
                
                
                
            document.getElementById('cargando').style.display = 'none';
            document.getElementById('loguearse').style.display = 'block';
                   
            }if (xmlhttp.status == 401) {
                if (ingreso == "Editar") {
                    alert("¡No se encontro el usuario!");
                    //Cancelar carga
                    document.getElementById('cargando').style.display = 'none';
                    document.getElementById('loguearse').style.display = 'block';
                }
                
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
