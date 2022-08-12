function enviarCorreo(){
    $codigo = rand(0001, 9999);
    
    var formJSON=JSON.stringify({"Confirmación&nbsp;de&nbsp;mail":"Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un codigo de 4 digitos. Usted debe copiarlo e ingresarlo dentro de la página web y podra seguir con su registro, muchas gracias!"});
    var formJSON=JSON.stringify({"Su&nbsp;código&nbsp;es":$codigo});

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("El correo se envio con exito");
            }if (xmlhttp.status == 401) {
                alert("No se pudo enviar el correo");
            }
        }
    }
    xmlhttp.open("POST",'https://formsubmit.co/rzecznike@gmail.com',true);
    xmlhttp.send(formJSON);
}
