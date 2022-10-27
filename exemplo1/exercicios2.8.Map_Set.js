console.log(
	"1. O seguinte mapa almacena información dos eventos ocorridos durante un partido indicando o minuto no que se produciron:"
);
const gameEvents = new Map([
	[17, "GOAL"],
	[36, "Substitution"],
	[47, "GOAL"],
	[61, "Substitution"],
	[64, "Yellow card"],
	[69, "Red card"],
	[70, "Substitution"],
	[72, "Substitution"],
	[76, "GOAL"],
	[80, "GOAL"],
	[92, "Yellow card"],
]);
console.log(
	"a. Crea un novo array chamado eventos que almacene os diferentes eventos (non o minuto) ocorridos durante o partido (sen que haxa duplicados)."
);
const eventos = new Set();
for (const value of gameEvents.values()) {
	eventos.add(value);
}
console.log(eventos);
console.log(
	"b. Recorre con un bucle os gameEvents e mostra información de cada evento, indicando se ocorreu na primeira metade ou na segunda metade do partido, por exemplo: [PRIMEIRA PARTE] 17: GOAL."
);
for (const [chave, valor] of gameEvents) {
	if (chave <= 45) {
		console.log("[PRIMEIRA PARTE] " + chave + ": " + valor + ".");
	} else {
		console.log("[SEGUNDA PARTE] " + chave + ": " + valor + ".");
	}
}
