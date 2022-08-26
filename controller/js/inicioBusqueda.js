var mostrarMapa = document.getElementById("visualizarMapa");
var mostrarMapa2 = document.getElementById("visualizarMapa2");
$calleAvenida = "Varela";
$altura = "0096";//0540
$codigoPostal = "B2756";//B1871
$localidad = "Avellaneda";
$provincia = "Provincia%20Buenos%20Aires";

mostrarMapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
mostrarMapa2.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" class="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
//Lamadrid%20540%2C%20B1871DSF%20Crucecita%2C%20Provincia%20de%20Buenos%20Aires - DATOS SENSIBLES
//Av.%20Eduardo%20Madero%2C%20Buenos%20Aires - DATOS SENSIBLES

//#region Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    obraSocial: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{2,40}$/
};

const campos = {
    especialidad: false,
    obraSocial: true
};
//#endregion

//#region Select Especialidad
document.getElementById("especialidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        campos['especialidad'] = true;
    }else{
        campos['especialidad'] = false;
    }
});

if (especialidad.value == 0) {
    campos['especialidad'] = false;
}
//#endregion

//#region Enviar Formulario

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const especialidadValue = especialidad.value.trim();
    const matriculaValue = matricula.value.trim();
    const provinciaConsultorioValue = provinciaConsultorio.value.trim();
    const localidadConsultorioValue = localidadConsultorio.value.trim();
    const calleConsultorioValue = calleConsultorio.value.trim();
    const alturaConsultorioValue = alturaConsultorio.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina

    if (especialidadValue === "0" || matriculaValue === "" || provinciaConsultorioValue === "" || localidadConsultorioValue === "" || calleConsultorioValue === "" || alturaConsultorioValue === "") {
        alert("¡Debe completar todos los campos obligatorios!");
    }
    
    if (campos.especialidad && campos.matricula && campos.tipoConsulta && campos.provinciaConsultorio && campos.localidadConsultorio && campos.calleConsultorio && campos.alturaConsultorio && campos.departamentoConsultorio) {
        //Enviar AJAX
        document.getElementById('tituloRegistrar').style.display = 'none';
        document.getElementById('cargandoRegistrar').style.display = 'block';
        APP.doSearch();
    }

}); 
//#endregion