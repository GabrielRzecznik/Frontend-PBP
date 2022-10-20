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
    	include_once('../view/navegador.php'); 
	?>
	<br>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card text-dark bg-light contenedorFullCalendar">
					<div class="card-body">
						<div id='calendar'>
						</div>
						<br>
						<button id="descargarGrilla" class="botonDescargarGrilla">
							Descargar grilla actual en PDF
							<i id="iconoDescargarGrilla" class="bi bi-download"></i>
							<span id="cargandoDescargaGrilla" class="ocultar">
								<div class="spinner-border text-light cargandoDescargaGrilla spinner-border-sm" role="status">
									<span class="visually-hidden">Generando...</span>
								</div>
							</span>
						</button>
					</div>
				</div>
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
							</select>
							<br>
							Obra Social:<br>
							<select class="form-select" aria-label="Default select example" name="obraSocialSolicitud" id="obraSocialSolicitud">
								
							</select>
						</span>
						<!--Confirmación Enviar Solicitud-->
						<span id="avisoConfirmarEnviarSolicitud" class="ocultar">
							¿Esta seguro que quiere enviar esta solicitud?<br>
                            ¡Una vez enviada la solicitud se le notificara al profesional!
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
							<button type="submit" class="btn btn-success botones" data-dismiss="modal" id="enviarSolicitud">
								<span name="confirmarSolicitud" id="confirmarSolicitud">Confirmar</span>
								<div class="spinner-border text-light aspectoSpinner" id="confSoliCarg" role="status"></div>
							</button>
						</span>
                    </div>               
                </div>
           	</div>
		</div>
	</form>

	<!--Cancelar Solicitud-->
	<div class="modal fade" id="ventana-modal-cancelar-solicitud" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Cancelar solicitud</h5>
					<button id="close-cancelar-solicitud" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>                    
				<div class="modal-body">
					¿Esta seguro que quiere cancelar esta solicitud?<br>
					¡Una vez cancelada la solicitud se le notificara al profesional!
				</div>
				<div class="modal-footer">
					<span class="btn btn-secondary" id="cancelar-cancelar-solicitud">Atrás</span>
					<span class="btn btn-warning botonEnviarSolicitud" data-dismiss="modal" id="cancelar-solicitud">Confirmar</span>
				</div>             
			</div>
		</div>
	</div>

	<!--Cancelar Horario Disponible-->
	<div class="modal fade" id="ventana-modal-cancelar-horario" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Deshabilitar horario</h5>
					<button id="close-cancelar-horario" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>                    
				<div class="modal-body">
					¿Esta seguro que quiere deshabilitar este horario?<br>
					¡Podra cancelar esta acción cuando usted quiera!
				</div>
				<div class="modal-footer">
					<span class="btn btn-secondary" id="cancelar-cancelar-horario">Atrás</span>
					<span class="btn btn-warning botonEnviarHorario" data-dismiss="modal" id="cancelar-horario">Confirmar</span>
				</div>             
			</div>
		</div>
	</div>

	<!--Rehabilitar Horario-->
	<div class="modal fade" id="ventana-modal-rehabilitar-horario" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Rehabilitar horario</h5>
					<button id="close-rehabilitar-horario" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>                    
				<div class="modal-body">
					¿Esta seguro que quiere rehabilitar este horario?
				</div>
				<div class="modal-footer">
					<span class="btn btn-secondary" id="cancelar-rehabilitar-horario">Atrás</span>
					<span class="btn btn-success botonEnviarHorario" data-dismiss="modal" id="rehabilitar-horario">Confirmar</span>
				</div>             
			</div>
		</div>
	</div>

	<!--Responder Solicitud-->
	<div class="modal fade" id="ventana-modal-responder-solicitud" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Responder solicitud de</h5>
					<button id="close-responder-solicitud" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>                    
				<div class="modal-body">
					Información
				</div>
				<div class="modal-footer">
					<span class="btn btn-secondary" id="cancelar-responder-solicitud">Atrás</span>
					<button class="btn btn-danger botonEnviarHorario botones" data-dismiss="modal" id="rechazar-solicitud">
						<span id="texto-boton-rechazar-solicitud">Rechazar</span>
						<div class="spinner-border text-light aspectoSpinner" id="cargando-boton-rechazar-solicitud" role="status"></div>
					</button>
					<button class="btn btn-success botonEnviarHorario botones" data-dismiss="modal" id="aceptar-solicitud">
						<span id="texto-boton-aceptar-solicitud">Aceptar</span>
						<div class="spinner-border text-light aspectoSpinner" id="cargando-boton-aceptar-solicitud" role="status"></div>
					</button>
				</div>             
			</div>
		</div>
	</div>
	<br>

	<!--Cancelar Turno-->
	<div class="modal fade" id="ventana-modal-cancelar-turno" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Cancelar turno</h5>
					<button id="close-cancelar-turno" type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>                    
				<div class="modal-body">
					<span class="vista-paciente" id="vista-paciente">
						¿Esta seguro que quiere cancelar este turno?<br>
						¡Una vez cancelado el turno se le notificara al profesional!
					</span>
					<span class="vista-profesional" id="vista-profesional">
						¿Esta seguro que quiere cancelar este turno?<br>
						¡Una vez cancelado el turno se le notificara al paciente!
					</span>
				</div>
				<div class="modal-footer">
					<span class="btn btn-secondary" id="cancelar-cancelar-turno">Atrás</span>
					<span class="btn btn-danger botonEnviarTurno" data-dismiss="modal" id="cancelar-turno">Confirmar</span>
				</div>             
			</div>
		</div>
	</div>

	<!--Bootstrap-->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	<!--Parametro-->
	<script src="../controller/js/parametroGrilla.js"></script>

	<!--Navegador-->
	<script src="../model/js/ajaxBackupProvincias.js"></script>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
	<script src="../model/js/ajaxNotificacionesNuevas.js"></script>
	
	<script src="../model/js/ajaxBuscarProvincias.js"></script>
	<script src="../controller/js/navegador.js"></script>
	
	<script src="../model/js/ajaxDeshabilitarUsuario.js"></script>
	<script src="../model/js/ajaxEditarUsuario.js"></script>
	<script src="../model/js/ajaxEditarPaciente.js"></script>
	<script src="../model/js/ajaxConfirmarContraseña.js"></script>
	<script src="../model/js/ajaxBuscarUsuarioExistente.js"></script>
	<script src="../model/js/ajaxConfigurarGrillaProfesional.js"></script>

	<!--Full Calendar-->
    <script src="../controller/js/fullCalendar.js"></script>
	<script src="../controller/fullcalendar/main.js"></script>
	<script src="../controller/fullcalendar/locales/es.js"></script>
	
	<!--Gestor-->
	<script src="../model/js/ajaxGestorMostrarGrilla.js"></script>
	
	<!--Configuracion Grilla Profesional-->
	<script src="../model/js/ajaxBuscarConfiguracionGrillaProfesional.js"></script>
	<!--Grilla-->
	<script src="../controller/js/grilla.js"></script>
	
	<!--Deshabilitar Horario-->
	<script src="../controller/js/deshabilitarHorario.js"></script>
    <script src="../model/js/ajaxDeshabilitarHorario.js"></script>

	<!--Rehabilitar Horario-->
	<script src="../controller/js/rehabilitarHorario.js"></script>
    <script src="../model/js/ajaxRehabilitarHorario.js"></script>

	<!--Buscar datos Obras Sociales y Tipos de Atención del Profesional para Crear Solicitud-->
	<script src="../model/js/ajaxBuscarDatosProfesionalCrearSolicitud.js"></script>

	<!--Crear Solicitud-->
	<script src="../controller/js/crearSolicitud.js"></script>
    <script src="../model/js/ajaxCrearSolicitud.js"></script>
	
	<!--Cancelar Solicitud-->
	<script src="../controller/js/cancelarSolicitud.js"></script>
    <script src="../model/js/ajaxCancelarSolicitud.js"></script>

	<!--Responder Solicitud-->
	<script src="../controller/js/responderSolicitud.js"></script>
    <script src="../model/js/ajaxResponderSolicitud.js"></script>

	<!--Cancelar Turno-->
	<script src="../controller/js/cancelarTurno.js"></script>
    <script src="../model/js/ajaxCancelarTurno.js"></script>

	<!--Notificaciones-->
	<script src="../model/js/ajaxEnviarNotificacion.js"></script>

	<!--Datos del Profesional-->
	<script src="../model/js/ajaxBuscarPerfil.js"></script>

	<!--Descargar Grilla a PDF-->
	<script src="../controller/js/libreriaPDF.bundle.min.js"></script>
	<script src="../controller/js/descargarGrilla.js"></script>

</body>
</html>

<!--https://programacion.net/articulo/google_maps_con_multiples_marcadores_y_ventana_de_informacion_mediante_la_api_v3_1738-->
