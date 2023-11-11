window.addEventListener('pageshow', function() {
    document.getElementById('mostrar').style.display = 'none';
    const instancia = "registroPerfil";
    controlAcceso(instancia);
});

buscarProvincias();

//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

//#region Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    apellido: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,30}$/,
    telefono: /^[0-9\s]{5,15}$/,
    localidad: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü \s]{2,35}$/,
    calle: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü 0-9\s]{2,35}$/,
    altura: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,6}$/,
    departamento: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{1,5}$/
};

const campos = {
    nombre: false,
    apellido: false,
    fechaNacimiento: false,
    sexo: false,
    foto: false,
    telefono: false,
    provincia: false,
    localidad: false,
    calle: false,
    altura: false,
    departamento: true
};

var iconoNombre = document.getElementById('iconoNombre');
var iconoApellido = document.getElementById('iconoApellido');
var iconoFechaNacimiento = document.getElementById('iconoFechaNacimiento');
var iconoSexo = document.getElementById('iconoSexo');
var iconoFoto = document.getElementById('iconoFoto');
var iconoTelefono = document.getElementById('iconoTelefono');
var iconoProvincia = document.getElementById('iconoProvincia');
var iconoLocalidad = document.getElementById('iconoLocalidad');
var iconoCalle = document.getElementById('iconoCalle');
var iconoAltura = document.getElementById('iconoAltura');
var iconoDepartamento = document.getElementById('iconoDepartamento');

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

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'nombre':
            if (expresiones.nombre.test(e.target.value)) {
                iconoNombre.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoNombre.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['nombre'] = true;
            }else{
                iconoNombre.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoNombre.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Nombre:</strong> ¡El nombre ingresado no es valido!<br>Debe tener de 2 a 30 caracteres los cuales no<br>puede ser numeros ni caracteres especiales.';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['nombre'] = false;
            }
            break;
        case 'apellido':
            if (expresiones.apellido.test(e.target.value)) {
                iconoApellido.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoApellido.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['apellido'] = true;
            }else{
                iconoApellido.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoApellido.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Apellido:</strong> ¡El apellido ingresado no es valido!<br>Debe tener de 2 a 30 caracteres los cuales no <br>puede ser numeros ni caracteres especiales.';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['apellido'] = false;
            }
            break;
        case 'telefono':
            if (expresiones.telefono.test(e.target.value)) {
                iconoTelefono.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoTelefono.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['telefono'] = true;
            }else{
                iconoTelefono.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoTelefono.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Télefono:</strong> ¡El télefono ingresado no es valido!';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['telefono'] = false;
            }
            break;
        case 'calle':
            if (expresiones.calle.test(e.target.value)) {
                iconoCalle.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoCalle.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['calle'] = true;
            }else{
                iconoCalle.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoCalle.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Calle/Avenida:</strong> ¡La calle o avenida ingresada no es valida!';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['calle'] = false;
            }
            break;
        case 'altura':
            if (expresiones.altura.test(e.target.value)) {
                iconoAltura.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoAltura.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['altura'] = true;
            }else{
                iconoAltura.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoAltura.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Altura:</strong> ¡La altura ingresada no es vailida!';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['altura'] = false;
            }
            break;
        case 'departamento':
            if (expresiones.departamento.test(e.target.value)) {
                iconoDepartamento.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                iconoDepartamento.classList.add('mostrar','bi-check-circle-fill','validado');
                
                alertSuperior.classList.remove('alertaError');
                
                campos['departamento'] = true;
            }else if(departamento.value.trim() == ""){
                iconoDepartamento.classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');

                alertSuperior.classList.remove('alertaError');

                campos['departamento'] = true;
            }else{
                iconoDepartamento.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                iconoDepartamento.classList.add('mostrar','bi-x-circle-fill','noValidado');
                
                const tipoAlert = "warning";
                const textoAlert = '<strong>Departamento:</strong> ¡El departamento ingresado no es valido!Altura:</strong> ¡La altura ingresada no es vailida!';

                mostrarAlertSuperior(tipoAlert, textoAlert);

                campos['departamento'] = false;
            }
            break;
   } 
};

//#region Validar sexo
document.getElementById("sexo").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoSexo.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoSexo.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
                
        campos['sexo'] = true;
    }else{
        iconoSexo.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoSexo.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Sexo:</strong> ¡El campo sexo es obligatorio!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['sexo'] = false;
    }
});

if (sexo.value == 0) {
    iconoSexo.classList.add('mostrar');
    iconoSexo.classList.remove('bi-check-circle-fill');
    campos['sexo'] = false;
}
//#endregion

//#region Validar fecha de nacimiento
document.getElementById("fechaNacimiento").addEventListener('change', (event) => {
    var fechaIngresada = event.target.value;
    var fechaIngresadaDate = new Date(fechaIngresada);

    var añoIngresado = fechaIngresadaDate.getFullYear();
    var mesIngresado = fechaIngresadaDate.getMonth() + 1;
    var diaIngresado = fechaIngresadaDate.getDate();

    var edad = año - añoIngresado;

    if (mes < mesIngresado) {
        edad--;
    } else if (mes === mesIngresado && dia < diaIngresado) {
        edad--;
    }

    if (edad > 16 && edad < 120) {
        iconoFechaNacimiento.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoFechaNacimiento.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['fechaNacimiento'] = true;
    }else{
        iconoFechaNacimiento.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoFechaNacimiento.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        if (edad < 16) {
            const textoAlert = '<strong>Fecha de nacimiento:</strong> ¡Debes ser mayor de 16 años para utilizar nuestros servicios!';
            mensajeFechaNacimiento(textoAlert);
        }else{
            const textoAlert = '<strong>Fecha de nacimiento:</strong> ¡La fecha ingresada no es válida!';
            mensajeFechaNacimiento(textoAlert);
        }

        function mensajeFechaNacimiento($textoAlert) {
            const tipoAlert = "warning";
            const textoAlert = $textoAlert;
            mostrarAlertSuperior(tipoAlert, textoAlert);
        }

        campos['fechaNacimiento'] = false;
    }
});
//#endregion

//#region Validar foto

function errorFoto() {
    iconoFoto.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
    iconoFoto.classList.add('mostrar','bi-x-circle-fill','noValidado');
            
    campos['foto'] = false;
}

function mensajeFoto(textoAlert) {
    const tipoAlert = "warning";

    mostrarAlertSuperior(tipoAlert, textoAlert);
}

document.getElementById("foto").addEventListener('change', (event) => {
    if (event.target.value != ""){
        const fileInput = document.getElementById("foto");
        const selectedFile = fileInput.files[0];

        if (selectedFile.type.startsWith("image/")) {
            iconoFoto.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
            iconoFoto.classList.add('mostrar','bi-check-circle-fill','validado');

            alertSuperior.classList.remove('alertaError');
            
            campos['foto'] = true;
        } else {
            errorFoto();

            const textoAlert = '<strong>Foto:</strong> ¡El formato no es valido!';

            mensajeFoto(textoAlert);
        }
    }else{
        errorFoto();

        const textoAlert = '<strong>Foto:</strong> ¡Es un campo obligatorio!';

        mensajeFoto(textoAlert);
    }
});
//#endregion

//#region Select Provincia
var provinciaSeleccionada = "";
var selectProvincias = document.getElementById("provincia");

selectProvincias.addEventListener('change', (event) => {
    var selectLocalidades = document.getElementById("localidad");

    provinciaSeleccionada = selectProvincias.value;

    selectLocalidades.disabled = false;

    buscarLocalidades(provinciaSeleccionada);

    iconoLocalidad.classList.add('bi-exclamation-circle-fill','signo','bi-!-circle-fill','noValidado');
    iconoLocalidad.classList.remove('mostrar','bi-check-circle-fill','validado');
    campos['localidad'] = false;

    if (event.target.value != 0) {
        iconoProvincia.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoProvincia.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['provincia'] = true;
    }else{
        iconoProvincia.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoProvincia.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Provincia</strong> ¡Debe seleccionar su provincia de residencia!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['provincia'] = false;
    }
});

if (provincia.value == 0) {
    document.getElementById('iconoProvincia').classList.add('mostrar');//Agregar
    document.getElementById('iconoProvincia').classList.remove('bi-check-circle-fill');//Borrar
    
    campos['provincia'] = false;
}
//#endregion

//#region Select Localidad
document.getElementById("localidad").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        iconoLocalidad.classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        iconoLocalidad.classList.add('mostrar','bi-check-circle-fill','validado');
                
        alertSuperior.classList.remove('alertaError');
        
        campos['localidad'] = true;
    }else{
        iconoLocalidad.classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
        iconoLocalidad.classList.add('mostrar','bi-x-circle-fill','noValidado');
        
        const tipoAlert = "warning";
        const textoAlert = '<strong>Localidad</strong> ¡La localidad ingresada no es valida!';

        mostrarAlertSuperior(tipoAlert, textoAlert);

        campos['localidad'] = false;
    }
});

if (localidad.value == 0) {
    iconoLocalidad.classList.add('mostrar');//Agregar
    iconoLocalidad.classList.remove('bi-check-circle-fill');//Borrar
    
    campos['localidad'] = false;
}
//#endregion

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
    const fechaNacimientoValue = fechaNacimiento.value.trim();
    const sexoValue = sexo.value.trim();
    const fotoValue = foto.value.trim();
    const telefonoValue = telefono.value.trim();
    const provinciaValue = provincia.value.trim();
    const localidadValue = localidad.value.trim();
    const calleValue = calle.value.trim();
    const alturaValue = altura.value.trim();
    //const departamentoValue = departamento.value.trim();
    
    e.preventDefault();

    function mensajeErrorFormulario($textoAlert) {
        const tipoAlert = "danger";
        const textoAlert = $textoAlert;
        mostrarAlertSuperior(tipoAlert, textoAlert);
    }

    if (nombreValue === "" || apellidoValue === "" || fechaNacimientoValue === "" || sexoValue === "0" || fotoValue === "" || telefonoValue === "" || provinciaValue === "0" || localidadValue === "" || calleValue === "" || alturaValue === "") {
        const textoAlert = '<strong>Error al registrar datos personales:</strong> ¡Debe completar todos los campos obligatorios!';

        mensajeErrorFormulario(textoAlert);
    }else{
        if ((campos.nombre === false && nombreValue !== "") || (campos.apellido === false && apellidoValue !== "") || (campos.fechaActual === false && fechaNacimientoValue !== "") || (campos.sexo === false && sexoValue !== "0") || (campos.foto === false && fotoValue !== "") || (campos.telefono === false && telefonoValue !== "") || (campos.provincia === false && provinciaValue !== "") || (campos.localidad === false && localidadValue !== "") || (campos.calle === false && calleValue !== "") || (campos.altura === false && alturaValue !== "") || campos.departamento === false) {
            const textoAlert = '<strong>Error al registrar datos personales:</strong> Error al ingresar los datos: ¡Formato no valido, verifique los mismos e intente nuevamente!';

            mensajeErrorFormulario(textoAlert);
        }
    }
    
    if (campos.nombre && campos.apellido && campos.fechaNacimiento && campos.sexo && campos.foto && campos.telefono && campos.provincia && campos.localidad && campos.calle && campos.altura && campos.departamento) {
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
      $ubicacion = provincia.value.trim() +" "+ localidad.value.trim() +" "+ calle.value.trim() +" "+ altura.value.trim();

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
        //Enviar Ajax
        const selectProvincia = document.getElementById("provincia");
        const provincia = selectProvincia.selectedOptions[0].textContent;

        const fotoInput = document.getElementById("foto");
        const fotoFile = fotoInput.files[0];

        registrarPaciente(formulario, fotoFile, provincia, APP.data['lat'], APP.data['lon']);
    },
};

document.addEventListener('DOMContentLoaded', APP.init);
//#endregion


