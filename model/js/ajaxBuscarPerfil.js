//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

//Buscar profesional
function buscarPerfil($nombreUsuario){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                //Datos Usuario
                if (data[0]["id_usuario"] == localStorage.getItem("id_usuario")) {
                    document.getElementById('mostrarLapiz').innerHTML = '<i id="ejecutarEditarPerfil" class="bi bi-pencil-fill lapiz"></i>';
                }
                
                document.getElementById('mostrarNombreUsuarioPerfil').innerHTML = data[0]["nombreUsuario"];
                document.getElementById('mostrarCorreoPerfil').innerHTML = data[0]["correo"];
                //Datos Paciente
                document.getElementById('mostrarNombrePerfil').innerHTML = data[0]["nombre"];
                document.getElementById('mostrarApellidoPerfil').innerHTML = data[0]["apellido"];
                document.getElementById('mostrarSexoPerfil').innerHTML = data[0]["sexo"];
                if (data[0]["foto"] != "Array") {
                    document.getElementById('mostrarFotoPerfil').innerHTML = '<img class="foto" src="'+data[0]["foto"]+'" alt="ocurrio un error">';
                }else{
                    document.getElementById('mostrarFotoPerfil').innerHTML = '<img class="foto" src="../view/img/user.png" alt="ocurrio un error">';
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
                document.getElementById('mostrarProvinciaPerfil').innerHTML = data[0]["provincia"];
                document.getElementById('mostrarLocalidadPerfil').innerHTML = data[0]["localidad"];
                
                //Datos Profesional
                if (data[0]["id_profesional"] != null) {
                    if (data[0]["id_profesional"] != localStorage.getItem("id_profesional")) {
                        document.getElementById('botonesPerfil').style.display = 'block';
                        document.getElementById('contenedorUsuario').style.height = '130px';
                    }
                    document.getElementById('infoProfesional').style.display = 'block';
                    document.getElementById('mostrarEspecialidadPerfil').innerHTML = data[0]["especialidad"];
                    document.getElementById('mostrarMatriculaPerfil').innerHTML = data[0]["matricula"] + ' <a href="https://sistemas.ms.gba.gov.ar/consultamatric/" target="_blank" class="interrogacion"">Corroborar validez <i class="bi bi-file-earmark-medical-fill"></i></a>';
                    //Mostrar obras sociales
                    if (data[0].obraSocial != "{}") {
                        $transformarArray = data[0].obraSocial;
                        $transformarArray = $transformarArray.replace(/{/,'');
                        $transformarArray = $transformarArray.replace(/}/,'');
                        var obrasSociales =  $transformarArray.split(/,/).join(', ');
                        
                        document.getElementById('atiendePor').innerHTML = 'Atiende por';
                        document.getElementById('mostrarObrasSocialesPerfil').innerHTML = obrasSociales + '<br>';
                    }

                    //Mostrar tipo de consultas
                    $transformarArray2 = data[0].tipoConsulta;
                    $transformarArray2 = $transformarArray2.replace(/{/,'');
                    $transformarArray2 = $transformarArray2.replace(/}/,'');
                    var tipoConsultas =  $transformarArray2.split(/,/).join(', '); 
                    document.getElementById('mostrarTipoConsultasPerfil').innerHTML = tipoConsultas;
                    
                    //datos Profesional consultorio
                    if(data[0]["provinciaConsultorio"] != ""){
                        document.getElementById('mostrarProvinciaConsultorioPerfil').innerHTML = data[0]["provinciaConsultorio"];
                        document.getElementById('mostrarLocalidadConsultorioPerfil').innerHTML = data[0]["localidadConsultorio"];
                        document.getElementById('mostrarCalleConsultorioPerfil').innerHTML = data[0]["calleConsultorio"];
                        document.getElementById('mostrarAlturaConsultorioPerfil').innerHTML = data[0]["alturaConsultorio"];
                        if (data[0]["departamentoConsultorio"] != ""){
                            document.getElementById('mostrarDepartamentoConsultorioPerfil').innerHTML = data[0]["departamentoConsultorio"];
                        }
                    }

                    //Mostrar Mapa Portada
                    if (data[0].localidadConsultorio != "") {
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
                        
                        $localidad = data[0].localidadConsultorio;
                        $localidad = $localidad.split(/ /).join('%20');
    
                        $provincia = data[0].provinciaConsultorio;//"Provincia%20Buenos%20Aires"
                        $provincia = $provincia.split(/ /).join('%20');
                        $provincia = 'Provincia%20'+$provincia;
    
                        document.getElementById('visualizarMapa').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapaPortada" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                    }else{
                        document.getElementById('visualizarMapa').innerHTML = '<img  class="mapaPortada fotoPortada" src="../view/img/portadaSinConsultorio.jpg" alt="No se pudo cargar la portada">';
                    }
                }else{
                    document.getElementById('visualizarMapa').innerHTML = '<img  class="mapaPortada fotoPortada" src="../view/img/portadaSinConsultorio.jpg" alt="No se pudo cargar la portada">';
                }
                //Acceso externo al navegador para edición de perfil
                $accesoPerfil = true;
                
                cargarNavegador();
            }else{
                alert("¡Ocurrió un error inesperado!");
            }   
        }
    }
    xmlhttp.open("GET",'http://localhost/phpapp/Backend-PBP/Usuarios/buscarPerfil/'+$nombreUsuario,false);
    xmlhttp.send();//No le mando
}