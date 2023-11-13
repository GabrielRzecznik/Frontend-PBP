function buscarProvincias(instancia){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                switch (instancia) {
                    case "registroPaciente":
                        var provCon = document.getElementById('provincia');
                        generarCodigoHTML(0);
                        break;
                    case "registroProfesional":
                        var provCon = document.getElementById('provinciaConsultorio');
                        generarCodigoHTML(0);
                        break;
                    case "provinciaMatricula":
                        var provCon = document.getElementById('provinciaMatricula');
                        generarCodigoHTML(5);
                        break;
                    default:
                        break;
                }

                function generarCodigoHTML($i) {
                    provCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                    
                    var data=JSON.parse(xmlhttp.responseText);
                    
                    for (var i = $i; i < data.length; i++) {
                        provCon.innerHTML += '<option value="'+ data[i]["id_provincia"] +'">'+ data[i]["descripcion"] +'</option>';
                    }
    
                    provCon.disabled = false;
                }
                
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Provincias/provincias',true);
    xmlhttp.send();
}