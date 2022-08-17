function editarUsuario(formulario){
    var formData = new FormData(formulario);
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                
            }if (xmlhttp.status == 401) {
               
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/editarUsuario',true);
    xmlhttp.send(formJSON);
}
