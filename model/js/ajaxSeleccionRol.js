function seleccionRol(rol){
    var formData= new FormData();
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                if (rol == "Paciente") {
                    localStorage.clear();
                    window.location.href = "../";
                }else if(rol == "Profesional") {
                    window.location.href = "/view/registroProfesional.php";
                }
            }else{
                alert("¡Error inesperado!");
            }   
        }
    }
    xmlhttp.open("PUT",'http://localhost/phpapp/Backend-PBP/Usuarios/activarUsuario',true);
    xmlhttp.send(formJSON);
}
