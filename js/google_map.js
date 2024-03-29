
var google;

function initialize() {
    var myLatlng = new google.maps.LatLng(16.0520, 75.7926);
    var myOptions = {
        zoom:7,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    // marker refers to a global variable
    marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    google.maps.event.addListener(map, "click", function(event) {
        // get lat/lon of click
        var clickLat = event.latLng.lat();
        var clickLon = event.latLng.lng();

        // show in input box
        document.getElementById("lat").value = clickLat.toFixed(5);
        document.getElementById("lon").value = clickLon.toFixed(5);

          var marker = new google.maps.Marker({
                position: new google.maps.LatLng(clickLat,clickLon),
                map: map
             });
    });
}   

window.onload = function () { initialize() };