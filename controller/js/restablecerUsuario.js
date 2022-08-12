//#region Metodo Load
window.addEventListener('load',load);

function load(){
    correo.focus();
}
//#endregion

//#region Validación formulario 1
const inputs = document.querySelectorAll('#form1 input');

const expresiones = {
    correo: /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ // maximo 24 caracteres, permitido caracteres y _ - solamente
};

const campos = {
    correo: false,
};

const validarFormulario = (e) => {
   switch (e.target.name) {
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
    } 
};

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario 1
const formulario = document.getElementById('form1');

formulario.addEventListener('submit', (e) => {
    const correoValue = correo.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (correoValue === "") {
        alert("Complete el campo correo");
    }
    
    if (campos.correo) {
        //Enviar AJAX
        BuscarUsuarioPorCorreo(correoValue);
        //Cargando
        //document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
        //document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
    }

}); 
//#endregion

//#region Validación formulario 2
const inputs2 = document.querySelectorAll('#form2 input');

const expresiones2 = {
    codigo: /^[0-9]{4}$/ // maximo 24 caracteres, permitido caracteres y _ - solamente
};

const campos2 = {
    codigo: false,
};

const validarFormulario2 = (e) => {
   switch (e.target.name) {
        case 'codigo':
            if (expresiones2.codigo.test(e.target.value)) {
                document.getElementById('iconoCodigo').classList.add('validado');
                document.querySelector('#iconoCodigo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCodigo').classList.add('bi-check-circle-fill');
                //Mensaje de error codigo
                document.getElementById('alertCodigo').classList.remove('alertaError');
                //Validar codigo
                campos2['codigo'] = true;
            }else{
                document.getElementById('iconoCodigo').classList.add('error');
                document.getElementById('iconoCodigo').classList.remove('validado');
                document.querySelector('#iconoCodigo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCodigo').classList.remove('bi-check-circle-fill');
                //Mensaje de error codigo
                document.getElementById('alertCodigo').classList.add('alertaError');
                campos2['codigo'] = false;
            }
            break;
    } 
};

inputs2.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario2);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario2);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
const formulario2 = document.getElementById('form2');

formulario2.addEventListener('submit', (e) => {
    const codigoValue = codigo.value.trim();
    
    e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
    if (codigoValue === "") {
        alert("Complete el campo código");
    }
    
    if (campos2.codigo) {
        //Enviar AJAX
        if (codigoGenerado == codigoValue) {
            alert("Correocto!");
        }else{
            alert("El código ingresado es invalido!");//"Mensaje validado en su caso de uso"
        }
        //Cargando
        //document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
        //document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
    }

}); 
//#endregion

//Funcionalidades de botones auxiliares
document.getElementById("atras").addEventListener("click", function() {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
});
  
document.getElementById("reenviar").addEventListener("click", function() {
    enviarCorreo();
});

