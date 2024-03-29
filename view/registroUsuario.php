<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Icono Página-->
    <link rel="icon" href="./img/icono.png">
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <!--Css-->
    <link rel="stylesheet" href="./css/registros.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Registro Usuario - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-lg-4 panel1">
                <h5 class="titulo">Crear Usuario</h5>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formulario">
                    <!--Campo Nombre Usuario-->
                    <span class="texto">Nombre de Usuario </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoNombreUsuario" title="Campo Obligatorio"></i>
                    <br>
                    <input type="text" class="form-control inputs" name="nombreUsuario" id="nombreUsuario" autocomplete="username">
                    <br>
                    <!--Campo Correo-->
                    <span class="texto">Correo </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoCorreo" title="Campo Obligatorio"></i>
                    <br>
                    <input type="texto" class="form-control inputs" name="correo" id="correo">
                    <br>
                    <!--Campo Contraseña-->
                    <span class="texto">Contraseña </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPassword" title="Campo Obligatorio"></i>
                    <br>
                    <input type="password" class="form-control inputs" name="password" id="password" autocomplete="new-password">
                    <br>
                    <!--Campo Validar Contraseña-->
                    <span class="texto">Repita su Contraseña </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPassword2" title="Campo Obligatorio"></i>
                    <br>
                    <div class="inputContraseña">
                        <input type="password" class="form-control inputs" name="password2" id="password2" autocomplete="new-password">
                        <span class="dialog-text btn btn-warning" id="dialog-text">
                        <i class="bi bi-exclamation-circle-fill"></i>    
                        Las contraseñas no coinciden
                        </span>
                    </div>
                    <button type="submit" class="btn btn-warning botonSubmit">
                        <span class="tituloBuscar" id="tituloBuscar">Continuar</span>
                        <div class="spinner-border text-secondary cargandoBuscar" id="cargandoBuscar" role="status"></div>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="./restablecerUsuario.php">Restablecer</a>  
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="../">Ir al inicio</a>
                        </div>
                    </div>
                </form>
                <!--Activar Formulario de Correo-->
                <div class="activador" id="activador">
                    <h7 class="titulo">Activación de Correo</h7>
                    <br>
                    <span>
                       Hemos enviado un correo a su dirección ingresada el cual cuenta con un botón de activación, Debe cliquearlo para poder recibir posteriormente un código de verificación.
                    </span>
                    <a href="#" class="btn btn-warning botonSubmit" name="activado" id="activado">
                        <span>Ya oprimí el botón</span>
                    </a>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="#" id="volverAtras">Volver atrás</a>  
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="../index.php">Ir al inicio</a>
                        </div>
                    </div>
                </div>
                <!--Formulario de validación-->
                <form class="formularioValidar" onsubmit="event.preventDefault()" action="#" method="post" id="formularioValidar">
                    <span>
                        Se ha enviado un correo electrónico de validación a su dirección ingresada con un código de 4 caracteres. Ingréselo dentro del campo código para continuar. !El mismo tiene una validez de 10 minutos!
                    </span>
                    <br><br>
                    <span class="texto">Código </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoCodigo" title="Campo Obligatorio"></i>
                    <br>
                    <input type="text" class="form-control inputs" name="codigo" id="codigo">
                    <button type="submit" class="btn btn-warning botonSubmit">
                        <span class="tituloRegistrar" id="tituloRegistrar">Crear usuario</span>
                        <div class="spinner-border text-secondary cargandoRegistrar" id="cargandoRegistrar" role="status"></div>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-secondary botonesSecundarios" id="reenviar" href="#">Reenviar código<span id="temporizador"></span></button>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" id="atras" href="#">Volver atrás</a>  
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-4 panel2"></div>
            <div class="col-md-2"></div>
        </div>
    </div>

    <!--Alerta Supeior-->
    <div class="alert alert-dismissible fade show alerta" role="alert" id="alertSuperior">
        <i class="bi bi-info-circle-fill"></i>
        <span id="textoAlert"></span>
        <br>
    </div>

    <script src="../controller/js/controlAcceso.js"></script>
    <script src="../controller/js/alertaSuperior.js"></script>
    <script src="../controller/js/registroUsuario.js"></script>
    <script src="../model/js/ajaxRegistroUsuario.js"></script>
    <script src="../model/js/ajaxBuscarUsuario.js"></script>
    <script src="../model/js/ajaxEnviarCorreo.js"></script>
    <script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
</body>
</html>