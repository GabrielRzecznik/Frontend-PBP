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

    
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.8724279365922!2d-58.354048612043975!3d-34.66114596650525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33344a0818201%3A0x8499100d4daae3f5!2sLamadrid%20540%2C%20B1871DSF%20Crucecita%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1660919613213!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>