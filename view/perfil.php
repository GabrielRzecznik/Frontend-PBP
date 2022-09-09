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
		<i class="fondoImagenPerfil"></i>
		<i class="bi bi-person-circle imagenPerfil"></i>
		<span class="mapa" id="visualizarMapa">Error al cargar portada</span>

		<div class="">
			<div class="row">
				<div class="col-lg-3 border bg-light rounded-3 contenedorDatosPrincipales">
					<div class="row">
			
						<h3 class="centrarTexto"><span id="mostrarNombrePerfil"></span> <span id="mostrarApellidoPerfil"></span></h3>
						<span class="centrarTexto" id="mostrarNombreUsuarioPerfil"></span>
					</div>
				</div>
				<div class="col-lg-8 border bg-light rounded-3 contenedorDatosPrincipales">
					<div class="row">
						<div class="col-md-6">
							<span id="mostrarCorreoPerfil"></span>
							<span id="mostrarApellidoPerfil"></span>
							<br>
							<span id="mostrarSexoPerfil"></span>
							<br>
							<span id="mostrarTelefonoPerfil"></span>
							<br>
							<span id="mostrarProvinciaPerfil"></span>
							<br>
							<span id="mostrarLocalidadPerfil"></span>
						</div>
						<div class="col-md-6 botones">
							<button type="button" class="btn btn-primary">Solicitar Turno</button>
							<button type="button" class="btn btn-primary">Enviar Mensaje</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
	
	<span id="mostrarEspecialidadPerfil"></span>
	<span id="mostrarMatriculaPerfil"></span>
	


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
