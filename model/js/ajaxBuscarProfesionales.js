function buscarProfesionales(formulario){
    var formData= new FormData(formulario);
    //Agregar id_profesional para que no se muestre el mismo profesional que realiza la busqueda - agregar en el login
    //var id_profesional = localStorage["id_profesional"];
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //Creación de cartas profesionales

                var data = JSON.parse(xmlhttp.responseText);
                var nombre_columnas = Object.keys(data[0]);

                //colum.innerHTML = colum.innerHTML + '<th scope="col">Editar</th>' + '<th scope="col">Borrar</th>' + '<th scope="col">Actualizar</th>';

                for (var i = 0; i < data.length; i++) {
                    con.innerHTML = con.innerHTML    
                    + '<span>' + data[i].especialidad + '</span>' 
                    + '<span>' + data[i].matricula + '</span>'
                    + '<span>' + data[i].calleConsultorio + '</span>'
                    + '<span>' + data[i].alturaConsultorio + '</span>'
                    + '<span>' + data[i].color + '</span>'
                    + '<span>' + data[i].estado + '</span>'
                    + '<span>' + data[i].cambio + '</span>'
                    + '<span>' + data[i].combustible + '</span>'
                    + '<span>' + data[i].valor + '</span>'
                    + '<span>' + data[i].kilometraje + '</span>'
                    + '<span>' + data[i].anio + '</span>'
                    + '<span>' + data[i].propietario + '</span>'                                    
                }


                //Cambiar formulario
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }if (xmlhttp.status == 401) {
                alert("¡No se encontron profesionales!");
                //Corregir error sppiner
                document.getElementById('cargandoBuscar').style.display = 'none';
                document.getElementById('tituloBuscar').style.display = 'block';
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Profesionales/buscarProfesionales',true);
    xmlhttp.send(formJSON);
}
