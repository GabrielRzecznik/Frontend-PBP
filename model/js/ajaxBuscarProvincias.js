let con = document.getElementById('con');

function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data["provincias"][0]["nombre"]);
                console.log(data["provincias"].length);
                function opciones() {
                    $provinciasArgentinas = [];
                    for (var i = 0; i < data["provincias"].length; i++) {
                        $provinciasArgentinas.push(data["provincias"][i]["nombre"]);
                    }
                    $provinciasArgentinas.sort();
                    for (var i = 0; i < data["provincias"].length; i++) {
                        con.innerHTML += '<option value="'+ $provinciasArgentinas[i] +'">'+ $provinciasArgentinas[i] +'</option>';
                    }
                    return con.innerHTML
                }
                con.innerHTML = '<select class="form-select campos" name="provinciaConsultorio" id="provinciaConsultorio" aria-label="Floating label select example">'+//disabled
                    opciones() + '</select>';
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
