"use strict";
/* 2. Crea unha función que reciba un parámetro. A función debe devolver sempre unha
promesa.
        a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e devolver “erro”.
        b. Se o parámetro é un número impar, debe resolver a promesa despois de 1 segundo e devolver “impar”.
        c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2 segundos e devoler “par”.*/
let promise = comprobar(1);
function comprobar(num) {
	return new Promise((resolve, reject) => {
		if (!isNaN(num)) {
			if (num % 2 === 0) {
				setTimeout(function () {
					reject("Par");
				}, 2000);
			} else {
				setTimeout(function () {
					resolve("Impar");
				}, 1000);
			}
		} else {
			//si non é un número
			reject(new Error("Erro"));
		}
	});
}
promise
	.then(function (data1) {
		console.log(data1);
		return comprobar(3);
	})
	.then(function (data2) {
		console.log(data2);
		return comprobar(2);
	})
	.then(function (data3) {
		console.log(data3);
		return comprobar("hola");
	})
	.then(function (data) {
		console.log(data);
	});
