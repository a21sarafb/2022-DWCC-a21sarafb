"use strict";
let container = document.getElementById("container");
console.log(container);
let texto = document.querySelectorAll(".pane");
console.log(texto);
container.addEventListener("click", elimina);
function elimina(e) {
	let pulsar = e.target.closest("button");
	let div = e.target.closest("div");
	console.log(pulsar);
	if (pulsar === null) {
		console.log("es nulo");
	} else {
		div.remove();
	}
}
