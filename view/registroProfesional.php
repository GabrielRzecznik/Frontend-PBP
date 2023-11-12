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
    <link rel="stylesheet" href="./css/registros.css"><!--UNIFICAR NOMBRES DE ESTILO REGISTRO-->
    <!--<link rel="icon" href="./favicon.ico">-->
    <title>Registro Profesional - Profesional By Proximity</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 panel3">
                <h5 class="titulo">Registro Profesional</h5>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formulario">
                    <div class="row">
                        <div class="col-md-6"> 
                            <!--Campo Especialidad-->
                            <span class="texto">Especialidad </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoEspecialidad" title="Campo Obligatorio"></i>
                            <select class="form-select campos" name="especialidad" id="especialidad" aria-label="Floating label select example">
                                <option value="0" selected="true" disabled="disabled">Seleccione su especialidad</option>
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
                                <option value="Oftalmologia">Oftalmologia</option>
                                <option value="Oncologia">Oncologia</option>
                                <option value="Ortopedia y traumatologia infantil">Ortopedia y traumatologia infantil</option>
                                <option value="Ortopedia y traumatologia">Ortopedia y traumatologia</option>
                                <option value="Ortopedia y traumatologia otorrinolaringologia infantil">Ortopedia y traumatologia otorrinolaringologia infantil</option>
                                <option value="Ortopedia y traumatologia otorrinolaringologia">Ortopedia y traumatologia otorrinolaringologia</option>
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
                            <br>
                            <!--Campo Matricula-->
                            <span class="texto">Matricula </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoMatricula" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <input type="text" class="form-control inputs" name="matricula" id="matricula">
                            <br>
                            <!--Campo Obra Social-->
                            <span class="texto">Obras sociales de atención </span><i class="bi" id="iconoObraSocial"></i><!--Campo no obligatorio-->
                            <div class="input-group">
                                <input type="text" class="form-control inputs" name="obraSocial" id="obraSocial" aria-describedby="agregar">
                                <button class="btn btn-outline-secondary" type="button" id="agregar"><i class="bi bi-plus-lg"></i></button>
                                <button class="btn btn-outline-secondary" type="button" id="borrar"><i class="bi bi-trash-fill"></i></i></i></button>
                            </div>
                            <div class="contenedorEtiquetasOS" id="contenido"></div>
                            <br>
                            <!--Campo Tipo Consulta-->
                            <span class="texto">Formato de Consultas </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoTipoConsulta" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="consultorio" id="consultorio">
                                <label class="form-check-label" for="consultorio">
                                    Consultorio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="domicilio" id="domicilio">
                                <label class="form-check-label" for="domicilio">
                                    Domicilio
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="virtual" id="virtual">
                                <label class="form-check-label" for="virtual">
                                    Virtual
                                </label>
                            </div>
                            <br> 
                        </div>
                        <div class="col-md-6">
                            <!--Campo Provincia-->
                            <span class="texto">Provincia consultorio </span><i class="bi noValidado" id="iconoProvinciaConsultorio" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <select class="form-select campos" name="provinciaConsultorio" id="provinciaConsultorio" aria-label="Floating label select example" disabled></select>
                            <br>
                            <!--Campo Localidad-->
                            <span class="texto">Localidad consultorio </span><i class="bi bi-exclamation-circle-fill noValidado" id="iconoLocalidadConsultorio" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <input type="text" class="form-control inputs" name="localidadConsultorio" id="localidadConsultorio" disabled>
                            <br>
                            <!--Campo Calle-->
                            <span class="texto">Nombre de calle/avenida consultorio </span><i class="bi bi-exclamation-circle-fill noValidado" id="iconoCalleConsultorio" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <input type="text" class="form-control inputs" name="calleConsultorio" id="calleConsultorio" disabled>
                            <br>
                            <!--Campo Número-->
                            <span class="texto">Altura de calle/avenida consultorio </span><i class="bi bi-exclamation-circle-fill noValidado" id="iconoAlturaConsultorio" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <input type="text" class="form-control inputs" name="alturaConsultorio" id="alturaConsultorio" disabled>
                            <br>
                            <!--Campo Departamento-->
                            <span class="texto">Departamento consultorio </span><i class="bi" id="iconoDepartamentoConsultorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="departamentoConsultorio" id="departamentoConsultorio" disabled>
                            <br>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-warning botonPerfil" name="boton" id="boton">
                        <span class="tituloRegistrar" id="tituloRegistrar">Crear perfil profesional</span>
                        <div class="spinner-border text-secondary cargandoRegistrar" id="cargandoRegistrar" role="status"></div>
                    </button>     
                </form> 
            <div class="col-md-2"></div>
            </div>
        </div>
    </div>
    <!--Alerta Especialidad-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertEspecialidad">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Especialidad: </strong>
        ¡Debe seleccionar su especialidad principal!
    </div>
    <!--Alerta Matricula-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertMatricula">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Matricula: </strong>
        ¡La matricula ingresada no es valida! Recuerde no poner el "."!
    </div>
    <!--Alerta Obra Social-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertObraSocial">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Obras Sociales de Atención: </strong>
        ¡La obra social ingresada no es valida!
    </div>
    <!--Alerta Tipo Consulta-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertTipoConsulta">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Formato de Consulta: </strong>
        ¡Debe seleccionar como mínimo una modalidad de consulta!
    </div>
    <!--Alerta Provincia Consultorio-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertProvinciaConsultorio">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Provincia consultorio: </strong>
        ¡Debe seleccionar la provincia de su consultorio!
    </div>
    <!--Alerta Localidad Consultorio-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertLocalidadConsultorio">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Localidad consultorio: </strong>
        ¡La localidad ingresada no es valida!
    </div>
    <!--Alerta Calle Consultorio-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCalleConsultorio">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Calle consultorio: </strong>
        ¡La calle ingresada no es valida!
    </div>
    <!--Alerta Altura Consultorio-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertAlturaConsultorio">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Altura consultorio: </strong>
        ¡La altura ingresada no es valida!
    </div>
    <!--Alerta Departamento Consultorio-->
    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertDepartamentoConsultorio">
        <i class="bi bi-info-circle-fill"></i>
        <strong>Departamento consultorio: </strong>
        ¡El departamento ingresada no es valida!
    </div>
	<script src="../model/js/ajaxMostrarBackupProvincias.js"></script>
    <script src="../model/js/ajaxBuscarProvincias.js"></script>
    <script src="../controller/js/registroProfesional.js"></script>
    <script src="../model/js/ajaxRegistroProfesional.js"></script>
</body>
</html>