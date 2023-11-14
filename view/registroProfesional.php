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
<body class="mostrarPagina" id="mostrar">
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
                            <select class="form-select campos" name="especialidad" id="especialidad" aria-label="Floating label select example"></select>
                            <br>
                            <!--Campo Matricula-->
                            <span class="texto">¿Que matrículas tienes? </span>
                            <div class="btn-group d-flex btn-matriculas" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnAmbas" autocomplete="off" checked>
                                <label class="btn btn-sm btn-outline-dark w-100" for="btnAmbas">Ambas</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnNacional" autocomplete="off">
                                <label class="btn btn-sm btn-outline-dark w-100" for="btnNacional">Nacional</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnProvincial" autocomplete="off">
                                <label class="btn btn-sm btn-outline-dark w-100" for="btnProvincial">Provincial</label>
                            </div>
                            <br>
                            <span id="contInpMatNac">
                                <span class="texto">Matrícula nacional </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoMatriculaNacional" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                                <br>
                                <input type="text" class="form-control inputs" name="matriculaNacional" id="matriculaNacional">
                                <br>
                            </span>
                            <span id="contInpMatPro">
                                <span class="texto">Matrícula provincial </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoMatriculaProvincial" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                                <br>
                                <div class="input-group">
                                    <input type="text" class="form-control inputs" name="matriculaProvincial" id="matriculaProvincial">
                                    <select class="form-select campos" name="provinciaMatricula" id="provinciaMatricula"></select>
                                </div>
                                <br>
                            </span>
                            
                            <!--Campo Obra Social-->
                            <span class="texto">Obras sociales de atención </span><i class="bi" id="iconoObraSocial"></i><!--Campo no obligatorio-->
                            <div class="input-group">
                                <!--<input type="text" class="form-control inputs" name="obraSocial" id="obraSocial" aria-describedby="agregar">-->
                                <select class="form-select campos" name="obraSocial" id="obraSocial" aria-describedby="agregar"></select>
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
                            <select class="form-select campos" name="localidadConsultorio" id="localidadConsultorio" aria-label="Floating label select example" disabled></select>
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
    <!--Alerta Superior-->
    <div class="alert alert-dismissible fade show alerta" role="alert" id="alertSuperior">
        <i class="bi bi-info-circle-fill"></i>
        <span id="textoAlert"></span>
        <br>
    </div>
    <script src="../controller/js/definirGeoLocalizacion.js"></script>
    <script src="../controller/js/controlAcceso.js"></script>
    <script src="../model/js/ajaxBuscarEspecialidades.js"></script>
    <script src="../model/js/ajaxBuscarObrasSociales.js"></script>
    <script src="../model/js/ajaxBuscarProvincias.js"></script>
    <script src="../model/js/ajaxBuscarLocalidades.js"></script>
    <script src="../controller/js/registroProfesional.js"></script>
    <script src="../model/js/ajaxRegistroProfesional.js"></script>
</body>
</html>