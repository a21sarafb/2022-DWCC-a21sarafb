"use strict";
let ul = document.getElementById("thumbs");
ul.addEventListener("click", cambiarFotos);
function cambiarFotos(e) {
	e.preventDefault();
	let pulsar = e.target.closest("a");
	let atributo = pulsar.getAttribute("href");
	console.log("atributo href donde se pulsa");
	let atributoAlt = pulsar.getAttribute("title");
	let fotoGrande = document.getElementById("largeImg");
	console.log("atributo src donde foto grande");
	fotoGrande.setAttribute("src", atributo);
	fotoGrande.setAttribute("alt", atributoAlt);
}
