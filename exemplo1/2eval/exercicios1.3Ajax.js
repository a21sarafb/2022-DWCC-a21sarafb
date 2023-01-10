"use strict";
/*Utilizando JavaScript, descarga o ficheiro JSON con información sobre gatas e a súa
descendencia e crea unha páxina web onde mostres a seguinte información. Debes
mostrar o nome das gatas separados por comas. Antes do último nome debe ir a
conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das gatas
son Lindy, Mina e Antonia.”. Ademais, debes mostrar información do número de
gatiños, indicando cantes deles son femias e cantos machos: “Hai 8 gatiños: 5
femias e 3 machos.”*/
const request = new XMLHttpRequest();
request.open(
	"GET",
	"https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
);
request.responseType = "json";
// send request
request.send();
request.addEventListener("load", function () {
	const gatitos = request.response;
	console.log(gatitos);
});
