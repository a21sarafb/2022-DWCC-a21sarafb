"use strict";
let li = document.getElementsByTagName("li");
console.log(li);
for (const elim of li) {
	elim.remove();
}
let x = document.querySelectorAll("li");
let cantidad = x.length;
if (cantidad > 0) {
	x = x[cantidad - 1];
	x.remove();
}
