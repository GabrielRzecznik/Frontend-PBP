parametro = null;

//Mientras no seleccione ningun chat el valor va a ser nuevo - pensar bien
$id_chat = "Nuevo";

//Iniciar desde un chat determinado
let chatPorHash = location.hash;
chatPorHash = chatPorHash.slice(1);

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

buscarChats();

//cargarNavegador();
