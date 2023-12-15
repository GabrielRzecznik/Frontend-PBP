//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

//Buscar profesional
function buscarPorNombreUsuario(nombreUsuario, acceso){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                if (acceso === "perfil") {
                    //Datos Usuario
                    if (data[0]["id_usuario"] == localStorage.getItem("id_usuario")) {
                        document.getElementById('mostrarLapiz').innerHTML = '<i id="ejecutarEditarPerfil" class="bi bi-pencil-fill lapiz"></i>';
                    }
                    
                    document.getElementById('mostrarNombreUsuarioPerfil').innerHTML = data[0]["nombreUsuario"];
                    document.getElementById('mostrarCorreoPerfil').innerHTML = data[0]["correo"];
                    //Datos Paciente
                    document.getElementById('mostrarNombrePerfil').innerHTML = data[0]["nombre"];
                    document.getElementById('mostrarApellidoPerfil').innerHTML = data[0]["apellido"];
                    document.getElementById('mostrarDniPerfil').innerHTML = data[0]["dni"];
                    document.getElementById('mostrarSexoPerfil').innerHTML = data[0]["sexo"];
                    if (data[0]["foto"] != "Array") {
                        document.getElementById('mostrarFotoPerfil').innerHTML = '<img class="foto" src="'+data[0]["foto"]+'" alt="ocurrio un error">';
                    }else{
                        document.getElementById('mostrarFotoPerfil').innerHTML = '<img class="foto" src="./view/img/user.png" alt="ocurrio un error">';
                    }
                    //Calcular edad
                    var añoNacimiento = parseInt(String(data[0].fechaNacimiento).substring(0,4));
                    var mesNacimiento = parseInt(String(data[0].fechaNacimiento).substring(5,7));
                    if(mesNacimiento < 10){
                        mesNacimiento = "0" + mesNacimiento;
                    }
                    var diaNacimiento = parseInt(String(data[0].fechaNacimiento).substring(8,10));
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
                    document.getElementById('mostrarEdadPerfil').innerHTML = edad;
                    document.getElementById('mostrarTelefonoPerfil').innerHTML = data[0]["telefono"];
                    document.getElementById('mostrarProvinciaPerfil').innerHTML = data[0]["provincia_descripcion"];
                    document.getElementById('mostrarLocalidadPerfil').innerHTML = data[0]["localidad_descripcion"];
                    
                    //Datos Profesional
                    if (data[0]["id_profesional"] != null) {
                        if (data[0]["id_profesional"] != localStorage.getItem("id_profesional")) {
                            document.getElementById('botonesPerfil').style.display = 'block';
                            document.getElementById('contenedorUsuario').style.height = '130px';
                        }
                        document.getElementById('infoProfesional').style.display = 'block';
                        document.getElementById('mostrarEspecialidadPerfil').innerHTML = data[0]["especialidad_descripcion"];
                        
                        document.getElementById('mostrarMatriculaPerfil').innerHTML = "";

                        if (data[0]["matriculaNacional"] !== undefined) {
                            document.getElementById('mostrarMatriculaPerfil').innerHTML += "Matricula Nacional: <b>" + data[0]["matriculaNacional"] + "</b>";
                        }

                        if (data[0]["matriculaProvincial"] !== undefined) {
                            document.getElementById('mostrarMatriculaPerfil').innerHTML += "<br>Matricula Provincial: <b>" + data[0]["matriculaProvincial"] + "</b>";
                            document.getElementById('mostrarMatriculaPerfil').innerHTML += " de <b>" + data[0]["provinciaMatricula"] + "</b>";
                        }
                        
                        //Mostrar obras sociales
                        if (data[0].obraSocial != "") {
                            var obrasSociales = "";
                            data[0].obraSocial.forEach(function(elemento) {
                                obrasSociales += '<span class="badge rounded-pill bg-secondary margenSO">' + elemento + '</span>';
                            });
                            
                            document.getElementById('atiendePor').innerHTML = 'Atiende por';
                            document.getElementById('mostrarObrasSocialesPerfil').innerHTML = obrasSociales + '<br>';
                        }

                        //Mostrar tipo de consultas
                        var recorrerTipoConsulta = data[0].tipoConsulta;
                        
                        var tipoConsulta = '';
                        for (var z = 0; z < recorrerTipoConsulta.length; z++) {
                            tipoConsulta += recorrerTipoConsulta[z];
                        
                            if (z < recorrerTipoConsulta.length - 1) {
                                tipoConsulta += ', ';
                            }
                        }

                        document.getElementById('mostrarTipoConsultasPerfil').innerHTML = tipoConsulta;
                        
                        //datos Profesional consultorio
                        if(data[0]["provinciaConsultorio"] !== ""){
                            document.getElementById('mostrarProvinciaConsultorioPerfil').innerHTML = "Provincia: <b>" + data[0]["provincia_descripcion"] + "</b>";
                            document.getElementById('mostrarLocalidadConsultorioPerfil').innerHTML = "Localidad: <b>" + data[0]["localidad_descripcion"] + "</b>";
                            document.getElementById('mostrarCalleConsultorioPerfil').innerHTML = "Calle/Av.: <b>" + data[0]["calleConsultorio"] + "</b>";
                            document.getElementById('mostrarAlturaConsultorioPerfil').innerHTML = "<b>" + data[0]["alturaConsultorio"] + "</b>";
                            if (data[0]["departamentoConsultorio"] != ""){
                                document.getElementById('mostrarDepartamentoConsultorioPerfil').innerHTML = "Depto: <b>" + data[0]["departamentoConsultorio"] + "</b>";
                            }
                        }

                        //Mostrar Mapa Portada
                        if (data[0].localidadConsultorio !== "" && data[0].localidadConsultorio !== null) {
                            document.getElementById('informacionConsultorio').style.display = 'block';
                            //Mostrar Mapa
                            $calleAvenida = data[0].calleConsultorio;
                            $calleAvenida = $calleAvenida.replace(/calle/,'C.');
                            $calleAvenida = $calleAvenida.replace(/Calle/,'C.');
                            $calleAvenida = $calleAvenida.replace(/avenida/,'Av.');
                            $calleAvenida = $calleAvenida.replace(/Avenida/,'Av.');
                            $calleAvenida = $calleAvenida.split(/ /).join('%20');
        
                            $altura = data[0].alturaConsultorio;//0540
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
                            
                            $localidad = data[0].localidad_descripcion;
                            $localidad = $localidad.split(/ /).join('%20');
        
                            $provincia = data[0].provincia_descripcion;//"Provincia%20Buenos%20Aires"
                            $provincia = $provincia.split(/ /).join('%20');
                            $provincia = 'Provincia%20'+$provincia;
        
                            $latitudConsultorio = data[0].latitudConsultorio;
                            $longitudConsultorio = data[0].longitudConsultorio;

                            document.getElementById('visualizarMapa').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d'+$longitudConsultorio+'!3d'+$latitudConsultorio+'5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapaPortada" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                        }else{
                            document.getElementById('visualizarMapa').innerHTML = '<img  class="mapaPortada fotoPortada" src="../view/img/portadaSinConsultorio.jpg" alt="No se pudo cargar la portada">';
                        }
                    }else{
                        document.getElementById('visualizarMapa').innerHTML = '<img  class="mapaPortada fotoPortada" src="../view/img/portadaSinConsultorio.jpg" alt="No se pudo cargar la portada">';
                    }
                    //Acceso externo al navegador para edición de perfil
                    $accesoPerfil = true;
                }else{
                    document.getElementById('nombre').value = data[0]["nombre"];
                    document.getElementById('apellido').value = data[0]["apellido"];
                    document.getElementById('dni').value = data[0]["dni"];
                    document.getElementById('fechaNacimiento').value = data[0]["fechaNacimiento"];
                    document.getElementById('sexoPaciente').value = data[0]["sexo"];
                    document.getElementById('telefono').value = data[0]["telefono"];
                    document.getElementById('provincia').value = data[0]["provincia"];
                    document.getElementById('localidad').value = data[0]["localidad"];
                    document.getElementById('calle').value = data[0]["calle"];
                    document.getElementById('altura').value = data[0]["altura"];
                    document.getElementById('departamento').value = data[0]["departamento"];
                }
                
            }else{
                alert("¡Ocurrió un error inesperado!");
            }   
        }
    }
    xmlhttp.open("GET",'http://localhost/phpapp/Backend-PBP/Usuarios/buscarPorNombreUsuario/'+nombreUsuario,false);
    xmlhttp.send();
}