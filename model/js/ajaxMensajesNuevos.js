let contMens = document.getElementById('contMens');

function mensajesNuevos(){
    var formData = new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") !== "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", "0");
    }
    
    var formJSON = JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data=JSON.parse(xmlhttp.responseText);
                contMens.innerHTML = '';

                if (data == "") {
                    contMens.innerHTML = '';
                }else{
                    contMens.innerHTML = '<span class="position-absolute tamaño-numero top-1 start-10 translate-middle badge bg-danger">' +
                                            data.length +
                                        '</span>';
                }
                notificacionesNuevas();
            }else{
                console.log("Ocurrio un error inesperado al cargar las mensajes");
                notificacionesNuevas();
            }
        }
    }
   
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/mensajesNuevos',true);
    xmlhttp.send(formJSON);
}