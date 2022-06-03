//document.getElementById('session').classList.add(localStorage);
function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "http://localhost/phpapp/Profesional%20By%20Proximity/Frontend/";
}

document.getElementById('nombreUsuario').innerHTML = localStorage["nombreUsuario"];

//console.log(localStorage);