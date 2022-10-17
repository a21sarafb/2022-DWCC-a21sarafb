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
	"4. Crea unha función á que se lle pase unha cadea der números e devolva unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada."
);
const enmascarar = (cadea4) => {};
console.log(enmascarar("1234123412347777")); // ************7777*/
console.log(
	"5. Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe: (variable flightsInfo). Fixarse que a información mostrada por consola está aliñada pola dereita."
);
const flightsInfo =
	"_Delayed_Departure scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980 scq93766109;12:05+_ Departure;scq93766109;svq2323639855;12:30";
let separado = [];
let departure = [];
let sitio = [];
let sitio2 = [];
let hora = [];
for (let i = 0; i < flightsInfo.length; i++) {
	separado.push(flightsInfo.split("+"));
}
console.log(separado);
