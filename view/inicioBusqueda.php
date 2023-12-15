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
    <link rel="stylesheet" href="./css/inicioBusqueda.css">
	<link rel="stylesheet" href="./css/navegador.css">
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Inicio - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
	<?php
    	include_once('../view/navegador.php'); 
	?>
	<div class="container-fluid">
		<div class="row centrado margenes-celulares">
			<div class="col-md-3 bg-light border rounded-3 contenedores alto padding">
				<b>Buscar Profesionales</b>
				<hr>
				<form onsubmit="event.preventDefault()" action="#" method="post" id="formularioP" enctype="multipart/form-data">
					<b class="titulos">Seleccione la especialidad:</b>
					<select class="form-select campos" name="especialidad" id="especialidad" aria-label="Floating label select example"></select>
					<b class="titulos">Seleccione la modalidad de consulta:</b>
					<select class="form-select campos titulos" name="tipoConsulta" id="tipoConsulta" aria-label="Floating label select example">
						<option value="0" selected="true">Modalidad de consulta</option>
						<option value="1">Consultorio</option>
						<option value="2">Domicilio</option>
						<option value="3">Virtual</option>
					</select>
					<b class="titulos">Seleccione su sexo:</b>
					<select class="form-select campos titulos" name="sexo" id="sexo" aria-label="Floating label select example">
						<option value="0" selected="true">Sexo</option>
						<option value="Masculino">Masculino</option>
						<option value="Femenino">Femenino</option>
						<option value="X">X</option>
					</select>
					<b class="titulos">Seleccione la obra social de atención:</b>
					<select class="form-select campos" name="obraSocial" id="obraSocial"></select>
					<b class="titulos">Seleccione su ubicación:</b>
					<select class="form-select campos titulos" name="ubicacion" id="ubicacion" aria-label="Floating label select example">
						<option value="0">Ubicación actual</option>
						<option value="1">Ubicación de mi casa</option><!--Pensar mejor nombre-->
					</select>
					<button type="submit" class="btn btn-primary btn-sm campos botonBuscar">
						<span class="tituloCargando titulos" id="tituloCargando"><i class="bi bi-search"></i> Buscar Profesional</span>
						<div class="spinner-border text-light botonCargando" id="botonCargando" role="status"></div>
					</button>
				</form>
			</div>

			<div class="col-md-8 bg-light border rounded-3 contenedores alto">
				<b>Resultados:</b>
				<hr>
				<div class="row" id="con">
					<span class="sinBusqueda centrarMensaje"><i class="bi bi-binoculars-fill">  Encuentra el profesional que estas buscando.</i></span>
				</div>
			</div>
		</div>
	</div>
	<br>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	

	
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	
	<script src="../controller/js/inicioBusqueda.js"></script>
	
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxBuscarProfesionales.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
	<script src="../model/js/ajaxConfigurarGrillaProfesional.js"></script>
</body>
</html>

<!--https://programacion.net/articulo/google_maps_con_multiples_marcadores_y_ventana_de_informacion_mediante_la_api_v3_1738-->