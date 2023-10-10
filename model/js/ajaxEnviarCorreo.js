function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var codigoGenerado = random(1000, 9999);

function codigoVerificado() {
    console.log("¡Codigo correcto!");
    clearTimeout($tiempo);
}

//Opción 1
function enviarCorreo1(correo, asignarDuracion){
    var formData= new FormData();
    formData.append("destinatario",correo);
    formData.append("codigo",codigoGenerado);
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                document.getElementById('tituloBuscar').style.display = 'block';
                document.getElementById('cargandoBuscar').style.display = 'none';
                //Cambia de Formulario
                if (document.getElementById('formulario') != null) {
                    document.getElementById('formulario').style.display = 'none';
                    document.getElementById('formularioValidar').style.display = 'block';
                }

                $tiempo = setTimeout(anularCodigo, 600000);//10 minutos = 600000
        
                function anularCodigo() {
                    alert("¡Código vencido!. Han pasado 10 minutos!");
                    codigoGenerado = "";
                    location.reload();
                }

                function codigoVerificado() {
                    clearTimeout($tiempo);
                }
            }else{
                asignarDuracion = false;
                enviarCorreo2(correo, asignarDuracion);
            }   
        }
    }
    
    xmlhttp.open("POST",'http://localhost/phpapp/Backend-PBP/Mail/enviarMail',true);//Concatenarle cualquier correo
    xmlhttp.send(formJSON);
}

//Opción 2
function enviarCorreo2(correo, asignarDuracion){
    var formData= new FormData();
    formData.append("Confirmación","Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un código de 4 dígitos. Usted debe copiarlo e ingresarlo dentro de la página web para continuar. ¡Muchas gracias!");
    formData.append("Código",codigoGenerado);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (asignarDuracion) {
                    document.getElementById('tituloBuscar').style.display = 'block';
                    document.getElementById('cargandoBuscar').style.display = 'none';
                    
                    $tiempo = setTimeout(anularCodigo, 600000);//10 minutos = 600000
            
                    function anularCodigo() {
                        alert("¡Código vencido!. Han pasado 10 minutos!");
                        codigoGenerado = "";
                        location.reload();
                    }

                    function codigoVerificado() {
                        clearTimeout($tiempo);
                    }
                }else{
                    //Cambia de Formulario
                    if (document.getElementById('formulario') != null) {
                        document.getElementById('formulario').style.display = 'none';
                        document.getElementById('activador').style.display = 'block';
                    }
                }
            }else{
                alert("¡ocurrio un error inesperado!");   
            }   
        }
    }
    
    xmlhttp.open("POST",'https://formsubmit.co/ajax/'+correo,true);//Concatenarle cualquier correo
    xmlhttp.send(formData);
}

