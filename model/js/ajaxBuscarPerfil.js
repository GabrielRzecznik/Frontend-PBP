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
                if(data[0]["provinciaConsultorio"] != ""){
                document.getElementById('mostrarProvinciaConsultorioPerfil').innerHTML = data[0]["provinciaConsultorio"];
                document.getElementById('mostrarLocalidadConsultorioPerfil').innerHTML = data[0]["localidadConsultorio"];
                document.getElementById('mostrarCalleConsultorioPerfil').innerHTML = data[0]["calleConsultorio"];
                document.getElementById('mostrarAlturaConsultorioPerfil').innerHTML = data[0]["alturaConsultorio"];
                document.getElementById('mostrarDepartamentoConsultorioPerfil').innerHTML = data[0]["departamentoConsultorio"];
                }

            }else{
                alert("¡Ocurrió un error inesperado!");
            }   
        }
    }
    xmlhttp.open("GET",'https://backend-pbp.herokuapp.com/Usuarios/buscarPerfil/'+$nombreUsuario,false);
    xmlhttp.send();//No le mando
}