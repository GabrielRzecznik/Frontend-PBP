window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    const instanciaAcceso = "registroProfesional";
    controlAcceso(instanciaAcceso);

    const instanciaEspecialidad = "registroProfesionales";
    buscarEspecialidades(instanciaEspecialidad);
});


//#region Validación Inputs Normales
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    matriculaNacional: /^[0-9/\s]{5,6}$/,//Ejemplo de Cordoba: 35887/1; Bs As: 208845, 236163
    matriculaProvincial: /^[0-9/\s]{5,6}$/,//Ejemplo de Cordoba: 35887/1; Bs As: 208845, 236163
    localidadConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calleConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü. 0-9\s]{2,35}$/,
    alturaConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamentoConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,5}$/
};

const campos = {
    especialidad: false,
    matriculaNacional: false,
    matriculaProvincial: false,
    tipoConsulta: false,
    provinciaConsultorio: true,
    localidadConsultorio: true,
    calleConsultorio: true,
    alturaConsultorio: true,
    departamentoConsultorio: true,
    consultorio: false,
};

const selectEspecialidad = document.getElementById('especialidad');
const inputMatriculaNacional = document.getElementById('matriculaNacional');
const inputMatriculaProvincial = document.getElementById('matriculaProvincial');
const selectObraSocial = document.getElementById("obraSocial");
const selectProvinciaConsultorio = document.getElementById('provinciaConsultorio');
const selectLocalidadConsultorio = document.getElementById('localidadConsultorio');
const inputCalleConsultorio = document.getElementById('calleConsultorio');
const inputAlturaConsultorio = document.getElementById('alturaConsultorio');
const inputDepartamentoConsultorio = document.getElementById('departamentoConsultorio');

const iconoEspecialidad = document.getElementById("iconoEspecialidad");
const iconoMatriculaNacional = document.getElementById("iconoMatriculaNacional");
const iconoMatriculaProvincial = document.getElementById("iconoMatriculaProvincial");
const iconoTipoConsulta = document.getElementById("iconoTipoConsulta");
const iconoProvinciaConsultorio = document.getElementById("iconoProvinciaConsultorio");
const iconoLocalidadConsultorio = document.getElementById("iconoLocalidadConsultorio");
const iconoCalleConsultorio = document.getElementById("iconoCalleConsultorio");
const iconoAlturaConsultorio = document.getElementById("iconoAlturaConsultorio");
const iconoDepartamentoConsultorio = document.getElementById("iconoDepartamentoConsultorio");
const iconoConsultorio = document.getElementById("iconoConsultorio");

//#region Alerts
var alertSuperior = document.getElementById('alertSuperior');
var textoAlert = document.getElementById("textoAlert");
var tituloAlert = document.getElementById("tituloAlert");
let timeoutId;

function mostrarAlertSuperior($tipoAlert, $textoAlert) {
    const alertElement = alertSuperior;
    
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    if ($tipoAlert == "warning") {
        alertSuperior.classList.remove("alert-danger");
        alertSuperior.classList.add("alert-warning");
    }else{
        alertSuperior.classList.remove("alert-warning");
        alertSuperior.classList.add("alert-danger");
    }
    
    alertElement.classList.add('alertaError');

    textoAlert.innerHTML = $textoAlert;
    
    timeoutId = setTimeout(() => {
        alertElement.classList.remove('alertaError');
    }, 7500);
}
//#endregion

var contInpMatNac = document.getElementById("contInpMatNac");
var contInpMatPro = document.getElementById("contInpMatPro");

var btnAmbas = document.getElementById("btnAmbas");
var btnNacional = document.getElementById("btnNacional");
var btnProvincial = document.getElementById("btnProvincial");

btnAmbas.addEventListener('click', function() {
    contInpMatNac.style.display = 'block';
    contInpMatPro.style.display = 'block';

    inputMatriculaNacional.value = "";
    inputMatriculaProvincial.value = "";

    campos['matriculaNacional'] = false;
    campos['matriculaProvincial'] = false;
});

btnNacional.addEventListener('click', function() {
    contInpMatNac.style.display = 'none';
    contInpMatPro.style.display = 'block';

    inputMatriculaNacional.value = "";
    inputMatriculaProvincial.value = "";

    campos['matriculaNacional'] = false;
    campos['matriculaProvincial'] = true;
});

btnProvincial.addEventListener('click', function() {
    contInpMatNac.style.display = 'block';
    contInpMatPro.style.display = 'none';

    inputMatriculaNacional.value = "";
    inputMatriculaProvincial.value = "";

    campos['matriculaNacional'] = true;
    campos['matriculaProvincial'] = false;
});

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'matriculaNacional':
            if (expresiones.matriculaNacional.test(e.target.value)) {
                iconoMatriculaNacional.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoMatriculaNacional.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');

                campos['matriculaNacional'] = true;
            }else{
                iconoMatriculaNacional.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoMatriculaNacional.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Matrícula nacional:</strong> ¡La matrícula nacional ingresada no es válida! Recuerde no poner "." y usar solo dígitos.';

                mostrarAlertSuperior(tipoAlert, textoAlert);
                
                campos['matriculaNacional'] = false;
            }
            break;
        case 'matriculaProvincial':
            if (expresiones.matriculaProvincial.test(e.target.value)) {
                iconoMatriculaProvincial.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoMatriculaProvincial.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['matriculaProvincial'] = true;
            }else{
                iconoMatriculaProvincial.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoMatriculaProvincial.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Matrícula provincial:</strong> ¡La matrícula provincial ingresada no es válida! Recuerde no poner "." y usar solo dígitos.';

                mostrarAlertSuperior(tipoAlert, textoAlert);
                
                campos['matriculaProvincial'] = false;
            }
            break;
        case 'calleConsultorio':
            if (expresiones.calleConsultorio.test(e.target.value)) {
                iconoCalleConsultorio.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoCalleConsultorio.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['calleConsultorio'] = true;
            }else{
                iconoCalleConsultorio.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoCalleConsultorio.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Calle consultorio:</strong> ¡La calle ingresada no es valida!';

                mostrarAlertSuperior(tipoAlert, textoAlert);
                
                campos['calleConsultorio'] = false;
            }
            break;
        case 'departamentoConsultorio':
            if (expresiones.departamentoConsultorio.test(e.target.value)) {
                iconoDepartamentoConsultorio.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoDepartamentoConsultorio.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['departamentoConsultorio'] = true;
            }else if(expresiones.departamentoConsultorio.value.trim() == ""){
                iconoDepartamentoConsultorio.classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');

                alertSuperior.classList.remove('alertaError');

                campos['departamentoConsultorio'] = true;
            }else{
                iconoDepartamentoConsultorio.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoDepartamentoConsultorio.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Altura consultorio:</strong> ¡La altura ingresada no es valida!';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['departamentoConsultorio'] = false;
            }
            break;
    } 
};
//#endregion

//#region Select Especialidad
selectEspecialidad.addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoEspecialidad.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoEspecialidad.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['especialidad'] = true;
    }else{
        iconoEspecialidad.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoEspecialidad.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Especialidad:</strong> ¡Debe seleccionar tu especialidad principal!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['especialidad'] = false;
    }
});
//#endregion

//#region Select Provincia
selectProvinciaConsultorio.addEventListener('change', (event) => {
    const provinciaSeleccionada = selectProvinciaConsultorio.value;

    selectLocalidadConsultorio.disabled = false;

    const instancia = "localidadConsultorio";

    buscarLocalidades(provinciaSeleccionada, instancia);
    
    if (event.target.value != 0) {
        iconoProvinciaConsultorio.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoProvinciaConsultorio.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['provinciaConsultorio'] = true;
    }else{
        iconoProvinciaConsultorio.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoProvinciaConsultorio.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Provincia consultorio:</strong> ¡Debe seleccionar tu provincia de su consultorio!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['provinciaConsultorio'] = false;
    }
});
//#endregion

//#region Select Localidad
selectLocalidadConsultorio.addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoLocalidadConsultorio.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoLocalidadConsultorio.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['localidadConsultorio'] = true;
    }else{
        iconoLocalidadConsultorio.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoLocalidadConsultorio.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Localidad consultorio:</strong> ¡Debe seleccionar tu provincia de su consultorio!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['localidadConsultorio'] = false;
    }
});
//#endregion

//#region Input Obras Sociales
const botonAgregar = document.getElementById('agregar');

var ObrasSocialesIngresadas = [];
var cantidadDeOS = 0;
var escribirHTML = "";

botonAgregar.addEventListener("click", function() {
    if (selectObraSocial.value !== "0") {
        const opcionSeleccionada = Array.from(selectObraSocial.options).find(function (opcion) {
            return opcion.value === selectObraSocial.value;
        });

        for (var i = 0; i < selectObraSocial.options.length; i++) {
            if (selectObraSocial.options[i].value === selectObraSocial.value) {
                selectObraSocial.remove(i);
              break;
            }
        }

        if (cantidadDeOS < 3) {
            if (cantidadDeOS == 2) {
                botonAgregar.disabled = true;
                selectObraSocial.disabled = true;
            }
                
            ObrasSocialesIngresadas.push(selectObraSocial.value); 
        
            cantidadDeOS++;

            $agregarSO = '<span class="badge bg-secondary etiquetasOS" id="etiquetaOS'+cantidadDeOS+'">'+opcionSeleccionada.text.trim()+'</span>';
            
            escribirHTML = escribirHTML + $agregarSO;
            document.getElementById('contenido').innerHTML = escribirHTML;
        }
    }

    selectObraSocial.value = 0;
});

//Botón Borrar
document.getElementById("borrar").addEventListener("click", function() {
    const instancia = "registroProfesionales";
    buscarObrasSociales(instancia);
    cantidadDeOS = 0;
    ObrasSocialesIngresadas = [];
    escribirHTML = "";
    document.getElementById('contenido').innerHTML = escribirHTML;
    botonAgregar.disabled = false;
    selectObraSocial.disabled = false;
});
//#endregion

//Validar Tipo de Consulta
const checkConsultorio = document.getElementById("consultorio");
const checkDomicilio = document.getElementById("domicilio");
const checkVirtual = document.getElementById("virtual");

checkConsultorio.addEventListener("click", function() {
    validarTipoConsulta();
});

checkDomicilio.addEventListener("click", function() {
    validarTipoConsulta();
});

checkVirtual.addEventListener("click", function() {
    validarTipoConsulta();
});

var tiposConsultas = [];

function validarTipoConsulta() {
    if (checkConsultorio.checked == true || checkDomicilio.checked == true || checkVirtual.checked == true) {
        tiposConsultas = [];
        if (checkConsultorio.checked == true) {
            tiposConsultas.push('Consultorio');
        }if (checkDomicilio.checked == true) {
            tiposConsultas.push('Domicilio');
        }if (checkVirtual.checked == true) {
            tiposConsultas.push('Virtual'); 
        }
        
        iconoTipoConsulta.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoTipoConsulta.classList.add('mostrar','bi-check-circle-fill','validado');

        alertSuperior.classList.remove('alertaError');
        
        campos['tipoConsulta'] = true;
    }else{
        iconoTipoConsulta.classList.remove('bi-exclamation-circle-fill','signo','bi-check-circle-fill','validado');
        iconoTipoConsulta.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Formato de Consulta:</strong> ¡Debe seleccionar como mínimo una modalidad de consulta!';

        mostrarAlertSuperior(tipoAlert, textoAlert);
        
        campos["tipoConsulta"] = false;
    }   
}

//$conConsultorio = false;
document.getElementById("consultorio").addEventListener("click", function() {
    if (checkConsultorio.checked) {
        const instancia = "registroProfesional";
        
        buscarProvincias(instancia);
        
        selectProvinciaConsultorio.disabled = false;
        inputCalleConsultorio.disabled = false;
        inputAlturaConsultorio.disabled = false;
        inputDepartamentoConsultorio.disabled = false;
        
        campos['consultorio'] = true;
        campos['provinciaConsultorio'] = false;
        campos['localidadConsultorio'] = false;
        campos['calleConsultorio'] = false;
        campos['alturaConsultorio'] = false;
        
        iconoProvinciaConsultorio.classList.add('bi-exclamation-circle-fill','signo');
        iconoLocalidadConsultorio.classList.add('bi-exclamation-circle-fill','signo');
        iconoCalleConsultorio.classList.add('bi-exclamation-circle-fill','signo');
        iconoAlturaConsultorio.classList.add('bi-exclamation-circle-fill','signo');
        
        //$conConsultorio = true;
    }else{
        selectProvinciaConsultorio.disabled = true;
        selectProvinciaConsultorio.value = "";
        selectLocalidadConsultorio.disabled = true;
        selectLocalidadConsultorio.value = "";
        inputCalleConsultorio.disabled = true;
        inputCalleConsultorio.value = "";
        inputAlturaConsultorio.disabled = true;
        inputAlturaConsultorio.value = "";
        inputDepartamentoConsultorio.disabled = true;
        inputDepartamentoConsultorio.value = "";
        
        campos['consultorio'] = false;
        campos['provinciaConsultorio'] = true;
        campos['localidadConsultorio'] = true;
        campos['calleConsultorio'] = true;
        campos['alturaConsultorio'] = true;
        campos['departamentoConsultorio'] = true;
        
        alertSuperior.classList.remove('alertaError');
        
        iconoProvinciaConsultorio.classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill','bi-exclamation-circle-fill');
        iconoLocalidadConsultorio.classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill','bi-exclamation-circle-fill');
        iconoCalleConsultorio.classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill','bi-exclamation-circle-fill');
        iconoAlturaConsultorio.classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill','bi-exclamation-circle-fill');
        iconoDepartamentoConsultorio.classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill','bi-exclamation-circle-fill');
        
        //$conConsultorio = false;
    }
});

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);
    input.addEventListener('blur' , validarFormulario);
});

//#region Enviar Formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const especialidadValue = selectEspecialidad.value.trim();
    const matriculaNacionalValue = inputMatriculaNacional.value.trim();
    const matriculaProvincialValue = inputMatriculaProvincial.value.trim();
    const provinciaConsultorioValue = selectProvinciaConsultorio.value.trim();
    const localidadConsultorioValue = selectLocalidadConsultorio.value.trim();
    const calleConsultorioValue = inputCalleConsultorio.value.trim();
    const alturaConsultorioValue = inputAlturaConsultorio.value.trim();
    
    e.preventDefault();

    function mensajeErrorFormulario($textoAlert) {
        const tipoAlert = "danger";
        const textoAlert = $textoAlert;
        
        mostrarAlertSuperior(tipoAlert, textoAlert);
    }

    if (checkConsultorio.checked) {
        if (especialidadValue === "0" || matriculaNacionalValue === "" || matriculaProvincialValue === "" || provinciaConsultorioValue === "0" || localidadConsultorioValue === "0" || calleConsultorioValue === "" || alturaConsultorioValue === "") {
            const textoAlert = '<strong>Error al ingresar los datos profesionales:</strong> ¡Debe completar todos los campos obligatorios!';

            mensajeErrorFormulario(textoAlert);
        }else{
            if ((campos.especialidad == false && especialidadValue !== "0") || (campos.matriculaNacional == false && matriculaNacionalValue !== "") || (campos.matriculaProvincial == false && matriculaProvincialValue !== "") || campos.tipoConsulta == false || (campos.provinciaConsultorio == false && provinciaConsultorioValue !== "") || (campos.localidadConsultorio == false && localidadConsultorioValue !== "") || (campos.calleConsultorio == false && calleConsultorioValue !== "") || (campos.alturaConsultorio == false && alturaConsultorioValue !== "") || campos.departamentoConsultorio == false) {
                const textoAlert = '<strong>Error al ingresar los datos profesionales:</strong> ¡Formato no valido, verifique los mismos e intente nuevamente!';

                mensajeErrorFormulario(textoAlert);
            }
        }
    }else{
        if ((campos.especialidad == false && especialidadValue === "0") || (campos.matriculaNacional == false && matriculaNacionalValue === "") || (campos.matriculaProvincial == false && matriculaProvincialValue === "") || (campos.tipoConsulta == false)) {
            const textoAlert = '<strong>Error al ingresar los datos profesionales:</strong> ¡Debe completar todos los campos obligatorios!';

            mensajeErrorFormulario(textoAlert);
        }else{
            campos['provinciaConsultorio'] = true;
            if ((campos.especialidad == false && especialidadValue !== "0") || (campos.matriculaNacional == false && matriculaNacionalValue !== "") || (campos.matriculaProvincial == false && matriculaProvincialValue !== "") || campos.tipoConsulta == false || (campos.provinciaConsultorio == false && provinciaConsultorioValue !== "") || (campos.localidadConsultorio == false && localidadConsultorioValue !== "") || (campos.calleConsultorio == false && calleConsultorioValue !== "") || (campos.alturaConsultorio == false && alturaConsultorioValue !== "") || campos.departamentoConsultorio == false) {
                const textoAlert = '<strong>Error al ingresar los datos profesionales:</strong> ¡Formato no valido, verifique los mismos e intente nuevamente!';

                mensajeErrorFormulario(textoAlert);
            }
        }
    }
    
    if (campos.especialidad && campos.matriculaNacional && campos.matriculaProvincial && campos.tipoConsulta && campos.provinciaConsultorio && campos.localidadConsultorio && campos.calleConsultorio && campos.alturaConsultorio && campos.departamentoConsultorio) {
        //Enviar AJAX
        document.getElementById('tituloRegistrar').style.display = 'none';
        document.getElementById('cargandoRegistrar').style.display = 'block';
        if (checkConsultorio.checked) {
            APP.doSearch();
        }else{
            $latitud = "";
            $longitud = "";
            registrarProfesional(formulario, tiposConsultas, ObrasSocialesIngresadas, $latitud, $longitud);
        }
    }

}); 
//#endregion

//#region Localización - Enviar
const APP = {
    TOKEN: 'pk.890591643afa7bba7e01f73847cf87dc',
    SEARCHURL: `https://us1.locationiq.com/v1/search.php?format=json&`,
    REVERSEURL: `https://us1.locationiq.com/v1/reverse.php?format=json&`,
    MAPURL: `https://maps.locationiq.com/v3/staticmap?`,
    data: null,
    init: () => {},
    doSearch: () => {
      $ubicacion = provinciaConsultorio.value.trim() +" "+ localidadConsultorio.value.trim() +" "+ calleConsultorio.value.trim() +" "+ alturaConsultorio.value.trim();

      let q = $ubicacion;//Ingreso ubicación
      if (!q) return false;
      let url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${q}`;
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          APP.data = data[0];
          APP.showSearchResults();
        })
    },
    showSearchResults: () => {
      //console.log(APP.data['display_name']); - por si despues agregamos codigo postal

      //Enviar Ajax
      registrarProfesional(formulario, tiposConsultas, ObrasSocialesIngresadas, APP.data['lat'], APP.data['lon']);
    },
};
  
document.addEventListener('DOMContentLoaded', APP.init);
//#endregion


