/*console.log(
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
const arrayEmpiezanPorM = [];
//let todosEmpiezanPorM = true;
for (let i = 0; i < arraySemana.length; i++) {
	let primeraPosicion = arraySemana[i].charAt(arraySemana[0]);
	if (primeraPosicion === "m") {
		arrayEmpiezanPorM.push(arraySemana[i]);
	}
}
console.log(arrayEmpiezanPorM);*/

console.log(
	"2. Dado un array cos días da semana, obtén o primeiro día que empeza por “m”."
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
const arrayEmpiezanPorM = [];
//let todosEmpiezanPorM = true;
for (let i = 0; i < arraySemana.length; i++) {
	let primeraPosicion = arraySemana[i].charAt(arraySemana[0]);
	if (primeraPosicion === "m") {
		arrayEmpiezanPorM.push(arraySemana[i]);
	}
}
const soloPrimeroQueEmpiezaPorM = [];
const primeroQueEmpiezaPorM = arrayEmpiezanPorM.at(0);
soloPrimeroQueEmpiezaPorM.push(primeroQueEmpiezaPorM);
console.log(soloPrimeroQueEmpiezaPorM);
/*console.log("3. Dado un array cos días da semana, obtén a posición no array do primeiro día que empeza por “m”");*/
/*console.log(
	"4. Dado un array cos días da semana, devolve outro array cos días en maiúsculas."
);*/
/*console.log("5. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays).");*/
