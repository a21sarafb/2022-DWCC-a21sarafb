"use strict";
let boton = document.getElementsByClassName("remove-button");
console.log(boton);
let texto = document.getElementsByClassName("pane");
console.log(texto);
function elim() {
	texto.classList.add("hidden");
}
boton.addEventListener("click", elim);
