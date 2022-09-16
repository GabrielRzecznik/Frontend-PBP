function backupProvincias(provincias){
    var formData = new FormData();
    formData.append("jsonProvincias", '{'+provincias+'}');
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 401) {
               alert("¡Ocurrio un error inesperado!");
            }else{
                alert("¡Revise su conexión con internet!")
            }
        }
    }
    xmlhttp.open("PUT",'https://backend-pbp.herokuapp.com/Provincias/actualizarProvincias',true);
    xmlhttp.send(formJSON);
}
