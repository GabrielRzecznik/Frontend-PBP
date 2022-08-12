function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function enviarCorreo(){
    //var correo = localStorage.getItem("correo");
    var codigo = random(1000, 9999);

    var formData= new FormData();
    formData.append("Confirmación","Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un código de 4 digitos. Usted debe copiarlo e ingresarlo dentro de la página web para continuar, muchas gracias!");
    formData.append("Código",codigo);
    //var formJSON=JSON.stringify(Object.fromEntries(formData));
    //console.log(formJSON)

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //alert("El correo se envio con exito");
            }else{
                //alert("No se pudo enviar el correo");
            }   
        }
    }
    xmlhttp.open("POST",'https://formsubmit.co/ajax/rzecznike@gmail.com',true);
    xmlhttp.send(formData);
}

/*
url: "https://formsubmit.co/ajax/rzecznike@gmail.com",
    method: "POST",
    data: {
        name: "Hola!",
        message: "Amiguito!"
    },
    dataType: "json"
*/