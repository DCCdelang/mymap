// Initialize the map
const map = L.map('map').setView([52.5, 4.95], 4); // Center of the Amsterdam area

// Load and display OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fetch locations from external JSON file
fetch('locations.json')
  .then(response => response.json())
  .then(locations => {
    locations.forEach(loc => {
      L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b>`);
    });
  })
  .catch(err => console.error('Error loading location data:', err));
