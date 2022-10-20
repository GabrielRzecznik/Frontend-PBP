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
    if ($valorUbicacion == 1) {
        formData.append("latitud", localStorage.getItem("latitud"));
        formData.append("longitud", localStorage.getItem("longitud"));
        var formJSON=JSON.stringify(Object.fromEntries(formData));
        realizarBusqueda(formJSON);
    }if($valorUbicacion == 0){
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
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
                if (xmlhttp.status == 200) {//Volvio Bien
                    var data = JSON.parse(xmlhttp.responseText);
                    con.innerHTML = "";

                    if (data == "") {
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
                        $transformarArray = data[i].obraSocial;
                        $transformarArray = $transformarArray.replace(/{/,'');
                        $transformarArray = $transformarArray.replace(/}/,'');
                        
                        $arrayOS =  $transformarArray.split(','); 
                        
                        $obrasSociales = "";
                        $arrayOS.forEach(function(elemento) {
                            $obrasSociales += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                        });

                        //Mostrar tipos consulta
                        $transformarArray2 = data[i].tipoConsulta;
                        $transformarArray2 = $transformarArray2.replace(/{/,'');
                        $transformarArray2 = $transformarArray2.replace(/}/,'');
                        $tiposConsulta = $transformarArray2.split(/,/).join(', ');

                        if (data[i].localidadConsultorio != "") {
                            //Carta Profesional Con Consultorio
                            con.innerHTML = con.innerHTML +
                            '<div class="col-lg-6 margenCarta">' +
                                '<div class="card bg-light carta">' +
                                    '<div class="row">' +
                                        '<div class="col-6">' +
                                            '<div class="card-body">' +
                                                    '<b>' +
                                                        '<span id="mostrarNombreProfesional">' + data[i].nombre + ' </span>' +
                                                        '<span id="mostrarApellidoProfesional">' + data[i].apellido + '</span>' +
                                                        '<br>' +
                                                    '</b>' +		
                                                    '<span id="mostrarProfesion col12">' + data[i].especialidad + '</span>' +
                                                    '<hr>' +							
                                                '<div class="row">' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        '<span id="mostrarProvinciaProfesional">' + data[i].provinciaConsultorio + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarLocalidadProfesional">' + data[i].localidadConsultorio + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarSexoProfesional">' + data[i].sexo + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">' + edad + ' años</span>' +
                                                        '<br>' +
                                                        '<span class="infoProfesional">' + $tiposConsulta + '</span>' + 
                                                    '</div>' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        $obrasSociales +
                                                        '<br>' +
                                                        '<span class="badge fondoDistancia bg-secondary">Consultorio' +
                                                        '<br>' +
                                                        ' a ' + data[i].distancia + ' km</span>' +
                                                    '</div>' +
                                                '</div>' +
                                                '<a href="../view/perfil.php?'+data[i].nombreUsuario+'" class="btn btn-sm btn-primary botonProfesional">Ver perfil</a>' +
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
                                                    '<span id="mostrarNombreProfesional">' + data[i].nombre + ' </span>' +
                                                    '<span id="mostrarApellidoProfesional">' + data[i].apellido + '</span>' +
                                                    '<br>' +
                                                '</b>' +		
                                                '<span id="mostrarProfesion col12">' + data[i].especialidad + '</span>' +
                                                '<hr>' +									
                                                '<div class="row">' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        '<span id="mostrarProvinciaProfesional">' + data[i].provincia + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarLocalidadProfesional">' + data[i].localidad + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarSexoProfesional">' + data[i].sexo + '</span>' +
                                                        '<br>' +
                                                        '<span id="mostrarEdadProfesional">' + edad + ' años</span>' +//Pasar a años
                                                        '<br>' +
                                                        '<span class="infoProfesional">' + $tiposConsulta + '</span>' + 
                                                    '</div>' +
                                                    '<div class="col-sm-6 infoProfesional">' +
                                                        $obrasSociales +
                                                        '<span class="badge fondoDistancia bg-secondary">Profesional' +
                                                        '<br>' +
                                                        ' a ' + data[i].distancia + ' km</span>' +
                                                    '</div>' +
                                                '</div>' +
                                                
                                                '<a href="../view/perfil.php?'+data[i].nombreUsuario+'" class="btn btn-sm btn-primary botonProfesional">Ver perfil</a>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-6">' +
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

                        if (data[i].localidadConsultorio != "") {
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
    
                            $codigoPostal = "B1871";//B1871 Analizar si vale la pena incorporar segun el impacto
                            
                            $localidad = data[i].localidadConsultorio;
                            $localidad = $localidad.split(/ /).join('%20');
    
                            $provincia = data[i].provinciaConsultorio;//"Provincia%20Buenos%20Aires"
                            $provincia = $provincia.split(/ /).join('%20');
                            $provincia = 'Provincia%20'+$provincia;
    
    
                            document.getElementById('visualizarMapa'+i).innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                        }
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
        console.log(formJSON);
        xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarProfesionales',true);
        xmlhttp.send(formJSON);
    }
}

