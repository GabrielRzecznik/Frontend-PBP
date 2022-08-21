function buscarProfesionales(formulario){
    var formData= new FormData(formulario);
    //Agregar id_profesional para que no se muestre el mismo profesional que realiza la busqueda - agregar en el login
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //Creación de cartas profesionales

                //Cambiar formulario
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }if (xmlhttp.status == 401) {
                alert("!No se encontron profesionales!");
                //Corregir error sppiner
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesional/buscarProfesionales',true);
    xmlhttp.send(formJSON);
}
