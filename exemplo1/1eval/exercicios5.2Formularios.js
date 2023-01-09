"use strict";
//validación con JavaScript
let nums = document.getElementById("nums");
nums.addEventListener("input", seleccionar);
function seleccionar() {
	let patron = nums.getAttribute("pattern");
	if (patron.match()) {
		error.html("<span>I am expecting 8 numbers or 3nums-2nums-3nums</span>");
		return false;
	}
}
//validacion con API
/*let nums = document.getElementById("nums");
nums.addEventListener("input", seleccionar);
function seleccionar(e) {
	if (nums.validity.patternMismatch) {
		nums.setCustomValidity("I am expecting 8 numbers or 3nums-2nums-3nums");
		nums.reportValidity();
	} else {
		nums.setCustomValidity("");
	}
}*/
