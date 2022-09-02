function confirmarContraseña(formulario, ingreso){
    var formData = new FormData(formulario);
    formData.append("correo", localStorage.getItem("correo"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (ingreso == "Editar") {
                    document.getElementById('cargandoPreValidacionEditar').style.display = 'none';
                    document.getElementById('texoPreValidacionEditar').style.display = 'block';
                    //Cambiar de formulario
                    document.getElementById('').style.display = 'none';
                    document.getElementById('').style.display = 'block';
                }if(ingreso == "Deshabilitar"){

                }       
            }if (xmlhttp.status == 401) {
                if (ingreso == "Editar") {
                    alert("¡La contraseña no coincide con la actual!");
                    //Cancelar carga
                    document.getElementById('cargandoPreValidacionEditar').style.display = 'none';
                    document.getElementById('texoPreValidacionEditar').style.display = 'block';
                }if(ingreso == "Deshabilitar"){

                }
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}
