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
console.log(
	"5. Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe: (variable flightsInfo). Fixarse que a información mostrada por consola está aliñada pola dereita."
);
const flightsInfo =
	"_Delayed_Departure scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980 scq93766109;12:05+_ Departure;scq93766109;svq2323639855;12:30";
let separado = [];
let departure = [];
let sitio = [];
let sitio2 = [];
let horas = [];
separado = flightsInfo.split(";");
horas.push(separado[2].substring(0, 5));
horas.push(separado[5].substring(0, 5));
horas.push(separado[7].substring(0, 5));
horas.push(separado[10]);
departure.push(separado[0].substring(1, 18).replace("_", " "));
departure.push(separado[2].substring(7, 14));
departure.push(separado[5].substring(7, 22).replace("_", " "));
departure.push(separado[7].substring(8, 17));
sitio.push(separado[0].substring(19, 22).toUpperCase());
sitio.push(separado[3].substring(0, 3).toUpperCase());
sitio.push(separado[6].substring(0, 3).toUpperCase());
sitio.push(separado[8].substring(0, 3).toUpperCase());
sitio2.push(separado[1].substring(0, 3).toUpperCase());
sitio2.push(separado[4].substring(0, 3).toUpperCase());
sitio2.push(separado[6].substring(14, 17).toUpperCase());
sitio2.push(separado[9].substring(0, 3).toUpperCase());
//console.log(separado);
console.log(departure);
console.log(horas);
console.log(sitio);
console.log(sitio2);
