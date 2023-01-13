"use strict";
/* 4. Engade o código á función delay(ms) de tal forma que devolva unha promesa que se
resolva despois de pasados os milisegundos indicados como parámetro: */
function delay(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, ms);
	});
}
delay(3000).then(() => console.log("Mensaxe obtida despois de 3 segundos"));
