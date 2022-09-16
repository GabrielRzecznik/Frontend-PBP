function mostrarBackupProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data);
                console.log("HOLA");
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