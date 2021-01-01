mapboxgl.accessToken = mapToken;
const geodata = campground.geodata;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: geodata.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

new mapboxgl.Marker().setLngLat(geodata.coordinates).addTo(map);
