
function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                console.log(data["provincias"][0]["nombre"]);
                console.log(data["provincias"].length);
                let prov = document.getElementById('prov');
                for (var i = 0; i < data["provincias"].length; i++) {
                    prov.innerHTML = "";
                    prov.innerHTML += '<option value="'+ data["provincias"][i]["nombre"]+'">'+data["provincias"][i]["nombre"]+'</option>';
                }
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
