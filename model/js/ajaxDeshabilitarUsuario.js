function deshabilitarUsuario(){
    var formData= new FormData();
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                localStorage.clear();
                window.location.href = "https://frontend-pbp.herokuapp.com/";
            }else{
                alert("Error inesperado!");
            }   
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Usuarios/deshabilitarUsuario',true);
    xmlhttp.send(formJSON);
}
