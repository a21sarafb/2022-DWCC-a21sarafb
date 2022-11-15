"use strict";
const proba2 = document.getElementsByTagName("td");
const largo = document.getElementsByTagName("tr");
let x = 0;
for (let a = 0; a < proba2.length; a++) {
	if (a === x) {
		x += largo.length + 1;
		proba2[a].style.backgroundColor = "red";
	}
}
