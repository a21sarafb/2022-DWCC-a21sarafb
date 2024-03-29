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
const map = L.map("map").setView([42.88052, -8.54569], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker([42.88052, -8.54569]).addTo(map);

let popup = L.popup();
function onMapClick(e) {
	let divForm = document.querySelector(".form");
	let form = document.createElement("form");
	let text = document.createElement("textarea");
	let autofocus = document.createAttribute("autofocus");
	text.setAttributeNode(autofocus);
	text.setAttribute("id", "mapTextarea");
	let lista = document.createElement("ul");
	form.append(text);
	divForm.append(form);
	divForm.append(lista);
	document.addEventListener("keyup", function (event) {
		if (event.code === "Enter") {
			let textArea = document.querySelector("#mapTextarea");
			console.log(textArea);
			console.log(textArea.value);
			let nuevaDescripcion = document.createElement("li");
			nuevaDescripcion.innerHTML = textArea.value;
			lista.append(nuevaDescripcion);
		}
	});

	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
	console.log(e);
	let markerer = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
}
map.on("click", onMapClick);
