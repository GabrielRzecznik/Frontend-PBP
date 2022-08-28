let con = document.getElementById('con');

function buscarProfesionales(formulario, $valorUbicacion){
    var formData= new FormData(formulario);
    if ($valorUbicacion == 0) {
        formData.append("latitud", localStorage.getItem("latitud"));
        formData.append("longitud", localStorage.getItem("longitud"));    
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
    formData.append("id_profesional", localStorage.getItem("id_profesional"));
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //Creación de cartas profesionales

                var data = JSON.parse(xmlhttp.responseText);

                //colum.innerHTML = colum.innerHTML + '<th scope="col">Editar</th>' + '<th scope="col">Borrar</th>' + '<th scope="col">Actualizar</th>';
                console.log(data);
                for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                    con.innerHTML = con.innerHTML +
                    '<div class="col-md-6">' +
                        '<div class="card bg-light carta">' +
                            '<div class="row">' +
                                '<div class="col-6">' +
                                    '<div class="card-body">' +
                                                '<h5>' +
                                                    '<span id="mostrarNombreProfesional">' + data[i].nombre + '</span>' +
                                                    '<span id="mostrarApellidoProfesional">' + data[i].apellido + '</span>' +
                                                    '<h6 id="mostrarProfesion col12">' + data[i].especialidad + '</h6>' +
                                                '</h5>' +		
                                                '<hr>' +							
                                        '<div class="row">' +
                                            '<div class="col-6 infoProfesional">' +
                                                '<span id="mostrarProvinciaProfesional">' + data[i].provinciaConsultorio + '</span>' +
                                                '<br>' +
                                                '<span id="mostrarLocalidadProfesional">' + data[i].localidadConsultorio + '</span>' +
                                                '<br>' +
                                                '<span id="mostrarSexoProfesional">' + data[i].sexo + '</span>' +
                                                '<br>' +
                                                '<span id="mostrarEdadProfesional">' + data[i].fechaDeNacimiento + '</span>' +//Pasar a años
                                            '</div>' +
                                            '<div class="col-6">' +
                                                '<span class="badge rounded-pill bg-secondary">' + data[i].obraSocial +'</span>' +//Analizar
                                                '<br>' +
                                                '<span class="badge rounded-pill bg-secondary">' + data[i].distancia + ' km </span>' +
                                            '</div>' +
                                        '</div>' +
                                        '<button type="button" class="btn btn-primary botonProfesional">Ver perfil</button>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-6">' +
                                    '<span id="visualizarMapa2"></span>' + //Iterar id
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                }

                document.getElementById('tituloCargando').style.display = 'block';
                document.getElementById('botonCargando').style.display = 'none';
            }if (xmlhttp.status == 401) {
                alert("¡No se encontron profesionales!");
                //Corregir error sppiner
                document.getElementById('tituloCargando').style.display = 'block';
                document.getElementById('botonCargando').style.display = 'none';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarProfesionales',true);
    xmlhttp.send(formJSON);
}
