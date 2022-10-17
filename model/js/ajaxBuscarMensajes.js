let mensajes = document.getElementById('mensajes');

function buscarMensajes(id_chat){
    var formData= new FormData();
    formData.append("id_chat", id_chat);
    var formJSON=JSON.stringify(Object.fromEntries(formData));
   
    console.log(formJSON);
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                mensajes.innerHTML = '';
            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Mensajes/buscarMensajes',true);
    xmlhttp.send(formJSON);
}
