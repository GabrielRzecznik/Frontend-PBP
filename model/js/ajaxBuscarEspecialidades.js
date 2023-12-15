function buscarEspecialidades(instancia){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                switch (instancia) {
                    case "registroProfesional":
                    case "navegador":
                        var selEsp = document.getElementById('especialidad');
                        generarCodigoHTML();
                        buscarObrasSociales(instancia);
                        break;
                    default:
                        break;
                }
                
                function generarCodigoHTML() {
                    var data=JSON.parse(xmlhttp.responseText);
                    
                    if (instancia === "navegador") {
                        selEsp.innerHTML = '<option value="0" selected="true" disabled="disabled">Especialidades</option>';
                    }else{
                        selEsp.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione su especialidades</option>';
                    }
                    
                    for (var i = 0; i < data.length; i++) {
                        selEsp.innerHTML += '<option value="'+ data[i]["id_especialidad"] +'">'+ data[i]["descripcion"] +'</option>';
                    }
    
                    selEsp.disabled = false;
                }
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Especialidades/especialidades',true);
    xmlhttp.send();
}