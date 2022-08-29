let provCon = document.getElementById('provinciaConsultorio');

function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                provCon.innerHTML = "";
                var data=JSON.parse(xmlhttp.responseText);
                $provinciasArgentinas = [];
                for (var i = 0; i < data["provincias"].length; i++) {
                    $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                }
                $provinciasArgentinas.sort();
                for (var i = 0; i < data["provincias"].length; i++) {
                    provCon.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                }
                      
                
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
