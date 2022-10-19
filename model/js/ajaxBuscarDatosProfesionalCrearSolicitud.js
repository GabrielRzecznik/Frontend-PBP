function buscarDatosProfesionalCrearSolicitud(id_profesional){
    var formJSON=JSON.stringify({"id_profesional":id_profesional});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                console.log("Todo bien!");
            }else{
                alert("¡Ocurrio un error inesperado al traer ciertos datos del profesional!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarDatosProfesionalCrearSolicitud',true);
    xmlhttp.send(formJSON);
}
