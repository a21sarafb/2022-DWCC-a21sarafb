"use strict";
//obtiene elementos
const tituloDesplegable = document.querySelector(".dropdown .texto");
const opcionDesplegable = document.querySelectorAll(".dropdown .option");
console.log(tituloDesplegable);
console.log(opcionDesplegable);
//vincula listeners a estos elementos
tituloDesplegable.addEventListener("click", modificaMenu);

function esconder(elem, className) {
	if (elem.className.indexOf(className) !== -1) {
		elem.className = elem.className.replace(className, "");
	} else {
		elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
	}

	return elem;
}
function modificaMenu() {
	const menu = document.querySelector(".menu");
	console.log(menu);
	esconder(menu, "hide");
}
