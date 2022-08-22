function restablecerUsuario(){
    //Obtener correo primero
    var formData= new FormData();
    formData.append("correo", correo.value);
    formData.append("password", password.value);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                localStorage.clear();
                alert("¡Usuario restablecido con exito!")
                window.location.href = "https://frontend-pbp.herokuapp.com/";
            }else{
                //Cargando
                document.getElementById('tituloConfirmar').style.display = 'block';
                document.getElementById('cargandoConfirmar').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }   
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Usuarios/restablecerUsuario',true);
    xmlhttp.send(formJSON);
}
