function seleccionRol(respuesta){
    var formData= new FormData();
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    formData.append("estadoPerfil", respuesta);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON)

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                localStorage.clear();
                window.location.href = "https://frontend-pbp.herokuapp.com/";
            }else{
                alert("Error Seleccion de Rol!");
            }   
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Pacientes/estadoPaciente',true);
    xmlhttp.send(formJSON);
}