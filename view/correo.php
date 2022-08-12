<?php
    // Varios destinatarios
    $para  = 'rzecznike@gmail.com' . ', '; // atención a la coma
    //$para .= 'wez@example.com';
    
    $codigo = rand(1000, 9999);

    // título
    $título = 'Confirmación de mail';

    // mensaje
    $mensaje = "
    <html>
    <head>
    <title>Recordatorio de cumpleaños para Agosto</title>
    </head>
    <body>
    <span>
        Para validar que el correo ingresado sea de su propiedad le hemos adjuntado un codigo de 4 digitos.
        Usted debe copiarlo e ingresarlo dentro de la página web y podra seguir con su registro, muchas gracias!
    </span>
    <br><br>
    <span>Su codigo es: <b>$codigo<b></span>
    </body>
    </html>
    ";

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Cabeceras adicionales
    $cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
    $cabeceras .= 'From: Recordatorio <cumples@example.com>' . "\r\n";
    $cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
    $cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

    // Enviarlo
    mail($para, $título, $mensaje, $cabeceras);
?>