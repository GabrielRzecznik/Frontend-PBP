function registrarPaciente(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                document.getElementById('tituloBuscar').style.display = 'block';
                document.getElementById('cargandoBuscar').style.display = 'none';
                window.location.href = "https://frontend-pbp.herokuapp.com/view/seleccionRol.html";
            }else if (xmlhttp.status == 500) {
                document.getElementById('tituloBuscar').style.display = 'block';
                document.getElementById('cargandoBuscar').style.display = 'none';
                alert("Ocurrio un error inesperado con el correo ingresado");
            }else{
                document.getElementById('tituloBuscar').style.display = 'block';
                document.getElementById('cargandoBuscar').style.display = 'none';
                alert("Fallo la conexión con el servidor!!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Pacientes/crearPaciente',true);
    xmlhttp.send(formJSON);
}

