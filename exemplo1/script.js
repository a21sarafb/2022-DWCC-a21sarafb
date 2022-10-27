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
console.log("3. Dado o seguinte obxecto:");
const game = {
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
console.log(
	"a. Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol. Exemplo: 'Gol 1: Lewandowski'."
);
for (const arrayXogadores in game) {
	for (let i = 0; i < game[arrayXogadores].length; i++) {
		console.log("Gol " + (i + 1) + ": " + game[arrayXogadores][i]);
	}
}
console.log(
	"b. Crea un novo obxecto chamado scorers que conteña o nome dos xogadores que marcaron e o número de goles que marcaron como valor. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}"
);

const xogadoresOrdenado = game.scored.sort();
console.log(xogadoresOrdenado);
let scorers = {};
let contador = 1;
for (let i = 0; i < xogadoresOrdenado.length; i++) {
	if (xogadoresOrdenado[i] === xogadoresOrdenado[i + 1]) {
		contador++;
	} else {
		scorers[xogadoresOrdenado[i]] = contador;
		contador = 1;
	}
}
console.log(scorers);
let scorers1 = {};
for (const xogador of xogadoresOrdenado) {
	scorers1[xogador] ? scorers1[xogador]++ : (scorers1[xogador] = 1);
}
console.log(scorers1);
