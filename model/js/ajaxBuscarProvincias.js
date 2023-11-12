function buscarProvincias(instancia){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                switch (instancia) {
                    case "registroPaciente":
                        var provCon = document.getElementById('provincia');
                        break;
                    case "registroProfesional":
                        var provCon = document.getElementById('provinciaConsultorio');
                        break;
                    default:
                        break;
                }
                
                provCon.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                
                var data=JSON.parse(xmlhttp.responseText);
                
                for (var i = 0; i < data.length; i++) {
                    provCon.innerHTML += '<option value="'+ data[i]["IDProvincia"] +'">'+ data[i]["Descripcion"] +'</option>';
                }

                provCon.disabled = false;
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Provincias/provincias',true);
    xmlhttp.send();
}