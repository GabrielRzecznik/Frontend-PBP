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
    <title>Selección de Rol - Profesional By Proximity</title>
</head>
<body class="mostrarPagina" id="mostrar">
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 panel3">
                <h5 class="titulo">¿Usted es?</h5>
                <br>
                <div class="row">
                    <div class="col-md-6 paciente">
                        <div class="contenedorP opciones" id="paciente">
                            <img class="iconoPaciente" src="../view/img/paciente.png" alt="Error al cargar imagen de paciente'">
                            <h5 class="titulo">Paciente</h5>
                        </div>
                    </div>
                    <div class="col-md-6 profesional">
                        <div class="contenedorP opciones" id="profesional">
                            <img class="iconoProfesional" src="../view/img/profesional.png" alt="Error al cargar imagen de profesional'">
                            <h5 class="titulo">Profesional</h5>
                            <span>(Tambien puede ser paciente)</span>
                        </div>
                    </div>  
                </div> 
            <div class="col-md-2"></div>
            </div>
        </div>
    </div>
    <script src="../controller/js/controlAcceso.js"></script>
    <script src="../controller/js/seleccionRol.js"></script>
    <script src="../model/js/ajaxSeleccionRol.js"></script>
</body>
</html>