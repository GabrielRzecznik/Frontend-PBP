//Obtener GeoLocalizacion
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(verificar);
    function verificar(geoLocalizacion) {
        //console.log(geoLocalizacion);
        var latitud = geoLocalizacion.coords.latitude;
        var longitud = geoLocalizacion.coords.longitude;
        
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

