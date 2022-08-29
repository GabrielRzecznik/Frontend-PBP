let selectProv = document.getElementById('selectProv');

function buscarProvincias(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                selectProv.innerHTML = "";
                console.log(data["provincias"][0]["nombre"]);
                console.log(data["provincias"].length);
                for (var i = 0; i < data["provincias"].length; i++) {
                    console.log("Hola");
                    selectProv.innerHTML = selectProv.innerHTML + '<option value="'+ data["provincias"][i]["nombre"]+'">'+data[i]+'</option>'
                }
            }if (xmlhttp.status == 401) {
                alert("Ocurrio un error inesperado al traer las provincias")
            }
        }
    }
    xmlhttp.open("GET",'https://apis.datos.gob.ar/georef/api/provincias',true);
    xmlhttp.send();
}
