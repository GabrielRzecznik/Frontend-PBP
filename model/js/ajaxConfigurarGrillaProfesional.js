function configurarGrillaProfesional($formulario, $dias){
    var formData= new FormData($formulario);
    formData.append("diasAtencion", '{'+$dias+'}');
    formData.append("id_prof", localStorage.getItem("id_profesional"));
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                document.getElementById('configurarGrilla').style.display = 'block';
                document.getElementById('cargandoConfiguracionGrilla').style.display = 'none';
                localStorage.setItem("estadoProfesional", "Activo");
                location.reload();
                alert("Configuración grilla profesional guardada con éxito")
            }else if (xmlhttp.status == 500) {
                document.getElementById('configurarGrilla').style.display = 'block';
                document.getElementById('cargandoConfiguracionGrilla').style.display = 'none';
                alert("¡Ocurrio un error inesperado con el correo ingresado!");
            }else{
                document.getElementById('configurarGrilla').style.display = 'block';
                document.getElementById('cargandoConfiguracionGrilla').style.display = 'none';
                alert("¡Fallo la conexión con el servidor!");
            }
        }
    }
    xmlhttp.open("POST",'https://backend-pbp.herokuapp.com/ConfiguracionGrillaProfesional/crearConfiguracionGrillaProfesional',true);
    xmlhttp.send(formJSON);
}

