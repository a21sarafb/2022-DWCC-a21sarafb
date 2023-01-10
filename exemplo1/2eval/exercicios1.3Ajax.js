"use strict";
/*Utilizando JavaScript, descarga o ficheiro JSON con información sobre gatas e a súa
descendencia e crea unha páxina web onde mostres a seguinte información. Debes
mostrar o nome das gatas separados por comas. Antes do último nome debe ir a
conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das gatas
son Lindy, Mina e Antonia.”. Ademais, debes mostrar información do número de
gatiños, indicando cantes deles son femias e cantos machos: “Hai 8 gatiños: 5
femias e 3 machos.”*/
const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", () => {
	log.textContent = "";
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("loadend", () => {
		log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
	});
	xhr.open(
		"GET",
		"https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
	);
	// send request
	xhr.send();
	log.textContent = `${log.textContent}Started XHR request\n`;
	const gatitos = JSON.parse(request.response);
	console.log(gatitos);
});
document.querySelector("#reload").addEventListener("click", () => {
	log.textContent = "";
	document.location.reload();
});
