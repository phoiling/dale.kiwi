fetch("https://geolocation-db.com/json/")
    .then(response => response.json())
    .then(data => {
        const lat = data.latitude
        const long = data.longitude

var map = L.map('map').setView([lat, long], 13);

var circle = L.circle([lat, long],{
    color: 'blue',
    fillColor: '#2799d2',
    fillOpacty:0.5,
    raidus:10000

}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    referrerPolicy: 'no-referrer-when-downgrade',
    headers: {'User-Agent': 'websire_that_finds_your_location_with_ip/1.0'}
}).addTo(map);
    })