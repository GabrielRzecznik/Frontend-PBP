<html>
  <head>
  </head>
  <body>
    <form method="post">
    <input type="text" placeholder="name" name="name">
    <input type="email" placeholder="email" name="email">
    <input type="text" placeholder="asunto" name="asunto">
    <textarea placeholder="mensaje" name="msg"></textarea>
    <input type="submit" name="enviar">
</form>
<?php
include("correo.php");
?>
  </body>
</html>