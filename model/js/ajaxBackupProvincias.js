function backupProvincias(provincias){
    var formData = new FormData();
    formData.append("jsonProvincias", '{'+provincias+'}');
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Provincias/actualizarProvincias',true);
    xmlhttp.send(formJSON);
}

function mostrarBackupProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //Seleccionar caso mediante parametro
             }if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
            }else{
                alert("¡Revise su conexión con internet!")
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Provincias/mostrarProvincias',true);
    xmlhttp.send();
}
