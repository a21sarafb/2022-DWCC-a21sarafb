"use strict";
/* 1. Repite os últimos exercicios onde se mostraba información das gatas e o do heroes
usando a API fetch. */

/*Utilizando JavaScript, descarga o ficheiro JSON con información sobre gatas e a súa
descendencia e crea unha páxina web onde mostres a seguinte información. Debes
mostrar o nome das gatas separados por comas. Antes do último nome debe ir a
conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das gatas
son Lindy, Mina e Antonia.”. Ademais, debes mostrar información do número de
gatiños, indicando cantes deles son femias e cantos machos: “Hai 8 gatiños: 5
femias e 3 machos.”*/
fetch(
	"https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
)
	.then((response) => {
		if (response.ok) return response.json();
		return Promise.reject(response);
	})
	.then((data) => {
		let arrayNomes = [];
		let contadorGatos = 0;
		let contadorFemias = 0;
		let contadorMachos = 0;
		for (let clave in data) {
			arrayNomes.push(data[clave].name);
			let kittens = data[clave].kittens;
			Object.entries(kittens).forEach(([key, value]) => {
				if (value.gender === "m") {
					contadorMachos++;
				} else {
					contadorFemias++;
				}
			});
			contadorGatos += data[clave].kittens.length;
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
	})

	.catch(function (error) {
		console.warn("Something went wrong.", error.message);
	});
