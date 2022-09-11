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
    <link rel="stylesheet" href="../view/css/perfil.css">
	<link rel="stylesheet" href="../view/css/navegador.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Inicio - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<?php
    	include_once('../view/navegador.html'); 
	?>

	<div class="container">
		<!--Portada Mapa-->
		<span class="mapa" id="visualizarMapa">Error al cargar portada</span>
		<div class="contenedorInformacion bg-light">
			<span class="fondoImagenPerfil"></span>
			<span id="mostrarFotoPerfil" class="imagenPerfil"></span>
			<button type="button" class="btn btn-primary btn-sm botonSolicitarTurno">Solicitar Turno</button>
			<button type="button" class="btn btn-success btn-sm botonEnviarMensaje">Enviar Mensaje</button>
			<span class="infoResp">
				<h3 class="centrarTexto"><b><span id="mostrarNombrePerfil"></span> <span id="mostrarApellidoPerfil"></b></span></h3>
				<span class="centrarTexto" ><b>@</span><span id="mostrarNombreUsuarioPerfil"></b></span>
			</span>	
			<div class="container margerSuperior">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-lg-9">
				<div class="card text-dark bg-light infoPersonal">
					<div class="card-body">
						<h5><b>Información personales</b></h5>
						<div class="row">
							<div class="col-6">
								Es <b><span id="mostrarSexoPerfil"></span></b>
								<br>
								Tiene <b><span id="mostrarEdadPerfil"></span></b> años
							</div>
							<div class="col-6">
								<i class="bi bi-house-door-fill"></i> Vive en <b id="mostrarProvinciaPerfil"></b>
								<br>
								<i class="bi bi-geo-alt-fill"></i> De <b id="mostrarLocalidadPerfil"></b>
							</div>
						</div>
						<hr>
						<h5><b>Información de profesional</b></h5>
						Especializado en <b><span id="mostrarEspecialidadPerfil"></span></b> <i class="bi bi-file-medical-fill"></i>
						<br>
						Matricula: <b><span id="mostrarMatriculaPerfil"></span></b>
						<br>
						Atiende por <b id="mostrarObrasSocialesPerfil"></b>
						<br>
						Sus formatos de consulta son <b id="mostrarTipoConsultasPerfil"></b>
					</div>
				</div>
				<br>
			</div>
			<div class="col-lg-3">
				<div class="card text-dark bg-light">
					<div class="card-header"><b>Información de contacto</b></div>
					<div class="card-body">	
						<i class="bi bi-envelope-fill"></i> <span id="mostrarCorreoPerfil"></span>
						<br>
						<i class="bi bi-telephone-fill"></i> <span id="mostrarTelefonoPerfil"></span>
					</div>
				</div>
				<br>
				<span class="informacionConsultorio" id="informacionConsultorio">
					<div class="card text-dark bg-light">
						<div class="card-header"><b>Ubicación de consultorio </b><i class="bi bi-geo-alt-fill"></i></div>
						<div class="card-body">	
							<span id="mostrarProvinciaConsultorioPerfil"></span>
							<br>
							<span id="mostrarLocalidadConsultorioPerfil"></span>
							<br>
							<span id="mostrarCalleConsultorioPerfil"></span> <span id="mostrarAlturaConsultorioPerfil"></span>
							<br>
							<span id="mostrarDepartamentoConsultorioPerfil"></span>
						</div>
					</div>
				</span>
			</div>
	</div>
	<br>
	<script src="../model/js/ajaxBuscarPerfil.js"></script>
    <script src="../controller/js/perfil.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../controller/js/navegador.js"></script>
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
</body>
</html>

<!--https://programacion.net/articulo/google_maps_con_multiples_marcadores_y_ventana_de_informacion_mediante_la_api_v3_1738-->
