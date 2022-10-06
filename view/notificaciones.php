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
        <link rel="stylesheet" href="./css/notificaciones.css">
        <link rel="stylesheet" href="./css/navegador.css">
        <!--<link rel="icon" href="./favicon.ico">-->
        <title>Notificaciones - Profesional By Proximity</title>
    </head>
    <body class="mostrarPagina" id="mostrar">   
      <!--Encabezado - Nav-->
      <header class="py-3 mb-3 border-bottom bg-light"><!--bg-light se utiliza para cambiarle el color!-->
        <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
          <div class="dropdown">
            
            <a class="navbar-brand textoLogo" href="#"><img class="logo" src="../view/img/icono.png" alt="Error al cargar logo"> Profesional By Proximity</a>
          </div>
          <div class="d-flex align-items-center">
            <span class="w-100 me-2 derecha">
              <ul class="ulNav">
                <li class="liNav">
                  <a class="nav-link noSeleccionado" href="https://frontend-pbp.herokuapp.com/view/notificaciones.html"><i class="bi bi-bell-fill"></i></a><!--Icono Notificaciones-->
                </li>
                <li class="liNav">
                  <a class="nav-link noSeleccionado" href="https://frontend-pbp.herokuapp.com/view/chats.html"><i class="bi bi-chat-square-text-fill"></i></a><!--Icono Chat-->
                </li>
                <li class="liNav">
                  <a class="nav-link seleccionado" aria-current="page" href="#"><i class="bi bi-house-fill"></i></a><!--Icono Inicio-->
                </li>
              </ul>
            </span>
            <div class="flex-shrink-0 dropdown">

              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle fotoPerfil"></i>
                <span class="logoUsuario" id="usuario"></span>
              </a>
              
              <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="https://frontend-pbp.herokuapp.com/view/perfil.html">Perfil</a></li>
                <li><a class="dropdown-item" href="https://frontend-pbp.herokuapp.com/view/grilla.html">Mi Grilla</a></li>
                <li><a class="dropdown-item" href="#" id="conf">Configuración</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesion</a></li>
              </ul>
            </div>
            </div>
        </div>
      </header>
      <!--Modal - Configuración-->
      <div class="modal fade" id="configuracion-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Configuración <i class="bi bi-gear-fill"></i></h5>
              <button id="cerrar" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Configuración cuenta usuario
                  </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p>
                      <button class="btn bg-light opcionConfiguracion" id="editarCuentaUsuario" data-bs-toggle="collapse" href="#ediUsu" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Editar cuenta usuario<i class="bi bi-person-lines-fill derecha"></i>
                      </button>
                    </p>
                    <div class="collapse" id="ediUsu">
                      <!--Validar Contraseña-->
                      <div class="card card-body formularioEditarUsuarioPreValidacion" id="formularioEditarUsuarioPreValidacion">
                        <form onsubmit="event.preventDefault()" action="#" method="post" id="formEditarUsuarioPreValidacion">
                          <b>Para editar su cuenta usuario ingrese su contraseña actual.</b>
                          <br><br>
                          <span class="texto">Contraseña actual </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPasswordValidar" title="Campo Obligatorio"></i>
                          <br>
                          <input type="password" class="form-control inputs" name="passwordValidar" id="passwordValidar">
                          <button type="submit" class="btn btn-warning botonPreValidacionEditar" name="boton" id="boton">
                            <span class="textoPreValidacionEditar" id="textoPreValidacionEditar">Validar</span>
                            <div class="spinner-border text-secondary cargandoPreValidacionEditar" id="cargandoPreValidacionEditar" role="status"></div>
                          </button>
                        </form>
                      </div>
                      <!--Formulario Editar Usuario-->
                      <div class="card card-body formularioEditarUsuario" id="formularioEditarUsuario">
                        <form onsubmit="event.preventDefault()" action="#" method="post" id="formEditarUsuario">
                          <b>Editar Usuario</b>
                          <br><br>
                          <span class="texto">Nombre de Usuario </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoNombreUsuario"></i>
                          <br>
                          <input type="text" class="form-control inputs" name="nombreUsuario" id="nombreUsuario">
                          <br>
                          <span class="texto">Contraseña </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoPassword"></i>
                          <br>
                          <input type="password" class="form-control inputs" name="password" id="password">
                          <button type="submit" class="btn btn-warning botonEditar" name="boton" id="boton">
                            <span class="editarUsuario" id="editarUsuario">Editar usuario</span>
                            <div class="spinner-border text-secondary cargandoEditar" id="cargandoEditar" role="status"></div>
                          </button>
                        </form>
                      </div>
                      <br>
                    </div>
                    <p>
                      <button class="btn bg-light opcionConfiguracion" data-bs-toggle="collapse" href="#desUsu" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Deshabilitar cuenta usuario <i class="bi bi-person-x-fill derecha"></i>
                      </button>
                    </p>
                    <div class="collapse" id="desUsu">
                      <!--Validar Contraseña-->
                      <div class="card card-body formularioDeshabilitarUsuarioPreValidacion" id="formularioDeshabilitarUsuarioPreValidacion">
                        <form onsubmit="event.preventDefault()" action="#" method="post" id="formDeshabilitarUsuarioPreValidacion">
                          <b>Para deshabilitar su cuenta usuario ingrese su contraseña actual.</b>
                          <br><br>
                          <span class="texto">Contraseña actual </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoPasswordValidarDeshabilitar" title="Campo Obligatorio"></i>
                          <br>
                          <input type="password" class="form-control inputs" name="passwordValidarDeshabilitar" id="passwordValidarDeshabilitar">
                          <button type="submit" class="btn btn-warning botonPreValidacionDeshabilitar" name="boton" id="boton">
                            <span class="textoPreValidacionDeshabilitar" id="textoPreValidacionDeshabilitar">Validar</span>
                            <div class="spinner-border text-secondary cargandoPreValidacionDeshabilitar" id="cargandoPreValidacionDeshabilitar" role="status"></div>
                          </button>
                        </form>
                      </div>
                      <!--Deshabilitar Cuenta Usuario-->
                      <div class="card card-body cardDeshabilitarUsuario" id="cardDeshabilitarUsuario">
                        <b>¿Esta seguro que desea deshabilitar su cuenta usuario? </b>
                        <br><br>
                        Si deshabilitas tu cuenta usuario ya no podrás acceder a ella, tambien tus perfiles de paciente y profesional de ser el caso, dejaran de ser visibles por otros usuarios.<br>
                        Podrás restablecer tu cuenta usuario en cualquier momento desde la opción "Restablecer" en el inicio de sesión.<br>
                        <button class="btn btn-danger botonDeshabilitar" id="deshabilitarUsuario">
                          <span class="textoPreValidacionDeshabilitar" id="textoBotonDeshabilitar">Deshabilitar cuenta</span>
                          <div class="spinner-border text-secondary botonDeshabilitarCargando" id="botonDeshabilitarCargando" role="status"></div>
                        </button>
                      </div>
                      <br>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Configuración perfil paciente
                  </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p>
                      <button class="btn bg-light opcionConfiguracion" id="editarCuentaUsuario" data-bs-toggle="collapse" href="#ediPerfil" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Editar perfil paciente<i class="bi bi-person-lines-fill derecha"></i>
                      </button>
                    </p>
                    <div class="collapse" id="ediPerfil">
                      <!--Formulario editar perfil paciente-->
                      <div class="card card-body" id="formularioEditarPaciente">
                        <form onsubmit="event.preventDefault()" action="#" method="post" id="formEditarPaciente">
                          <b>Editar Perfil Paciente</b>
                          <br><br>
                          <span class="texto">Nombre de Usuario </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoNombreUsuario"></i>
                          <br>
                          <input type="text" class="form-control inputs" name="nombreUsuario" id="nombreUsuario">
                          <br>
                          <span class="texto">Contraseña </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoPassword"></i>
                          <br>
                          <input type="password" class="form-control inputs" name="password" id="password">
                          <button type="submit" class="btn btn-warning botonEditar" name="boton" id="boton">
                            <span class="editarUsuario" id="editarUsuario">Editar usuario</span>
                            <div class="spinner-border text-secondary cargandoEditar" id="cargandoEditar" role="status"></div>
                          </button>
                        </form>
                      </div>
                      <br>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="accordion-item mostrar" id="confProf">
                  <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Configuración grilla profesional
                  </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <div class="card card-body">
                      <form onsubmit="event.preventDefault()" action="#" method="post" id="formConfProf">
                        <b>Configuración grilla profesional</b>
                        <br><br>
                        <span class="texto">Días de atención </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoDiasAtencion" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                        <br>
                        <div class="card card-body">	
                          <div class="row">
                            <div class="col-6">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="lunes" id="lunes">
                                <label class="form-check-label" for="Lunes">
                                  Lunes
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="martes" id="martes">
                                <label class="form-check-label" for="Martes">
                                  Martes
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="miercoles" id="miercoles">
                                <label class="form-check-label" for="miércoles">
                                  Miércoles
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="jueves" id="jueves">
                                <label class="form-check-label" for="Jueves">
                                  Jueves
                                </label>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="viernes" id="viernes">
                                <label class="form-check-label" for="Viernes">
                                  Viernes
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="sabado" id="sabado">
                                <label class="form-check-label" for="Sabado">
                                  Sabado
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="domingo" id="domingo">
                                <label class="form-check-label" for="Domingo">
                                  Domingo
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <span class="texto">Duración de consultas </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoDuracionConsulta" title="Campo Obligatorio"></i>
                        <select class="form-select" name="duracionConsulta" id="duracionConsulta" aria-label="Floating label select example">
                          <option value="0">Seleccione la duración</option>
                          <option value="00:20">00:20 hs.</option>
                          <option value="00:25">00:25 hs.</option>
                          <option value="00:30">00:30 hs.</option>
                          <option value="00:35">00:35 hs.</option>
                          <option value="00:40">00:40 hs.</option>
                          <option value="00:45">00:45 hs.</option>
                          <option value="00:50">00:50 hs.</option>
                          <option value="00:55">00:55 hs.</option>
                          <option value="01:00">01:00 hs.</option>
                          <option value="01:05">01:05 hs.</option>
                          <option value="01:10">01:10 hs.</option>
                          <option value="01:15">01:15 hs.</option>
                          <option value="01:20">01:20 hs.</option>
                          <option value="01:25">01:25 hs.</option>
                          <option value="01:30">01:30 hs.</option>
                          <option value="01:35">01:35 hs.</option>
                          <option value="01:40">01:40 hs.</option>
                          <option value="01:45">01:45 hs.</option>
                          <option value="01:50">01:50 hs.</option>
                          <option value="01:55">01:55 hs.</option>
                          <option value="01:55">02:00 hs.</option>
                        </select>
                        <br>
                        <span class="texto">Tiempo de descanso entre consultas </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoReceso" title="Campo Obligatorio"></i>
                        <select class="form-select" name="receso" id="receso" aria-label="Floating label select example">
                          <option value="0">Seleccione el tiempo de descanso</option>
                          <option value="00:00">Sin descanso</option>
                          <option value="00:05">00:05 hs.</option>
                          <option value="00:10">00:10 hs.</option>
                          <option value="00:15">00:15 hs.</option>
                          <option value="00:20">00:20 hs.</option>
                          <option value="00:25">00:25 hs.</option>
                          <option value="00:30">00:30 hs.</option>
                          <option value="00:35">00:35 hs.</option>
                          <option value="00:40">00:40 hs.</option>
                          <option value="00:45">00:45 hs.</option>
                          <option value="00:50">00:50 hs.</option>
                          <option value="00:55">00:55 hs.</option>
                          <option value="01:00">01:00 hs.</option>
                          <option value="01:05">01:05 hs.</option>
                          <option value="01:10">01:10 hs.</option>
                          <option value="01:15">01:15 hs.</option>
                          <option value="01:20">01:20 hs.</option>
                          <option value="01:25">01:25 hs.</option>
                          <option value="01:30">01:30 hs.</option>
                          <option value="01:35">01:35 hs.</option>
                          <option value="01:40">01:40 hs.</option>
                          <option value="01:45">01:45 hs.</option>
                          <option value="01:50">01:50 hs.</option>
                          <option value="01:55">01:55 hs.</option>
                          <option value="01:55">02:00 hs.</option>
                        </select>
                        <br>
                        <span class="texto">Rango horario de atención por día </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoRango" title="Campo Obligatorio"></i>
                        <div class="row">
                          <div class="col-6">
                            <select class="form-select" name="rangoInicio" id="rangoInicio">
                              <option value="0">Hora de inicio</option>
                              <option value="00:00">00:00 hs</option>
                              <option value="00:15">00:15 hs</option>
                              <option value="00:30">00:30 hs</option>
                              <option value="00:45">00:45 hs</option>
                              <option value="01:00">01:00 hs</option>
                              <option value="01:15">01:15 hs</option>
                              <option value="01:30">01:30 hs</option>
                              <option value="01:45">01:45 hs</option>
                              <option value="02:00">02:00 hs</option>
                              <option value="02:15">02:15 hs</option>
                              <option value="02:30">02:30 hs</option>
                              <option value="02:45">02:45 hs</option>
                              <option value="03:00">03:00 hs</option>
                              <option value="03:15">03:15 hs</option>
                              <option value="03:30">03:30 hs</option>
                              <option value="03:45">03:45 hs</option>
                              <option value="04:00">04:00 hs</option>
                              <option value="04:15">04:15 hs</option>
                              <option value="04:30">04:30 hs</option>
                              <option value="04:45">04:45 hs</option>
                              <option value="05:00">05:00 hs</option>
                              <option value="05:15">05:15 hs</option>
                              <option value="05:30">05:30 hs</option>
                              <option value="05:45">05:45 hs</option>
                              <option value="06:00">06:00 hs</option>
                              <option value="06:15">06:15 hs</option>
                              <option value="06:30">06:30 hs</option>
                              <option value="06:45">06:45 hs</option>
                              <option value="07:00">07:00 hs</option>
                              <option value="07:15">07:15 hs</option>
                              <option value="07:30">07:30 hs</option>
                              <option value="07:45">07:45 hs</option>
                              <option value="08:00">08:00 hs</option>
                              <option value="08:15">08:15 hs</option>
                              <option value="08:30">08:30 hs</option>
                              <option value="08:45">08:45 hs</option>
                              <option value="09:00">09:00 hs</option>
                              <option value="09:15">09:15 hs</option>
                              <option value="09:30">09:30 hs</option>
                              <option value="09:45">09:45 hs</option>
                              <option value="10:00">10:00 hs</option>
                              <option value="10:15">10:15 hs</option>
                              <option value="10:30">10:30 hs</option>
                              <option value="10:45">10:45 hs</option>
                              <option value="11:00">11:00 hs</option>
                              <option value="11:15">11:15 hs</option>
                              <option value="11:30">11:30 hs</option>
                              <option value="11:45">11:45 hs</option>
                              <option value="12:00">12:00 hs</option>
                              <option value="12:15">12:15 hs</option>
                              <option value="12:30">12:30 hs</option>
                              <option value="12:45">12:45 hs</option>
                              <option value="13:00">13:00 hs</option>
                              <option value="13:15">13:15 hs</option>
                              <option value="13:30">13:30 hs</option>
                              <option value="13:45">13:45 hs</option>
                              <option value="14:00">14:00 hs</option>
                              <option value="14:15">14:15 hs</option>
                              <option value="14:30">14:30 hs</option>
                              <option value="14:45">14:45 hs</option>
                              <option value="15:00">15:00 hs</option>
                              <option value="15:15">15:15 hs</option>
                              <option value="15:30">15:30 hs</option>
                              <option value="15:45">15:45 hs</option>
                              <option value="16:00">16:00 hs</option>
                              <option value="16:15">16:15 hs</option>
                              <option value="16:30">16:30 hs</option>
                              <option value="16:45">16:45 hs</option>
                              <option value="17:00">17:00 hs</option>
                              <option value="17:15">17:15 hs</option>
                              <option value="17:30">17:30 hs</option>
                              <option value="17:45">17:45 hs</option>
                              <option value="18:00">18:00 hs</option>
                              <option value="18:15">18:15 hs</option>
                              <option value="18:30">18:30 hs</option>
                              <option value="18:45">18:45 hs</option>
                              <option value="19:00">19:00 hs</option>
                              <option value="19:15">19:15 hs</option>
                              <option value="19:30">19:30 hs</option>
                              <option value="19:45">19:45 hs</option>
                              <option value="20:00">20:00 hs</option>
                              <option value="20:15">20:15 hs</option>
                              <option value="20:30">20:30 hs</option>
                              <option value="20:45">20:45 hs</option>
                              <option value="21:00">21:00 hs</option>
                              <option value="21:15">21:15 hs</option>
                              <option value="21:30">21:30 hs</option>
                              <option value="21:45">21:45 hs</option>
                              <option value="22:00">22:00 hs</option>
                              <option value="22:15">22:15 hs</option>
                              <option value="22:30">22:30 hs</option>
                              <option value="22:45">22:45 hs</option>
                              <option value="23:00">23:00 hs</option>
                              <option value="23:15">23:15 hs</option>
                              <option value="23:30">23:30 hs</option>
                              <option value="23:45">23:45 hs</option>
                            </select>
                          </div>
                          <div class="col-6">
                            <select class="form-select" name="rangoFin" id="rangoFin">
                              <option value="0">Hora de finalización</option>
                              <option value="0">Hora de inicio</option>
                              <option value="00:00">00:00 hs</option>
                              <option value="00:15">00:15 hs</option>
                              <option value="00:30">00:30 hs</option>
                              <option value="00:45">00:45 hs</option>
                              <option value="01:00">01:00 hs</option>
                              <option value="01:15">01:15 hs</option>
                              <option value="01:30">01:30 hs</option>
                              <option value="01:45">01:45 hs</option>
                              <option value="02:00">02:00 hs</option>
                              <option value="02:15">02:15 hs</option>
                              <option value="02:30">02:30 hs</option>
                              <option value="02:45">02:45 hs</option>
                              <option value="03:00">03:00 hs</option>
                              <option value="03:15">03:15 hs</option>
                              <option value="03:30">03:30 hs</option>
                              <option value="03:45">03:45 hs</option>
                              <option value="04:00">04:00 hs</option>
                              <option value="04:15">04:15 hs</option>
                              <option value="04:30">04:30 hs</option>
                              <option value="04:45">04:45 hs</option>
                              <option value="05:00">05:00 hs</option>
                              <option value="05:15">05:15 hs</option>
                              <option value="05:30">05:30 hs</option>
                              <option value="05:45">05:45 hs</option>
                              <option value="06:00">06:00 hs</option>
                              <option value="06:15">06:15 hs</option>
                              <option value="06:30">06:30 hs</option>
                              <option value="06:45">06:45 hs</option>
                              <option value="07:00">07:00 hs</option>
                              <option value="07:15">07:15 hs</option>
                              <option value="07:30">07:30 hs</option>
                              <option value="07:45">07:45 hs</option>
                              <option value="08:00">08:00 hs</option>
                              <option value="08:15">08:15 hs</option>
                              <option value="08:30">08:30 hs</option>
                              <option value="08:45">08:45 hs</option>
                              <option value="09:00">09:00 hs</option>
                              <option value="09:15">09:15 hs</option>
                              <option value="09:30">09:30 hs</option>
                              <option value="09:45">09:45 hs</option>
                              <option value="10:00">10:00 hs</option>
                              <option value="10:15">10:15 hs</option>
                              <option value="10:30">10:30 hs</option>
                              <option value="10:45">10:45 hs</option>
                              <option value="11:00">11:00 hs</option>
                              <option value="11:15">11:15 hs</option>
                              <option value="11:30">11:30 hs</option>
                              <option value="11:45">11:45 hs</option>
                              <option value="12:00">12:00 hs</option>
                              <option value="12:15">12:15 hs</option>
                              <option value="12:30">12:30 hs</option>
                              <option value="12:45">12:45 hs</option>
                              <option value="13:00">13:00 hs</option>
                              <option value="13:15">13:15 hs</option>
                              <option value="13:30">13:30 hs</option>
                              <option value="13:45">13:45 hs</option>
                              <option value="14:00">14:00 hs</option>
                              <option value="14:15">14:15 hs</option>
                              <option value="14:30">14:30 hs</option>
                              <option value="14:45">14:45 hs</option>
                              <option value="15:00">15:00 hs</option>
                              <option value="15:15">15:15 hs</option>
                              <option value="15:30">15:30 hs</option>
                              <option value="15:45">15:45 hs</option>
                              <option value="16:00">16:00 hs</option>
                              <option value="16:15">16:15 hs</option>
                              <option value="16:30">16:30 hs</option>
                              <option value="16:45">16:45 hs</option>
                              <option value="17:00">17:00 hs</option>
                              <option value="17:15">17:15 hs</option>
                              <option value="17:30">17:30 hs</option>
                              <option value="17:45">17:45 hs</option>
                              <option value="18:00">18:00 hs</option>
                              <option value="18:15">18:15 hs</option>
                              <option value="18:30">18:30 hs</option>
                              <option value="18:45">18:45 hs</option>
                              <option value="19:00">19:00 hs</option>
                              <option value="19:15">19:15 hs</option>
                              <option value="19:30">19:30 hs</option>
                              <option value="19:45">19:45 hs</option>
                              <option value="20:00">20:00 hs</option>
                              <option value="20:15">20:15 hs</option>
                              <option value="20:30">20:30 hs</option>
                              <option value="20:45">20:45 hs</option>
                              <option value="21:00">21:00 hs</option>
                              <option value="21:15">21:15 hs</option>
                              <option value="21:30">21:30 hs</option>
                              <option value="21:45">21:45 hs</option>
                              <option value="22:00">22:00 hs</option>
                              <option value="22:15">22:15 hs</option>
                              <option value="22:30">22:30 hs</option>
                              <option value="22:45">22:45 hs</option>
                              <option value="23:00">23:00 hs</option>
                              <option value="23:15">23:15 hs</option>
                              <option value="23:30">23:30 hs</option>
                              <option value="23:45">23:45 hs</option>
                            </select>
                          </div>
                        </div>
                        <br>
                        <span class="texto">Deshabilitar Horarios </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoDeshabilitarHorarios" title="Campo Obligatorio"></i>
                        <div class="card card-body">
                          <span>¡Complete los campos anteriores previamente!</span>
                        </div>
                        <button type="submit" class="btn btn-warning botonEditar" name="botonConfProf" id="botonConfProf">
                          <span class="editarUsuario" id="configurarGrilla">Guardar configuración</span>
                          <div class="spinner-border text-secondary cargandoConfiguracionGrilla" id="cargandoConfiguracionGrilla" role="status"></div>
                        </button>
                      </form>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <!--Alerta Nombre de Usuario-->
              <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertNombreUsuario">
                <i class="bi bi-info-circle-fill"></i>
                <strong>Nombre de usuario:</strong>
                El nombre de usuario ingresado no es válido. Recuerde que no puede dejar espacios en blanco. 
                <br>Nombre de usuario: "Ejemplo1234"
              </div>
              <!--Alerta Contraseña Editar-->
              <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertPassword">
                <i class="bi bi-info-circle-fill"></i>
                <strong>Contraseña:</strong>
                La contraseña debe tener de 8 a 16 caracteres. Debe contener al menos una "mayúscula" y un "digito".
              </div>
              <!--Alerta Contraseña Validar-->
              <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertPasswordValidar">
                <i class="bi bi-info-circle-fill"></i>
                <strong>Contraseña:</strong>
                La contraseña debe tener de 8 a 16 caracteres.
                <br>Debe contener al menos una "mayúscula" y un "digito".
              </div>
              <!--Alerta Días de Atención-->
              <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDiasAtencion">
                <i class="bi bi-info-circle-fill"></i>
                <strong>Días de atención:</strong>
                Debes seleccionar minimo 1 día de atención a la semana.
              </div>
              <!--Alerta Días de Atención-->
              <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDuracionConsulta">
                <i class="bi bi-info-circle-fill"></i>
                <strong>Duración de consultas:</strong>
                Debes seleccionar la duración de tus consultas.
              </div>
            </div>
            </div>
        </div>
	    </div>
      <!--Barra de Notificaciones-->
        <div class="container-fluid">
          <div class="row">
            <div class="col-4">
              <scroll-container class="barraNotificaciones">
                <!--Columna Izquierda-->
                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                  <div class="list-group list-group-flush border-bottom scrollarea">
                    <a href="#" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">Jorge Garcia</strong>
                        <small>
                              <span>Sabado - 00:42</span>
                        </small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Tues</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Mon</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Wed</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Tues</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Mon</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Wed</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Tues</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Mon</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Wed</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
                      <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">List group item heading</strong>
                        <small class="text-muted">Tues</small>
                      </div>
                      <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                  </div>
                </div>
              </scroll-container>
            </div>
            <div class="col-8">
              hola
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="../controller/js/navegador.js"></script>
    </body>
</html>
