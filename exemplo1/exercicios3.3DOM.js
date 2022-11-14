/*const proba = document.getElementById("primera");
let primeiro = proba.firstElementChild;
primeiro.style.backgroundColor = "red";*/

const proba2 = document.getElementsByTagName("td");
for (let a = 0; a < proba2.length; a++) {
	if (a == 0 || a == 6 || a == 12 || a == 18 || a == 24) {
		proba2[a].style.backgroundColor = "red";
	}
}
/*let segundo = proba2[6];
segundo.style.backgroundColor = "red";

let tercero = proba2[12];
tercero.style.backgroundColor = "red";

let cuarto = proba2[18];
cuarto.style.backgroundColor = "red";

let quinto = proba2[24];
quinto.style.backgroundColor = "red";*/
