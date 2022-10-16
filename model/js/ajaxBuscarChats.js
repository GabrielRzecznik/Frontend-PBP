let chats = document.getElementById('chats');

function buscarChats(){
    var formData= new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") != "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", 0);
    }
    var formJSON=JSON.stringify(Object.fromEntries(formData));
   
    console.log(formJSON);
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                //data[0]["estadoUsuario"] == "Activo"

                chats.innerHTML = '';

                for (var i = 0; i < data.length; i++) {//data.length undefined, recorrer como foreach
                    console.log(data[i]["mensajesSinLeer"]);
                    if (data[i]["mensajesSinLeer"] == 0) {
                        chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] +'" class="py-3 lh-sm item-chat" aria-current="true">' +
                            '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                '<strong class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</strong>' +
                                '<small>Lunes</small>' +
                            '</div>' +
                            '<div class="col-10 mb-1 small">' +
                                data[i]["ultimoMensaje"] +
                            '</div>' +
                        '</a>';
                    }else{
                        chats.innerHTML += '<a href="#'+ data[i]["nombreUsuario"] +'" class="py-3 lh-sm item-chat" aria-current="true">' +
                            '<div class="d-flex w-100 align-items-center justify-content-between">' +
                                '<strong class="mb-1">'+ data[i]["nombre"] + ' ' + data[i]["apellido"] +'</strong>' +
                                '<small>' +
                                    '<span class="textoAzul"> Lunes </span>' +
                                    '<span class="badge rounded-pill bg-primary nuevosMensajes">' + data[i]["mensajesSinLeer"] + '</span>' +
                                '</small>' +    
                            '</div>' +
                            '<div class="col-10 mb-1 small">' +
                                data[i]["ultimoMensaje"] +
                            '</div>' +
                        '</a>';
                    }
                }
            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Chats/buscarChats',true);
    xmlhttp.send(formJSON);
}
