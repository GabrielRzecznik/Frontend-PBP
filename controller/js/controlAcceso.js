function controlAcceso(instancia) {
    switch (instancia) {
        case "login":
            if (localStorage.getItem("nombre")) {
                window.location.href = "./view/inicioBusqueda.php";
            }else if(localStorage.getItem("id_usuario") && !localStorage.getItem("nombreUsuario")){
                window.location.href = "./view/registroPerfil.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "registroUsuario":
            if (localStorage.getItem("nombre")) {
                window.location.href = "../view/inicioBusqueda.php";
            }else if(localStorage.getItem("id_usuario") && !localStorage.getItem("nombreUsuario")){
                window.location.href = "../view/registroPerfil.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "registroPaciente":
            if (!localStorage.getItem("id_usuario")) {
                window.location.href = "../";
            }else if (localStorage.getItem("nombre")) {
                window.location.href = "../view/inicioBusqueda.php";
            }else if (!isNaN(localStorage.getItem("id_paciente"))) {
                window.location.href = "../view/seleccionRol.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "seleccionRol":
            if (!localStorage.getItem("id_usuario")) {
                window.location.href = "../";
            }else if (localStorage.getItem("nombre")) {
                window.location.href = "../view/inicioBusqueda.php";
            }else if (isNaN(localStorage.getItem("id_paciente"))) {
                window.location.href = "../view/registroPerfil.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "registroProfesional":
            if (!localStorage.getItem("id_usuario")) {
                window.location.href = "../view/";
            }else if (!localStorage.getItem("estadoUsuario") === "Activo") {
                window.location.href = "../view/registroPerfil.php";
            }else if (localStorage.getItem("id_profesional")) {
                window.location.href = "../view/inicioBusqueda.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "restablecerUsuario":
            if (localStorage.getItem("nombreUsuario")) {//Esta logueado?
                window.location.href = "../view/inicioBusqueda.php";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        case "navegador":
            if (!localStorage.getItem("id_usuario") || !localStorage.getItem("id_paciente") || !localStorage.getItem("nombre")) {
                window.location.href = "../";
            }else{
                document.getElementById('mostrar').style.display = 'block';
            }
            break;
        default:
            break;
    }
}