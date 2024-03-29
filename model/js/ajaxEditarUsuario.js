function editarUsuario(formulario){
    var formData = new FormData(formulario);
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                document.getElementById('cargandoEditar').style.display = 'none';
                document.getElementById('editarUsuario').style.display = 'block';
                alert("¡Se guardaron los cambios!");
                $guardarNombreUsuario = document.getElementById("nombreUsuario").value;
                localStorage.setItem("nombreUsuario", $guardarNombreUsuario);
                window.location.reload();
            }if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'http://localhost/phpapp/Backend-PBP/Usuarios/editarUsuario',true);
    xmlhttp.send(formJSON);
}
