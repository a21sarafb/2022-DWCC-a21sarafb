"use strict";
/* ● Cando o cursor do rato entre/saia no botón, mostra unha mensaxe por
consola indicándoo.*/
let input = document.getElementById("ocultar");
function ratoEntra() {
	console.log("O cursor do rato entra no botón");
}
function ratoSae() {
	console.log("O cursor do rato sae do botón");
}
input.addEventListener("mouseover", ratoEntra);
input.addEventListener("mouseout", ratoSae);
/*● Ao pulsar o botón debe desaparecer o div con id=texto.*/
let divTexto = document.getElementById("texto");
function elimTexto() {
	divTexto.style.display = "none";
}
input.addEventListener("click", elimTexto);
/*● Cando se escriba algo na caixa de texto, debe mostrarse a tecla pulsada no
div e tamén o código da tecla pulsada. Ademais, se o div estaba oculto, debe
mostrarse.*/
let escribir = (e) => {
	document.getElementById("texto").classList.remove("oculto");
	document.getElementById(
		"texto"
	).innerHTML = `Tecla: ${e.key} Codigo: ${e.code}`;
};
document
	.getElementById("textoExercicio1")
	.addEventListener("keypress", escribir);
