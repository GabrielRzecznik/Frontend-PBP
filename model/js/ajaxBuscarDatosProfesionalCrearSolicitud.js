let selectObraSocial = document.getElementById('obraSocialSolicitud');
let selectTipoConsulta = document.getElementById('seleccionConsulta');

function buscarDatosProfesionalCrearSolicitud(id_profesional){
    var formJSON=JSON.stringify({"id_profesional":id_profesional});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                data=JSON.parse(xmlhttp.responseText);
                
                var obraSocial = data["obraSocial"];
                var tipoConsulta = data["tipoConsulta"];

                //Mostrar obras sociales  
                selectObraSocial.innerHTML = '<option value="Particular (Ninguna)" selected>Particular (Ninguna)</option>';
                
                if (data["obraSocial"] != "{}") {
                    $transformarArray = obraSocial;
                    $transformarArray = $transformarArray.replace(/{/,'');
                    $transformarArray = $transformarArray.replace(/}/,'');
                    
                    var arrayOS =  $transformarArray.split(','); 
                    
                    
                    //Estaba por acá
                    arrayOS.forEach(function(elemento) {
                        selectObraSocial.innerHTML += '<option value="' + elemento + '">' + elemento + '</option>';  
                    });
                }

                //Mostrar tipos de consulta
                $transformarArray = tipoConsulta;
                $transformarArray = $transformarArray.replace(/{/,'');
                $transformarArray = $transformarArray.replace(/}/,'');
                
                var arrayTC =  $transformarArray.split(','); 
                
                selectTipoConsulta.innerHTML = '';
                
                //Estaba por acá
                arrayTC.forEach(function(elemento) {
                    selectTipoConsulta.innerHTML += '<option value="' + elemento + '">' + elemento + '</option>';  
                });
            }else{
                alert("¡Ocurrio un error inesperado al traer ciertos datos del profesional!");
            }
        }
    }
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Profesionales/buscarDatosProfesionalCrearSolicitud',true);
    xmlhttp.send(formJSON);
}
