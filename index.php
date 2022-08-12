<html>
  <head>
  </head>
  <body>
    <form method="post">
    <imput type="text" placeholder="name" name="name">
    <imput type="email" placeholder="email" name="email">
    <imput type="text" placeholder="asunto" name="asunto">
      <textarea placeholder="mensaje" name="msg"></textarea>
      <imput type="submit" name="enviar">
</form>
<?php
include("correo.php");
?>
  </body>
</html>