//La grilla pertenece a un profesional?
$prof = localStorage.getItem("id_profesional");
               
if ($prof != null) {
    buscarConfGrillaProf();
}else{
    //valores por defecto
    $slotDuration = '01:00';
    $slotMinTime = '00:00';
    $slotMaxTime = '24:00';
}
//gestorMostrarGrilla(parametro);


