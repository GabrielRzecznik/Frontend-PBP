function restablecerUsuario(correo){
    var formData= new FormData();
    formData.append("correo", correo);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON)

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                localStorage.clear();
                alert("Usuario restablecido con exito!")
                window.location.href = "https://frontend-pbp.herokuapp.com/";
            }else{
                alert("Ocurrio un error inesperado!");
            }   
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Usuario/restablecerUsuario',true);
    xmlhttp.send(formJSON);
}
