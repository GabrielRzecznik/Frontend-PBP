function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var codigoGenerado = random(1000, 9999);

function tipoValidezCodigo() {
    tiempo = setTimeout(anularCodigo, 600000);
}

function anularCodigo() {
    alert("Código vencido! Han pasado 10 minutos!");
    codigoGenerado = "";
}

function enviarCorreo(correo){
    tipoValidezCodigo();//10 Minutos de validez

    var formData= new FormData();
    formData.append("Confirmación","Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un código de 4 dígitos. Usted debe copiarlo e ingresarlo dentro de la página web para continuar, muchas gracias!");
    formData.append("Código",codigoGenerado);
    //var formJSON=JSON.stringify(Object.fromEntries(formData));
    //console.log(formJSON)

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                clearTimeout(tiempo);
            }else{
                
            }   
        }
    }
    
    xmlhttp.open("POST",'https://formsubmit.co/ajax/'+correo,true);//Concatenarle cualquier correo
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