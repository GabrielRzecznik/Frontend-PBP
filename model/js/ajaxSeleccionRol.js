function seleccionRol(respuesta){
    var formData= new FormData(); 

    if (respuesta == "Paciente") {
        formData.append("id_usuario", localStorage.getItem("id_usuario"), "estadoPerfil", respuesta);
        var formJSON=JSON.stringify(Object.fromEntries(formData));

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
                if (xmlhttp.status == 200) {//Volvio Bien
                    window.location.href = "https://frontend-pbp.herokuapp.com/";
                }else{
                    alert("Error Seleccion de Rol!");
                }   
            }
        }
        xmlhttp.open("PUT",'https://parcial-edi-backend.herokuapp.com/Pacientes/estadoPaciente',true);
        xmlhttp.send(formJSON);

    }else if(respuesta == "Profesional") {
        window.location.href = "https://frontend-pbp.herokuapp.com/view/registroProfesional.html";
    }
}
