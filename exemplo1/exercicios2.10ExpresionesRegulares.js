"use strict";
console.log(
	"1. Escribe unha expresión regular para comprobar que cada un dos seguintes elementos aparece nunha cadea. a. car e cat b. pop e prop c. ferret, ferry e ferrari d. Calquera palabra rematada en ious e. Un espazo seguido de punto, como, dous puntos ou punto e coma. f. Unha palabra con máis de 6 letras. g. Unha palabra sen a letra e (ou E). Unha vez teñas a expresión regular creada, comproba se se pode facer máis pequena. Utiliza o seguinte código para comprobar o resultado:"
);
verify(/.../, ["my car", "bad cats"], ["camper", "high art"]);
verify(/.../, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(/.../, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(/.../, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(/.../, ["bad punctuation ."], ["escape the period"]);
verify(
	/.../,
	["Siebentausenddreihundertzweiundzwanzig"],
	["no", "three small words"]
);
verify(
	/.../,
	["red platypus", "wobbling nest"],
	["earth bed", "learning ape", "BEET"]
);
function verify(regexp, yes, no) {
	// Ignore unfinished exercises
	if (regexp.source == "...") return;
	for (let str of yes)
		if (!regexp.test(str)) {
			console.log(`Failure to match '${str}'`);
		}
	for (let str of no)
		if (regexp.test(str)) {
			console.log(`Unexpected match for '${str}'`);
		}
}
