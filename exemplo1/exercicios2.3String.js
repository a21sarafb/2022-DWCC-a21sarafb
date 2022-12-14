"use strict";
console.log(
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
console.log(reverseString("I am a string")); // gnirts a ma I
console.log(
	"2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array."
);
const removeCharacters = (cadea2, array) => {
	for (let x = 0; x < array.length; x++) {
		cadea2 = cadea2.replaceAll(array[x], "");
	}
	return cadea2;
};
console.log(removeCharacters("I am an example string", ["a", "x"])); // I m n emple string
console.log(
	"3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido."
);
const caracterMaisRepetido = (cadea3) => {
	let max = 0,
		maxChar = "";
	cadea3.split("").forEach(function (char) {
		if (cadea3.split(char).length > max) {
			max = cadea3.split(char).length;
			maxChar = char;
		}
	});
	return maxChar;
};
console.log(caracterMaisRepetido("abcddefg")); // d
console.log(
	"4. Crea unha función á que se lle pase unha cadea der números e devolva unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada."
);
const enmascarar = (cadea4) => {
	const final = cadea4.length;
	const catroUltimos = cadea4.substring(final - 4, final);
	const resto = final - 4;
	let cadeaAsterisco = "";
	for (let i = 0; i < resto; i++) {
		cadeaAsterisco += "*";
	}
	return cadeaAsterisco.concat(catroUltimos);
	//tamen se pode usar o padStart
};
console.log(enmascarar("1234123412347777")); // ************7777
console.log(enmascarar("34521234"));
console.log(enmascarar("123456789"));
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
const cadea1 =
	departure[0] +
	" " +
	sitio[0] +
	" " +
	sitio2[0] +
	" (" +
	horas[0].substring(0, 2) +
	"h" +
	horas[0].substring(3, 5) +
	")";
const cadea2 =
	departure[1] +
	" " +
	sitio[1] +
	" " +
	sitio2[1] +
	" (" +
	horas[1].substring(0, 2) +
	"h" +
	horas[1].substring(3, 5) +
	")";
const cadea3 =
	departure[2] +
	" " +
	sitio[2] +
	" " +
	sitio2[2] +
	" (" +
	horas[2].substring(0, 2) +
	"h" +
	horas[2].substring(3, 5) +
	")";
const cadea4 =
	departure[3] +
	" " +
	sitio[3] +
	" " +
	sitio2[3] +
	" (" +
	horas[3].substring(0, 2) +
	"h" +
	horas[3].substring(3, 5) +
	")";
console.log(cadea1.padStart(36));
console.log(cadea2.padStart(36));
console.log(cadea3.padStart(36));
console.log(cadea4.padStart(36));
