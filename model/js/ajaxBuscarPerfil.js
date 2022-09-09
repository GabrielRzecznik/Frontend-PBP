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
                //datos Usuario
                document.getElementById('mostrarNombreUsuarioPerfil').innerHTML = data[0]["nombreUsuario"];
                document.getElementById('mostrarCorreoPerfil').innerHTML = data[0]["correo"];
                //datos Paciente
                document.getElementById('mostrarNombrePerfil').innerHTML = data[0]["nombre"];
                document.getElementById('mostrarApellidoPerfil').innerHTML = data[0]["apellido"];
                document.getElementById('mostrarSexoPerfil').innerHTML = data[0]["sexo"];
                //document.getElementById('mostrarFotoPerfil').innerHTML = data[0]["foto"];
                document.getElementById('mostrarTelefonoPerfil').innerHTML = data[0]["telefono"];
                document.getElementById('mostrarProvinciaPerfil').innerHTML = data[0]["provincia"];
                document.getElementById('mostrarLocalidadPerfil').innerHTML = data[0]["localidad"];
                //datos Profesional 
                document.getElementById('mostrarEspecialidadPerfil').innerHTML = data[0]["especialidad"];
                document.getElementById('mostrarMatriculaPerfil').innerHTML = data[0]["matricula"];
                //datos Profesional consultorio
                /*if(data[0]["provinciaConsultorio"] != ""){
                    document.getElementById('mostrarProvinciaConsultorioPerfil').innerHTML = data[0]["provinciaConsultorio"];
                    document.getElementById('mostrarLocalidadConsultorioPerfil').innerHTML = data[0]["localidadConsultorio"];
                    document.getElementById('mostrarCalleConsultorioPerfil').innerHTML = data[0]["calleConsultorio"];
                    document.getElementById('mostrarAlturaConsultorioPerfil').innerHTML = data[0]["alturaConsultorio"];
                    document.getElementById('mostrarDepartamentoConsultorioPerfil').innerHTML = data[0]["departamentoConsultorio"];
                }*/


                //Mostrar Mapa Portada
                if (data[0].localidadConsultorio != "") {
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
                }
            }else{
                alert("¡Ocurrió un error inesperado!");
            }   
        }
    }
    xmlhttp.open("GET",'https://backend-pbp.herokuapp.com/Usuarios/buscarPerfil/'+$nombreUsuario,false);
    xmlhttp.send();//No le mando
}