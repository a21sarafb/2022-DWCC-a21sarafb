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
}

console.log(
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
}

console.log("3. Escribe os números pares do 0 ao 30.");
let contador = 0;
while (contador <= 30) {
	console.log(contador);
	contador += 2;
}
console.log(
	"4. Escribe as potencias de 2, dende 2⁰ ata 2²⁰. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”."
);
let contador2 = 0;
while (contador2 <= 20) {
	let potencia = 2 ** contador2;
	console.log("2 elevado a " + contador2 + " = " + potencia);
	contador2++;
	potencia = 0;
}

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

console.log(
	"6. Pide un número por teclado ao usuario. Calcula o factorial dese número e mostra a resultado por consola. (5! = 5*4*3*2*1)."
);
let num = Number(prompt("Ingrese un número para que calcule su factorial"));
let factorial = 1;
for (let i = 1; i <= num; i++) {
	factorial = i * factorial;
}
console.log("O factorial de " + num + " é: " + factorial);

console.log(
	"7. Pide un número por teclado ao usuario. Despois crea unha variable de tipo array e asígnalle a lista de números enteiros dende o 0 ao número tecleado polo usuario. Ademais, fai a suma de todos os valores contidos no array e mostra por consola o resultado da suma. Utiliza un bucle for para recorrer o array. Proba a facelo das 3 formas posibles: for con contador, for…in e for…of."
);
let arrayUsuario = Number(prompt("Ingrese un número "));
const arr = [];
let suma = 0;
for (let x = 0; x <= arrayUsuario; x++) {
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
for (let z = 0; z < arr.length; z++) {
	console.log(z);
}

console.log(
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
/*console.log(
	"1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro"
);
const numero = Number(prompt("Ingrese o numero que desexa elevar ao cubo"));
const cubo = (numero) => numero * numero * numero;
console.log(cubo(numero));

console.log(
	"2. Crea unha función á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada. Exemplo: arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50] arraySaida = [3, 5, 7, 23]"
);
const arrayEntrada1 = [10, 2, 3, 5, 7, 8, 23, 50];
const arraySaida = [];
const arrayImpar = (arrayEntrada1) => {
	for (let i = 0; i < arrayEntrada1.length; i++) {
		if (arrayEntrada1[i] % 2 != 0) {
			arraySaida.push(arrayEntrada1[i]);
		}
	}
	return arraySaida;
};
console.log(arrayImpar(arrayEntrada1));

console.log(
	"3. Crea unha función que sume todos os valores pasados como parámetros, sendo estes un número indeterminado."
);
const funcionSuma = (...theArgs) => {
	let suma = 0;
	for (const argumentos of theArgs) {
		suma += argumentos;
	}
	return suma;
};
console.log(funcionSuma(1, 2, 3));
console.log(funcionSuma(1, 2, 3, 4, 5));
console.log(funcionSuma(1, 2, 3, 6));

console.log(
	"4. Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros). Debe devolver a media dos números pasados. Proba a realizala con diferentes bucles for (con contador, for…in e for…of)."
);
const funcionMedia = (...theArgs) => {
	let media = 0;
	let suma = 0;
	for (const args of theArgs) {
		media += args;
		suma++;
	}
	return media / suma;
};

console.log(funcionMedia(2, 4, 6, 8));
console.log(funcionMedia(4, 4));
console.log(funcionMedia(4, 4, 6, 6, 8, 8));

console.log(
	"5. Fai unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non"
);
const dni = prompt("Introduza o seu dni");
const checkDni = (dni) => {
	let numero;
	let letr;
	let letra;
	const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

	if (expresion_regular_dni.test(dni) == true) {
		numero = dni.substr(0, dni.length - 1);
		letr = dni.substr(dni.length - 1, 1);
		numero = numero % 23;
		letra = "TRWAGMYFPDXBNJZSQVHLCKET";
		letra = letra.substring(numero, numero + 1);
		if (letra != letr.toUpperCase()) {
			alert("Dni erroneo, a letra do DNI non se corresponde");
		} else {
			alert("DNI correcto");
		}
	} else {
		alert("DNI erroneo, formato non válido");
	}
};
console.log(checkDni(dni));

console.log(
	"6. Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical). Exemplo: arrayEntrada = [[0, 0, -1, 0], [0, -1, -1, 0]]; arraySaida = [[1, 3, -1, 2], [1, -1, -1, 2]]; "
);

const buscaMinas = (arrayEntrada) => {
	const numFilas = arrayEntrada.length;
	const numCols = arrayEntrada[numFilas].length;
	console.log(numFilas, numCols);

	const arraySaida = [];
	for (let fila = 0; fila < numFilas; fila++) {
		arraySaida[fila] = [];
		for (let columna = 0; columna < numCols; columna++) {
			let contador = 0;
			if (arrayEntrada[fila][columna] === 0) {
				if (fila - 1 >= 0) {
					if (arrayEntrada[fila - 1][columna] === -1) {
						contador++;
					}
				}
				if (columna - 1 >= 0) {
					if (arrayEntrada[fila][columna - 1] === -1) {
						contador++;
					}
				}
				if (fila - 1 >= 0 && columna - 1 >= 0) {
					if (arrayEntrada[fila - 1][columna - 1] === -1) {
						contador++;
					}
				}
				if (fila + 1 < numFilas) {
					if (arrayEntrada[fila + 1][columna] === -1) {
						contador++;
					}
				}
				if (columna + 1 < numCols) {
					if (arrayEntrada[fila][columna + 1] === -1) {
						contador++;
					}
				}
				if (fila + 1 < numFilas && columna + 1 < numCols) {
					if (arrayEntrada[fila + 1][columna + 1] === -1) {
						contador++;
					}
				}
				if (fila - 1 >= 0 && columna + 1 < numCols) {
					if (arrayEntrada[fila - 1][columna + 1] === -1) {
						contador++;
					}
				}
				if (fila + 1 < numFilas && columna - 1 >= 0) {
					if (arrayEntrada[fila + 1][columna - 1] === -1) {
						contador++;
					}
				}
				arraySaida[fila][columna] = contador;
			} else if (arrayEntrada[fila][columna] === -1) {
				arraySaida[fila][columna] = -1;
			}
		}
	}
	return arraySaida;
};
const arrayEntrada = [
	[0, 0, -1, 0],
	[0, -1, -1, 0],
];
console.log(buscaMinas(arrayEntrada));

console.log(
	"7. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión dentro do horario laboral."
);
const inicioXornada = "07:30";
const finalXornada = "17:45";
const inicioXornadaSeparada = inicioXornada.split(":");
const finalXornadaSeparada = finalXornada.split(":");
const horaInicioXornada = parseInt(inicioXornadaSeparada[0]);
const minsInicioXornada = parseInt(inicioXornadaSeparada[1]);
const horaFinalXornada = parseInt(finalXornadaSeparada[0]);
const minsFinalXornada = parseInt(finalXornadaSeparada[1]);
const axendarReunion = (horaInicioReunion, duracionEnMinutos) => {
	let dentroHorario = true;
	const limpio = horaInicioReunion.split(":");
	const hora_InicioReunion = parseInt(limpio[0]);
	const mins_InicioReunion = parseInt(limpio[1]);
	let minsAcabaReunion = duracionEnMinutos + mins_InicioReunion;
	let minsDespuesReunion = minsAcabaReunion;
	let horaDespuesReunion = hora_InicioReunion;
	while (minsAcabaReunion >= 60) {
		minsDespuesReunion -= 60;
		horaDespuesReunion += 1;
		minsAcabaReunion -= 60;
	}
	if (hora_InicioReunion < horaInicioXornada) {
		dentroHorario = false;
	}
	if (
		hora_InicioReunion == horaInicioXornada &&
		mins_InicioReunion < minsInicioXornada
	) {
		dentroHorario = false;
	}
	if (
		hora_InicioReunion > horaInicioXornada &&
		mins_InicioReunion >= minsInicioXornada &&
		horaDespuesReunion > horaFinalXornada
	) {
		dentroHorario = false;
	}
	if (
		hora_InicioReunion > horaInicioXornada &&
		mins_InicioReunion > minsInicioXornada &&
		horaDespuesReunion <= horaFinalXornada &&
		minsDespuesReunion > minsFinalXornada
	) {
		dentroHorario = false;
	}
	return dentroHorario;
};

console.assert(
	axendarReunion("7:00", 15) == false,
	'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
	axendarReunion("7:15", 30) == false,
	'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(
	axendarReunion("7:30", 30) == true,
	'Fallo comprobando axendarReunión("7:30", 30) == false'
);
console.assert(
	axendarReunion("11:30", 60) == true,
	'Fallo comprobando axendarReunión("17:45", 60) == false'
);
console.assert(
	axendarReunion("17:00", 45) == true,
	'Fallo comprobando axendarReunión("11:30", 60) == false'
);
console.assert(
	axendarReunion("17:30", 30) == false,
	'Fallo comprobando axendarReunión("17:30", 30) == false'
);

console.log(
	"8. Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto. Hai que implementar a función de forma manual e non utilizar as funcións proporcionadas pola linguaxe JavaScript. Non se deben distinguir maiúsculas de minúsculas. Un carácter pode formar parte de máis dun patrón encontrado. Exemplo: buscarPatron(“000111101000ABCHO”, “00”) debe devolver 4."
);

const buscarPatron = (texto, patron) => {
	let contador = 0;
	let coincide = true;
	let indice = 0;
	for (let i = 0; i < texto.length; i++) {
		if (texto[i] === patron[0]) {
			indice = i;
			coincide = true;
			contador++;
			for (let x = 0; x < patron.length; x++) {
				if (patron[x] !== texto[indice]) {
					coincide = false;
					break;
				}
				indice++;
			}
			if (coincide) {
				contador++;
			}
		}
	}
	return contador;
};
console.log(buscarPatron("000111101000ABCHO", "00"));

console.log(
	"9. Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas."
);
const cambio = (dinero) => {
	const moeda1 = 1;
	const moeda2 = 2;
	const billete5 = 5;
	const billete10 = 10;
	const billete20 = 20;
	const billete50 = 50;
	const billete100 = 100;
	const billete200 = 200;
	const billete500 = 500;
	let cambio = "";
	let contador = "";
	if (dinero / billete500 >= 1) {
		contador = "0";
		while (dinero / billete500 >= 1) {
			dinero -= billete500;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 500 ";
		} else {
			cambio = cambio + contador + " billete de 500 ";
		}
	}
	if (dinero / billete200 >= 1) {
		contador = "0";
		while (dinero / billete200 >= 1) {
			dinero -= billete200;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 200 ";
		} else {
			cambio = cambio + contador + " billete de 200 ";
		}
	}
	if (dinero / billete100 >= 1) {
		contador = "0";
		while (dinero / billete100 >= 1) {
			dinero -= billete100;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 100 ";
		} else {
			cambio = cambio + contador + " billete de 100 ";
		}
	}
	if (dinero / billete50 >= 1) {
		contador = "0";
		while (dinero / billete50 >= 1) {
			dinero -= billete50;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 50 ";
		} else {
			cambio = cambio + contador + " billete de 50 ";
		}
	}
	if (dinero / billete20 >= 1) {
		contador = "0";
		while (dinero / billete20 >= 1) {
			dinero -= billete20;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 20 ";
		} else {
			cambio = cambio + contador + " billete de 20 ";
		}
	}
	if (dinero / billete10 >= 1) {
		contador = "0";
		while (dinero / billete10 >= 1) {
			dinero -= billete10;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 10 ";
		} else {
			cambio = cambio + contador + " billete de 10 ";
		}
	}
	if (dinero / billete5 >= 1) {
		contador = "0";
		while (dinero / billete5 >= 1) {
			dinero -= billete5;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " billetes de 5 ";
		} else {
			cambio = cambio + contador + " billete de 5 ";
		}
	}
	if (dinero / moeda2 >= 1) {
		contador = "0";
		while (dinero / moeda2 >= 1) {
			dinero -= moeda2;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " moedas de 2 ";
		} else {
			cambio = cambio + contador + " moeda de 2 ";
		}
	}
	if (dinero / moeda1 >= 1) {
		contador = "0";
		while (dinero / moeda1 >= 1) {
			dinero -= moeda1;
			parseInt(contador);
			contador++;
			String(contador);
		}
		if (parseInt(contador) > 1) {
			cambio = cambio + contador + " moedas de 1 ";
		} else {
			cambio = cambio + contador + " moeda de 1 ";
		}
	}
	return cambio;
};
console.log("56 = " + cambio(56));
console.log("25 = " + cambio(25));
console.log("37 = " + cambio(37));
console.log("138 = " + cambio(138));
console.log("1574 = " + cambio(1574));*/

/*let data = new Date();
console.log(`new Date() = ${data}`);
console.log(`Tipo de dato de new Date() = ${typeof data}`);
let data2 = Date();
console.log(`Date() = ${data2}`);
console.log(`Tipo de dato de Date() = ${typeof data2}`);*/

/*RONDA 3 DE EJERCICIOS*/

/*OBJETOS*/
/*console.log("1. Mostra o día da semana (en letra) do 25 de xullo de 2000.");
const exercicio1 = new Date("July 25, 2000");
const diaDaSemana = exercicio1.getDay();
let diaDaSemanaLetra = "";
if (diaDaSemana === 0) {
	diaDaSemanaLetra = "Domingo";
} else if (diaDaSemana === 1) {
	diaDaSemanaLetra = "Lunes";
} else if (diaDaSemana === 2) {
	diaDaSemanaLetra = "Martes";
} else if (diaDaSemana === 3) {
	diaDaSemanaLetra = "Miercoles";
} else if (diaDaSemana === 4) {
	diaDaSemanaLetra = "Jueves";
} else if (diaDaSemana === 5) {
	diaDaSemanaLetra = "Viernes";
} else if (diaDaSemana === 6) {
	diaDaSemanaLetra = "Sabado";
}
console.log(diaDaSemanaLetra);*/

/*console.log("2. Mostra o día da semana (en letra) do 25 de xullo deste ano");
const exercicio2 = new Date("July 25, 2022");
const diaDaSemana2 = exercicio2.getDay();
let diaDaSemanaLetra2 = "";
if (diaDaSemana2 === 0) {
	diaDaSemanaLetra2 = "Domingo";
} else if (diaDaSemana2 === 1) {
	diaDaSemanaLetra2 = "Lunes";
} else if (diaDaSemana2 === 2) {
	diaDaSemanaLetra2 = "Martes";
} else if (diaDaSemana2 === 3) {
	diaDaSemanaLetra2 = "Miercoles";
} else if (diaDaSemana2 === 4) {
	diaDaSemanaLetra2 = "Jueves";
} else if (diaDaSemana2 === 5) {
	diaDaSemanaLetra2 = "Viernes";
} else if (diaDaSemana2 === 6) {
	diaDaSemanaLetra2 = "Sabado";
}
console.log(diaDaSemanaLetra2);*/
/*console.log(
	"3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe."
);
const dataDan = new Date("July 25, 2000");
const dataHoy = new Date();
const milisegundosDan = dataDan.valueOf();
const milisegundosHoy = dataHoy.valueOf();
let calculoMilisegundos = milisegundosHoy - milisegundosDan;
calculoMilisegundos = calculoMilisegundos / 86400000;
console.log(calculoMilisegundos);*/

/*console.log(
	"4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes."
);
const diasMes = (mes, año) => new Date(año, mes, 0).getDate();
console.log(diasMes(1, 2018));
console.log(diasMes(12, 2017));
console.log(diasMes(5, 2015));
console.log(diasMes(11, 2022));
console.log(diasMes(2, 2000));
console.log(diasMes(2, 2001));*/
/*console.log(
	"5. Crea unha función á que se lle pase unha data e diga se é fin de semana."
);
const diaQuePasan = prompt(
	"Introduzca la fecha que desea en el formato: 'July 25, 2000'"
);
const finDeSemana = (diaQuePasan) => {
	const fechaQuePasan = new Date(diaQuePasan);
	const diaDaSemana = fechaQuePasan.getDay();
	let diaDaSemanaLetra = "";
	if (diaDaSemana === 0 || diaDaSemana === 6) {
		diaDaSemanaLetra = "É fin de semana";
	} else {
		diaDaSemanaLetra = "Non é fin de semana";
	}
	console.log(diaDaSemanaLetra);
};
finDeSemana();*/

/*console.log(
	"6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano."
);*/

/*console.log(
	"1. Crea unha función á que se lle pase como parámero o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos."
);*/
/*console.log(
	"2. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais."
);
const areaCirculo = (radio) => {
	let area = Math.PI * Math.pow(radio, 2);
	area = area.toFixed(2);
	return area;
};
const PerimetroCirculo = (radio) => {
	let perimetro = 2 * Math.PI * radio;
	perimetro = perimetro.toFixed(2);
	return perimetro;
};
console.log("Areas del circulo");
console.log(areaCirculo(5.34));
console.log(areaCirculo(10.79));
console.log(areaCirculo(5));
console.log(areaCirculo(10));
console.log("Perimetros del circulo");
console.log(PerimetroCirculo(5.34));
console.log(PerimetroCirculo(10.79));
console.log(PerimetroCirculo(5));
console.log(PerimetroCirculo(10));*/
/*console.log(
	"1. Crea unha función á que se lle pase unha cadea e devolva unha cadea en sentido inverso."
);

const reverseString = (cadea) => {
	//devolve a cadea como un arreglo
	cadea = cadea.split("");
	//invirte o arreglo
	cadea = cadea.reverse();
	//une os elementos
	cadea = cadea.join("");
	return cadea;
};
console.log(reverseString("Hola"));
console.log(reverseString("I am a string")); // gnirts a ma I*/
/*console.log(
	"2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array."
);

const removeCharacters = (cadea2, array) => {
	for (let x = 0; x < array.length; x++) {
		cadea2 = cadea2.replaceAll(array[x], "");
	}
	return cadea2;
};
console.log(removeCharacters("I am an example string", ["a", "x"])); // I m n emple string*/
/*console.log(
	"3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido."
);
const caracterMaisRepetido = (cadea3) => {
	for (let i = 0; i < cadea3.length; i++) {
		let contador = [];
		let pos = cadea3.matchAll(cadea3[i]);
		if (pos) {
		}
		console.log(contador);
	}
};
console.log(caracterMaisRepetido("abcddefg")); // d*/
/*console.log(
	"1. Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas. Fai os seguintes apartados con splice: a. Elimina as mazás. b. Engade detrás dos plátanos, laranxas e sandía. c. Quita os kiwis e pon no seu lugar cereixas e nésperas. Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas, onde os elementos estean separados por unha coma e espazo. Por exemplo, inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos, mandarinas"
);
let listaDeFrutas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log(listaDeFrutas);
//a. Elimina as mazás
listaDeFrutas.splice(1, 1);
console.log(listaDeFrutas);
//b. Engade detrás dos plátanos, laranxas e sandía.
listaDeFrutas.splice(3, 0, "laranxas");
listaDeFrutas.splice(4, 0, "sandía");
console.log(listaDeFrutas);
//c. Quita os kiwis e pon no seu lugar cereixas e nésperas.

//console.log(listaDeFrutas);*/
/*console.log(
	"2. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos."
);
const notas = [4, 8, 3, 10, 5];
notas.sort();
console.log(notas);*/
/*console.log(
	"3. Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’."
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
let todosEmpiezanPorS = true;
for (let i = 0; i < arraySemana.length; i++) {
	let primeraPosicion = arraySemana[i].charAt(arraySemana[0]);
	let ultimaPosicion = arraySemana[i].charAt(arraySemana[i].length - 1);
	if (ultimaPosicion !== "s") {
		todosEmpiezanPorS = false;
	}
	if (primeraPosicion === "s") {
		console.log(arraySemana[i] + " empieza en s");
	}
}
if (todosEmpiezanPorS === false) {
	console.log("No todos acaban en S");
} else {
	console.log("Todos acaban en S");
}*/

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
/*console.log("1. Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), precio (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x precio).");*/
/*console.log("1. Crea unha clase chamada Produtos coas propiedades marca, categoría, unidades, precio e un método chamado importe que devolva o prezo total das unidades (unidades x precio). Ademais terá un método getInfo que devolverá “Nome (categoría): unidades x precio = importe”. Crea tamén tres produtos diferentes.");*/
/*console.log("2. Crea unha clase Televisor que herde de Produtos e teña unha nova propiedade chamada tamaño. O método getInfo mostrará o tamaño xunto ao nome.");*/
/*console.log("3. Crea 5 produtos e gárdaos nun array. Crea as seguintes funcións (todas reciben o array como parámetro): a. prodsSortBayName: devolve un array cos produtos ordenados alfabeticamente. b. prodsSortByPrice: devolve un array cos produtos ordenados por importe c. prodsTotalPrice: devolve o importe total dos produtos do array, con 2 decimais. d. prodsWithLowUnits: ademais do array, recibe como segundo parámetro un nº e devolve un array con todos os produtos dos que quedan menos das unidades indicadas e. prodsList: devolve unha cadena que di ‘Listado de produtos:’ e en cada liña un guión e a información dun produto do array.");*/
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
