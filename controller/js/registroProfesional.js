//#region Metodo Load
window.addEventListener('load',load);

function load(){
    //Agregar obra social
}

document.getElementById("agregar").addEventListener("click", function( event ) {
    document.getElementById('contenido').innerHTML='Párrafo de texto';
});
//#endregion

//#region Validación formulario
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    matricula: /^[0-9/\s]{5,6}$/,//Ejemplo de Cordoba: 35887/1; Bs As: 208845, 236163
    provinciaConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    localidadConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calleConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü 0-9\s]{2,35}$/,
    alturaConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamentoConsultorio: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{0,10}$/
};

const campos = {
    especilidad: false,
    matricula: false,
    obraSocial: false,
    tipoConsulta: false,
    provinciaConsultorio: false,
    localidadConsultorio: false,
    calleConsultorio: false,
    alturaConsultorio: false,
    departamentoConsultorio: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'matricula':
            if (expresiones.matricula.test(e.target.value)) {
                document.getElementById('iconoMatricula').classList.add('validado');
                document.querySelector('#iconoMatricula').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoMatricula').classList.add('bi-check-circle-fill');
                //Mensaje de error Matricula
                document.getElementById('alertMatricula').classList.remove('alertaError');
                //Validar Matricula
                campos['matricula'] = true;
            }else{
                document.getElementById('iconoMatricula').classList.add('error');
                document.getElementById('iconoMatricula').classList.remove('validado');
                document.querySelector('#iconoMatricula').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoMatricula').classList.remove('bi-check-circle-fill');
                //Mensaje de error Matricula
                document.getElementById('alertMatricula').classList.add('alertaError');
                //Limpiar mensaje
                document.getElementById('alertObraSocial').classList.remove('alertaError');
                document.getElementById('alertTipoConsulta').classList.remove('alertaError');
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                campos['matricula'] = false;
            }
            break;
        case 'provinciaConsultorio':
            if (expresiones.provinciaConsultorio.test(e.target.value)) {
                document.getElementById('iconoProvinciaConsultorio').classList.add('validado');
                document.querySelector('#iconoProvinciaConsultorio').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoProvinciaConsultorio').classList.add('bi-check-circle-fill');
                //Mensaje de error Provincia Consultorio
                document.getElementById('alertProvinciaConsultorio').classList.remove('alertaError');
                //Validar Provincia Consultorio
                campos['provinciaConsultorio'] = true;
            }else{
                document.getElementById('iconoProvinciaConsultorio').classList.add('error');
                document.getElementById('iconoProvinciaConsultorio').classList.remove('validado');
                document.querySelector('#iconoProvinciaConsultorio').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoProvinciaConsultorio').classList.remove('bi-check-circle-fill');
                //Mensaje de error Provincia Consultorio
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
                document.getElementById('iconoLocalidadConsultorio').classList.add('validado');
                document.querySelector('#iconoLocalidadConsultorio').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoLocalidadConsultorio').classList.add('bi-check-circle-fill');
                //Mensaje de error Localidad Consultorio
                document.getElementById('alertLocalidadConsultorio').classList.remove('alertaError');
                //Validar Localidad Consultorio
                campos['localidadConsultorio'] = true;
            }else{
                document.getElementById('iconoLocalidadConsultorio').classList.add('error');
                document.getElementById('iconoLocalidadConsultorio').classList.remove('validado');
                document.querySelector('#iconoLocalidadConsultorio').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoLocalidadConsultorio').classList.remove('bi-check-circle-fill');
                //Mensaje de error Localidad Consultorio
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
                document.getElementById('iconoCalleConsultorio').classList.add('validado');
                document.querySelector('#iconoCalleConsultorio').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCalleConsultorio').classList.add('bi-check-circle-fill');
                //Mensaje de error Calle Consultorio
                document.getElementById('alertCalleConsultorio').classList.remove('alertaError');
                //Validar Calle Consultorio
                campos['calleConsultorio'] = true;
            }else{
                document.getElementById('iconoCalleConsultorio').classList.add('error');
                document.getElementById('iconoCalleConsultorio').classList.remove('validado');
                document.querySelector('#iconoCalleConsultorio').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCalleConsultorio').classList.remove('bi-check-circle-fill');
                //Mensaje de error Calle Consultorio
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
                document.getElementById('iconoAlturaConsultorio').classList.add('validado');
                document.querySelector('#iconoAlturaConsultorio').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoAlturaConsultorio').classList.add('bi-check-circle-fill');
                //Mensaje de error Altura Consultorio
                document.getElementById('alertAlturaConsultorio').classList.remove('alertaError');
                //Validar Altura Consultorio
                campos['alturaConsultorio'] = true;
            }else{
                document.getElementById('iconoAlturaConsultorio').classList.add('error');
                document.getElementById('iconoAlturaConsultorio').classList.remove('validado');
                document.querySelector('#iconoAlturaConsultorio').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoAlturaConsultorio').classList.remove('bi-check-circle-fill');
                //Mensaje de error Altura Consultorio
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
                document.getElementById('iconoDepartamentoConsultorio').classList.add('validado');
                document.querySelector('#iconoDepartamentoConsultorio').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoDepartamentoConsultorio').classList.add('bi-check-circle-fill');
                //Mensaje de error Departamento Consultorio
                document.getElementById('alertDepartamentoConsultorio').classList.remove('alertaError');
                //Validar Departamento Consultorio
                campos['departamentoConsultorio'] = true;
            }else{
                document.getElementById('iconoDepartamentoConsultorio').classList.add('error');
                document.getElementById('iconoDepartamentoConsultorio').classList.remove('validado');
                document.querySelector('#iconoDepartamentoConsultorio').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoDepartamentoConsultorio').classList.remove('bi-check-circle-fill');
                //Mensaje de error Departamento Consultorio
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

//Validar Especialidad
document.getElementById("especialidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.querySelector('#iconoEspecialidad').classList.remove('signo');
        document.querySelector('#iconoEspecialidad').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoEspecialidad').classList.add('error');
        document.getElementById('iconoEspecialidad').classList.add('validado');
        document.querySelector('#iconoEspecialidad').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoEspecialidad').classList.add('bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertEspecialidad').classList.remove('alertaError');
        //Validar
        campos['especialidad'] = true;
    }else{
        document.querySelector('#iconoEspecialidad').classList.remove('signo');
        document.getElementById('iconoEspecialidad').classList.add('iconos', 'validado');
        document.querySelector('#iconoEspecialidad').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoEspecialidad').classList.add('error');
        document.getElementById('iconoEspecialidad').classList.remove('validado');
        document.querySelector('#iconoEspecialidad').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoEspecialidad').classList.remove('bi-check-circle-fill');
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
    document.querySelector('#iconoEspecialidad').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoEspecialidad').classList.add('signo');
    document.querySelector('#iconoEspecialidad').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoEspecialidad').classList.remove('iconos', 'validado');
    campos['especialidad'] = false;
}

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion