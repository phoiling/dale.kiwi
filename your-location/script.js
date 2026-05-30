fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
)

var map = L.map('map').setView([51.505, -0.09], 13);

var circle = L.circle([51.505, -0.09],{
    color: 'blue',
    fillColor: '#2799d2',
    fillOpacty:0.5,
    raidus:500

}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    referrerPolicy: 'no-referrer-when-downgrade',
    headers: {'User-Agent': 'websire_that_finds_your_location_with_ip/1.0'}
}).addTo(map);