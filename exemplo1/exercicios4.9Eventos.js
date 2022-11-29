"use strict";
/*
content.addEventListener("click", permiso);*/
let content = document.getElementById("contents");
content.addEventListener("click", permiso);
function permiso(e) {
	//let pulsar = e.target.closest("i");
	let enlace = e.target.closest("a");
	let atributo = enlace.getAttribute("href");
	pregunta = confirm("Desea abrir la página?");
	if (pregunta == true) {
		e.preventDefault();
	} else {
		e.preventDefault();
	}
}
