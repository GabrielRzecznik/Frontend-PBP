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
    <link rel="stylesheet" href="./css/restablecerUsuario.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Restablecer Cuenta - Profesional By Proximity</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 panel1">
                <h5 class="titulo">Restablecer Cuenta</h5>
                <br>
                <!--Formulario de ingreso de correo-->
                <form class="form1" onsubmit="event.preventDefault()" action="#" method="post" id="form1">
                    <span class="texto">Correo </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoCorreo"></i>
                    <br>
                    <input type="text" class="form-control inputs" name="correo" id="correo">
                    <button type="submit" class="btn btn-warning botonSubmit" name="boton" id="boton">
                        <span class="tituloBuscar" id="tituloBuscar">Buscar</span>
                        <div class="spinner-border text-secondary cargandoBuscar" id="cargandoBuscar" role="status"></div>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="./registroUsuario.php">Registrarse</a>  
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-secondary botonesSecundarios" href="./../">Iniciar sesión</a>
                        </div>
                    </div>
                </form>
                <!--Formulario de validación-->
                <form class="form2" onsubmit="event.preventDefault()" action="#" method="post" id="form2">
                    <span>
                        Se ha enviado un correo electrónico de validación a su dirección ingresada con un código de 4 caracteres. ¡Ingréselo dentro del campo código para continuar! El mismo tiene una validez de 10 minutos.
                    </span>
                    <br><br>
                    <span class="texto">Código </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoCodigo"></i>
                    <br>
                    <input type="text" class="form-control inputs" name="codigo" id="codigo">
                    <button type="submit" class="btn btn-warning botonSubmit" name="boton" id="boton">
                        <span>Validar</span>
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
                <!--Formulario de cambio de contraseña-->
                <form class="form3" onsubmit="event.preventDefault()" action="#" method="post" id="form3">
                    <span>
                        ¡Cree una nueva contraseña!<br>
                    </span>
                    <br>
                    <!--Campo Contraseña-->
                    <span class="texto">Contraseña </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPassword"></i>
                    <br>
                    <input type="password" class="form-control inputs" name="password" id="password">
                    <br>
                    <!--Campo Validar Contraseña-->
                    <span class="texto">Repetir Contraseña </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPassword2"></i>
                    <br>
                    <input type="password" class="form-control inputs" name="password2" id="password2">
                    <button type="submit" class="btn btn-warning botonSubmit" name="boton" id="boton">
                        <span>Restablecer</span>
                    </button>
                    <!--Modal Confirmación-->
                    <div class="modal fade" id="confirmacion-restablecer-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    ¡Aviso!
                                    <button id="cerrar" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ¿Está seguro que desea restablecer su cuenta junto con su nueva contraseña?
                                </div>
                                <div class="modal-footer">
                                    <a href="#" class="btn btn-warning botonConfirmar" name="confirmar-envio" id="confirmar-envio">
                                        <span class="tituloConfirmar" id="tituloConfirmar">Confirmar</span>
                                        <div class="spinner-border text-secondary cargandoConfirmar" id="cargandoConfirmar" role="status"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4 panel2"></div>
            <div class="col-md-2"></div>
        </div>
    </div>
    <!--Alerta Correo-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCorreo">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Correo:</strong>
        El correo ingresado no corresponde a una dirección valida.
    </div>
    <!--Alerta Contraseña-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertPassword">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Contraseña:</strong>
        La contraseña debe tener de 8 a 16 caracteres.
        <br>Debe contener al menos una "mayúscula" y un "digito".
    </div>
    <!--Alerta Contraseña-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertPassword2">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Validación Contraseña:</strong>
        La validación de contraseña debe tener de 8 a 16 caracteres. 
        <br>Debe contener al menos una "mayúscula" y un "digito"
        <br>y coincidir con la contraseña.
    </div>
    <!--Alerta Código-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCodigo">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Código:</strong>
        ¡El código ingresado no es valido!
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="../controller/js/restablecerUsuario.js"></script>
    <script src="../model/js/ajaxRestablecerUsuario.js"></script>
    <script src="../model/js/ajaxBuscarUsuarioDeshabilitado.js"></script>
    <script src="../model/js/ajaxEnviarCorreo.js"></script>
    <!--<script src="./model/js/ajaxRestablecerUsuario.js"></script>-->
</body>
</html>