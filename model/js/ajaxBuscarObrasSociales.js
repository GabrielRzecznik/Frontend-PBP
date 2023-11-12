buscarObrasSociales();

function buscarObrasSociales(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                
                var selectObraSocial = document.getElementById('obraSocial');
               
                
                selectObraSocial.innerHTML = '<option value="0" selected="true" disabled="disabled">Seleccione las obras sociales</option>';
                
                var data=JSON.parse(xmlhttp.responseText);
                
                for (var i = 0; i < data.length; i++) {
                    selectObraSocial.innerHTML += '<option value="'+ data[i]["nombre"] +'">'+ data[i]["nombre"] +'</option>';
                }

                selectObraSocial.disabled = false;
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/ObrasSociales/obrasSociales',true);
    xmlhttp.send();
}