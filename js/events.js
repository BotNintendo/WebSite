document.addEventListener('DOMContentLoaded', function () {
    // Change the background color to light blue
    var locations = [
        ['Gascoyne River', 38.767106, -9.094857, 2],
        ['Staaten', 38.885597, -9.281417, 1],
        ['Gascoyne River', 38.700000, -9.094857, 2],
        ['Staaten', 38.875597, -9.281417, 1],
        ['Example Point 1', 38.800000, -9.200000, 3],
        ['Example Point 2', 38.700000, -9.100000, 4]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        minZoom: 4,
        zoom: 6,
        center: new google.maps.LatLng(40.5257036, -8.4794877),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);

                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function () {
                    marker.setAnimation(null);
                }, 1300);
            }
        })(marker, i));
    }

    var circle = new google.maps.Circle({
        map: map,
        radius: 20000, // 20 km
        fillColor: '#AA0000',
        center: new google.maps.LatLng(38.767106, -9.094857)
    });

    countPointsInCircle(circle, locations)
});


function countPointsInCircle(circle, locations) {
    var count = 0;
    var circleBounds = circle.getBounds();

    for (var i = 0; i < locations.length; i++) {
        var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(circle.center, latLng);
        if (distance <= circle.radius) {
            count++;
        }
    }
    console.log(count);
}

let lstEventos;
function EventsLoad() {
    lstEventos = [
        { "Id": 1, "Game": "Super Mario Bros Wonder", "Description": "Descrição do evento 1", "Date": "2024-07-01", "Location": "Local 1", "Latitude": 38.767106, "Longitude": -9.094857 },
        { "Id": 2, "Game": "Smash Bros Ultimate", "Description": "Descrição do evento 2", "Date": "2024-07-01", "Location": "Local 2", "Latitude": 38.885597, "Longitude": -9.281417 },
        { "Id": 3, "Game": "Mario Kart 8 Deluxe", "Description": "Descrição do evento 3", "Date": "2024-07-01", "Location": "Local 3", "Latitude": 38.767106, "Longitude": -9.094857 },
        { "Id": 4, "Game": "The Legend of Zelda Tears of the Kingdom", "Description": "Descrição do evento 4", "Date": "2024-07-01", "Location": "Local 4", "Latitude": 38.885597, "Longitude": -9.281417 },
        { "Id": 5, "Game": "Mario Maker 2", "Description": "Descrição do evento 4", "Date": "2023-07-01", "Location": "Local 5", "Latitude": 38.767106, "Longitude": -9.094857 },
    ];


    var s = document.body.getElementsByClassName("eventList")[0];
    s.innerHTML = "";

    lstEventos.forEach(element => {
        var as = document.createElement("div");
        as.innerHTML = `<div id="${element.Id}" class="eventListItem" onclick="click()">
        <h6>Event ${element.Id}</h6>
        <h6>${element.Game}</h6>
      </div>`;
        s.appendChild(as);
    });
}

function click() {
}
