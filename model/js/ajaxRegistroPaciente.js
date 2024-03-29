function registrarPaciente(formulario, $latitud, $longitud){
    var formData= new FormData(formulario);
    formData.append("id_usuario", localStorage.getItem("id_usuario"));
    formData.append("latitud", $latitud);
    formData.append("longitud", $longitud);
    var archivo = inputFoto.files[0];

    //var ruta = URL.createObjectURL(archivo);
    formData.append("foto", archivo);
    
    //var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                localStorage.setItem("id_paciente", 0);
                
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

    console.log(formData);
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Pacientes/crearPaciente',true);
    xmlhttp.send(formData);
}

