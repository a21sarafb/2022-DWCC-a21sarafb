"use strict";
let formulario = document.getElementById("form");
formulario.addEventListener("input", aumentar);
function aumentar(e) {
	e.preventDefault();
	let alto = document.getElementById("alto");
	let ancho = document.getElementById("ancho");
	console.log("Ancho 2");
	console.log(ancho.value);
	console.log("Alto 2");
	console.log(alto.value);
	if (
		(alto.value > 1000) |
		(alto.value < 0) |
		(ancho.value > 1000) |
		(ancho.value < 0)
	) {
		window.alert("Solo valores entre 0 y 1000");
	} else {
		let div = document.getElementById("div");
		let styleDiv = div.getAttribute("style");
		console.log(styleDiv);
		let nuevoAtributo =
			"width:" + ancho.value + "px;height:" + alto.value + "px";
		div.setAttribute("style", nuevoAtributo);
	}
}
