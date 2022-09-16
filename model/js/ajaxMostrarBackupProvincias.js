function mostrarBackupProvincias(llamado){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (llamado == "Sin Consultorio") {
                    let provCon = document.getElementById('provincia');
                    provCon.innerHTML += '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                    
                    var data=JSON.parse(xmlhttp.responseText);
                    $provinciasArgentinas = data[0]["jsonProvincias"];
    
                    $provinciasArgentinas = $provinciasArgentinas.replace(/{/,'');
                    $provinciasArgentinas = $provinciasArgentinas.replace(/}/,'');
                    $provinciasArgentinas =  $provinciasArgentinas.split(/"/).join(''); 
                    
                    $arrayProvincias =  $provinciasArgentinas.split(','); 
                            
                    //$provincias = "";
                    $arrayProvincias.forEach(function(provincia) {
                        //$provincias += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                        provCon.innerHTML += '<option value="'+ provincia +'">'+ provincia +'</option>';
                    });
    
                    const selectP = document.getElementById('provincia');
                    if (localStorage["provincia"] != "") {
                        document.getElementById('provincia').value = localStorage["provincia"];
                    }
                }if (llamado == "Con Consultorio") {
                    let provCon = document.getElementById('provinciaConsultorio');
                    provCon.innerHTML += '<option value="0" selected="true" disabled="disabled">Seleccione su provincia</option>';
                    
                    var data=JSON.parse(xmlhttp.responseText);
                    $provinciasArgentinas = data[0]["jsonProvincias"];
    
                    $provinciasArgentinas = $provinciasArgentinas.replace(/{/,'');
                    $provinciasArgentinas = $provinciasArgentinas.replace(/}/,'');
                    $provinciasArgentinas =  $provinciasArgentinas.split(/"/).join(''); 
                    
                    $arrayProvincias =  $provinciasArgentinas.split(','); 
                            
                    //$provincias = "";
                    $arrayProvincias.forEach(function(provincia) {
                        //$provincias += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                        provCon.innerHTML += '<option value="'+ provincia +'">'+ provincia +'</option>';
                    });
    
                    const selectP = document.getElementById('provinciaConsultorio');
                }
            }else{
                alert("¡Error inesperado!");
            }   
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Provincias/mostrarProvincias',true);
    xmlhttp.send();
}
