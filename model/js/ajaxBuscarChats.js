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
               
            }else{
                alert("Ocurrio un error al trar los chats");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Chats/buscarChats',true);
    xmlhttp.send(formJSON);
}
