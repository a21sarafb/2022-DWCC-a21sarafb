"use strict";
let nodoPai = document.getElementById("tree");
console.log(nodoPai);
nodoPai.addEventListener("click", mostrar);

function mostrar(e) {
	let pulsar = e.target.closest("li");
	let div = e.target.closest("ul");
	console.log(pulsar);
	console.log(div);
	if (pulsar === null) {
		console.log("es nulo");
	} else {
		div.style.display = "none";
	}
}