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
    <link rel="stylesheet" href="../view/css/notificaciones.css">
	<link rel="stylesheet" href="../view/css/navegador.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Notificaciones - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<?php
    	include_once('../view/navegador.php'); 
	?>

	<div class="container contenedor bg-light border rounded-3">
		<h5><b>Notificaciones</b></h5>
		<hr>
		<div class="alert alert-success" role="alert">
			<i class="bi bi-calendar2-plus-fill margen-derecho"></i>
			<span clas="hr"></span>
			<b>Solicitud recibida: </b>
			El paciente Gabriel Rzecznik te a enviado una solicitud de modalidad consultorio y de caracter particular, el día jueves 13 de octubre del 2022 desde las 11:50 hasta las 12:25
		</div>
		<div class="alert alert-warning" role="alert">
			<i class="bi bi-calendar2-x-fill margen-derecho"></i>
			<b>Solicitud cancelada</b>
		</div>
		<div class="alert alert-success" role="alert">
			<i class="bi bi-calendar2-check-fill margen-derecho"></i>
			<b>Solicitud aceptada</b>
		</div>
		<div class="alert alert-danger" role="alert">
			<i class="bi bi-calendar2-x-fill margen-derecho"></i>
			<b>Solicitud rechazada</b>
		</div>
		<div class="alert alert-danger" role="alert">
			<i class="bi bi-calendar2-x-fill margen-derecho"></i>
			<b>Turno cancelado</b>
		</div>
	</div>

	<br>
	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	
	
    <script src="../controller/js/notificaciones.js"></script>
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

<!--https://programacion.net/articulo/google_maps_con_multiples_marcadores_y_ventana_de_informacion_mediante_la_api_v3_1738-->
