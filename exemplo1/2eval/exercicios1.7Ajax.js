"use strict";
/* 3. ¿Cal é o resultado do seguinte código? */
let promise = new Promise(function (resolve, reject) {
	resolve(1);
	setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);

// o resultado é 1, unha vez se resolve non cambia de estado
