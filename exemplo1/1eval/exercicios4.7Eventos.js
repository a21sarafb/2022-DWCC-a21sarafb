"use strict";
let nodoPai = document.getElementById("tree");
nodoPai.addEventListener("click", mostrar);

function mostrar(e) {
	let div = e.target.closest("li");
	let ul = div.getElementsByTagName("ul");
	console.log("ul en [0] --> ");
	console.log(ul[0]);
	console.log("variable div--> ");
	console.log(div);
	if (ul[0].hasAttribute("style")) {
		div.style.display = " ";
		ul[0].removeAttribute("style");
	} else {
		ul[0].style.display = "none";
	}
}
