function buscarProvinciasConsultorio(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let provCon = document.getElementById('provinciaConsultorio');
                provCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                //provCon.innerHTML = '<option value="0"></option>';
                var data=JSON.parse(xmlhttp.responseText);
                $provinciasArgentinas = [];
                for (var i = 0; i < data["provincias"].length; i++) {
                    $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                }
                $provinciasArgentinas.sort();
                for (var i = 0; i < data["provincias"].length; i++) {
                    provCon.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                }
                const selectPC = document.getElementById('provinciaConsultorio');
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias");
            }
            console.log(xmlhttp.status);
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}

function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let provCon = document.getElementById('provincia');
                provCon.innerHTML += '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                //provCon.innerHTML = '<option value="0"></option>';
                var data=JSON.parse(xmlhttp.responseText);
                $provinciasArgentinas = [];
                for (var i = 0; i < data["provincias"].length; i++) {
                    $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                }
                $provinciasArgentinas.sort();
                for (var i = 0; i < data["provincias"].length; i++) {
                    provCon.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                }
                const selectP = document.getElementById('provincia');
                if (localStorage["provincia"] != "") {
                    document.getElementById('provincia').value = localStorage["provincia"];
                }
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
 
