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
				<b>Chats</b>
				<hr>
				<main class="d-flex flex-nowrap mainListaContactos">
					<div class="d-flex flex-column align-items-stretch flex-shrink-0 anchoTotal">
						<div class="list-group list-group-flush border-bottom scrollarea" id="chats">
						</div>
					</div>
				</main>
			</div>
			<div class="col-md-8 bg-light border rounded-3 contenedores main-chats">

				<span id="opcionesChat"></span>

				<b><span id="nombreChat"></span> <span id="apellidoChat"></span></b><span class> <span id="nombreUsuarioChat"></span></span>
				
				<span id="mensajes"></span>

				<br>
				
				<span class="ocultar" id="fromEnvMen">
					<form onsubmit="event.preventDefault()" action="#" method="post" id="formularioEnviarMensaje">
						<div class="input-group inputMensaje">
							<input type="text" id="mensaje" class="form-control" placeholder="Escribe algo..." aria-describedby="button-addon2">
							<button class="btn btn-primary" type="submit" id="botonEnviarMensaje" disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/></svg></button>
						</div>
					</form>
				</span>
			</div>
		</div>
	</div>
	
	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	<script src="../model/js/ajaxNotificacionesNuevas.js"></script>
	
	
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../controller/js/navegador.js"></script>
	
	<!--Buscar Mensajes-->
	<script src="../model/js/ajaxBuscarMensajes.js"></script>

	<!--Buscar Chats-->
	<script src="../model/js/ajaxBuscarChats.js"></script>
	
	<script src="../controller/js/chats.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
	<script src="../model/js/ajaxConfigurarGrillaProfesional.js"></script>


	<!--Enviar Mensaje-->
	<script src="../model/js/ajaxEnviarMensaje.js"></script>

</body>
</html>
