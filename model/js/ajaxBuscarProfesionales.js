//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

let con = document.getElementById('con');

function buscarProfesionales(formulario, $valorUbicacion){
    var formData= new FormData(formulario);
    formData.delete('ubicacion');
    
    //¿Es profesional?
    $esProf = localStorage.getItem("id_profesional");
    if ($esProf == "") {
        formData.append("id_profesional", 0);
    }else{
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }
    //Según ubicación
    if ($valorUbicacion === "1") {
        formData.append("latitud", localStorage.getItem("latitud"));
        formData.append("longitud", localStorage.getItem("longitud"));
        var formJSON=JSON.stringify(Object.fromEntries(formData));
        realizarBusqueda(formJSON);
    }if($valorUbicacion === "0"){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
                const coords = {
                    lat: latitude,
                    long: longitude
                };
                formData.append("latitud", coords.lat);
                formData.append("longitud", coords.long);
                var formJSON=JSON.stringify(Object.fromEntries(formData));
                realizarBusqueda(formJSON);
            });
        }else{
            alert("No se pudo obtener su ubicación");
        } 
    }
    
    function realizarBusqueda(formJSON) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {//Volvio respuesta
                if (xmlhttp.status === 200) {//Volvio Bien
                    var data = JSON.parse(xmlhttp.responseText);
                    console.log(data);
                    con.innerHTML = "";

                    if (data === "") {
                        con.innerHTML = '<i class="bi bi-file-earmark-medical centrarMensaje"> No se encontraron profesionales por su zona.</i>';
                    }
                    //Creación de cartas profesionales
                    for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach

                        //Calcular edad
                        var añoNacimiento = parseInt(String(data[i].fechaNacimiento).substring(0,4));
                        var mesNacimiento = parseInt(String(data[i].fechaNacimiento).substring(5,7));
                        if(mesNacimiento < 10){
                            mesNacimiento = "0" + mesNacimiento;
                        }
                        var diaNacimiento = parseInt(String(data[i].fechaNacimiento).substring(8,10));
                        if(diaNacimiento < 10){
                            diaNacimiento = "0" + diaNacimiento;
                        }
                        var edad = año - añoNacimiento;
                        if (mes < mesNacimiento) {
                            edad--;
                        }else if (mes == mesNacimiento) {
                            if (dia < diaNacimiento) {
                                edad--;
                            }
                        }

                        //Mostrar obras sociales
                        var obrasSociales = "";
                        data[i].obraSocial.forEach(function(elemento) {
                            obrasSociales += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                        });
                        
                        var recorrerTipoConsulta = data[i].tipoConsulta;
                        
                        var tipoConsulta = '';
                        for (var z = 0; z < recorrerTipoConsulta.length; z++) {
                            tipoConsulta += recorrerTipoConsulta[z];
                        
                            if (z < recorrerTipoConsulta.length - 1) {
                                tipoConsulta += ', ';
                            }
                        }

                        var pd = data[i].provincia_descripcion
                        var ld = data[i].localidad_descripcion

                        if (data[i].localidad_descripcion != "") {
                            //Carta Profesional Con Consultorio
                            con.innerHTML = con.innerHTML +
                            '<div class="col-lg-6 margenCarta">' +
                                '<div class="card bg-light carta">' +
                                    '<div class="row">' +
                                        '<div class="col-6">' +
                                            '<div class="card-body">' +
                                                    '<b>' +
                                                        '<div class="contenedorEnc">' +
                                                        '<div class="box">' +
                                                        '<img class="fotoProf" src="' + data[i].foto + '" alt="Imagen ' + i + '">' +
                                                        '</div>' +
                                                        '<div class="box nombreApellidoProfesional">' +
                                                        '<span id="mostrarNombreProfesional">' + data[i].nombre + ' </span>' +
                                                        '<span id="mostrarApellidoProfesional">' + data[i].apellido + '</span>' +
                                                        '<br>' +  
                                                    '</b>' +		
                                                    '<span id="mostrarProfesion col12">' + data[i].especialidad_descripcion + '</span>' +
                                                    '</div>' +
                                                    '</div>' +
                                                    '<hr>' +							
                                                '<div class="row">' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        '<span id="mostrarPL">' + pd + '<br></span>' +
                                                        '<span id="mostrarPL">' + ld + '<br></span>' +
                                                        '<span id="mostrarSexoProfesional">' + data[i].sexo + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">' + edad + ' años</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">DNI: ' + data[i].dni + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">Cel: ' + data[i].telefono + '</span>' +
                                                        '<br>' +
                                                    '</div>' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        obrasSociales +
                                                        '<br>' +
                                                        '<span class="badge fondoDistancia bg-secondary">Consultorio' +
                                                        '<br>' +
                                                        ' a ' + data[i].distancia + ' km</span>' +
                                                    '</div>' +
                                                '</div>' +
                                                '<span id="mostrarEdadProfesional">' + data[i].correo + '</span>' +
                                                '<br>' +
                                                '<span class="infoProfesional">' + tipoConsulta + '</span>' + 
                                                '<a href="../view/perfil.php?'+ data[i].nombreUsuario +'" class="btn btn-sm btn-primary botonProfesional">Ver perfil</a>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-6">' +
                                            '<span id="visualizarMapa'+i+'"></span>' + 
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
                        }else{
                            //Carta Profesional Sin Consultorio
                            con.innerHTML = con.innerHTML +
                            '<div class="col-lg-6 margenCarta">' +
                                '<div class="card bg-light carta">' +
                                    '<div class="row">' +
                                    '<div class="col-6">' +
                                            '<div class="card-body">' +
                                                    '<b>' +
                                                        '<div class="contenedorEnc">' +
                                                        '<div class="box">' +
                                                        '<img class="fotoProf" src="' + data[i].foto + '" alt="Imagen ' + i + '">' +
                                                        '</div>' +
                                                        '<div class="box nombreApellidoProfesional">' +
                                                        '<span id="mostrarNombreProfesional">' + data[i].nombre + ' </span>' +
                                                        '<span id="mostrarApellidoProfesional">' + data[i].apellido + '</span>' +
                                                        '<br>' +  
                                                    '</b>' +		
                                                    '<span id="mostrarProfesion col12">' + data[i].especialidad_descripcion + '</span>' +
                                                    '</div>' +
                                                    '</div>' +
                                                    '<hr>' +							
                                                '<div class="row">' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        '<span id="mostrarProvinciaProfesional">' + data[i].provincia_descripcion + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarLocalidadProfesional">' + data[i].localidad_descripcion + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarSexoProfesional">' + data[i].sexo + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">' + edad + ' años</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">DNI: ' + data[i].dni + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">Cel: ' + data[i].telefono + '</span>' +
                                                        '<br>' +
                                                    '</div>' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        obrasSociales +
                                                        '<br>' +
                                                        '<span class="badge fondoDistancia bg-secondary">Consultorio' +
                                                        '<br>' +
                                                        ' a ' + data[i].distancia + ' km</span>' +
                                                    '</div>' +
                                                '</div>' +
                                                '<span id="mostrarEdadProfesional">' + data[i].correo + '</span>' +
                                                '<br>' +
                                                '<span class="infoProfesional">' + tipoConsulta + '</span>' + 
                                                '<a href="../view/perfil.php?'+ data[i].nombreUsuario +'" class="btn btn-sm btn-primary botonProfesional">Ver perfil</a>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-6 over">' +
                                            '<div class="sinMapa">' +
                                                '<span class="textoSinMapa">' +
                                                    '<b>El profesional no cuenta<br>con consultorio.</b> ' +
                                                    '<i class="bi bi-geo-alt-fill"></i>' +
                                                '<span>' +        
                                            '</div>' + 
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
                        }

                        if (data[i].localidad_descripcion !== null) {
                            //Mostrar Mapa
                            $calleAvenida = data[i].calleConsultorio;
                            $calleAvenida = $calleAvenida.replace(/calle/,'C.');
                            $calleAvenida = $calleAvenida.replace(/Calle/,'C.');
                            $calleAvenida = $calleAvenida.replace(/avenida/,'Av.');
                            $calleAvenida = $calleAvenida.replace(/Avenida/,'Av.');
                            $calleAvenida = $calleAvenida.split(/ /).join('%20');
    
                            $altura = data[i].alturaConsultorio;//0540
                            if ($altura < 10000) {
                                if ($altura < 1000) {
                                    if ($altura < 10) {
                                        $altura = '000'+$altura;
                                    }else if ($altura <100) {
                                        $altura = '00'+$altura;
                                    }else{
                                        $altura = '0'+$altura;
                                    }
                                }else{
                                    $altura = '0'+$altura;
                                }
                            }
                            
                            $altura = $altura.split(/ /).join('%20');
    
                            $codigoPostal = "";
                            
                            $localidad = data[i].localidad_descripcion;
                            $localidad = $localidad.split(/ /).join('%20');
    
                            $provincia = data[i].provincia_descripcion;//"Provincia%20Buenos%20Aires"
                            $provincia = $provincia.split(/ /).join('%20');
                            $provincia = 'Provincia%20'+$provincia;
    
                            $latitudConsultorio = data[i].latitudConsultorio;
                            $longitudConsultorio = data[i].longitudConsultorio;

                            document.getElementById('visualizarMapa'+i).innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d'+$longitudConsultorio+'!3d'+$latitudConsultorio+'5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                        }else{
                            document.getElementById('visualizarMapa'+i).innerHTML = '<img style="width: 100%; height: 100%" src="img/mapa.jpg" alt="Descripción de la foto">'
                        }
                    }; /* La imagen ocupa el 100% del ancho del contenedor */
                   

                    document.getElementById('tituloCargando').style.display = 'block';
                    document.getElementById('botonCargando').style.display = 'none';
                }
            }
        }

        xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Profesionales/buscarProfesionales',true);
        xmlhttp.send(formJSON);
    }
}

