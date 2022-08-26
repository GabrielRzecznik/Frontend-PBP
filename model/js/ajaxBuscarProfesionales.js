let con = document.getElementById('con');

function buscarProfesionales(formulario, $valorUbicacion){
    var formData= new FormData(formulario);
    if ($valorUbicacion = 0) {
        formData.append("latitud", "-34.58310719305979");//Buscar datos o guardarlos en el local
        formData.append("longitud", "-58.422003249894956");    
    }else{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);

            function success(geolocationPosition) {
                $coords = geolocationPosition.coords;
                $lat = $coords.latitude;
                $lon = $coords.longitude;
                formData.append("latitud", $lat);
                formData.append("longitud", $lon);  
                console.log($lat);
                console.log($lon);
            }
        }
    }
    formData.delete('ubicacion');
    formData.append("id_profesional", 98);//Tomarla del localstorage
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //Creación de cartas profesionales

                var data = JSON.parse(xmlhttp.responseText);

                //colum.innerHTML = colum.innerHTML + '<th scope="col">Editar</th>' + '<th scope="col">Borrar</th>' + '<th scope="col">Actualizar</th>';
                for (var i = 0; i < data.length; i++) {
                    con.innerHTML = 
                        '<span>' + data[i].nombre + '</span>' +
                        '<span>' + data[i].apellido + '</span>' + 
                        '<span>' + data[i].especialidad + '</span>' + 
                        '<span>' + data[i].sexo + '</span>'
                }

                //Cambiar formulario
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }if (xmlhttp.status == 401) {
                alert("¡No se encontron profesionales!");
                //Corregir error sppiner
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarProfesionales',true);
    xmlhttp.send(formJSON);
}
