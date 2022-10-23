let contMens = document.getElementById('contMens');

function mensajesNuevas(){
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
                    contMens.innerHTML = '';
                }else{
                    contMens.innerHTML = '<span id="contNoti">' +
										    '<span class="position-absolute top-1 start-10 translate-middle badge rounded-pill bg-danger">' +
											    data.length +
										    '</span>'+
					                    '</span>';
                }
                buscarProvincias();
            }else{
                console.log("Ocurrio un error inesperado al cargar las mensajes");
                buscarProvincias();
            }
        }
    }
   
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/MensajesNuevos',true);
    xmlhttp.send(formJSON);
}