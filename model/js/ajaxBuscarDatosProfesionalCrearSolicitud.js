let selectObraSocial = document.getElementById('obraSocialSolicitud');
let selectTipoConsulta = document.getElementById('seleccionConsulta');

function buscarDatosProfesionalCrearSolicitud(id_profesional){
    var formJSON=JSON.stringify({"id_profesional":id_profesional});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                data = JSON.parse(xmlhttp.responseText);

                // Mostrar obras sociales  
                selectObraSocial.innerHTML = '<option value="Particular (Ninguna)" selected>Particular (Ninguna)</option>';
                
                for (var i = 0; i < data.length; i++) {
                    // Mostrar obras sociales
                    if (data[i]["obraSocial"].length > 0) {
                        data[i].obraSocial.forEach(function(elemento) {
                            selectObraSocial.innerHTML += '<option value="' + elemento + '">' + elemento + '</option>';
                        });
                    }
                
                    // Mostrar tipos consultas
                    selectTipoConsulta.innerHTML = '';  // Limpia el contenido antes de agregar opciones
                
                    data[i]["tipoConsulta"].forEach(function(elemento) {
                        selectTipoConsulta.innerHTML += '<option value="' + elemento + '">' + elemento + '</option>';
                    });
                }
            }else{
                alert("¡Ocurrio un error inesperado al traer ciertos datos del profesional!");
            }
        }
    }

    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Profesionales/buscarDatosProfesionalCrearSolicitud',true);
    xmlhttp.send(formJSON);
}
