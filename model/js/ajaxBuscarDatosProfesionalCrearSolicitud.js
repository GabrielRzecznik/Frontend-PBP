let selectObraSocial = document.getElementById('selectObraSocial');
let selectTipoConsulta = document.getElementById('selectTipoConsulta');

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
                $transformarArray = obraSocial;
                $transformarArray = $transformarArray.replace(/{/,'');
                $transformarArray = $transformarArray.replace(/}/,'');
                
                var arrayOS =  $transformarArray.split(','); 
                
                //Estaba por acá
                $obrasSociales = "";
                $arrayOS.forEach(function(elemento) {
                    $obrasSociales += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                });
            }else{
                alert("¡Ocurrio un error inesperado al traer ciertos datos del profesional!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarDatosProfesionalCrearSolicitud',true);
    xmlhttp.send(formJSON);
}
