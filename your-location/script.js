var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    referrerPolicy: 'no-referrer-when-downgrade',
    headers: {'User-Agent': 'websire_that_finds_your_location_with_ip/1.0'}
}).addTo(map);