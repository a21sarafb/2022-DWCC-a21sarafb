"use strict";
let ligazon = document.getElementById("ligazon");
let spanOculto = document.getElementById("adicional");
spanOculto.style.display = "none";
function vuelveSpam() {
	spanOculto.style.display = "";
	ligazon.style.display = "none";
}
ligazon.addEventListener("click", vuelveSpam);
