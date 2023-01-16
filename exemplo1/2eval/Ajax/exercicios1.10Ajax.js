"use strict";
/* 2. ¿Cal é a saída do seguinte código? ¿Por que? */
function job() {
	return new Promise(function (resolve, reject) {
		reject();
	});
}
let promise = job();
promise
	.then(() => console.log("Success 1"))
	.then(() => console.log("Success 2"))
	.then(() => console.log("Success 3"))
	.catch(() => console.log("Error 1"))
	.then(() => console.log("Success 4"));

// a SAIDA É:
// Error 1
// Success 4
