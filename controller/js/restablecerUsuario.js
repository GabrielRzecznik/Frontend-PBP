//#region Metodo Load
window.addEventListener('load',load);

function load(){
    correo.focus();
}
//#endregion

//#region Validación de Campos
const inputs = document.querySelectorAll('#form1 input');

const expresiones = {
    correo: /^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, // maximo 24 caracteres, permitido caracteres y _ - solamente
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
                document.getElementById('alertPassword').classList.remove('alertaError');
                document.getElementById('alertPassword2').classList.remove('alertaError');
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

//#region Envia Formulario
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
    
  