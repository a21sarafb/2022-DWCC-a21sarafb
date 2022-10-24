"use strict";
/*console.log(
	"1. Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), precio (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x precio)."
);
const television = {
	marca: "Samsung",
	categoria: "televisores",
	unidades: 4,
	precio: 354.99,
	importe() {
		return this.unidades * this.precio;
	},
};
console.log(television);
console.log(television.importe());*/
/*console.log(
	"2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:"
);
console.log(
	"Utilizando a desestruturación de obxectos crea unha variable para cada unha das propiedades do obxecto odds. Estas variables deben levar os nomes 'team1', 'draw' e 'team2'."
);
const game = {
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};
const {
	odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log("Variable team1 = " + team1);
console.log("Variable draw = " + draw);
console.log("Variable team2 = " + team2);*/
/*cconsole.log("3. Dado o seguinte obxecto:");
const game = {
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
console.log(
	"a. Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol. Exemplo: 'Gol 1: Lewandowski'."
);
console.log(
	"b. Crea un novo obxecto chamado scorers que conteña o nome dos xogadores que marcaron e o número de goles que marcaron como valor. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}"
);
for (const arrayXogadores in game) {
	for (let i = 0; i < game[arrayXogadores].length; i++) {
		console.log("Gol " + (i + 1) + ": " + game[arrayXogadores][i]);
	}
}*/
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
console.log(
	"b. Crea un array co nome completo dos inventores. Por exemplo: ['Albert Einstein', 'Isaac Newton', ...]"
);
console.log(
	"c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido"
);
console.log("d. Ordena o array de inventores alfabeticamente polo apelido");
console.log("e. Ordena o array de inventores pola data de nacemento");
console.log("f. Calcula a suma dos anos que viviron todos os inventores.");
console.log(
	"g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo"
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
