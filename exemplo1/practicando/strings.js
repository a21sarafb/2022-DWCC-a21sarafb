"use strict";
/*STRINGS*/
/*console.log(
	"1. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso."
);
function inverso(cadea) {
	cadea = cadea.split("");
	cadea = cadea.reverse();
	cadea = cadea.join("");
	return cadea;
}
console.log(inverso("I am a string"));

console.log(
	"2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array. "
);
function elimina(cadea, elimina) {
	for (const letra of elimina) {
		cadea = cadea.replaceAll(letra, "");
	}
	return cadea;
}
console.log(elimina("I am an example string", ["a", "x"]));

console.log(
	"3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido."
);
function repe(cadea) {
	let max = 0,
		maxChar = "";
	cadea.split("").forEach(function (char) {
		if (cadea.split(char).length > max) {
			max = cadea.split(char).length;
			maxChar = char;
		}
	});
	return maxChar;
}
console.log(repe("abcddefg"));
console.log(repe("afbcddeffg"));

/* ARRAYS */
/*console.log(
	"2. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos."
);
const notas = [4, 8, 3, 10, 5];
notas.sort(function (a, b) {
	return a - b;
});
console.log(notas);

console.log(
	"3. Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’. "
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
console.log(arraySemana.some((dia) => dia.toLowerCase().startsWith("s")));
console.log(arraySemana.every((dia) => dia.toLowerCase().endsWith("s")));

console.log(
	"4. Crea unha función á que se lle pase un texto e devolva o mesmo texto coa primeira letra de cada palabra en maiúsculas e o resto en minúsculas."
);
const cambioTamaño = (texto) => {
	const arrayTexto = texto.split("");
	for (let i = 0; i < arrayTexto.length; i++) {
		if (i === 0) {
			arrayTexto[i] = arrayTexto[i].toUpperCase();
		} else {
			arrayTexto[i] = arrayTexto[i].toLowerCase();
		}
	}
	return arrayTexto.join("");
};
console.log(cambioTamaño("AFTskfdJDBdSaW"));
console.log(cambioTamaño("hOLa BueNOS diAS"));

console.log(
	"4. Dado un array cos días da semana, devolve outro array cos días en maiúsculas."
);
console.log(arraySemana.map((dia) => dia.toLocaleUpperCase()));

console.log(
	"5. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays)."
);
const arrayNums1 = [1, 0, 27, 2, 93, -1];
const result = arrayNums1.reduce(function (a, b) {
	return Math.max(a, b);
});
console.log(result);*/

/*console.log(
	"1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor: Utilizando o contido aprendido sobre arrays crea unha única sentencia para cada unha das seguintes instrucións:"
);
const players = [
	[
		"Neuer",
		"Pavard",
		"Martinez",
		"Alaba",
		"Davies",
		"Kimmich",
		"Goretzka",
		"Coman",
		"Muller",
		"Gnarby",
		"Lewandowski",
	],
	[
		"Burki",
		"Schulz",
		"Hummels",
		"Akanji",
		"Hakimi",
		"Weigl",
		"Witsel",
		"Hazard",
		"Brandt",
		"Sancho",
		"Gotze",
	],
];
console.log(
	"a. Crea as variables players1, players2 que conteña un array cos xogadores de cada equipo."
);
const players1 = [...players[0]];
let players2 = [...players[1]];
//OTRA OPCION
// const [players1, players2] = players;
console.log("Array de players1: " + players1);
console.log("Array de players2: " + players2);
console.log(
	"b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo. Crea unha variable chapada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo."
);
let [gk, ...fieldPlayers] = players[0];
console.log("Array de gk: " + gk);
console.log("Array de fieldPlayers: " + fieldPlayers);
console.log(
	"c. Crea un array allPlayers que conteña os xogadores dos dous equipos."
);
const allPlayers = [...players[0], ...players[1]];
//outras opcion
//const allPlayers = players1.concat(players2);
//const allPlayers = players.flat();
console.log("Array de allPlayers: " + allPlayers);
console.log(
	"d. O primeiro equipo substituiu os xogadores iniciais por 'Thiago', 'Coutinho', 'Periscic'. Crea unha nova varible de tipo array chamada players1Final que conteña os xogadores iniciais e tamén os 4 novos."
);
const playersSubstitutos = ["Thiago", "Coutinho", "Periscic"];
const players1Final = [...playersSubstitutos, ...players[0]];
console.log("Array de players1Final: " + players1Final);

console.log(
	"2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, mostra por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “ last_NAME”], deberase mostrar por consola “firtsName” e “lastName”."
);
const arrayEntrada = ["last_NAME", "first_name"];

arrayEntrada.forEach((variable) =>
	console.log(
		`${variable.toLowerCase().replace(
			`_${variable.toLowerCase().charAt(variable.indexOf("_") + 1)}`,
			variable
				.toLowerCase()
				.charAt(variable.indexOf("_") + 1)
				.toUpperCase()
		)}`
	)
);*/
/*console.log("4. Dada a seguinte información: ");

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
console.log(
	inventors.filter((inventor) => inventor.year > 1500 && inventor.year <= 1600)
);
console.log(
	"b. Crea un array co nome completo dos inventores. Por exemplo: ['Albert Einstein', 'Isaac Newton', ...]"
);
const inventorsFullName = inventors.map(
	(inventor) => `${inventor.first} ${inventor.last}`
);

console.log(inventorsFullName);
console.log(
	"c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido"
);
inventorsFullName.sort((a, b) => {
	const nameA = a.substring(a.lastIndexOf(" "));
	const nameB = b.substring(b.lastIndexOf(" "));
	return nameA < nameB ? -1 : 1;
});
console.log(inventorsFullName);
console.log("d. Ordena o array de inventores alfabeticamente polo apelido");

console.log(
	inventors.sort((a, b) => {
		const nameA = a.last;
		const nameB = b.last;
		return nameA < nameB ? -1 : 1;
	})
);

console.log("e. Ordena o array de inventores pola data de nacemento");
console.log(inventors.sort((a, b) => a.year - b.year));
console.log("f. Calcula a suma dos anos que viviron todos os inventores.");
let años = 0;

function edad(passed, year) {
	return passed - year;
}

años = inventors.reduce(
	(previo, actual) => previo + edad(actual.passed, actual.year),
	0
);

console.log(años);
console.log(
	"g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo"
);

console.log(
	inventors.sort((a, b) => edad(b.passed, b.year) - edad(a.passed, a.year))
);

console.log(
	"5. Dada a seguinte información, obtén un obxecto con unha propiedade para cada medio de transporte, indicando o número de veces que se repite no array. É dicir, o resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}"
);
const data = [
	"car",
	"car",
	"truck",
	"truck",
	"bike",
	"walk",
	"car",
	"van",
	"bike",
	"walk",
	"car",
	"van",
	"car",
	"truck",
	"pogostick",
];
const dataOrdenado = data.sort();
let obxectoVehiculo = {};
for (const vehiculo of dataOrdenado) {
	obxectoVehiculo[vehiculo]
		? obxectoVehiculo[vehiculo]++
		: (obxectoVehiculo[vehiculo] = 1);
}
console.log(obxectoVehiculo);*/

/* a. Cada vez que se cargue a páxina, crearanse dende JavaScript o código necesario para mostrar as 8 cartas. Debe implementarse de forma que sexa fácil ampliar o número de cartas, por exemplo, para nun futuro escoller a dificultade do xogo. Pode ser interesante engadir ao código HTML de cada carta un id que identifique a súa posición.*/
let principal = document.querySelector(".cartas");
for (let i = 0; i < 8; i++) {
	let div1 = document.createElement("div");
	div1.setAttribute("class", "div" + (i + 1));
	let img = document.createElement("img");
	img.setAttribute("src", "/img/reverso.jfif");
	img.setAttribute("class", "img" + (i + 1));
	div1.append(img);
	principal.append(div1);
}

/*b. Crea un array coas letras, por exemplo, da “A” - “D”.*/
let arrayLetras = ["as.jfif", "j.jfif", "reina.jfif", "rey.jfif"];

/*c. Crea un novo array que conteña dúas veces as letras “A” - “D” e desordénaas de forma aleatoria. A posición das letras no array usarase para gardar que letra hai detrás de cada carta.*/
let arrayLetrasDobles = [
	"as.jfif",
	"as.jfif",
	"j.jfif",
	"j.jfif",
	"reina.jfif",
	"reina.jfif",
	"rey.jfif",
	"rey.jfif",
];
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
shuffle(arrayLetrasDobles);
console.log(arrayLetrasDobles);
for (let x = 1; x < principal.childNodes.length; x++) {
	let img = principal.childNodes[x].firstChild;
	img.setAttribute("name", arrayLetrasDobles[x - 1]);
}
/*d. Poderase pulsar sobre cada carta para “darlles a volta” e ver que letra esconden. (Unha mellora sería usar imaxes en lugar de letras).*/
let contadorVuelta = 0;
principal.addEventListener("click", pulsar);
function pulsar(e) {
	/*f. Só pode haber dúas cartas volteadas como máximo.*/
	/*i. Mentres están xiradas dúas cartas, non se poden xirar máis.*/
	if (contadorVuelta < 2) {
		contadorVuelta++;
		let cartaPulsada = e.target;
		/*e. Debes buscar un mecanismo para saber se unha carta está volteada ou non.*/
		cartaPulsada.setAttribute("id", "volteada");
		let name = cartaPulsada.getAttribute("name");
		cartaPulsada.setAttribute("src", "/img/" + name);
	}
	/*g. Cando hai dúas cartas volteadas comprobarase se a letra que esconden é igual, producíndose unha parella. Neste caso as cartas quedarán xiradas e non se poderá volver a pulsar sobre elas.*/
	let volteada = [];
	if (contadorVuelta == 2) {
		console.log("dos volteadas");
		let vol = document.querySelectorAll("#volteada");
		console.log(vol);

		for (const cartvol of vol) {
			console.log(cartvol);
			volteada.push(cartvol.getAttribute("name"));
		}
		console.log(volteada);
		if (volteada[0] === volteada[1]) {
			console.log("son iguales");
			vol[0].removeAttribute("id");
			vol[1].removeAttribute("id");
			contadorVuelta = 0;
			volteada.length = 0;
			console.log("volteada dentro del if");
			console.log(volteada);
		} else {
			/*h. Se a letra que esconden as dúas cartas xiradas non coincide, daráselle a volta a estas cartas despois dun segundos. Despois de pasado este tempo, volveranse a ocultar as letras para seguir buscando un par.*/
			console.log("no son iguales");
			setTimeout(function () {
				//quitarle atributo volteada
				vol[0].removeAttribute("id");
				vol[1].removeAttribute("id");
				vol[0].setAttribute("src", "/img/reverso.jfif");
				vol[1].setAttribute("src", "/img/reverso.jfif");
				console.log(vol[0]);
				console.log(vol[1]);
				contadorVuelta = 0;
				volteada.length = 0;
				console.log("volteada dentro del else");
				console.log(volteada);
			}, 1000);
		}
	}
}
