const formularioEnviarMensaje = document.getElementById('formularioEnviarMensaje');

formularioEnviarMensaje.addEventListener('submit', (e) => {
    e.preventDefault();

    $descripcion = document.getElementById('mensaje').value;
    
    if ($descripcion !== "") {
        let date = new Date();
        $fechaHora = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + ' 00:' + date.getHours() + ':' + date.getMinutes());

        console.log($cha + ' ' + $rem + ' ' + $des + ' ' + $rol + ' ' + $descripcion + ' ' + $fechaHora);
        enviarMensaje($cha, $rem, $des, $rol, $descripcion, $fechaHora);
        document.getElementById('mensaje').value = ""; 
    }
});
