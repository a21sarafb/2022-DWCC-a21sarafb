"use strict";
console.log(
	"1. Dado un array cos días da semana, obtén un array cos días que empecen por “m”."
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
const primeroM = function (dia) {
	return dia.charAt(0) === "m";
};
console.log(arraySemana.filter(primeroM));
//OTRA OPCION
console.log(arraySemana.filter((dia) => dia.charAt(0) === "m"));

console.log(
	"2. Dado un array cos días da semana, obtén o primeiro día que empeza por “m”."
);
const primeroM2 = function (dia) {
	return dia.charAt(0) === "m";
};
console.log(arraySemana.find(primeroM2));
//OTRA OPCION
console.log(arraySemana.find((dia) => dia.charAt(0) === "m"));

console.log(
	"3. Dado un array cos días da semana, obtén a posición no array do primeiro día que empeza por “m”"
);

const primeroM3 = function (dia) {
	return dia.charAt(0) === "m";
};
console.log(arraySemana.findIndex(primeroM3));
//OTRA OPCION
console.log(arraySemana.findIndex((dia) => dia.charAt(0) === "m"));

console.log(
	"4. Dado un array cos días da semana, devolve outro array cos días en maiúsculas."
);
const arraySemanaMaiusculas = [];
for (let i = 0; i < arraySemana.length; i++) {
	arraySemanaMaiusculas.push(arraySemana[i].toUpperCase());
}
console.log(arraySemanaMaiusculas);
//MEJOR OPCION
console.log(arraySemana.map((dia) => dia.toLocaleUpperCase()));

console.log(
	"5. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays)."
);
const mayorQue = (arrayNums) => {
	let mayor = arrayNums[0];
	for (let i = 1; i < arrayNums.length; i++) {
		if (mayor < arrayNums[i]) {
			mayor = arrayNums[i];
		}
	}
	return mayor;
};
const arrayNums = [1, 4, 7, 2, 9, 1];
console.log(mayorQue(arrayNums));
//MEJOR SOLUCION
const arrayNums1 = [1, 0, 27, 2, 93, -1];
const result = arrayNums1.reduce(function (a, b) {
	return Math.max(a, b);
});
console.log(result);
