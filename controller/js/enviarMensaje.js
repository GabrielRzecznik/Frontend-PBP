function enviarMensaje($id_chat, $remitente, $destinatario) {
    const formularioEnviarMensaje = document.getElementById('formularioEnviarMensaje');

    formularioEnviarMensaje.addEventListener('submit', (e) => {
        e.preventDefault();

        $descripcion = document.getElementById('mensaje').value;

        let date3 = new Date();
        $fechaHora = String(date3.getFullYear() + '-' + String(date3.getMonth() + 1).padStart(2, '0') + '-' + String(date3.getDate()).padStart(2, '0') + ' ' + date3.getHours() + ':' + date3.getMinutes() + ':' + date3.getSeconds());
        
        enviarMensaje($id_chat, $remitente, $destinatario, $descripcion, $fechaHora);
    });
}