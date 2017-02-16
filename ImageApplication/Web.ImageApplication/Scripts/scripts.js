function initMap(lat, lon) {
    var myLatLng = { lat: -25.363, lng: 131.044 };

    var map = new google.maps.Map(document.getElementById('home_map_canvas'), {
        zoom: 2,
        center: myLatLng
    });
}

function setMarker(lat, lon) {
    var getLocationMap = { lat: Number(lat.toFixed(3)), lng: Number(lon.toFixed(3)) };

    var map = new google.maps.Map(document.getElementById('home_map_canvas'), {
        zoom: 3,
        center: getLocationMap
    });
    var myLatLng = { lat: Number(lat.toFixed(3)), lng: Number(lon.toFixed(3)) };
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Was here!'
    });
}


var toDecimal = function (number) {
    return number[0].numerator + number[1].numerator /
        (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};
initMap();