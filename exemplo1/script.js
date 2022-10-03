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

/*console.log(
	"1. Pide por teclado o día da semana (luns - domingo) e mostra unha mensaxe indicando se é laborable ou non."
);
const dia = prompt("Ingrese un día da semana(luns - domingo): ");
const diaMinusculas = dia.toLowerCase();
switch (diaMinusculas) {
	case "luns":
	case "martes":
	case "mercores":
	case "xoves":
	case "venres":
		console.log(dia + " é laborable");
		break;
	case "sabado":
	case "domingo":
		console.log(dia + " NON é laborable");
		break;
	default:
		console.log(
			"Os valores válidos son: luns, martes, mercores, xoves, venres, sabado ou domingo"
		);
		break;
}*/

/*console.log(
	"2. Pide 3 números por teclado e indica cal é o maior ou se son iguais."
);
const num1 = Number(prompt("Ingrese o primeiro número: "));
const num2 = Number(prompt("Ingrese o primeiro número: "));
const num3 = Number(prompt("Ingrese o primeiro número: "));
if (num1 === num2 && num2 === num3) {
	console.log(num1 + ", " + num2 + ", " + num3 + " son iguais");
} else if (num1 > num2 && num1 > num3) {
	console.log(num1 + " é o maior");
} else if (num2 > num1 && num2 > num3) {
	console.log(num2 + " é o maior");
} else if (num3 > num1 && num3 > num2) {
	console.log(num3 + " é o maior");
}*/

/*console.log("3. Escribe os números pares do 0 ao 30.");
let contador = 0;
while (contador <= 30) {
	console.log(contador);
	contador += 2;
}*/

/*console.log(
	"4. Escribe as potencias de 2, dende 2⁰ ata 2²⁰. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”."
);
let contador2 = 0;
while (contador2 <= 20) {
	let potencia = 2 ** contador2;
	console.log("2 elevado a " + contador2 + " = " + potencia);
	contador2++;
	potencia = 0;
}*/

console.log(
	"5. Crea unha variable e asígnalle un número aleatorio entre 0 - 100. Elabora un programa para que o usuario adiviñe o número aleatorio. É dicir, debe pedirse un número por teclado ao usuario e informar se o número introducido é maior ou menor que o número a adiviñar. Volverase a pedir outro número ata que sexa adiviñado o secreto."
);
let aleatorio = random(0, 100);
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let adivina = Number(prompt("Ingrese un número do 0 ao 100: " + aleatorio));
while (isNaN(adivina)) {
	adivina = Number(
		prompt("DEBE SER UN NÚMERO. Ingrese outro número do 0 ao 100: ")
	);
}
while (aleatorio != adivina) {
	if (aleatorio > adivina) {
		console.log(
			"O número que introduciches é menor ao que debes acertar, volve a intentalo"
		);
		adivina = Number(prompt("Ingrese outro número do 0 ao 100: "));
	} else if (aleatorio < adivina) {
		console.log(
			"O número que introduciches é maior ao que debes acertar, volve a intentalo"
		);
		adivina = Number(prompt("Ingrese outro número do 0 ao 100: "));
	} else {
		while (isNaN(adivina)) {
			adivina = Number(
				prompt("DEBE SER UN NÚMERO. Ingrese outro número do 0 ao 100: ")
			);
		}
	}
}
console.log("ACERTOU!");

/*console.log(
	"6. Pide un número por teclado ao usuario. Calcula o factorial dese número e mostra a resultado por consola. (5! = 5*4*3*2*1)."
);
let num = Number(prompt("Ingrese un número para que calcule su factorial"));
let factorial = 1;
for (i = 1; i <= num; i++) {
	factorial = i * factorial;
}
console.log("O factorial de " + num + " é: " + factorial);*/

/*console.log(
	"7. Pide un número por teclado ao usuario. Despois crea unha variable de tipo array e asígnalle a lista de números enteiros dende o 0 ao número tecleado polo usuario. Ademais, fai a suma de todos os valores contidos no array e mostra por consola o resultado da suma. Utiliza un bucle for para recorrer o array. Proba a facelo das 3 formas posibles: for con contador, for…in e for…of."
);
let arrayUsuario = Number(prompt("Ingrese un número "));
const arr = [];
let suma = 0;
for (x = 0; x <= arrayUsuario; x++) {
	arr.push(x);
	suma = suma + x;
}
console.log("A suma de todos os elementos do array creado é: " + suma);
console.log("Array recorrido con for of : ");
for (let valor of arr) {
	console.log(valor);
}
console.log("Array recorrido con for in: ");
for (let y in arr) {
	console.log(y);
}
console.log("Array recorrido con for con contador: ");
for (z = 0; z < arr.length; z++) {
	console.log(z);
}*/

/*console.log(
	"8. Cálculo do IMC (índice de masa corporal): a. Almacena en variables o peso e altura de dúas persoas. b. Calcula o IMC das dúas persoas. c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'"
);
const peso1 = Number(prompt("Ingrese o peso da 1º persoa (en kilogramos)"));
const altura1 = Number(prompt("Ingrese a altura da 1º persoa (en metros)"));
const peso2 = Number(prompt("Ingrese o peso da 2º persoa (en kilogramos)"));
const altura2 = Number(prompt("Ingrese a altura da 2º persoa (en metros)"));
const imc1 = peso1 / (altura1 * altura1);
const imc2 = peso2 / (altura2 * altura2);
if (imc1 > imc2) {
	console.log(
		"O IMC (" +
			imc1.toFixed(2) +
			") da primeira persoa é maior que o da segunda persoa (" +
			imc2.toFixed(2) +
			")!"
	);
} else if (imc2 > imc1) {
	console.log(
		"O IMC (" +
			imc2.toFixed(2) +
			") da segunda persoa é maior que o da primeira persoa (" +
			imc1.toFixed(2) +
			")!"
	);
} else {
	console.log("Os dous IMC son iguais (" + imc1.toFixed(2) + ")");
}*/

/*segunda ronda de exercicios*/
console.log(
	"1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro"
);

console.log(
	"2. Crea unha función á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada. Exemplo: arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50] arraySaida = [3, 5, 7, 23]"
);

console.log(
	"3. Crea unha función que sume todos os valores pasados como parámetros, sendo estes un número indeterminado."
);

console.log(
	"4. Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros). Debe devolver a media dos números pasados. Proba a realizala con diferentes bucles for (con contador, for…in e for…of)."
);

console.log(
	"5. Fai unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non"
);

console.log(
	"6. Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical). Exemplo: arrayEntrada = [[0, 0, -1, 0], [0, -1, -1, 0]]; arraySaida = [[1, 3, -1, 2], [1, -1, -1, 2]];"
);

console.log(
	"7. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión dentro do horario laboral."
);