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
	/*console.log(
		"Os nomes das gatas son " +
			gatitos[0].name +
			", " +
			gatitos[1].name +
			" e " +
			gatitos[2].name
	);*/
	let arrayNomes = [];
	let contadorGatos = 0;
	let contadorFemias = 0;
	let contadorMachos = 0;
	for (let clave in gatitos) {
		arrayNomes.push(gatitos[clave].name);
		let kittens = gatitos[clave].kittens;
		Object.entries(kittens).forEach(([key, value]) => {
			if (value.gender === "m") {
				contadorMachos++;
			} else {
				contadorFemias++;
			}
		});
		contadorGatos += gatitos[clave].kittens.length;
	}
	let cadea1 = "Os nomes das gatas son ";
	for (let i = 0; i < arrayNomes.length - 1; i++) {
		cadea1 += arrayNomes[i];
		if (i != arrayNomes.length - 2) cadea1 += ", ";
	}
	cadea1 += " e ";
	cadea1 += arrayNomes[arrayNomes.length - 1];
	console.log(cadea1);
	console.log(
		"Hai " +
			contadorGatos +
			" gatiños: " +
			contadorFemias +
			" femias e " +
			contadorMachos +
			" machos."
	);
});
