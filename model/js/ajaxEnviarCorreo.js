function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var codigoGenerado = random(1000, 9999);

function enviarCorreo(correo, asignarDuracion){
    var formData= new FormData();
    formData.append("Confirmación","Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un código de 4 dígitos. Usted debe copiarlo e ingresarlo dentro de la página web para continuar, muchas gracias!");
    formData.append("Código",codigoGenerado);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (asignarDuracion) {
                    console.log("Tiempo Corriendo");
                    const tiempo = setTimeout(anularCodigo, 5000);//10 minutos = 600000
            
                    function anularCodigo() {
                        alert("Código vencido! Han pasado 10 minutos!");
                        codigoGenerado = "";
                    }
                    //clearTimeout(tiempo);
                }
            }else{
                alert("ocurrio un error inesperado");   
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