"use strict";
let content = document.getElementById("contents");
content.addEventListener("click", permiso);
function permiso(e) {
	let pregunta = confirm("Desea abrir la página?");
	if (pregunta == false) {
		e.preventDefault();
	}
}
