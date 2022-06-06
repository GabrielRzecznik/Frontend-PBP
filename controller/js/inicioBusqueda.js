//Obtener GeoLocalizacion
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(verificar);
    function verificar(geoLocalizacion) {
        //console.log(geoLocalizacion);
        var latitud = geoLocalizacion.coords.latitude;
        var longitud = geoLocalizacion.coords.longitude;
        console.log(latitud);
        console.log(longitud);
    }
}else{
    alert("No se pudo obtener su ubicación");
}

var coord = {latitud ,longitud};//
var map = new google.maps.Map(document.getElementById('map'),{
zoom: 10,
center: coord
});
var marker = new google.maps.Marker({
position: coord,
map: map
});
