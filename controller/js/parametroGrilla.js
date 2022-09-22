//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

//No existe acceso externo al navegador para edición de perfil
$accesoPerfil = false;