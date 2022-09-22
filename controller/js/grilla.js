//Obtener parametro de URL 
let parametro = location.search;
parametro = parametro.slice(1);

//La grilla pertenece a un profesional?
$prof = localStorage.getItem("id_profesional");
               
if ($prof != null) {
    buscarConfGrillaProf();
}else{
    //valores por defecto
    $slotDuration = '00:30';
    $slotMinTime = '00:00';
    $slotMaxTime = '24:00';
}

//gestorMostrarGrilla(parametro);

//No existe acceso externo al navegador para edición de perfil
$accesoPerfil = false;

