//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

gestorMostrarGrilla(parametro);

//No existe acceso externo al navegador para edición de perfil
$accesoPerfil = false;

