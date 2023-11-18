var alertSuperior = document.getElementById('alertSuperior');
var textoAlert = document.getElementById("textoAlert");
var tituloAlert = document.getElementById("tituloAlert");
let timeoutId;

function mostrarAlertSuperior($tipoAlert, $textoAlert) {
    const alertElement = alertSuperior;
    
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    if ($tipoAlert == "warning") {
        alertSuperior.classList.remove("alert-danger");
        alertSuperior.classList.add("alert-warning");
    }else{
        alertSuperior.classList.remove("alert-warning");
        alertSuperior.classList.add("alert-danger");
    }
    
    alertElement.classList.add('alertaError');

    textoAlert.innerHTML = $textoAlert;
    
    timeoutId = setTimeout(() => {
        alertElement.classList.remove('alertaError');
    }, 7500);
}