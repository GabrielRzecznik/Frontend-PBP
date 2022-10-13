function buscarNotificaciones(){
    var formData= new FormData();
    formData.append("id_paciente", localStorage.getItem("id_paciente"));
    if (localStorage.getItem("id_profesional") !== "") {
        formData.append("id_profesional", localStorage.getItem("id_profesional"));
    }else{
        formData.append("id_profesional", "0");
    }
    var formJSON=JSON.stringify(Object.fromEntries(formData));

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
               
            }else{
                
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/Notificaciones/buscarNotificaciones',true);
    xmlhttp.send(formJSON);
}
