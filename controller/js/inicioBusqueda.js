function iniciarMap(){
    var coord = {lat:-34.66046564264369 ,lng: -58.354401278160445};
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 30,
    center: coord
    });
    var marker = new google.maps.Marker({
    position: coord,
    map: map
    });
}