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
	<link rel="stylesheet" href="../view/css/fullCalendar.css">
	<!--Full Calendar-->
	<link href="../controller/fullcalendar/main.css" rel='stylesheet'/>
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Inicio - Profesional By Proximity</title>
</head>
<body class="" id="mostrar">
	<?php
    	include_once('../view/navegador.html'); 
	?>
	<br>
	<div class="container">
		<div class="card text-dark bg-light contenedorFullCalendar">
			<div class="card-body">
				<div id='calendar'></div>
			</div>
		</div>
	</div>
	

	<!--Crear Solicitud-->
	<form onsubmit="event.preventDefault()" action="#" method="post" id="crearSolicitud">
    	<div class="modal fade" id="ventana-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        	<div class="modal-dialog modal-dialog-centered" role="document">
            	<div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Enviar solicitud</h5>
                        <button id="close" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>                    
                    <div class="modal-body">
                    	<!--Formulario Enviar Solicitud-->    
						<span id="formularioEnviarSolicitud">
							Fecha:
							<input type="date" class="form-control inputs" name="fechaSolicitud" id="fechaSolicitud" readonly>
							<br>
							<div class="row">
								<div class="col-6">
									Hora de Inicio:
									<input type="text" class="form-control inputs" name="horaDesdeSolicitud" id="horaDesdeSolicitud" readonly>
								</div>
								<div class="col-6">
									Hora de Finalización:
									<input type="text" class="form-control inputs" name="horaHastaSolicitud" id="horaHastaSolicitud" readonly>
								</div>
							</div>
							<br>
							Tipo de Atención:<br>
							<select class="form-select" aria-label="Default select example" name="seleccionConsulta" id="seleccionConsulta">
								<option selected value="Consultorio">Consultario</option>
								<option value="Domicilio">Domicilio</option>
								<option value="Virtual">Virtual</option>
							</select>
							<br>
							Obra Social:<br>
							<select class="form-select" aria-label="Default select example" name="obraSocialSolicitud" id="obraSocialSolicitud">
								<option selected>Particular (Ninguna)</option>
								<option value="Osde">Osde</option>
								<option value="Ioma">Ioma</option>
								<option value="Medicus">Medicus</option>
							</select>
						</span>
						<!--Confirmación Enviar Solicitud-->
						<span id="avisoConfirmarEnviarSolicitud" class="ocultar">
							¿Esta seguro que quiere enviar esta solicitud?<br>
                            Una vez enviada la solicitud se le notificara al profesional!
						</span>
                    </div>
                    <div class="modal-footer">
						<!--Formulario Enviar Solicitud-->
						<span id="botonesEnviarSolicitud">
							<span class="btn btn-secondary" id="cancelar">Cancelar</span>
							<span class="btn btn-success botonEnviarSolicitud" data-dismiss="modal" name="enviar" id="enviar">Enviar solicitud</span>
						</span>
						<!--Confirmación Enviar Solicitud-->
						<span id="botonesConfirmarEnviarSolicitud" class="ocultar">
							<span class="btn btn-warning" id="volverAtras">Atrás</span>
							<button type="submit" class="btn btn-success botonConfirmarSolicitud" data-dismiss="modal">
								<span name="confirmarSolicitud" id="confirmarSolicitud">Confirmar</span>
								<div class="spinner-border text-light confSoliCarg" id="confSoliCarg" role="status"></div>
							</button>
						</span>
                    </div>               
                </div>
           	</div>
		</div>
	</form>
	<!--Bootstrap-->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	






	<!--Navegador-->
	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../controller/js/navegador.js"></script>
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
	<script src="../model/js/ajaxConfigurarGrillaProfesional.js"></script>



	<!--Configuracion Grilla Profesional-->
	<script src="../model/js/ajaxBuscarConfiguracionGrillaProfesional.js"></script>

	<!--Grilla-->
	<script src="../controller/js/grilla.js"></script>
	




	<!--Full Calendar-->
    <script src="../controller/js/fullCalendar.js"></script>
	<script src="../controller/fullcalendar/main.js"></script>
	<script src="../controller/fullcalendar/locales/es.js"></script>
	




	
	
	
	
	
	<!--Gestor-->
	<script src="../model/js/ajaxGestorMostrarGrilla.js"></script>
	
	
	

    
	
	
	
	
	
	
	
	
		












	
	<!--Crear Solicitud-->
	<script src="../controller/js/crearSolicitud.js"></script>
    <script src="../model/js/ajaxCrearSolicitud.js"></script>
	
	<!--Datos del Profesional-->
	<script src="../model/js/ajaxBuscarPerfil.js"></script>


</body>
</html>

<!--https://programacion.net/articulo/google_maps_con_multiples_marcadores_y_ventana_de_informacion_mediante_la_api_v3_1738-->
