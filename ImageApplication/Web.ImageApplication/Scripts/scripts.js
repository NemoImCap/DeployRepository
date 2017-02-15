function initMap(lat, lon) {
    var myLatLng = { lat: lat, lng: lon };

    var map = new google.maps.Map(document.getElementById('home_map_canvas'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

var toDecimal = function (number) {
    return number[0].numerator + number[1].numerator /
        (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};