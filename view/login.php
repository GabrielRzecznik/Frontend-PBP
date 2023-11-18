<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <!--Css-->
    <link rel="stylesheet" href="view/css/login.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Login - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 panel1">
                <div class="iconoManualUsuario"><a href="./view/manual/Manual de Usuario.pdf" target="_blank" rel="noopener noreferrer"><i class="bi bi-journal-richtext btn btn-primary" title="Manual de usuario"></i></a></div>
                <h5 class="titulo">Inicio de Sesión</h5>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formulario">
                    <span class="texto">Usuario o Correo </span><i class="bi" id="iconoUsuario" title="Campo Obligatorio"></i>
                    <br>
                    <input type="text" class="form-control inputs" name="usuario" id="usuario" autocomplete="username">
                    <br>
                    <span class="texto">Contraseña </span><i class="bi" id="iconoPassword" title="Campo Obligatorio"></i>
                    <br>
                    <input type="password" class="form-control inputs" name="password" id="password" autocomplete="current-password">
                    <button type="submit" class="btn btn-warning botonLogin" name="boton" id="boton">
                        <span class="loguearse" id="loguearse">Iniciar sesión</span>
                        <div class="spinner-border text-secondary cargando" id="cargando" role="status"></div>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="./view/restablecerUsuario.php">Restablecer</a>  
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="./view/registroUsuario.php">Registrarse</a>
                        </div>
                    </div>   
                </form> 
            </div>
            <div class="col-md-4 panel2"></div>
            <div class="col-md-2"></div>
        </div>
    </div>
    <!--Alerta Superior-->
    <div class="alert alert-dismissible fade show alerta" role="alert" id="alertSuperior">
        <i class="bi bi-info-circle-fill"></i>
        <span id="textoAlert"></span>
        <br>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="./controller/js/controlAcceso.js"></script>
    <script src="./controller/js/alertaSuperior.js"></script>
    <script src="./controller/js/login.js"></script>
    <script src="./model/js/ajaxBuscarUsuario.js"></script>
</body>
</html>