"use strict";
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
console.log("Array de players1Final: " + players1Final);*/
/*console.log(
	"2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, mostra por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “ last_NAME”], deberase mostrar por consola “firtsName” e “lastName”."
);
const arrayEntrada = [
	"first_name",
	"last_NAME",
	"SaRA_fACal",
	"saRa_fACAl_bOuLLosA",
];
const camelCase = (arrayEntrada) => {
	let final = "";
	let todoMinusculas;
	let mensaxeDeRetorno = "";
	for (let i = 0; i < arrayEntrada.length; i++) {
		let separado = arrayEntrada[i].split("_");
		final = "";
		todoMinusculas = "";
		for (let x = 0; x < separado.length; x++) {
			let todoMinusculas = separado[x].toLowerCase();
			let primeraLetra = todoMinusculas.substring(0, 1).toUpperCase();
			todoMinusculas =
				primeraLetra + todoMinusculas.substring(1, separado[x].length);
			final += todoMinusculas;
		}
		let primeraLetraFinal = final.substring(0, 1).toLowerCase();
		mensaxeDeRetorno = primeraLetraFinal + final.substring(1, final.length);
		console.log(mensaxeDeRetorno);
		//return mensaxeDeRetorno;
	}
	return mensaxeDeRetorno;
};
camelCase(arrayEntrada);*/
