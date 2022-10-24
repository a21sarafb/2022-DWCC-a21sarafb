"use strict";
/*console.log(
	"1. Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas. Fai os seguintes apartados con splice: a. Elimina as mazás. b. Engade detrás dos plátanos, laranxas e sandía. c. Quita os kiwis e pon no seu lugar cereixas e nésperas. Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas, onde os elementos estean separados por unha coma e espazo. Por exemplo, inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos, mandarinas"
);
let listaDeFrutas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log(listaDeFrutas);
//a. Elimina as mazás
listaDeFrutas.splice(1, 1);
console.log(listaDeFrutas);
//b. Engade detrás dos plátanos, laranxas e sandía.
listaDeFrutas.splice(3, 0, "laranxas");
listaDeFrutas.splice(4, 0, "sandía");
console.log(listaDeFrutas);
//c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
listaDeFrutas.splice(1, 1, "plátanos", "mandarinas");
console.log(listaDeFrutas);*/
/*console.log(
	"2. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos."
);
const notas = [4, 8, 3, 10, 5];
notas.sort(function (a, b) {
	return a - b;
});
console.log(notas);*/

/*console.log(
	"3. Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’."
);
const arraySemana = [
	"lunes",
	"martes",
	"miercoles",
	"jueves",
	"viernes",
	"sabado",
	"domingo",
];
let todosEmpiezanPorS = true;
for (let i = 0; i < arraySemana.length; i++) {
	let primeraPosicion = arraySemana[i].charAt(arraySemana[0]);
	let ultimaPosicion = arraySemana[i].charAt(arraySemana[i].length - 1);
	if (ultimaPosicion !== "s") {
		todosEmpiezanPorS = false;
	}
	if (primeraPosicion === "s") {
		console.log(arraySemana[i] + " empieza en s");
	}
}
if (todosEmpiezanPorS === false) {
	console.log("No todos acaban en S");
} else {
	console.log("Todos acaban en S");
}*/
/*console.log(
	"4. Crea unha función á que se lle pase un texto e devolva o mesmo texto coa primeira letra de cada palabra en maiúsculas e o resto en minúsculas."
);
const cambioTamaño = (texto) => {
	const arrayTexto = texto.split("");
	for (let i = 0; i < arrayTexto.length; i++) {
		if (i === 0) {
			arrayTexto[i] = arrayTexto[i].toUpperCase();
		} else {
			arrayTexto[i] = arrayTexto[i].toLowerCase();
		}
	}
	return arrayTexto.join("");
};
console.log(cambioTamaño("AFTskfdJDBdSaW"));
console.log(cambioTamaño("hOLa BueNOS diAS"));*/
