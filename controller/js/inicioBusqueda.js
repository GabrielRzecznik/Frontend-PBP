//var mostrarMapa = document.getElementById("visualizarMapa");
//var mostrarMapa2 = document.getElementById("visualizarMapa2");
//$calleAvenida = "Varela";
//$altura = "0096";//0540
//$codigoPostal = "B2756";//B1871
//$localidad = "Avellaneda";
//$provincia = "Provincia%20Buenos%20Aires";

//mostrarMapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
//mostrarMapa2.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
//Lamadrid%20540%2C%20B1871DSF%20Crucecita%2C%20Provincia%20de%20Buenos%20Aires - DATOS SENSIBLES
//Av.%20Eduardo%20Madero%2C%20Buenos%20Aires - DATOS SENSIBLES

//#region Validación de Campos
const inputss = document.querySelectorAll('#formularioP input');

const expresioness = {
    obraSocial: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{2,40}$/
};

const camposs = {
    especialidad: false,
    obraSocial: true
};

const validarFormularioP = (e) => {
    switch (e.target.name) {
        case 'obraSocial':
            if (expresioness.obraSocial.test(e.target.value)) {
                campos['obraSocial'] = true;
            }else if(obraSocial.value.trim() == ""){
                campos['obraSocial'] = true;
            }else{
                campos['obraSocial'] = false;
            }
        break;
    }
}

document.getElementById("especialidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        camposs['especialidad'] = true;
    }else{
        camposs['especialidad'] = false;
    }
});

if (especialidad.value == 0) {
    camposs['especialidad'] = false;
}

inputss.forEach((input) => {
    input.addEventListener('keyup' , validarFormularioP);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormularioP);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Enviar Formulario

const formularioP = document.getElementById('formularioP');

formularioP.addEventListener('submit', (e) => {
    const especialidadValue = especialidad.value.trim();

    e.preventDefault();//evita que se envien los datos y se refresque la pagina

    if (especialidadValue === "0") {
        alert("¡Debe completar el campo especialidad!");
    }
    
    if (camposs.especialidad && camposs.obraSocial) {
        //Enviar AJAX
        $valorUbicacion = ubicacion.value.trim();
        document.getElementById('tituloCargando').style.display = 'none';
        document.getElementById('botonCargando').style.display = 'block';
        buscarProfesionales(formularioP, $valorUbicacion);
    }

}); 
//#endregion

