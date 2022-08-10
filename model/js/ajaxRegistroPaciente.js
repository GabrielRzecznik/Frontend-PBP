function registrarPaciente(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                //var respuestaResivida = xmlhttp.responseText;
                //alert(respuestaResivida);
                localStorage.setItem("id_paciente", data[0]["id_paciente"]);//Me guarda el id_usuario de la bd
                window.location.href = "https://frontend-pbp.herokuapp.com/view/seleccionRol.html";
                
            }else if (xmlhttp.status == 500) {
                alert("Ocurrio un error inesperado con el correo ingresado");
            }else{
                alert("Fallo la conexión con el servidor!!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Pacientes/crearPaciente',true);
    xmlhttp.send(formJSON);
}

