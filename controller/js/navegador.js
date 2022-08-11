
//document.getElementById('session').classList.add(localStorage);
function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "https://frontend-pbp.herokuapp.com/";
}

document.getElementById('nombreUsuario').innerHTML = localStorage["nombreUsuario"];

//console.log(localStorage);

document.getElementById("conf").addEventListener("click", function() {
        //Abrir Modal
        var configuracion = new bootstrap.Modal(
            document.getElementById("confirmación-modal")
          );
          configuracion.toggle();
          //Cerrar Modal
          document.getElementById("cerrar").addEventListener("click", function () {
              configuracion.hide();
              //Tenia algo de solicitud, controlar despues
        });
});

