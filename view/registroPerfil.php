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
    <title>Registro Perfil - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 panel3">
                <h5 class="titulo">Datos personales</h5>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formulario" enctype="multipart/form-data">
                    <div class="row">

                        <div class="col-md-6"> 
                            <!--Campo Nombre-->
                            <span class="texto">Nombre </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoNombre" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="nombre" id="nombre">
                            <br>
                            <!--Campo Apellido-->
                            <span class="texto">Apellido </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoApellido" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="apellido" id="apellido">
                            <br>
                            <!--Campo DNI-->
                            <span class="texto">DNI </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoDni" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="dni" id="dni">
                            <br>
                            <!--Campo Fecha de Nacimiento-->
                            <span class="texto">Fecha de nacimiento </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoFechaNacimiento" title="Campo Obligatorio"></i>
                            <br>
                            <input type="date" class="form-control inputs" name="fechaNacimiento" id="fechaNacimiento">
                            <br>
                            <!--Campo Sexo-->
                            <span class="texto">Sexo </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoSexo" title="Campo Obligatorio"></i>
                            <br>
                            <select class="form-select" name="sexo" id="sexo" aria-label="Floating label select example">
                                <option value="0" selected="true" disabled="disabled">Como figura en su DNI</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="X">X</option>
                            </select>
                            <br>
                            <!--Campo Foto-->
                            <span class="texto">Foto </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoFoto"></i>
                            <br>
                            <input type="file" class="form-control inputs" name="foto" id="foto" accept="image/*">
                            <br>
                        </div>
                        <div class="col-md-6" id="contenedor-localidad">
                            <!--Campo Telefono-->
                            <span class="texto">Télefono </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoTelefono" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="telefono" id="telefono">
                            <br>
                            <!--Campo Provincia-->
                            <span class="texto">Provincia </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoProvincia" title="Campo Obligatorio"></i><!--Campo obligatorio-->
                            <br>
                            <select class="form-select campos" name="provincia" id="provincia" aria-label="Floating label select example" disabled></select>
                            <br>
                            <!--Campo Localidad-->
                            <span class="texto">Localidad </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoLocalidad" title="Campo Obligatorio"></i>
                            <br>
                            <select class="form-select campos" name="localidad" id="localidad" aria-label="Floating label select example" disabled></select>
                            <br>
                            <!--Campo Calle-->
                            <span class="texto">Nombre de calle/avenida </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoCalle" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="calle" id="calle">
                            <br>
                            <!--Campo Número-->
                            <span class="texto">Altura de calle/avenida </span><i class="signo bi bi-exclamation-circle-fill noValidado" id="iconoAltura" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="altura" id="altura">
                            <br>
                            <!--Campo Departamento-->
                            <span class="texto">Departamento </span><i class="bi" id="iconoDepartamento" title="Campo Obligatorio"></i>
                            <br>
                            <input type="text" class="form-control inputs" name="departamento" id="departamento">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-warning botonPerfil" name="boton" id="boton">
                        <span class="tituloRegistrar" id="tituloRegistrar">Crear perfil</span>
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
    <script src="../controller/js/controlAcceso.js"></script>
    <script src="../controller/js/alertaSuperior.js"></script>
    <script src="../model/js/ajaxBuscarProvincias.js"></script>
    <script src="../model/js/ajaxBuscarLocalidades.js"></script>
    <script src="../controller/js/definirGeoLocalizacion.js"></script>
    <script src="../controller/js/registroPaciente.js"></script>
    <script src="../model/js/ajaxRegistroPaciente.js"></script>
</body>
</html>