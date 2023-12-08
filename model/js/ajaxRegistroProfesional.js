function registrarProfesional(formulario, tc, os, $latitud, $longitud){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    formData.append("tipoConsulta", '{'+tc+'}');
    formData.append("obraSocial", '{'+os+'}');
    formData.append("latitudConsultorio", $latitud);
    formData.append("longitudConsultorio", $longitud);
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    formData.delete("btnradio");
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                alert("¡Perfil profesional creado con existo!")
                localStorage.clear();
                window.location.href = "../";
            }else if (xmlhttp.status == 500) {
                document.getElementById('tituloRegistrar').style.display = 'block';
                document.getElementById('cargandoRegistrar').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }else{
                document.getElementById('tituloRegistrar').style.display = 'block';
                document.getElementById('cargandoRegistrar').style.display = 'none';
                alert("¡Fallo la conexión con el servidor!");
            }
        }
    }

    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Profesionales/crearProfesional',true);
    xmlhttp.send(formJSON);
}

