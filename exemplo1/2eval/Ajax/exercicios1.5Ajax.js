"use strict";
/* 1. Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A
promesa debe resolverse despois de tres segundos dende que se chamou á función
e debe devolver o parámetro no resultado. */
function delay(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(ms);
		}, 3000);
	});
}
delay(3000).then((ms) => console.log(ms));
delay("proba").then((ms) => console.log(ms));
