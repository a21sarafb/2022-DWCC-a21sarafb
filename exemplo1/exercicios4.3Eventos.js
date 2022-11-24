"use strict";
let boton = document.getElementById("engadir");
function añadirTexto() {
	let ul = document.querySelector(".lista");
	let texto = document.getElementById("textoExercicio3");
	let liLast = document.createElement("li");
	let text = texto.value;
	liLast.innerHTML = text;
	ul.append(liLast);
}
boton.addEventListener("click", añadirTexto);
