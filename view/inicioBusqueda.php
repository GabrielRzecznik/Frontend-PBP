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
	<?php
    	include_once('../view/navegador.php'); 
	?>
	<div class="container-fluid">
		<div class="row centrado margenes-celulares">
			<div class="col-md-3 bg-light border rounded-3 contenedores alto padding">
				<b>Buscar Profesionales</b>
				<hr>
				<form onsubmit="event.preventDefault()" action="#" method="post" id="formularioP">
					<b class="titulos">Seleccione especialidad:</b>
					<select class="form-select campos titulos" name="especialidad" id="especialidad" aria-label="Floating label select example">
						<option value="0" selected>Especialidad</option>
						<option value="Alergia e inmunologia infantil">Alergología e inmunología</option>
						<option value="Alergia e inmunologia">Alergología e inmunología</option>
						<option value="Anatomia patologica">Anatomía patológica</option>
						<option value="Anestesiología">Anestesiología</option>
						<option value="Angiologia general y hemodinamia">Angiología general y hemodinamia</option>
						<option value="Cardiologia infantil">Cardiologia infantil</option>
						<option value="Cardiologia">Cardiologia</option>
						<option value="Cirugia cardiovascular infantil">Cirugia cardiovascular infantil</option>
						<option value="Cirugia cardiovascular">Cirugia cardiovascular</option>
						<option value="Cirugia de cabeza y cuello">Cirugia de cabeza y cuello</option>
						<option value="Cirugia toracica">Cirugia toracica</option>
						<option value="Cirugia general">Cirugia general</option>
						<option value="Cirugia infantil">Cirugia infantil</option>
						<option value="Cirugia plastica y reparadora">Cirugia plastica y reparadora</option>
						<option value="Cirugia vascular periferica">Cirugia vascular periferica</option>
						<option value="Clinica">Clinica</option>
						<option value="Coloproctologia">Coloproctologia</option>
						<option value="Dermatologia infantil">Dermatologia infantil</option>
						<option value="Dermatologia">Dermatologia</option>
						<option value="Diagnostico por imagenes">Diagnostico por imagenes</option>
						<option value="Electro fisiologia cardiaca">Electro fisiologia cardiaca</option>
						<option value="Emergentologia">Emergentologia</option>
						<option value="Endocrinologia infantil">Endocrinologia infantil</option>
						<option value="Endocrinologia">Endocrinologia</option>
						<option value="Farmacologia clinica">Farmacologia clinica</option>
						<option value="Fisiatria">Fisiatria</option>
						<option value="Gastroenterologia infantil">Gastroenterologia infantil</option>
						<option value="Gastroenterologia">Gastroenterologia</option>
						<option value="Genetrica">Genetrica</option>
						<option value="Geriatria">Geriatria</option>
						<option value="Ginecologia">Ginecologia</option>
						<option value="Hematologia">Hematologia</option>
						<option value="Hemato-oncologia infantil">Hemato-oncologia infantil</option>
						<option value="Hemoterapia e inmunohematologia">Hemoterapia e inmunohematologia</option>
						<option value="Hepatologia infantil">Hepatologia infantil</option>
						<option value="Hepatologia">Hepatologia</option>
						<option value="Infectologia infantil">Infectologia infantil</option>
						<option value="Infectologia">Infectologia</option>
						<option value="Medicina del deporte">Medicina del deporte</option>
						<option value="Medicina del trabajo">Medicina del trabajo</option>
						<option value="Medicina general y/o familia">Medicina general</option>
						<option value="Medicina legal">Medicina legal</option>
						<option value="Medicina nuclear">Medicina nuclear</option>
						<option value="Medicina palitativa">Medicina palitativa</option>
						<option value="Nefrologia infantil">Nefrologia infantil</option>
						<option value="Nefrologia">Nefrologia</option>
						<option value="Neonatologia">Neonatologia</option>
						<option value="Neumonologia infantil">Neumonologia infantil</option>
						<option value="Neumonologia">Neumonologia</option>
						<option value="Neurocirugia">Neurocirugia infantil</option>
						<option value="Neurocirugia">Neurocirugia</option>
						<option value="Nutricion">Nutricion</option>
						<option value="Obstetricia">Obstetricia</option>
						<option value="Odontologia">Odontologia</option>
						<option value="Oftalmologia">Oftalmologia</option>
						<option value="Oncologia">Oncologia</option>
						<option value="Ortopedia y traumatologia infantil">Ortopedia y traumatologia infantil</option>
						<option value="Ortopedia y traumatologia">Ortopedia y traumatologia</option>
						<option value="Ortopedia y traumatologia otorrinolaringologia infantil">Ortopedia y traumatologia otorrinolaringologia infantil</option>
						<option value="Ortopedia y traumatologia otorrinolaringologia">Ortopedia y traumatologia otorrinolaringologia</option>
						<option value="Psicologia">Psicologia</option>
						<option value="Psiquiatria infanto juvenil">Psiquiatria infanto juvenil</option>
						<option value="Psiquiatria">Psiquiatria</option>
						<option value="Radioterapia">Radioterapia</option>
						<option value="Reumatologia infantil">Reumatologia infantil</option>
						<option value="Reumatologia">Reumatologia</option>
						<option value="Terapia intensiva">Terapia intensiv</option>
						<option value="Terapista intensivo infantil">Terapista intensivo infantil</option>
						<option value="Tocoginecologia">Tocoginecologia</option>
						<option value="Toxicologia">Toxicologia</option>
						<option value="Urologia">Urologia</option>
					</select>
					<b class="titulos">Seleccione modalidad de consulta:</b>
					<select class="form-select campos titulos" name="tipoConsulta" id="tipoConsulta" aria-label="Floating label select example">
						<option value="0" selected>Modalidad</option>
						<option value="Consultorio">Consultorio</option>
						<option value="Virtual">Virtual</option>
						<option value="Domicilio">Domicilio</option>
					</select>
					<b class="titulos">Seleccione el sexo:</b>
					<select class="form-select campos titulos" name="sexo" id="sexo" aria-label="Floating label select example">
						<option value="0" selected>Sexo</option>
						<option value="Masculino">Masculino</option>
						<option value="Femenino">Femenino</option>
						<option value="X">X</option>
					</select>
					<b class="titulos">Seleccione la obra social de atención:</b>
					<input type="text" class="form-control campos titulos" name="obraSocial" id="obraSocial" placeholder="Obra social" aria-label="Obra social" aria-describedby="basic-addon1">
					<b class="titulos">Seleccione su ubicación:</b>
					<select class="form-select campos titulos" name="ubicacion" id="ubicacion" aria-label="Floating label select example">
						<option value="0">Ubicación actual</option>
						<option value="1">Ubicación de mi casa</option><!--Pensar mejor nombre-->
					</select>
					<br>
					<button type="submit" class="btn btn-primary campos botonBuscar">
						<span class="tituloCargando titulos" id="tituloCargando"><i class="bi bi-search"></i> Buscar Profesional</span>
						<div class="spinner-border text-light botonCargando" id="botonCargando" role="status"></div>
					</button>
				</form>
			</div>

			<div class="col-md-8 bg-light border rounded-3 contenedores alto">
				<b>Resultados:</b>
				<hr>
				<div class="row" id="con">
					<span class="sinBusqueda centrarMensaje"><i class="bi bi-binoculars-fill"> Encuentra el profesional que estas buscando.</i></span>
				</div>
			</div>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../model/js/ajaxNotificacionesNuevas.js"></script>
	
	<script src="../controller/js/navegador.js"></script>
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