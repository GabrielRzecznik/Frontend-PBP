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
    obraSocial: false
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'obraSocial':
            if (expresiones.obraSocial.test(e.target.value)) {
                document.getElementById('iconoObraSocial').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoObraSocial').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                //Validar campo
                campos['obraSocial'] = true;
            }else if(obraSocial.value.trim() == ""){
                document.getElementById('iconoObraSocial').classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                //Limpiar 
                document.getElementById('alertObraSocial').classList.remove('alertaError');
            }else{
                document.getElementById('iconoObraSocial').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoObraSocial').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertObraSocial').classList.add('alertaError');
                //Limpiar 
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['obraSocial'] = false;
            }
        break
    }
};

//#endregion

//#region Select Especialidad
document.getElementById("especialidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.getElementById('iconoEspecialidad').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoEspecialidad').classList.add('validado','bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertEspecialidad').classList.remove('alertaError');
        //Validar
        campos['especialidad'] = true;
    }else{
        document.getElementById('iconoEspecialidad').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoEspecialidad').classList.add('noValidado','bi-x-circle-fill');
        //Mensaje de error
        document.getElementById('alertEspecialidad').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertMatricula').classList.remove('alertaError');
        document.getElementById('alertObraSocial').classList.remove('alertaError');
        document.getElementById('alertTipoConsulta').classList.remove('alertaError');
        document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
        document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
        document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
        document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
        document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
        campos['especialidad'] = false;
    }
});

if (especialidad.value == 0) {
    document.getElementById('iconoEspecialidad').classList.add('mostrar');//Agregar
    document.getElementById('iconoEspecialidad').classList.remove('bi-check-circle-fill');//Borrar
    campos['especialidad'] = false;
}
//#endregion

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});

//#endregion

//#region Enviar Formulario

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const especialidadValue = especialidad.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (especialidadValue === "0") {
        alert("Complete el campo especialidad");
    }
    
    if (campos.especialidad) {
        //Enviar AJAX
        document.getElementById('tituloRegistrar').style.display = 'none';
        document.getElementById('cargandoRegistrar').style.display = 'block';
        
    }

}); 
//#endregion