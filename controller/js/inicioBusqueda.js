//Obtener GeoLocalizacion
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(verificar);
    function verificar(geoLocalizacion) {
        //console.log(geoLocalizacion);
        var latitud = geoLocalizacion.coords.latitude;
        var longitud = geoLocalizacion.coords.longitude;
        console.log(latitud);
        console.log(longitud);
        
        var coord = {lat:latitud ,lng: longitud};//
        var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
        });
        var marker = new google.maps.Marker({
        position: coord,
        map: map
        });
    }
}else{
    alert("No se pudo obtener su ubicación");
}

document.getElementById("mostrarMapa").addEventListener("click", function() {
    var mostrarMapa = document.getElementById("visualizarMapa");
    $calleAvenida = "Varela";
    $altura = "0096";//0540
    $codigoPostal = "B1870";//B1871
    $localidad = "Avellaneda";
    $provincia = "Provincia%20Buenos%20Aires";

    mostrarMapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s'+$calleAvenida+'%2'+$altura+'%2C%20'+$codigoPostal+'DSF%20'+$localidad+'%2C%20'+$provincia+'!5e0!3m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    //Lamadrid%20540%2C%20B1871DSF%20Crucecita%2C%20Provincia%20de%20Buenos%20Aires - DATOS SENSIBLES
    //Av.%20Eduardo%20Madero%2C%20Buenos%20Aires - DATOS SENSIBLES
});

    
