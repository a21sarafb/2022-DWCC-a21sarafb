"use strict";
let table = document.getElementById("grid");
table.addEventListener("click", ordenar);
function ordenar(e) {
	let x, y;
	let pulsar = e.target.closest("th");
	let atributo = pulsar.getAttribute("data-type");
	let tbody = document.getElementsByTagName("tbody");
	let tr = tbody[0].getElementsByTagName("tr");
	var arr = Array.from(tr);
	if (atributo === "number") {
		arr.sort(function (a, b) {
			x = a.getElementsByTagName("TD")[0].innerHTML;
			y = b.getElementsByTagName("TD")[0].innerHTML;
			return x - y;
		});
		tbody[0].append(...arr);
	} else {
		arr.sort((a, b) => {
			const x = a.getElementsByTagName("TD")[1].innerHTML.toUpperCase();
			const y = b.getElementsByTagName("TD")[1].innerHTML.toUpperCase();
			if (x < y) return -1;
			if (x > y) return 1;
			return 0;
		});
		tbody[0].append(...arr);
	}
}
