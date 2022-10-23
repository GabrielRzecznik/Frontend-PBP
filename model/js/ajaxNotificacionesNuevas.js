let contNoti = document.getElementById('contNoti');

function notificacionesNuevas(){
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
                contNoti.innerHTML = '';

                if (data == "") {
                    contNoti.innerHTML = '';
                }else{
                    contNoti.innerHTML = '<span class="position-absolute tamaño-numero top-1 start-10 translate-middle badge bg-danger">' +
											data.length +
                                        '</span>';
                }
                buscarProvincias();
            }else{
                console.log("Ocurrio un error inesperado al cargar las notificaciones");
                buscarProvincias();
            }
        }
    }
   
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Notificaciones/notificacionesNuevas',true);
    xmlhttp.send(formJSON);
}