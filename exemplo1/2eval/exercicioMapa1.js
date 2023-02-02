"use strict";
/* 1. Crea unha aplicación web na que se poidan marcar puntos nun mapa. A aplicación
debe ofrecer as seguintes funcionalidades:
a. Inicialmente debe mostrar un mapa centrado en Galicia ou Santiago de Compostela, o que ti escollas.

b. Cando se pulse sobre punto do mapa aparecerá un formulario con, polo menos, unha caixa de texto para gardar a descrición do punto. A caixa de texto debe ter o foco de forma automática. Podes engadir máis campos ao formulario para describir mellor o novo punto.

c. Despois de escribir a descrición do punto indicada no apartado anterior, cando se pulse ENTER, gardarase o novo punto.

d. A aplicación almacena a lista de puntos gardados e mostra unha lista coa descrición de cada un en todo momento.

e. Cando se pulsa sobre un punto da lista especificada no apartado anterior, o mapa reposicionarase mostrando o marcador no centro e un popup coa descrición do punto.

f. Deben poder eliminarse marcadores.

g. Os puntos gardados na aplicación deben permanecer aínda que se cerre o navegador. */
const map = L.map("map").setView([42.88052, -8.54569], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker([42.88052, -8.54569]).addTo(map);

let popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
	console.log(e);
	let markerer = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
}
map.on("click", onMapClick);
let USGS_USImagery = L.tileLayer(
	"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
	{
		maxZoom: 20,
		attribution:
			'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
	}
).addTo(map);
