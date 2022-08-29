function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data);
            }if (xmlhttp.status == 401) {
                
            }
        }
    }
    xmlhttp.open("POST",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
