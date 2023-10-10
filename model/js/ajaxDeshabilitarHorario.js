function deshabilitarHorario(id_proHorario, infoDesdeHorario, infoHastaHorario){
    var formData= new FormData();
    formData.append("id_proHorario", id_proHorario);
    formData.append("horarioDesde", infoDesdeHorario);
    formData.append("horarioHasta", infoHastaHorario);
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("Horario deshabilitado con exito!");
                location.reload();
            }else{
                //document.getElementById('confirmarSolicitud').style.display = 'block';
                //document.getElementById('confSoliCarg').style.display = 'none';
                alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Horarios/deshabilitarHorario',true);
    xmlhttp.send(formJSON);
}
