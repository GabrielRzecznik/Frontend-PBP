function rehabilitarHorario(id_horario){
    var formData= new FormData();
    formData.append("id_horario", id_horario);
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("Horario rehabilitado con exito!");
                location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado al rehabilitar el horario!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Horarios/rehabilitarHorario',true);
    xmlhttp.send(formJSON);
}
