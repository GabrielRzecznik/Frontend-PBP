let con = document.getElementById('localidadConsultorio');

function buscarLocalidades(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                con.innerHTML = '<option value="0"></option>';
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data["provincias"][0]["nombre"]);
                console.log(data["provincias"].length);
                
                /*$localidadesArgentinas = [];
                for (var i = 0; i < data["provincias"].length; i++) {
                    $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                }
                $provinciasArgentinas.sort();
                for (var i = 0; i < data["provincias"].length; i++) {
                    con.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                }
                      
                con.innerHTML += '</select>';*/
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.5/download/localidades.json',true);
    xmlhttp.send();
}
