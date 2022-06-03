//Metodo Loud
function formularioRzR(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    var confirmeContraseña = document.getElementById("confirmeContraseña");
    var provincia = document.getElementById("provincia");
    var boton = document.getElementById("boton");
    
    nombre.focus();

    //Focus por tecla enter
    const enter = (e) => {
        switch (e.target.name) {
            case 'nombre':
                if (e.keyCode === 13) {
                    apellido.focus();
                }
                break;
            case 'apellido':
                if (e.keyCode === 13) {
                    correo.focus();
                }
                break;  
            case 'correo':
                if (e.keyCode === 13) {
                    contraseña.focus();
                }
                break;    
            case 'contraseña':
                if (e.keyCode === 13) {
                    confirmeContraseña.focus();
                }
                break;
            case 'confirmeContraseña':
                if (e.keyCode === 13) {
                    provincia.focus();
                }
                break;
            case 'boton':
                break;
            default:
                enviarFormulario();
                break;
        }
    };

    nombre.addEventListener('keypress', enter);
    apellido.addEventListener('keypress', enter);
    correo.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
    confirmeContraseña.addEventListener('keypress', enter);
    boton.addEventListener('click', enter);
}

//Validación de Campos
const inputs = document.querySelectorAll('#formularioRegistro input');

const expresiones = {
    nombre: /^[a-zA-Z]{4,24}$/, //entre 4 y 24 caracteres
    apellido: /^[a-zA-Z\ \ü\ö]{4,24}$/, //entre 4 y 24 caracteres
    correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //TESTEAR
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/, //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
    confirmeContraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/, //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    contraseña: false,
    confirmeContraseña: false,
    provincia: false,
    edad: false,
    tyc: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {
        case 'nombre':
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('iconoNombre').classList.add('validado');
                document.querySelector('#iconoNombre').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoNombre').classList.add('bi-check-circle-fill');
                //Mensaje de error nombre
                document.getElementById('alertNombre').classList.remove('alertaError');
                //Validar nombre
                campos['nombre'] = true;
            }else{
                document.getElementById('iconoNombre').classList.add('error');
                document.getElementById('iconoNombre').classList.remove('validado');
                document.querySelector('#iconoNombre').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoNombre').classList.remove('bi-check-circle-fill');
                //Mensaje de error nombre
                document.getElementById('alertNombre').classList.add('alertaError');
                campos['nombre'] = false;
            }
            break;
        case 'apellido':
            if (expresiones.apellido.test(e.target.value)) {
                document.getElementById('iconoApellido').classList.add('validado');
                document.querySelector('#iconoApellido').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoApellido').classList.add('bi-check-circle-fill');
                //Mensaje de error apellido
                document.getElementById('alertApellido').classList.remove('alertaError');
                //Validar apellido
                campos['apellido'] = true;
            }else{
                document.getElementById('iconoApellido').classList.add('error');
                document.getElementById('iconoApellido').classList.remove('validado');
                document.querySelector('#iconoApellido').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoApellido').classList.remove('bi-check-circle-fill');
                //Mensaje de error apellido
                document.getElementById('alertApellido').classList.add('alertaError');
                campos['apellido'] = false;
            }
            break;
        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('iconoCorreo').classList.add('validado');
                document.querySelector('#iconoCorreo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.add('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.remove('alertaError');
                //Validar correo
                campos['correo'] = true;
            }else{
                document.getElementById('iconoCorreo').classList.add('error');
                document.getElementById('iconoCorreo').classList.remove('validado');
                document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.add('alertaError');
                campos['correo'] = false;
            }
            break;
        case 'contraseña':
            if (expresiones.contraseña.test(e.target.value)) {
                document.getElementById('iconoContraseña').classList.add('validado');
                document.querySelector('#iconoContraseña').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoContraseña').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertContraseña').classList.remove('alertaError');
                //Validar contraseña
                campos['contraseña'] = true;
            }else{
                document.getElementById('iconoContraseña').classList.add('error');
                document.getElementById('iconoContraseña').classList.remove('validado');
                document.querySelector('#iconoContraseña').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoContraseña').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertContraseña').classList.add('alertaError');
                campos['contraseña'] = false;
            }
            break;
        case 'confirmeContraseña':
            if ((expresiones.confirmeContraseña.test(e.target.value)) && (confirmeContraseña.value == contraseña.value)) {
                document.getElementById('iconoConfirmeContraseña').classList.add('validado');
                document.querySelector('#iconoConfirmeContraseña').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoConfirmeContraseña').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertConfirmeContraseña').classList.remove('alertaError');
                //Validar contraseña
                campos['confirmeContraseña'] = true;
            }else{
                document.getElementById('iconoConfirmeContraseña').classList.add('error');
                document.getElementById('iconoConfirmeContraseña').classList.remove('validado');
                document.querySelector('#iconoConfirmeContraseña').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoConfirmeContraseña').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertConfirmeContraseña').classList.add('alertaError');
                campos['confirmeContraseña'] = false;
            }
            break;
        default:
           break;
   } 
};

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});

//Validar Provincia
document.getElementById("provincia").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.querySelector('#iconoProvincia').classList.remove('signo');
        document.querySelector('#iconoProvincia').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoProvincia').classList.add('error');
        document.getElementById('iconoProvincia').classList.add('validado');
        document.querySelector('#iconoProvincia').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoProvincia').classList.add('bi-check-circle-fill');
        //Mensaje de error provincia
        document.getElementById('alertProvincia').classList.remove('alertaError');
        //Validar provincia
        campos['provincia'] = true;
    }else{
        document.querySelector('#iconoProvincia').classList.remove('signo');
        document.getElementById('iconoProvincia').classList.add('iconos', 'validado');
        document.querySelector('#iconoProvincia').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoProvincia').classList.add('error');
        document.getElementById('iconoProvincia').classList.remove('validado');
        document.querySelector('#iconoProvincia').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoProvincia').classList.remove('bi-check-circle-fill');
        //Mensaje de error provincia
        document.getElementById('alertProvincia').classList.add('alertaError');
        campos['provincia'] = false;
    }
});

if (provincia.value == 0) {
    document.querySelector('#iconoProvincia').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoProvincia').classList.add('signo');
    document.querySelector('#iconoProvincia').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoProvincia').classList.remove('iconos', 'validado');
    campos['provincia'] = false;
}

//Validar Edad
document.getElementById("edad").addEventListener('change', (event) => {
    if (event.target.value > 1) {
        document.querySelector('#iconoEdad').classList.remove('signo');
        document.querySelector('#iconoEdad').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoEdad').classList.add('error');
        document.getElementById('iconoEdad').classList.add('validado');
        document.querySelector('#iconoEdad').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoEdad').classList.add('bi-check-circle-fill');
        //Mensaje de error provincia
        document.getElementById('alertEdad2').classList.remove('alertaError');
        document.getElementById('alertEdad').classList.remove('alertaError');
        //Validar provincia
        campos['edad'] = true;
    }else{
        document.querySelector('#iconoEdad').classList.remove('signo');
        document.getElementById('iconoEdad').classList.add('iconos', 'validado');
        document.querySelector('#iconoEdad').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoEdad').classList.add('error');
        document.getElementById('iconoEdad').classList.remove('validado');
        document.querySelector('#iconoEdad').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoEdad').classList.remove('bi-check-circle-fill');
        //Mensaje de error provincia
        if (event.target.value == 1) {
            document.getElementById('alertEdad').classList.remove('alertaError');
            document.getElementById('alertEdad2').classList.add('alertaError');
        }else{
            document.getElementById('alertEdad2').classList.remove('alertaError');
            document.getElementById('alertEdad').classList.add('alertaError');
        }
        campos['edad'] = false;
    }
});

if (edad.value == 0) {
    document.querySelector('#iconoEdad').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoEdad').classList.add('signo');
    document.querySelector('#iconoEdad').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoEdad').classList.remove('iconos', 'validado');
    campos['edad'] = 2;
}

//Validar Terminos y Condiciones
document.getElementById("tyc").addEventListener('change', (event) => {
    if (tyc.checked == true) {
        campos['tyc'] = true;
    }else{
        campos['tyc'] = false;
    }
});

//Envia el formulario - Siempre en cuando no esten vacios los campos
function enviarFormulario() {
    const formulario = document.getElementById('formularioRegistro');
    
    formulario.addEventListener('submit', (e) => {
        const nombreValue = nombre.value.trim();
        const apellidoValue = apellido.value.trim();
        const correoValue = correo.value.trim();
        const contraseñaValue = contraseña.value.trim();
        const confirmeContraseñaValue = confirmeContraseña.value.trim();

        //Nombre
        if (nombreValue === "") {
            alert("Nombre vacio");
        }else if(nombre.value === false){
            alert("El nombre ingresado no es valido");
        }
        
        //Apellido
        if (apellidoValue === "") {
            alert("Apellido vacio");
        }else if(apellido.value === false){
            alert("El apellido ingresado no es valido");
        }
        
        //Correo
        if (correoValue === "") {
            alert("Correo vacio");
        }else if(correo.value === false){
            alert("El correo ingresado no es valido");
        }
        
        //Contraseña
        if (contraseñaValue === "") {
            alert("Contraseña vacia");
        }else if(contraseña.value === false){
            alert("La contraseña ingresado no es valido");
        }
        
        //Confirmar contraseña
        if (confirmeContraseñaValue === "") {
            alert("Confirme contraseña vacio");
        }else if(campos.confirmeContraseña === false){
            alert("La confirmación de la contraseña no coinciden");
        }
        
        //Provincia
        if (provincia.value == 0) {
            alert("Seleccione una provincia");
        }
        
        //Edad
        if (edad.value == 0) {
            alert("Debes seleccionar una edad");
        }else if(edad.value == 1){
            alert("Debes tener por los menos 16 años para poder utilizar nuestros servicios");
        }

        //Terminos y condiciones
        if (campos.tyc === false) {
            alert("Acepte los terminos y condiciones");
        }

        e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
       if (campos.nombre && campos.apellido && campos.correo && campos.contraseña && campos.confirmeContraseña && campos.provincia && campos.edad && campos.tyc) {
           //Iniciar sessión

           //Cargando
           document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
           document.querySelector('#registrarse').classList.add('invisible');//Esconde el texto del boton
           
            //Enviar AJAX
            peticionRegistrarUsuario(formulario);

            //window.location.href = 'https://parcial-edi-front.herokuapp.com/index.html';
       }else{
           alert("No se pudo iniciar sesión");
       }
    
    }); 
}

