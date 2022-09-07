function editarPaciente(formulario, $latitud, $longitud){
    var formData = new FormData(formulario);
    formData.append("sexo", formulario.sexoPaciente.value);
    formData.delete("sexoPaciente");
    formData.append("latitud", $latitud);
    formData.append("longitud", $longitud);
    formData.append("id_usu", localStorage.getItem("id_usuario"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                
                localStorage.setItem("nombre", nombre.value.trim());
                localStorage.setItem("apellido", apellido.value.trim());
                localStorage.setItem("fechaNacimiento", fechaNacimiento.value.trim());
                localStorage.setItem("sexo", sexo.value.trim());
                localStorage.setItem("foto", foto.value.trim());
                localStorage.setItem("telefono", telefono.value.trim());
                localStorage.setItem("provincia", provincia.value.trim());
                localStorage.setItem("localidad", localidad.value.trim());
                localStorage.setItem("calle", calle.value.trim());
                localStorage.setItem("altura", altura.value.trim());
                localStorage.setItem("departamento", apellido.value.trim());
                localStorage.setItem("latitud", $latitud);
                localStorage.setItem("longitud", $longitud);
                
                document.getElementById('cargandoEditarPaciente').style.display = 'none';
                document.getElementById('textoEditarPaciente').style.display = 'block';
                alert("¡Se guardaron los cambios!");
                window.location.reload();
            }if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
               document.getElementById('cargandoEditarPaciente').style.display = 'none';
               document.getElementById('textoEditarPaciente').style.display = 'block';
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Pacientes/editarPaciente',true);
    xmlhttp.send(formJSON);
}
