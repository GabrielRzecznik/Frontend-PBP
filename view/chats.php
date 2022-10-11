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
    <link rel="stylesheet" href="../view/css/chats.css">
	<link rel="stylesheet" href="../view/css/navegador.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Chats - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<?php
    	include_once('../view/navegador.php'); 
	?>

	<div class="container-fluid">
		<div class="row centrado">
			<div class="col-md-3 bg-light border rounded-3 contenedores alto padding">
				<h5><b>Chats</b></h5>
				<hr>
				<main class="d-flex flex-nowrap mainListaContactos">
					<div class="d-flex flex-column align-items-stretch flex-shrink-0 anchoTotal">
						<div class="list-group list-group-flush border-bottom scrollarea">
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>
								<span class="textoAzul">
									Lunes
								</span>
								<span class="badge rounded-pill bg-primary nuevosMensajes">
									3
								</span>
							</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#gabriel1999" class="py-3 lh-sm item-chat">
						<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Mercia Dos Santos Jesus</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						<a href="#" class="py-3 lh-sm item-chat" aria-current="true">
							<div class="d-flex w-100 align-items-center justify-content-between">
							<strong class="mb-1">Gabriel Rzecznik</strong>
							<small>Lunes</small>
							</div>
							<div class="col-10 mb-1 small">
								Hola, buenos días!
							</div>
						</a>
						</div>
					</div>
				</main>
			</div>
			<div class="col-md-8 bg-light border rounded-3 contenedores main-chats">


				<div class="flex-shrink-1 dropdown">
					<span href="#" class="boton-opciones-chat" id="dropdownOption1" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="" data-bs-dismiss="modal2" aria-label="Close"><i class="bi bi-three-dots-vertical"></i></span>
					</span>
					
					<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownOption1">
						<li><a class="dropdown-item" href="#" id="conf">Ver perfil</a></li>
						<li><hr class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="#" id="conf">Borrar chat</a></li>
					</ul>
				</div>

				<h5><b>Gabriel Rzecznik</b> / @gabriel1999</h5>
				<hr>
				
				<main class="scrollarea contenedor-chat">
					<!--Indicador día-->
					<div class="indicadorDia">Lunes 7 de mayo 2022</div>
					<!--Mensaje Enviado-->
					<div class="mensajeEspacio">
						<div class="mensajeEnviado">
							<div class="contenidoMensajeEnviado">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!
								<div class="horaMensajeEnviado">23:56</div>
							</div>
						</div>
					</div>
					<!--Mensaje Recibidos-->
					<div class="mensajeEspacio">
						<div class="mensajeRecibido">
							<div class="contenidoMensajeRecibido">
								Hola, buenos dias!
								<div class="horaMensajeRecibido">23:56</div>
							</div>
						</div>
					</div>
					<div class="mensajeEspacio">
						<div class="mensajeRecibido">
							<div class="contenidoMensajeRecibido">
								Me gustaria solicitar un turno!
								<div class="horaMensajeRecibido">23:56</div>
							</div>
						</div>
					</div>
					<!--Indicador día-->
					<div class="indicadorMensajesNoLeidos">Mensajes no leídos</div>
					<!--Mensaje Enviado-->
					<div class="mensajeEspacio">
						<div class="mensajeEnviado">
							<div class="contenidoMensajeEnviado">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!
								<div class="horaMensajeEnviado">
									23:56
									<span class="borrarMensaje">
										<i class="bi bi-trash-fill"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="mensajeEspacio">
						<div class="mensajeEnviado">
							<div class="contenidoMensajeEnviado">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos eos odit corporis ullam unde iste, eveniet accusamus facere qui neque, natus provident, iure doloribus explicabo incidunt magni sequi beatae!
								<div class="horaMensajeEnviado">
									23:56
									<span class="borrarMensaje">
										<i class="bi bi-trash-fill"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				
					
				</main>
				
				<br>

				<form onsubmit="event.preventDefault()" action="#" method="post" id="formularioEnviarMensaje">
					<div class="input-group inputMensaje">
						<input type="text" id="mensaje" class="form-control" placeholder="Escribe algo..." aria-describedby="button-addon2">
						<button class="btn btn-primary" type="submit" id="botonEnviarMensaje" disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/></svg></button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	
	<script src="../controller/js/chats.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../controller/js/navegador.js"></script>
	
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
	<script src="../model/js/ajaxConfigurarGrillaProfesional.js"></script>
</body>
</html>
