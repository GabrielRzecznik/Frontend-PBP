function BuscarUsuarioPorCorreo(correo){
    var formData= new FormData();
    formData.append("correo", correo);
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //console.log("Usuario encontrado");
                //Enviar correo
                enviarCorreo(correo);
                //Cambiar formulario
                document.getElementById('form1').style.display = 'none';
                document.getElementById('form2').style.display = 'block';
            }if (xmlhttp.status == 401) {
                alert("No se encontro el usuario!");
                //Corregir error sppiner
                document.getElementById('cargando').style.display = 'none';
                document.getElementById('loguearse').style.display = 'block';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Usuarios/buscarUsuarioPorCorreo',true);
    xmlhttp.send(formJSON);
}
