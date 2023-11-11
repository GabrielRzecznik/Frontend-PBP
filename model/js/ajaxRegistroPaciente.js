function registrarPaciente(formulario, $foto, $provincia, $latitud, $longitud){
    var formData= new FormData(formulario);
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    formData.append("latitud", $latitud);
    formData.append("longitud", $longitud);
    formData.set("provincia", $provincia);
    formData.set("foto", $foto);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                localStorage.setItem("id_paciente", "");
                
                document.getElementById('tituloRegistrar').style.display = 'block';
                document.getElementById('cargandoRegistrar').style.display = 'none';
                
                window.location.href = "../view/seleccionRol.php";
            }else{
                document.getElementById('tituloRegistrar').style.display = 'block';
                document.getElementById('cargandoRegistrar').style.display = 'none';
                alert("¡Fallo la conexión con el servidor!");
            }
        }
    }

    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Pacientes/crearPaciente',true);
    xmlhttp.send(formJSON);
}

