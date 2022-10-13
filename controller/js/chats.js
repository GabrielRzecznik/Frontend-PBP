parametro = null;

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

//#region Envia Formulario
const formularioEnviarMensaje = document.getElementById('formularioEnviarMensaje');

formularioEnviarMensaje.addEventListener('submit', (e) => {
    e.preventDefault();

    $mensajeValue = document.getElementById('mensaje').value;
    
    if ($mensajeValue !== "") {
        
        $id_chat = 0;
        $rol = "Paciente";

        //El usuario es el paciente o el profesional del chat?
        if ($rol == "Paciente") {
            $paciente = localStorage.getItem("id_paciente");
            $profesional = chatPorHash;
        }if ($rol == "Profesional") {
            $paciente = chatPorHash;
            $profesional = localStorage.getItem("id_profesional");
        }

        let date = new Date();
        $fecha = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

        enviarMensaje($id_chat, $paciente, $profesional, $rol, $fecha, formularioEnviarMensaje);
    }
});
//#endregion

cargarNavegador();
