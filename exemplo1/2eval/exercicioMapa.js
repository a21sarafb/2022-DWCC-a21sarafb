"use strict";
const map = L.map("map").setView([42.904089, -369.268639], 15);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([42.904089, -369.268639]).addTo(map);
/*var circle = L.circle([42.87876, -8.547238], {
	color: "red",
	fillColor: "#f03",
	fillOpacity: 0.5,
	radius: 50,
}).addTo(map);*/
var popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
	console.log(e);
	var markerer = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
}
map.on("click", onMapClick);
var USGS_USImagery = L.tileLayer(
	"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
	{
		maxZoom: 20,
		attribution:
			'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
	}
).addTo(map);
