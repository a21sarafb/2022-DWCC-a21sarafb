"use strict";
let ul = document.getElementById("thumbs");
ul.addEventListener("click", fotitos);
function fotitos(e) {
	e.preventDefault();
	let pulsar = e.target.closest("a");
	console.log(pulsar);
}
