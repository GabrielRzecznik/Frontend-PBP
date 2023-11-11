function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let provCon = document.getElementById('provincia');
                provCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                var data=JSON.parse(xmlhttp.responseText);
                
                for (var i = 0; i < data.length; i++) {
                    provCon.innerHTML += '<option value="'+ data[i]["IDProvincia"] +'">'+ data[i]["Descripcion"] +'</option>';
                }

                /*const selectP = document.getElementById('provincia');
                if (localStorage["provincia"] != "") {
                    document.getElementById('provincia').value = localStorage["provincia"];
                }*/

                var selectProvincias = document.getElementById("provincia");
                selectProvincias.disabled = false;
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Provincias/provincias',true);
    xmlhttp.send();
}

/*function buscarProvinciasConsultorio(){
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
                //Ordenar Array
                $provinciasArgentinas.sort();
                
                backupProvincias($provinciasArgentinas);
                
                for (var i = 0; i < data["provincias"].length; i++) {
                    provCon.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                }
                const selectPC = document.getElementById('provinciaConsultorio');
            }else{
                $llamado = "Con Consultorio";
                mostrarBackupProvincias($llamado);
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}*/