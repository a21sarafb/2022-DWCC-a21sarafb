"use strict";
console.log(
	"1. Escribe unha expresión regular para comprobar que cada un dos seguintes elementos aparece nunha cadea. Unha vez teñas a expresión regular creada, comproba se se pode facer máis pequena. Utiliza o seguinte código para comprobar o resultado:"
);
console.log("a. car e cat");
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
console.log("b. pop e prop");
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
console.log("c. ferret, ferry e ferrari");
verify(
	/ferr[etyari]/,
	["ferret", "ferry", "ferrari"],
	["ferrum", "transfer A"]
);
console.log("d. Calquera palabra rematada en ious");
verify(
	/ious\b/,
	["how delicious", "spacious room"],
	["ruinous", "consciousness"]
);
console.log(
	"e. Un espazo seguido de punto, como, dous puntos ou punto e coma."
);
verify(/ [\.,;:]/, ["bad punctuation ."], ["escape the period"]);
console.log("f. Unha palabra con máis de 6 letras.");
verify(
	/\w{6,}/,
	["Siebentausenddreihundertzweiundzwanzig"],
	["no", "three small words"]
);
console.log("g. Unha palabra sen a letra e (ou E).");
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
/*console.log(
	"2. Unha dirección de rede MAC está composta por 6 grupos de dous números hexadecimais separados por “:”. Por exemplo '01:32:54:67:89:AB'. Escribe unha expresión regular que comprobe se unha dirección MAC é correcta."
);
let MAC = "01:32:54:67:89:AB";
let MAC2 = "0X:32:54:67:89:AB";
let MAC3 = "01:32:54:67:89";
let MAC4 = "01:32:54:6789:AB";
let MAC5 = "01:32:54:67:89:AB:89";
let regMAC = /^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/;
regMAC.test(MAC)
	? console.log("Dirección MAC correcta")
	: console.log("Dirección MAC incorrecta");
regMAC.test(MAC2)
	? console.log("Dirección MAC correcta")
	: console.log("Dirección MAC incorrecta");
regMAC.test(MAC3)
	? console.log("Dirección MAC correcta")
	: console.log("Dirección MAC incorrecta");
regMAC.test(MAC4)
	? console.log("Dirección MAC correcta")
	: console.log("Dirección MAC incorrecta");
regMAC.test(MAC5)
	? console.log("Dirección MAC correcta")
	: console.log("Dirección MAC incorrecta");*/
console.log(
	"3. Crea unha expresión regular para buscar códigos de cores no formato #RGB ou #RRGGBB nun texto. Un código de color é unha cadea formada polo carácter “#” seguido de 3 ou 6 cifras hexadecimais."
);
let RGB = "#111111";
let RGB2 = "#FFFFFF";
let RGB3 = "#111";
let RGB4 = "#FFF";
let RGB5 = "#111F11";
let RGB6 = "#1A1";
let RGB7 = "#1F2F3F";
let regRGB = /^#(\d?[A-F]?){3,6}$/;
regRGB.test(RGB)
	? console.log("Código de cores (#111111) 1 correcta")
	: console.log("Código de cores (#111111) 1 incorrecto");
regRGB.test(RGB2)
	? console.log("Código de cores (#FFFFFF) 2 correcta")
	: console.log("Código de cores (#FFFFFF) 2 incorrecto");
regRGB.test(RGB3)
	? console.log("Código de cores (#111) 3 correcta")
	: console.log("Código de cores (#111) 3 incorrecto");
regRGB.test(RGB4)
	? console.log("Código de cores (#FFF) 4 correcta")
	: console.log("Código de cores (#FFF) 4 incorrecto");
regRGB.test(RGB5)
	? console.log("Código de cores (#111F11) 5 correcta")
	: console.log("Código de cores (#111F11) 5 incorrecto");
regRGB.test(RGB6)
	? console.log("Código de cores (#1A1) 6 correcta")
	: console.log("Código de cores (#1A1) 6 incorrecto");
regRGB.test(RGB7)
	? console.log("Código de cores (#1F2F3F) 7 correcta")
	: console.log("Código de cores (#1F2F3F) 7 incorrecto");
/*console.log(
	'4. Escribe unha expresión regular para números. Debe incluír números enteiros, decimais e números negativos. Así, na cadea "-1.2 4 0 -123.5." debe encontrar 4 números'
);
let nums = "-1.2 4 0 -123.5 3.";
let regNums = /^([-])?(\d)+([\.]\d)?$/g;
console.log(regNums.exec(nums));
console.log(regNums.exec(nums));
console.log(regNums.exec(nums));
console.log(regNums.exec(nums));
console.log(regNums.exec(nums));*/
console.log(
	"5. Crea unha función que comprobe se un contrasinal é válido, é dicir, cumpre as seguintes condicións: a. Mínimo 8 caracteres. b. Sen espazos en branco. c. Que teña, polo menos, 3 das seguintes tipos de caracteres: i. maiúsculas ii. minúsculas iii. números iv. caracteres especiais: ¡!$?%&#@/()=¿?*[];,:._<>+-"
);
let contrasinal = "SaR1Afa2cal1!$;";
let contrasinal2 = "SaR1A!";
let contrasinal3 = "SaR1Afa2";
let contrasinal4 = "sarafacal2";
let contrasinal5 = "sara facal2";
//por separado
let regContrasinal =
	/^(?=.*[a-z])?(?=.*[A-Z])?(?=.*\d)?(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])?([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
regContrasinal.test(contrasinal)
	? console.log("Contrasinal ('SaR1Afa2cal1!$;') correcto")
	: console.log("Contrasinal ('SaR1Afa2cal1!$;') incorrecto");
regContrasinal.test(contrasinal2)
	? console.log("Contrasinal ('SaR1A!') correcto")
	: console.log("Contrasinal ('SaR1A!') incorrecto");
regContrasinal.test(contrasinal3)
	? console.log("Contrasinal ('SaR1Afa2') correcto")
	: console.log("Contrasinal ('SaR1Afa2') incorrecto");
regContrasinal.test(contrasinal4)
	? console.log("Contrasinal ('sarafacal2') correcto")
	: console.log("Contrasinal ('sarafacal2') incorrecto");
regContrasinal.test(contrasinal5)
	? console.log("Contrasinal ('sara facal2') correcto")
	: console.log("Contrasinal ('sara facal2') incorrecto");
console.log(
	"6. Ás veces é útil eliminar as etiquetas HTML dun texto para evitar que se inclúa código mal intencionado nunha páxina web.Crea unha función á que se lle pase un texto e devolva o mesmo texto coas etiquetas HTML eliminadas."
);
let conEtiquetas =
	"<h1>Probando si funciona </h1><h1>Probando si funciona </h1>";
let conEtiquetas2 =
	"<h1>Probando si funciona </h1><h2>Este ya es más chunga</h2>";
function eliminaEtiquetas(conEtiquetas) {
	let regEtiqueta = /<(.*?)>/g;
	conEtiquetas = conEtiquetas.replace(regEtiqueta, " ");
	return conEtiquetas;
}
console.log(eliminaEtiquetas(conEtiquetas));
console.log(eliminaEtiquetas(conEtiquetas2));
console.log(
	"7. Dado o seguinte array de insultos, fai un script tal que cada vez que apareza un deles nun texto o substitúa pola primeira letra do insulto e un número de asteriscos igual á lonxitude do insulto - 1."
);
let insultos = [
	"testán",
	"langrán",
	"fervellasverzas",
	"baldreu",
	"lacazán",
	"pillabán",
];
console.log(
	'Así, por exemplo, cada vez que apareza testán nun texto, debe substituírse por "t*****"'
);
