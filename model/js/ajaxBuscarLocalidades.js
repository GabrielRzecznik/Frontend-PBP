function buscarLocalidades(provincia){
    if (provincia != "") {
        var datos = {
            IDProvincia: provincia
        };
        
        var datosJSON = JSON.stringify(datos);
        
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    let LocCon = document.getElementById('localidad');
                    LocCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su localidad</option>';
                    var data=JSON.parse(xmlhttp.responseText);
                    
                    for (var i = 0; i < data.length; i++) {
                        LocCon.innerHTML += '<option value="'+ data[i]["Descripcion"] +'">'+ data[i]["Descripcion"] +'</option>';
                    }
                }
            }
        }

        xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Localidades/localidades',true);
        xmlhttp.send(datosJSON);   
    }
}

/*function buscarProvinciasConsultorio(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let LocCon = document.getElementById('provinciaConsultorio');
                LocCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                //LocCon.innerHTML = '<option value="0"></option>';
                var data=JSON.parse(xmlhttp.responseText);
                $provinciasArgentinas = [];
                for (var i = 0; i < data["provincias"].length; i++) {
                    $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                }
                //Ordenar Array
                $provinciasArgentinas.sort();
                
                backupProvincias($provinciasArgentinas);
                
                for (var i = 0; i < data["provincias"].length; i++) {
                    LocCon.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
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