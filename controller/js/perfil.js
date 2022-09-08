//Verificar si hay logueo
if (localStorage.getItem("id_usuario") == null && localStorage.getItem("nombreUsuario") == null) {
    window.location.href = "../";
}else{
    document.getElementById('mostrar').style.display = 'block';
}

//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

if (parametro == "") {
    //Mostrar datos perfil
    document.getElementById('mostrarNombrePerfil').innerHTML = localStorage["nombre"];
    document.getElementById('mostrarApellidoPerfil').innerHTML = localStorage["apellido"];
}else{
    buscarPerfil(parametro);
}


