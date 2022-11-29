"use strict";
let lista = document.getElementById("ul");
lista.addEventListener("click", seleccionar);
function seleccionar(e) {
	let pulsar = e.target.closest("li");
	let li = document.querySelectorAll("li");
	console.log(li);
	li.forEach((esto) => {
		if (esto.hasAttribute("class")) {
			esto.removeAttribute("class");
		}
		console.log(esto);
	});
	console.log(pulsar);

	pulsar.classList.add("selected");
}
