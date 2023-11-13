function buscarLocalidades(provincia, instancia){
    if (provincia != "") {
        var datos = {
            id_prov: provincia
        };
        
        var datosJSON = JSON.stringify(datos);
        
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    switch (instancia) {
                        case "localidad":
                            var LocCon = document.getElementById('localidad');
                            break;
                        case "localidadConsultorio":
                            var LocCon = document.getElementById('localidadConsultorio');
                            break;
                        default:
                            break;
                    }
                    
                    LocCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su localidad</option>';
                    var data=JSON.parse(xmlhttp.responseText);
                    
                    for (var i = 0; i < data.length; i++) {
                        LocCon.innerHTML += '<option value="'+ data[i]["id_localidad"] +'">'+ data[i]["descripcion"] +'</option>';
                    }
                }
            }
        }

        xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Localidades/localidades',true);
        xmlhttp.send(datosJSON);   
    }
}