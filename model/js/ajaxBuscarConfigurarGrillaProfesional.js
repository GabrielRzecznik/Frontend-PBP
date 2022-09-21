function configurarGrillaProfesional($id_profesional){
    var formData= new FormData();
    formData.append("id_profesional", $id_profesional);
    var formJSON=JSON.stringify(Object.fromEntries(formData));    
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
               
            }else{
                alert("¡Ocurrio un error inesperado al mostrar la configuración de la grilla profesional!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/ConfiguracionGrillaProfesional/buscarConfiguracionGrillaProfesional',true);
    xmlhttp.send(formJSON);
}

