"use strict";
/*● O innerHTML da etiqueta “Escolle sexo”:*/
console.log("O innerHTML da etiqueta “Escolle sexo");
let escolle = document.getElementsByTagName("label");
console.log(escolle[3].innerHTML);
/*● O textContent da etiqueta anterior*/
console.log("O textContent da etiqueta anterior");
console.log(escolle[3].textContent);
/*● O valor do primeiro input de sexo*/
console.log("O valor do primeiro input de sexo");
let sexo = document.getElementsByName("sexo");
console.log(sexo[0].value);
/*● O valor do sexo que estea seleccionado.*/
console.log("O valor do sexo que estea seleccionado.");
let inputs = document.getElementsByTagName("input");
for (const input of inputs) {
	if (input.checked) {
		console.log(input.value);
	}
}
/*● O texto de cada un dos elementos <li>*/
console.log("O texto de cada un dos elementos <li>");
let li = document.getElementsByTagName("li");
for (const lis of li) {
	console.log(lis.textContent);
}
/*● Indica cantos elementos <li> hai. */
console.log("Indica cantos elementos <li> hai");
console.log("Hay " + li.length + " elementos <li>");
/*Indica o valor do atributo data-widget-name*/
console.log(document.querySelector("div[data-widget-name]").dataset.widgetName);
//OUTRA FORMA
console.log(
	document
		.querySelector("div[data-widget-name]")
		.getAttribute("data-widget-name")
);
