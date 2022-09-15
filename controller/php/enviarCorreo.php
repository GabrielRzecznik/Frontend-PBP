<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Configuración del servidor
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                    
    $mail->isSMTP();                                        
    $mail->Host       = 'mail.trebolnetsi.com';                  //Setear el servidor SMTP
    $mail->SMTPAuth   = true;                                   //autenticación SMTP
    $mail->Username   = 'profesionalByProximity@trebolnetsi.com';                     //SMTP usuario
    $mail->Password   = 'Pro2020Pro';                               //SMTP contraseña
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          
    $mail->Port       = 465;                                      //puerto 

    //Recipientes
    $mail->setFrom('francozuarez1@gmail.com', 'Profesional By Proximity');  //Desde donde se envía el mensaje
    $mail->addAddress('rzecznike@gmail.com', 'Prueba');     //Hacia donde
    //$mail->addAddress('Profesional By Proximity');          
   // $mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Imagen
    //$mail->addAttachment('https://frontend-pbp.herokuapp.com/view/img/icono.png');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Contenido
    $mail->isHTML(true);                                  //Se puede setear en HTML
    $mail->Subject = 'Profesional By Proximity';
    $mail->Body    = 'Se ha enviado con exito la prueba';
   // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'El mail ha sido enviado';
} catch (Exception $e) {
    echo "El mail no ha sido enviado. Mailer Error: {$mail->ErrorInfo}";
}