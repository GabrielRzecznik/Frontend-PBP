var inputNombre = document.getElementById('nombre');
var inputApellido = document.getElementById('apellido');
var inputDni = document.getElementById('dni');
var inputFechaNacimiento = document.getElementById('fechaNacimiento');
var selectSexoPaciente = document.getElementById('sexoPaciente');
var inputTelefono = document.getElementById('telefono');
var selectProvincia = document.getElementById('provincia');
var selectLocalidad = document.getElementById('localidad');
var inputCalle = document.getElementById('calle');
var inputAltura = document.getElementById('altura');
var inputDepartamento = document.getElementById('departamento');

inputNombre.value = localStorage["nombre"];
inputApellido.value = localStorage["apellido"];
inputDni.value = localStorage["dni"];
inputFechaNacimiento.value = localStorage["fechaNacimiento"];
selectSexoPaciente.value = localStorage["sexo"];
inputTelefono.value = localStorage["telefono"];
selectProvincia.value = localStorage["provincia"];
selectLocalidad.value = localStorage["localidad"];
inputCalle.value = localStorage["calle"];
inputAltura.value = localStorage["altura"];

var iconoNombre = document.getElementById('iconoNombre');
var iconoApellido = document.getElementById('iconoApellido');
var iconoDni = document.getElementById('iconoDni');
var iconoFechaNacimiento = document.getElementById('iconoFechaNacimiento');
var iconoSexoPaciente = document.getElementById('iconoSexoPaciente');
var iconoTelefono = document.getElementById('iconoTelefono');
var iconoProvincia = document.getElementById('iconoProvincia');
var iconoLocalidad = document.getElementById('iconoLocalidad');
var iconoCalle = document.getElementById('iconoCalle');
var iconoAltura = document.getElementById('iconoAltura');
var iconoDepartamento = document.getElementById('iconoDepartamento');

if (localStorage["departamento"] != "") {
    iconoDepartamento.classList.add('signo','bi-check-circle-fill','noValidado');
    inputDepartamento.value = localStorage["departamento"];
}