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
    <title>Perfil - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<?php
    	include_once('../view/navegador.php'); 
	?>

	<div class="container">
		<!--Portada Mapa-->
		<div class="contenedorPortada">
			<span class="mapa" id="visualizarMapa"></span>
		</div>
		<div class="contenedorInformacion bg-light sinBotones" id="contenedorUsuario">
			<span id="mostrarFotoPerfil" class="imagenPerfil"></span>
			<span class="infoResp">
				<b class="centrarNombre colorGris"><span id="mostrarNombrePerfil"></span> <span id="mostrarApellidoPerfil"></b> <span id="mostrarLapiz"></span></span>
				<br>
				<b class="centrarTexto colorGris">@<span id="mostrarNombreUsuarioPerfil"></b>
			</span>
			<br>
			<span class="botonesPerfil" id="botonesPerfil">
				<span id="botonGrilla"></span>
				<span id="botonChat"></span>
			</span>
		</div>
		<div class="row">
			<div class="col-lg-9">
				<div class="card text-dark bg-light infoPersonal">
					<div class="card-body">
						<h5 class="colorGris"><b>Información personal</b></h5>
						<div class="row">
							<div class="col-6 colorGris">
								DNI: <b><span id="mostrarDniPerfil"></span></b>
								<br>
								Sexo: <b><span id="mostrarSexoPerfil"></span></b>
								<br>
								Edad: <b><span id="mostrarEdadPerfil"></span></b> años
							</div>
							<div class="col-6 colorGris">
								<i class="bi bi-house-door-fill"></i> Vive en <b id="mostrarProvinciaPerfil"></b>
								<br>
								<i class="bi bi-geo-alt-fill"></i> Localidad de <b id="mostrarLocalidadPerfil"></b>
							</div>
						</div>
						<span class="infoProfesional colorGris" id="infoProfesional">
							<hr>
							<h5><b>Información de profesional</b></h5>
							Especializado en <b><span id="mostrarEspecialidadPerfil"></span></b> <i class="bi bi-file-medical-fill"></i>
							<br>
							<span id="mostrarMatriculaPerfil"></span>
							<br>
							<span id="atiendePor"></span> <b id="mostrarObrasSocialesPerfil"></b>
							Sus formatos de consulta son <b id="mostrarTipoConsultasPerfil"></b>
						</span>
					</div>
				</div>
				<br>
			</div>
			<div class="col-lg-3">
				<div class="card text-dark bg-light">
					<div class="card-header"><b class="colorGris">Información de contacto</b></div>
					<div class="card-body">	
						<span class="colorGris">
							<i class="bi bi-envelope-fill"></i> <span id="mostrarCorreoPerfil"></span>
							<br>
							<i class="bi bi-telephone-fill"></i> <span id="mostrarTelefonoPerfil"></span>
						</span>
					</div>
				</div>
				<br>
				<span class="informacionConsultorio" id="informacionConsultorio">
					<div class="card text-dark bg-light">
						<div class="card-header"><span class="colorGris"><b>Ubicación de consultorio </b><i class="bi bi-geo-alt-fill"></i></div></span>
						<div class="card-body">	
							<span class="colorGris">
								<span id="mostrarProvinciaConsultorioPerfil"></span>
								<br>
								<span id="mostrarLocalidadConsultorioPerfil"></span>
								<br>
								<span id="mostrarCalleConsultorioPerfil"></span> <span id="mostrarAlturaConsultorioPerfil"></span>
								<br>
								<span id="mostrarDepartamentoConsultorioPerfil"></span>
							</span>
						</div>
					</div>
				</span>
			</div>
	</div>
	<br>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	<script src="../model/js/ajaxBuscarPorNombreUsuario.js"></script>
    <script src="../controller/js/perfil.js"></script>
</body>
</html>
