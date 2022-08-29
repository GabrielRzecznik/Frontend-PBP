//#region Metodo Load
window.addEventListener('load',load);

function load(){
    //Agregar obra social
}
//#endregion

//#region Validación Inputs Normales
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    matricula: /^[0-9/\s]{5,6}$/,//Ejemplo de Cordoba: 35887/1; Bs As: 208845, 236163
    obraSocial: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{2,40}$/,
    provinciaConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    localidadConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calleConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü. 0-9\s]{2,35}$/,
    alturaConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamentoConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,5}$/
};

const campos = {
    especialidad: false,
    matricula: false,
    obraSocial: false,
    tipoConsulta: false,
    provinciaConsultorio: true,
    localidadConsultorio: true,
    calleConsultorio: true,
    alturaConsultorio: true,
    departamentoConsultorio: true,
    //Check
    consultorio: false,
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'matricula':
            if (expresiones.matricula.test(e.target.value)) {
                document.getElementById('iconoMatricula').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoMatricula').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertMatricula').classList.remove('alertaError');
                //Validar campo
                campos['matricula'] = true;
            }else{
                document.getElementById('iconoMatricula').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoMatricula').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertMatricula').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                //Validar
                campos['matricula'] = false;
            }
            break;
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
            break;
        case 'provinciaConsultorio':
            if (expresiones.provinciaConsultorio.test(e.target.value)) {
                document.getElementById('iconoProvinciaConsultorio').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoProvinciaConsultorio').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                //Validar campo
                campos['provinciaConsultorio'] = true;
            }else{
                document.getElementById('iconoProvinciaConsultorio').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoProvinciaConsultorio').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertProvinciaConsultorio').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['provinciaConsultorio'] = false;
            }
            break;
        case 'localidadConsultorio':
            if (expresiones.localidadConsultorio.test(e.target.value)) {
                document.getElementById('iconoLocalidadConsultorio').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoLocalidadConsultorio').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                //Validar campo
                campos['localidadConsultorio'] = true;
            }else{
                document.getElementById('iconoLocalidadConsultorio').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoLocalidadConsultorio').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertLocalidadConsultorio').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['localidadConsultorio'] = false;
            }
            break;
        case 'calleConsultorio':
            if (expresiones.calleConsultorio.test(e.target.value)) {
                document.getElementById('iconoCalleConsultorio').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoCalleConsultorio').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                //Validar campo
                campos['calleConsultorio'] = true;
            }else{
                document.getElementById('iconoCalleConsultorio').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoCalleConsultorio').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertCalleConsultorio').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['calleConsultorio'] = false;
            }
            break;
        case 'alturaConsultorio':
            if (expresiones.alturaConsultorio.test(e.target.value)) {
                document.getElementById('iconoAlturaConsultorio').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoAlturaConsultorio').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                //Validar campo
                campos['alturaConsultorio'] = true;
            }else{
                document.getElementById('iconoAlturaConsultorio').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoAlturaConsultorio').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertAlturaConsultorio').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['alturaConsultorio'] = false;
            }
            break;
        case 'departamentoConsultorio':
            if (expresiones.departamentoConsultorio.test(e.target.value)) {
                document.getElementById('iconoDepartamentoConsultorio').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoDepartamentoConsultorio').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                //Validar campo
                campos['departamentoConsultorio'] = true;
            }else if(departamentoConsultorio.value.trim() == ""){
                document.getElementById('iconoDepartamentoConsultorio').classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                //Limpiar 
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['departamentoConsultorio'] = true;
            }else{
                document.getElementById('iconoDepartamentoConsultorio').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoDepartamentoConsultorio').classList.add('mostrar','bi-x-circle-fill','noValidado');
                //Mensaje de error
                document.getElementById('alertDepartamentoConsultorio').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertMatricula').classList.remove('alertaError');
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                campos['departamentoConsultorio'] = false;
            }
            break;
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

//#region Input Obras Sociales
//Botón Agregar
const botonAgregar = document.getElementById('agregar');
$ObrasSocialesIngresadas = [];
$cantidadDeOS = 0;
$escribirHTML = "";
document.getElementById("agregar").addEventListener("click", function() {
    $obraSocialIngresada = obraSocial.value.trim();
    if (!($obraSocialIngresada == "" || campos.obraSocial == false)) {
        if ($cantidadDeOS < 3) {
            if ($cantidadDeOS == 2) {
                botonAgregar.disabled = true;
            }
            siguientesLetras = $obraSocialIngresada.slice(1).toLowerCase();//Pasar a minusculas
            primerLetra = $obraSocialIngresada[0].toUpperCase();//Primer letra a mayuscula
            $obraSocialIngresada = primerLetra + siguientesLetras;
                
            $ObrasSocialesIngresadas.push($obraSocialIngresada); 
        
            $cantidadDeOS++;
            
            $agregarSO = '<span class="badge bg-secondary etiquetasOS" id="etiquetaOS'+$cantidadDeOS+'">'+$obraSocialIngresada+'</span>';
            
            $escribirHTML = $escribirHTML + $agregarSO;
            document.getElementById('contenido').innerHTML = $escribirHTML;
        }
    }
    //Borra contenido input
    document.getElementById("obraSocial").value = "";
    document.getElementById('iconoObraSocial').classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
});
//Botón Borrar
document.getElementById("borrar").addEventListener("click", function() {
    $cantidadDeOS = 0;
    $ObrasSocialesIngresadas = [];
    $escribirHTML = "";
    document.getElementById('contenido').innerHTML = $escribirHTML;
    botonAgregar.disabled = false;
});
//#endregion

//Validar Tipo de Consulta
var checkConsultorio = document.getElementById("consultorio");
var checkDomicilio = document.getElementById("domicilio");
var checkVirtual = document.getElementById("virtual");

document.getElementById("consultorio").addEventListener("click", function() {
    validarTipoConsulta();
});

document.getElementById("domicilio").addEventListener("click", function() {
    validarTipoConsulta();
});

document.getElementById("virtual").addEventListener("click", function() {
    validarTipoConsulta();
});

$tiposConsultas = [];
function validarTipoConsulta() {
    if (checkConsultorio.checked == true || checkDomicilio.checked == true || checkVirtual.checked == true) {
        $tiposConsultas = [];//Vaciar
        if (checkConsultorio.checked == true) {
            $tiposConsultas.push('Consultorio');
        }if (checkDomicilio.checked == true) {
            $tiposConsultas.push('Domicilio');
        }if (checkVirtual.checked == true) {
            $tiposConsultas.push('Virtual'); 
        }
        
        document.getElementById('iconoTipoConsulta').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        document.getElementById('iconoTipoConsulta').classList.add('mostrar','bi-check-circle-fill','validado');
        
        //Mensaje de error
        document.getElementById('alertTipoConsulta').classList.remove('alertaError');
        //Validar
        campos['tipoConsulta'] = true;
    }else{
        //Mensaje de error
        document.getElementById('alertTipoConsulta').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertMatricula').classList.remove('alertaError');
        document.getElementById('alertObraSocial').classList.remove('alertaError');
        document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
        document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
        document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
        document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
        document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
        campos["tipoConsulta"] = false;

        document.getElementById('iconoTipoConsulta').classList.remove('bi-exclamation-circle-fill','signo','bi-check-circle-fill','validado');
        document.getElementById('iconoTipoConsulta').classList.add('mostrar','bi-x-circle-fill','noValidado');
    }   
}

const inputProvinciaConsultorio = document.getElementById('provinciaConsultorio');
const inputLocalidadConsultorio = document.getElementById('localidadConsultorio');
const inputCalleConsultorio = document.getElementById('calleConsultorio');
const inputAlturaConsultorio = document.getElementById('alturaConsultorio');
const inputDepartamentoConsultorio = document.getElementById('departamentoConsultorio');

document.getElementById("consultorio").addEventListener("click", function() {
    if (checkConsultorio.checked == true) {
        //Activar Inputs
        inputProvinciaConsultorio.disabled = false;
        inputLocalidadConsultorio.disabled = false;
        inputCalleConsultorio.disabled = false;
        inputAlturaConsultorio.disabled = false;
        inputDepartamentoConsultorio.disabled = false;
        //Validar Campos
        campos['consultorio'] = true;
        campos['provinciaConsultorio'] = false;
        campos['localidadConsultorio'] = false;
        campos['calleConsultorio'] = false;
        campos['alturaConsultorio'] = false;
        //Mostrar Iconos !
        document.getElementById('iconoProvinciaConsultorio').classList.add('bi-exclamation-circle-fill','signo');
        document.getElementById('iconoLocalidadConsultorio').classList.add('bi-exclamation-circle-fill','signo');
        document.getElementById('iconoCalleConsultorio').classList.add('bi-exclamation-circle-fill','signo');
        document.getElementById('iconoAlturaConsultorio').classList.add('bi-exclamation-circle-fill','signo');
    }else{
        //Desactivar Inputs
        inputProvinciaConsultorio.disabled = true;
        inputProvinciaConsultorio.value = "";
        inputLocalidadConsultorio.disabled = true;
        inputLocalidadConsultorio.value = "";
        inputCalleConsultorio.disabled = true;
        inputCalleConsultorio.value = "";
        inputAlturaConsultorio.disabled = true;
        inputAlturaConsultorio.value = "";
        inputDepartamentoConsultorio.disabled = true;
        inputDepartamentoConsultorio.value = "";
        //Validar Campos
        campos['consultorio'] = false;
        campos['provinciaConsultorio'] = true;
        campos['localidadConsultorio'] = true;
        campos['calleConsultorio'] = true;
        campos['alturaConsultorio'] = true;
        campos['departamentoConsultorio'] = true;
        //Limpiar Alertas
        document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
        document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
        document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
        document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
        document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
        //Limpiar Iconos
        document.getElementById('iconoProvinciaConsultorio').classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoLocalidadConsultorio').classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoCalleConsultorio').classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoAlturaConsultorio').classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoDepartamentoConsultorio').classList.remove('signo','mostrar','validado','bi-check-circle-fill','bi-x-circle-fill');
    }
});

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});

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

//#region Localización - Enviar
const APP = {
    TOKEN: 'pk.890591643afa7bba7e01f73847cf87dc',
    SEARCHURL: `https://us1.locationiq.com/v1/search.php?format=json&`,
    REVERSEURL: `https://us1.locationiq.com/v1/reverse.php?format=json&`,
    MAPURL: `https://maps.locationiq.com/v3/staticmap?`,
    data: null,
    init: () => {
      //document.getElementById('boton').addEventListener('click', APP.doSearch);
    },
    doSearch: () => {
      //ev.preventDefault();
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
      registrarProfesional(formulario, $tiposConsultas, $ObrasSocialesIngresadas, APP.data['lat'], APP.data['lon']);
    },
};
  
document.addEventListener('DOMContentLoaded', APP.init);
//#endregion

//#region Select Provincia
const provinciaConsultorioSelect = document.getElementById('provinciaConsultorio');

function provincia() {
    
}
//#endregion


