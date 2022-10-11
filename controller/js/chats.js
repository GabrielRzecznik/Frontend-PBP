parametro = null;

//Iniciar desde un chat determinado
let chat = location.hash;
chat = chat.slice(1);



//#region Validación de Campos
const inputMensaje = document.querySelectorAll('#formularioEnviarMensaje input');

const validarFormularioMensaje = (e) => {
    $mensaje = document.getElementById('mensaje').value;
    if ($mensaje !== "") {
        document.getElementById('botonEnviarMensaje').disabled = false;
    }else{
        document.getElementById('botonEnviarMensaje').disabled = true;
    }
};

inputMensaje.forEach((input) => {
    input.addEventListener('keyup' , validarFormularioMensaje);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormularioMensaje);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
const formularioEnviarMensaje = document.getElementById('formularioEnviarMensaje');

formularioEnviarMensaje.addEventListener('submit', (e) => {
    e.preventDefault();

    $mensajeValue = document.getElementById('mensaje').value;
    
    if ($mensajeValue !== "") {
        document.getElementById('mensaje').value = "";
    }
}); 
//#endregion


