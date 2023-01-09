"use strict";
/* Implementa unha función escribirNumeros(desde, ata) que xere un número cada
segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
función: unha usando setInterval e outra usando setTimeout. */
function escribirNumeros(desde, ata) {
	let index = 1000;
	for (let i = desde; i <= ata; i++) {
		setTimeout(() => {
			console.log(i);
		}, index);
		index += 1000;
	}
}
console.log(escribirNumeros(5, 10));

const intervalID = setInterval(escribirNumeros2, 1000);
function escribirNumeros2(desde2, ata2) {}
