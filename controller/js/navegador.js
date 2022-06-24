
    if (!localStorage["nombreUsuario"]) {
        window.location.href = "https://frontend-pbp.herokuapp.com/";
    }


function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "https://frontend-pbp.herokuapp.com/";
}

document.getElementById('nombreUsuario').innerHTML = localStorage["nombreUsuario"];

//console.log(localStorage);