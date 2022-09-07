function editarPaciente(formulario, $latitud, $longitud){
    var formData = new FormData(formulario);
    formData.append("sexo", formulario.sexoPaciente.value);
    formData.delete("sexoPaciente");
    formData.append("latitud", $latitud);
    formData.append("longitud", $longitud);
    formData.append("id_usu", localStorage.getItem("id_usuario"));
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                document.getElementById('cargandoEditarPaciente').style.display = 'none';
                document.getElementById('textoEditarPaciente').style.display = 'block';
                alert("¡Se guardaron los cambios!");
                window.location.reload();
            }if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Pacientes/editarPaciente',true);
    xmlhttp.send(formJSON);
}
