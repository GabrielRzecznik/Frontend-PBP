function buscarContraseña(){
    var formJSON=JSON.stringify({"id_usuario":localStorage.getItem("id_usuario")});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
            }else{
                alert("¡No se pudo eliminar el usuario!");
            }   
        }
    }
    xmlhttp.open("post",'https://backend-pbp.herokuapp.com/Usuarios/buscarContraseña',true);
    xmlhttp.send(formJSON);
}