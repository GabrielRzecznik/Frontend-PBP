//Obtener fecha actual
let date = new Date();
let fechaActual = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'));
let dia = date.getDate();
let mes = date.getMonth()+1;
let año = date.getFullYear();

//#region Metodo Load
window.addEventListener('load',load);

function load(){
    //Verificar si hay logueo
    if (localStorage.getItem("id_usuario") == null) {
        window.location.href = "https://frontend-pbp.herokuapp.com/";
    }else{
        document.getElementById('mostrar').style.display = 'block';
    }

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
    departamento: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü/ 0-9\s]{2,5}$/
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
                document.getElementById('iconoNombre').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoNombre').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertNombre').classList.remove('alertaError');
                //Validar campo
                campos['nombre'] = true;
            }else{
                document.getElementById('iconoNombre').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoNombre').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoApellido').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoApellido').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertApellido').classList.remove('alertaError');
                //Validar campo
                campos['apellido'] = true;
            }else{
                document.getElementById('iconoApellido').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoApellido').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoTelefono').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoTelefono').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertTelefono').classList.remove('alertaError');
                //Validar campo
                campos['telefono'] = true;
            }else{
                document.getElementById('iconoTelefono').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoTelefono').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoProvincia').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoProvincia').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertProvincia').classList.remove('alertaError');
                //Validar campo
                campos['provincia'] = true;
            }else{
                document.getElementById('iconoProvincia').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoProvincia').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoLocalidad').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoLocalidad').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertLocalidad').classList.remove('alertaError');
                //Validar campo
                campos['localidad'] = true;
            }else{
                document.getElementById('iconoLocalidad').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoLocalidad').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoCalle').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoCalle').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertCalle').classList.remove('alertaError');
                //Validar campo
                campos['calle'] = true;
            }else{
                document.getElementById('iconoCalle').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoCalle').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoAltura').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoAltura').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertAltura').classList.remove('alertaError');
                //Validar campo
                campos['altura'] = true;
            }else{
                document.getElementById('iconoAltura').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoAltura').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
                document.getElementById('iconoDepartamento').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');//Borrar !,x
                document.getElementById('iconoDepartamento').classList.add('mostrar','bi-check-circle-fill','validado');//Mostrar,✓,"Verde"
                //Alerta de error
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                //Validar campo
                campos['departamento'] = true;
            }else if(departamento.value.trim() == ""){
                document.getElementById('iconoDepartamento').classList.remove('mostrar','bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
                //Limpiar 
                document.getElementById('alertDepartamento').classList.remove('alertaError');
                campos['departamento'] = true;
            }else{
                document.getElementById('iconoDepartamento').classList.remove('bi-check-circle-fill','validado','bi-exclamation-circle-fill','signo');
                document.getElementById('iconoDepartamento').classList.add('mostrar','bi-x-circle-fill','noValidado');
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
        document.getElementById('iconoSexo').classList.remove('signo','noValidado','bi-exclamation-circle-fill','bi-x-circle-fill');
        document.getElementById('iconoSexo').classList.add('validado','bi-check-circle-fill');
        //Mensaje de error
        document.getElementById('alertSexo').classList.remove('alertaError');
        //Validar
        campos['sexo'] = true;
    }else{
        document.getElementById('iconoSexo').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoSexo').classList.add('noValidado','bi-x-circle-fill');
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
    document.getElementById('iconoSexo').classList.add('mostrar');//Agregar
    document.getElementById('iconoSexo').classList.remove('bi-check-circle-fill');//Borrar
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
        document.getElementById('iconoFechaNacimiento').classList.remove('bi-exclamation-circle-fill','signo','bi-x-circle-fill','noValidado');
        document.getElementById('iconoFechaNacimiento').classList.add('mostrar','bi-check-circle-fill','validado');
        //Mensaje de error
        document.getElementById('alertFechaNacimiento').classList.remove('alertaError');
        //Validar
        campos['fechaNacimiento'] = true;
    }else{
        document.getElementById('iconoFechaNacimiento').classList.remove('signo','validado','bi-exclamation-circle-fill','bi-check-circle-fill');
        document.getElementById('iconoFechaNacimiento').classList.add('mostrar','noValidado','bi-x-circle-fill');
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
    
    if (nombreValue === "" || apellidoValue === "" || fechaNacimiento === false || sexoValue === "0" || telefonoValue === "" || provinciaValue === "" || localidadValue === "" || calleValue === "" || alturaValue === "") {
        alert("Debe completar todos los campos obligatorios");
    }
    
    if (campos.nombre && campos.apellido && campos.fechaNacimiento && campos.sexo && campos.telefono && campos.provincia && campos.localidad && campos.calle && campos.altura && campos.departamento) {
        //Enviar AJAX
        document.getElementById('tituloRegistrar').style.display = 'none';
        document.getElementById('cargandoRegistrar').style.display = 'block';
        APP.doSearch();
        //registrarPaciente(formulario);
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
      //console.log(APP.data['display_name']); - por si despues agregamos codigo postal

      //Enviar Ajax
      registrarPaciente(formulario, APP.data['lat'], APP.data['lon']);
    },
  };
  
  document.addEventListener('DOMContentLoaded', APP.init);
  //#endregion