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
    <link rel="stylesheet" href="../view/css/inicioBusqueda.css">
	<link rel="stylesheet" href="../view/css/navegador.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Inicio - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<!--Encabezado - Nav-->
	<header class="py-3 mb-3 border-bottom bg-light"><!--bg-light se utiliza para cambiarle el color!-->
		<div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
			<div class="dropdown">
				<a class="navbar-brand textoLogo" href="#"><img class="logo" src="../view/img/icono.png" alt="Error al cargar logo"> <b class="nombreSitio colorGris">Profesional By Proximity</b></a>
			</div>
			<div class="d-flex align-items-center">
				<span class="w-100 me-2 derecha">
					<ul class="ulNav">
						<li class="liNav">
							<a class="nav-link noSeleccionado" href="../view/notificaciones.php"><i class="bi bi-bell-fill"></i></a><!--Icono Notificaciones-->
						</li>
						<li class="liNav">
							<a class="nav-link noSeleccionado" href="./chats.php"><i class="bi bi-chat-square-text-fill"></i></a><!--Icono Chat-->
						</li>
						<li class="liNav">
							<a class="nav-link seleccionado" aria-current="page" href="../view/inicioBusqueda.php"><i class="bi bi-house-fill"></i></a><!--Icono Inicio-->
						</li>
					</ul>
				</span>
				<div class="flex-shrink-0 dropdown">
					<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="colorGris">
							<span id="fotoUsuario"><i class="bi bi-person-circle fotoPerfil"></i></span>
							<b class="logoUsuario" id="usuario"></b>
						</span>
					</a>
					
					<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
						<li><span class="dropdown-item cursorPointer" id="irMiPerfil">Perfil</span></li>
						<li id="irAMiGrilla"></li>
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
							<button id="confUsu" class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
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
							<button id="confPerPac" class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
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
											<br><hr>
											<!--Campo Foto-->
											<i class="bi bi-pencil-square iconoEditar" id="editarFoto"></i>
											<span id="fotoUsuarioEditar"></span>
											<br>
											<!--Campo Nombre-->
											<span class="texto">Nombre </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoNombre" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="nombre" id="nombre">
											<br>
											<!--Campo Apellido-->
											<span class="texto">Apellido </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoApellido" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="apellido" id="apellido">
											<br>
											<!--Campo Fecha de Nacimiento-->
											<span class="texto">Fecha de nacimiento </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoFechaNacimiento" title="Campo Obligatorio"></i>
											<br>
											<input type="date" class="form-control inputs" name="fechaNacimiento" id="fechaNacimiento">
											<br>
											<!--Campo Sexo-->
											<span class="texto">Sexo </span><i class="signo bi bi-check-circle-fill mostrar noValidado" id="iconoSexoPaciente" title="Campo Obligatorio"></i>
											<br>
											<select class="form-select" name="sexoPaciente" id="sexoPaciente" aria-label="Floating label select example">
												<option value="0" selected>Como figura en su DNI</option>
												<option value="Masculino">Masculino</option>
												<option value="Femenino">Femenino</option>
												<option value="X">X</option>
											</select>
											<br>
											<!--Campo Telefono-->
											<span class="texto">Télefono </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoTelefono" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="telefono" id="telefono">
											<br>
											<!--Campo Provincia-->
											<span class="texto">Provincia </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoProvincia" title="Campo Obligatorio"></i><!--Campo obligatorio-->
											<select class="form-select" name="provincia" id="provincia" aria-label="Floating label select example"></select>
											<br>
											<!--Campo Localidad-->
											<span class="texto">Localidad </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoLocalidad" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="localidad" id="localidad">
											<br>
											<!--Campo Calle-->
											<span class="texto">Nombre de calle/avenida </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoCalle" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="calle" id="calle">
											<br>
											<!--Campo Número-->
											<span class="texto">Altura de calle/avenida </span><i class="signo bi bi-check-circle-fill noValidado" id="iconoAltura" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="altura" id="altura">
											<br>
											<!--Campo Departamento-->
											<span class="texto">Departamento </span><i class="bi" id="iconoDepartamento" title="Campo Obligatorio"></i>
											<br>
											<input type="text" class="form-control inputs" name="departamento" id="departamento">
											<button type="submit" class="btn btn-warning botonEditarPaciente">
												<span class="editarUsuario" id="textoEditarPaciente">Editar usuario</span>
												<div class="spinner-border text-secondary cargandoEditarPaciente" id="cargandoEditarPaciente" role="status"></div>
											</button>
										</form>
									</div>
									<br>
								</div>
							</div>
						  </div>
						</div>
						<div class="accordion-item" id="confProf">
						  <h2 class="accordion-header" id="flush-headingThree">
							<button id="confPro" class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
								Configuración grilla profesional
							</button>
						  </h2>
						  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
							<div class="accordion-body">
								<div class="card card-body">
									<form onsubmit="event.preventDefault()" action="#" method="post" id="formConfProf">
										<b>Configuración grilla profesional</b>
										<br><br>
										<div class="alert alert-warning" role="alert">
											¡Aviso importante!<br>
											La configuración de la grilla profesional solo se podrá modificar por una <b>única vez</b>.<br>
											Con la misma se generarán los horarios de atención en los cuales sus potenciales pacientes le podrán solicitar turnos.
										</div>
										
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
											<option value="0" selected="true" disabled="disabled">Seleccione la duración</option>
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
										<span class="texto">Tiempo de descanso entre consultas </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoDescanso" title="Campo Obligatorio"></i>
										<select class="form-select" name="descanso" id="descanso" aria-label="Floating label select example">
											<option value="0" selected="true" disabled="disabled">Seleccione el tiempo de descanso</option>
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
										<span class="texto">Rango horario de atención por día </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoRangoHorarioDia" title="Campo Obligatorio"></i>
										<div class="row">
											<div class="col-6">
												<select class="form-select" name="rangoHorarioDiaDesde" id="rangoHorarioDiaDesde">
													<option value="0" selected="true" disabled="disabled">Hora de inicio</option>
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
												<select class="form-select" name="rangoHorarioDiaHasta" id="rangoHorarioDiaHasta" disabled>
													<option value="0">Hora de finalización</option>
												</select>
											</div>
										</div>
										<br>
										<span class="texto">Vista previa grilla </span>
										<div class="card card-body">
											<span id="mostrarHorarios">¡Complete los campos anteriores previamente!</span>
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
					<!--Alerta Duración de consultas-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDuracionConsulta">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Duración de consultas:</strong>
						Debes seleccionar la duración de tus consultas.
					</div>
					<!--Alerta Días de Atención-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDiasAtencion">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Días de atención:</strong>
						Debes seleccionar minimo 1 día de atención a la semana.
					</div>
					<!--Alerta Descanso entre consultas-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDescanso">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Descanso entre consultas:</strong>
						Debes seleccionar la duración de tus descansos entre consultas.
					</div>
					<!--Alerta Rango Horario Dia Desde-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertRangoHorarioDiaDesde">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Rango horario de atención por día - Inicio:</strong>
						Debes seleccionar tu horario de inicio de atención diario.
					</div>
					<!--Alerta Rango Horario Dia Hasta-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertRangoHorarioDiaHasta">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Rango horario de atención por día - Finalización:</strong>
						Debes seleccionar tu horario de finalización de atención diario.
					</div>
					<!--Alerta Nombre-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertNombre">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Nombre: </strong>
						¡El nombre ingresado no es valido!
						<br>Debe tener de 2 a 30 caracteres los cuales no 
						<br>puede ser numeros ni caracteres especiales.
					</div>   
					<!--Alerta Apellido-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertApellido">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Apellido: </strong>
						¡El apellido ingresado no es valido!
						<br>Debe tener de 2 a 30 caracteres los cuales no 
						<br>puede ser numeros ni caracteres especiales.
					</div>
					<!--Alerta Fecha Nacimiento-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertFechaNacimiento">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Fecha de nacimiento: </strong>
						¡Debes ser mayor de 16 años para utilizar nuestros servicios!
					</div>
					<!--Alerta Sexo Paciente-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertSexoPaciente">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Sexo: </strong>
						¡El campo sexo es obligatorio!
					</div>
					<!--Alerta Télefno-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertTelefono">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Télefono: </strong>
						¡El télefono ingresado no es valido!
					</div> 
					<!--Alerta Provincia-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertProvincia">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Provincia</strong>
						¡Debe seleccionar su provincia de residencia!
					</div> 
					<!--Alerta Localidad-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertLocalidad">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Localidad: </strong>
						¡La localidad ingresada no es valida!
					</div> 
					<!--Alerta Calle/Avenida-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCalle">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Calle/Avenida: </strong>
						¡La calle o avenida ingresada no es valida!
					</div> 
					<!--Alerta Altura-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertAltura">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Altura: </strong>
						¡La altura ingresada no es vailida!
					</div> 
					<!--Alerta Departamento-->
					<div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDepartamento">
						<i class="bi bi-info-circle-fill"></i>
						<strong>Departamento: </strong>
						¡El departamento ingresado no es valido!
					</div>
				</div>
		  	</div>
		</div>
	</div>
</body>
</html>