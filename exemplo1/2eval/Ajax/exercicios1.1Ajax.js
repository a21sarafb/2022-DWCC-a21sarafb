"use strict";
/* Implementa unha función escribirNumeros(desde, ata) que xere un número cada
segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
función: unha usando setInterval e outra usando setTimeout. */
escribirNumeros(1, 10);
function escribirNumeros(desde, ata) {
	let index = 1000;
	for (let i = desde; i <= ata; i++) {
		setTimeout(() => {
			console.log(i);
		}, index);
		index += 1000;
	}
}
//opción de cristina
function escribirNumeros3(desde3, ata3) {
	let numero = desde3;
	setTimeout(function imprimir() {
		console.log(numero);
		if (numero < ata3) setTimeout(imprimir, 1000);
		numero++;
	}, 1000);
}
escribirNumeros3(1, 10);
function escribirNumeros2(desde2, ata2) {
	const intervalo = setInterval(() => {
		console.log(desde2);
		desde2++;
		if (desde2 > ata2) {
			clearTimeout(intervalo);
		}
	}, 1000);
}
escribirNumeros2(1, 10);
