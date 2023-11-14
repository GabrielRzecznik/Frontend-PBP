function buscarObrasSociales(instancia){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                switch (instancia) {
                    case "registroProfesional":
                        var selObr = document.getElementById('obraSocial');
                        generarCodigoHTML();
                        instancia = "provinciaMatricula";
                        buscarProvincias(instancia);
                        break;
                    default:
                        break;
                }

                function generarCodigoHTML() {
                    selObr.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione las obras sociales</option>';
                    
                    var data=JSON.parse(xmlhttp.responseText);
                    
                    for (var i = 0; i < data.length; i++) {
                        selObr.innerHTML += '<option value="'+ data[i]["id_obraSocial"] +'">'+ data[i]["descripcion"] +'</option>';
                    }
    
                    selObr.disabled = false;
                }
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/ObrasSociales/obrasSociales',true);
    xmlhttp.send();
}