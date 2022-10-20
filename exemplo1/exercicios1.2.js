"use strict";
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
