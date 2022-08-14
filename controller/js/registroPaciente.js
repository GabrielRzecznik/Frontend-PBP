//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

//#region Metodo Load
window.addEventListener('load',load);

function load(){
    nombre.focus();
}
//#endregion

//#region Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    apellido: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    telefono: /^[0-9]\S{5,15}$/,
    provincia: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    localidad: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calle: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü 0-9\s]{2,35}$/,
    altura: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamento: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{0,10}$/
};

const campos = {
    nombre: false,
    apellido: false,
    fechaNacimiento: false,
    sexo: false,
    //foto: false,
    telefono: false,
    provincia: false,
    localidad: false,
    calle: false,
    altura: false,
    departamento: true
};

const validarFormulario = (e) => {
   switch (e.target.name) {//identifica el nombre del input manipulado
        case 'nombre':
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('iconoNombre').classList.add('validado');
                document.querySelector('#iconoNombre').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoNombre').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertNombre').classList.remove('alertaError');
                //Validar
                campos['nombre'] = true;
            }else{
                document.getElementById('iconoNombre').classList.add('error');
                document.getElementById('iconoNombre').classList.remove('validado');
                document.querySelector('#iconoNombre').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoNombre').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.add('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['nombre'] = false;
            }
            break;
        case 'apellido':
            if (expresiones.apellido.test(e.target.value)) {
                document.getElementById('iconoApellido').classList.add('validado');
                document.querySelector('#iconoApellido').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoApellido').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertApellido').classList.remove('alertaError');
                //Validar
                campos['apellido'] = true;
            }else{
                document.getElementById('iconoApellido').classList.add('error');
                document.getElementById('iconoApellido').classList.remove('validado');
                document.querySelector('#iconoApellido').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoApellido').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.add('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['apellido'] = false;
            }
            break;
        case 'telefono':
            if (expresiones.telefono.test(e.target.value)) {
                document.getElementById('iconoTelefono').classList.add('validado');
                document.querySelector('#iconoTelefono').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoTelefono').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertTelefono').classList.remove('alertaError');
                //Validar
                campos['telefono'] = true;
            }else{
                document.getElementById('iconoTelefono').classList.add('error');
                document.getElementById('iconoTelefono').classList.remove('validado');
                document.querySelector('#iconoTelefono').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoTelefono').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.add('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['telefono'] = false;
            }
            break;
        case 'provincia':
            if (expresiones.provincia.test(e.target.value)) {
                document.getElementById('iconoProvincia').classList.add('validado');
                document.querySelector('#iconoProvincia').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoProvincia').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertProvincia').classList.remove('alertaError');
                //Validar
                campos['provincia'] = true;
            }else{
                document.getElementById('iconoProvincia').classList.add('error');
                document.getElementById('iconoProvincia').classList.remove('validado');
                document.querySelector('#iconoProvincia').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoProvincia').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.add('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['provincia'] = false;
            }
            break;
        case 'localidad':
            if (expresiones.localidad.test(e.target.value)) {
                document.getElementById('iconoLocalidad').classList.add('validado');
                document.querySelector('#iconoLocalidad').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoLocalidad').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                //Validar
                campos['localidad'] = true;
            }else{
                document.getElementById('iconoLocalidad').classList.add('error');
                document.getElementById('iconoLocalidad').classList.remove('validado');
                document.querySelector('#iconoLocalidad').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoLocalidad').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.add('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['localidad'] = false;
            }
            break;
        case 'calle':
            if (expresiones.calle.test(e.target.value)) {
                document.getElementById('iconoCalle').classList.add('validado');
                document.querySelector('#iconoCalle').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCalle').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertCalle').classList.remove('alertaError');
                //Validar
                campos['calle'] = true;
            }else{
                document.getElementById('iconoCalle').classList.add('error');
                document.getElementById('iconoCalle').classList.remove('validado');
                document.querySelector('#iconoCalle').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCalle').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.add('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['calle'] = false;
            }
            break;
        case 'altura':
            if (expresiones.altura.test(e.target.value)) {
                document.getElementById('iconoAltura').classList.add('validado');
                document.querySelector('#iconoAltura').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoAltura').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertAltura').classList.remove('alertaError');
                //Validar
                campos['altura'] = true;
            }else{
                document.getElementById('iconoAltura').classList.add('error');
                document.getElementById('iconoAltura').classList.remove('validado');
                document.querySelector('#iconoAltura').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoAltura').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.add('alertaError');
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['altura'] = false;
            }
            break;
        case 'departamento':
            if (expresiones.departamento.test(e.target.value)) {
                document.getElementById('iconoDepartamento').classList.add('validado');
                document.querySelector('#iconoDepartamento').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoDepartamento').classList.add('bi-check-circle-fill');
                //Mensaje de error
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                //Validar
                campos['departamento'] = true;
            }else{
                document.getElementById('iconoDepartamento').classList.add('error');
                document.getElementById('iconoDepartamento').classList.remove('validado');
                document.querySelector('#iconoDepartamento').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoDepartamento').classList.remove('bi-check-circle-fill');
                //Limpiar mensaje
                document.getElementById('alertNombre').classList.remove('alertaError');
                document.getElementById('alertApellido').classList.remove('alertaError');
                document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
                document.getElementById('alertSexo').classList.remove('alertaError');
                //document.getElementById('alertFoto').classList.remove('alertaError');
                document.getElementById('alertTelefono').classList.remove('alertaError');
                document.getElementById('alertProvincia').classList.remove('alertaError');
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                document.getElementById('alertCalle').classList.remove('alertaError');
                document.getElementById('alertAltura').classList.remove('alertaError');
                document.getElementById('alertDepartamento').classList.add('alertaError');
                campos['departamento'] = false;
            }
            break;
   } 
};

//Validar sexo
document.getElementById("sexo").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.querySelector('#iconoSexo').classList.remove('signo');
        document.querySelector('#iconoSexo').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoSexo').classList.add('error');
        document.getElementById('iconoSexo').classList.add('validado');
        document.querySelector('#iconoSexo').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoSexo').classList.add('bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertSexo').classList.remove('alertaError');
        //Validar
        campos['sexo'] = true;
    }else{
        document.querySelector('#iconoSexo').classList.remove('signo');
        document.getElementById('iconoSexo').classList.add('iconos', 'validado');
        document.querySelector('#iconoSexo').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoSexo').classList.add('error');
        document.getElementById('iconoSexo').classList.remove('validado');
        document.querySelector('#iconoSexo').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoSexo').classList.remove('bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertSexo').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertNombre').classList.remove('alertaError');
        document.getElementById('alertApellido').classList.remove('alertaError');
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        //document.getElementById('alertFoto').classList.remove('alertaError');
        document.getElementById('alertTelefono').classList.remove('alertaError');
        document.getElementById('alertProvincia').classList.remove('alertaError');
        document.getElementById('alertLocalidad').classList.remove('alertaError');
        document.getElementById('alertCalle').classList.remove('alertaError');
        document.getElementById('alertAltura').classList.remove('alertaError');
        document.getElementById('alertDepartamento').classList.remove('alertaError');
        campos['sexo'] = false;
    }
});

if (sexo.value == 0) {
    document.querySelector('#iconoSexo').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoSexo').classList.add('signo');
    document.querySelector('#iconoSexo').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoSexo').classList.remove('iconos', 'validado');
    campos['sexo'] = false;
}

//Validar fecha de nacimiento
document.getElementById("fechaNacimiento").addEventListener('change', (event) => {
    //event.target.value Captura el valor del input date
    fechaIngresada = event.target.value;
    
    var añoIngresado = parseInt(String(fechaIngresada).substring(0,4));
    var mesIngresado = parseInt(String(fechaIngresada).substring(5,7));
    if(mesIngresado < 10){
        mesIngresado = "0" + mesIngresado;
    }
    var diaIngresado = parseInt(String(fechaIngresada).substring(8,10));
    if(diaIngresado < 10){
        diaIngresado = "0" + diaIngresado;
    }
   
    var edad = año - añoIngresado;

    if (mes < mesIngresado) {
        edad--;
    }else if (mes == mesIngresado) {
        if (dia < diaIngresado) {
            edad--;
        }
    }

    if (edad > 16 && edad < 120) {
        document.querySelector('#iconoFechaNacimiento').classList.remove('signo');
        document.getElementById('iconoFechaNacimiento').classList.add('error');
        document.getElementById('iconoFechaNacimiento').classList.add('validado');
        document.querySelector('#iconoFechaNacimiento').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoFechaNacimiento').classList.add('bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        //Validar
        campos['fechaNacimiento'] = true;
    }else{
        document.querySelector('#iconoFechaNacimiento').classList.remove('signo');
        document.getElementById('iconoFechaNacimiento').classList.add('iconos', 'validado');
        document.getElementById('iconoFechaNacimiento').classList.add('error');
        document.getElementById('iconoFechaNacimiento').classList.remove('validado');
        document.querySelector('#iconoFechaNacimiento').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoFechaNacimiento').classList.remove('bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertFechaNacimiento').classList.add('alertaError');
        //Limpiar mensaje
        document.getElementById('alertNombre').classList.remove('alertaError');
        document.getElementById('alertApellido').classList.remove('alertaError');
        document.getElementById('alertSexo').classList.remove('alertaError');
        //document.getElementById('alertFoto').classList.remove('alertaError');
        document.getElementById('alertTelefono').classList.remove('alertaError');
        document.getElementById('alertProvincia').classList.remove('alertaError');
        document.getElementById('alertLocalidad').classList.remove('alertaError');
        document.getElementById('alertCalle').classList.remove('alertaError');
        document.getElementById('alertAltura').classList.remove('alertaError');
        document.getElementById('alertDepartamento').classList.remove('alertaError');
        campos['fechaNacimiento'] = false;
    }
});

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    //const fechaNacimientoValue = fechaNacimiento.value.trim();
    const sexoValue = sexo.value.trim();
    //const fotoValue = foto.value.trim();
    const telefonoValue = telefono.value.trim();
    const provinciaValue = provincia.value.trim();
    const localidadValue = localidad.value.trim();
    const calleValue = calle.value.trim();
    const alturaValue = altura.value.trim();
    //const departamentoValue = departamento.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (nombreValue === "") {
        alert("Complete el campo nombre");
    }if (apellidoValue === "") {
        alert("Complete el campo apellido");
    }if (fechaNacimiento = false) {
        alert("Complete el campo fecha nacimiento");
    }if (sexoValue === "0") {
        alert("Complete el campo sexo");
    }if (telefonoValue === "") {
        alert("Complete el campo telefono");
    }if (provinciaValue === "") {
        alert("Complete el campo provincia");
    }if (localidadValue === "") {
        alert("Complete el campo localidad");
    }if (calleValue === "") {
        alert("Complete el campo calle");
    }if (alturaValue === "") {
        alert("Complete el campo altura");
    }
    
    if (campos.nombre && campos.apellido && campos.fechaNacimiento && campos.sexo && campos.telefono && campos.provincia && campos.localidad && campos.calle && campos.altura) {
        //Enviar AJAX
        registrarPaciente(formulario);
        //AGREGAR Animación de cargando

    }

}); 
//#endregion
    
  