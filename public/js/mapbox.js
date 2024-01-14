/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaW5heTEwIiwiYSI6ImNscjM2dGl2cTBicHQyaXIxam80MGlkNGsifQ.ZPCxuYhUFcCpOP_kx7KsRg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/abhinay10/clr36z236017201r59osrau35',
    scrollZoom: false
    // center: [88.3377942, 22.5448081],
    // zoom: 10,
    // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}



