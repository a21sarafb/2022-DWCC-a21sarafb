/*● O número de ligazóns da páxina.*/
console.log("O número de ligazóns da páxina");
console.log("O número de ligazóns é " + document.links.length);
/*● A dirección da penúltima ligazón.*/
console.log("A dirección da penúltima ligazón");
console.log(document.links[document.links.length - 1].href);
/*● O número de ligazóns que apuntan a http://proba*/
console.log("O número de ligazóns que apuntan a http://proba");
linksProba = document.links;
contador = 0;
for (const links of linksProba) {
	console.log(links.href);
	if (links.href === "http://proba/") {
		contador++;
	}
}
console.log("O número de links que apuntan a http://proba es: " + contador);

/*● O número de ligazóns do terceiro parágrafo.*/
console.log("O número de ligazóns do terceiro parágrafo");
let parrafos = document.getElementsByTagName("p");
let ultimoParrafo = parrafos[parrafos.length - 1];
let linksParrafos = ultimoParrafo.getElementsByTagName("a");
console.log("O número de links do terceiro párrafo é: " + linksParrafos.length);
/*● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa.*/
console.log(
	"Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa"
);
for (const links2 of linksProba) {
	if (links2.href === "http://proba/") {
		links2.style.color = "orange";
	}
}
