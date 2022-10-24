"use strict";
console.log("Mensaxe por consola");

/*window.confirm("Mensaxe");
let text = "Press a button!\nEither OK or Cancel.";
if (confirm(text) == true) {
	text = "You pressed OK!";
} else {
	text = "You canceled!";
}
let variable; // declaro variable. Ao non asignar un valor, valerá undefined
variable = "Ola"; // agora o seu valor é 'Ola', por tanto contén unha cadena de texto
console.log(variable);
variable = 34; // agora contén un número
console.log(variable);
variable = [3, 45, 2]; // agora un array
console.log(variable);
variable = undefined; // vólvese a asignar o valor especial undefined
console.log(variable);
console.log("probando var");*/
//probando var
/*var y = 3;
function foo() {
	var x = 1;
	function bar() {
		var y = 2;
		console.log(x); // 1 (function `bar` closes over `x`)
		x = 11;
		console.log(y); // 2 (`y` is in scope)
	}
	bar();
	console.log(x); // (`x` is in scope)
	console.log(y);
}
foo();
console.log("probando let");*/
//probando let
/*var a = 1;
var b = 2;
if (a === 1) {
	var a = 11; // the scope is global
	let b = 22; // the scope is inside the if-block
	console.log(a); // 11
	console.log(b); // 22
}
console.log(a); // 11
console.log(b); // 2
console.log("probar conversión de tipos");*/
//probar conversión de tipos
/*console.log("Ana is " + 18 + " years old");
console.log(1 + "5");
console.log("23" - "10" - 3);
console.log(12 / "6");
console.log("number" + 15 + 3);
console.log(15 + 3 + "number");
let n = "1" + 1;
n = n - 1;
console.log(n);
console.log("10" - "4" - "3" - 2 + "5");
console.log("false" == false);*/

/*let data = new Date();
console.log(`new Date() = ${data}`);
console.log(`Tipo de dato de new Date() = ${typeof data}`);
let data2 = Date();
console.log(`Date() = ${data2}`);
console.log(`Tipo de dato de Date() = ${typeof data2}`);*/

/*const array = [15, 16, 17, 18, 19];
function reducer(previousValue, currentValue, index) {
	const returns = previousValue + currentValue;
	console.log(
		`previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index},
returns: ${returns}`
	);
	return returns;
}
let resultado = array.reduce(reducer);
console.log(`Resultado = ${resultado}`);
console.log("Usando un valor inicial");
resultado = array.reduce(reducer, 0);
console.log(`Resultado = ${resultado}`);
console.log("Usando unha función frecha");
resultado = array.reduce(
	(previousValue, currentValue, index) => previousValue + currentValue,
	0
);
console.log(`Resultado = ${resultado}`);*/
/*console.log("4. Dada a seguinte información: ");*/
const inventors = [
	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
console.log(
	"a. Filtra o array de inventores e crea un array só cos inventores que naceron no século XVI."
);
const arrayInventoresSeculoXVI = [];
for (let i = 0; i < inventors.length; i++) {
	if (inventors[i].year >= 1501 && inventors[i].year <= 1600) {
		arrayInventoresSeculoXVI.push(inventors[i]);
	}
}
console.log(arrayInventoresSeculoXVI);
console.log(
	"b. Crea un array co nome completo dos inventores. Por exemplo: ['Albert Einstein', 'Isaac Newton', ...]"
);
const nombreCompleto = [];
let cadenaNombre = "";
for (let x = 0; x < inventors.length; x++) {
	cadenaNombre = inventors[x].first + " " + inventors[x].last;
	nombreCompleto.push(cadenaNombre);
}
console.log(nombreCompleto);
console.log(
	"c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido"
);
let nombreCompletoOrdenado = [];
let apellidos = [];
let apellidosOrdenados = [];
let cadenaNombreOrdenado = "";
for (let y = 0; y < inventors.length; y++) {
	apellidos.push(inventors[y].last);
}
apellidosOrdenados = apellidos.sort();
let indice = 0;
for (let z = 0; z < apellidosOrdenados.length; z++) {
	indice = nombreCompleto.indexOf(apellidosOrdenados[z]);
	console.log(indice);
}
console.log(inventors[0].last);
console.log(apellidosOrdenados);
console.log("d. Ordena o array de inventores alfabeticamente polo apelido");
console.log("e. Ordena o array de inventores pola data de nacemento");
console.log("f. Calcula a suma dos anos que viviron todos os inventores.");
console.log(
	"g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo"
);
