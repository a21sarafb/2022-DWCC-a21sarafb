"use strict";
let table = document.getElementById("grid");
table.addEventListener("click", ordenar);
function ordenar(e) {
	let i, x, y;
	let pulsar = e.target.closest("th");
	let atributo = pulsar.getAttribute("data-type");
	let tbody = document.getElementsByTagName("tbody");
	let tr = tbody[0].getElementsByTagName("tr");
	const array = [];
	console.log("tr en 0");
	console.log(tr[0]);
	array.push(tr);
	if (atributo === "number") {
		// Bucle para recorrer todas las filas
		/*for (i = 0; i < tr.length; i++) {
			console.log(tr[i]);
			x = tr[i].getElementsByTagName("TD")[0];
		}*/
		array.sort(function (a, b) {
			//x = a.getElementsByTagName("TD")[0].innerHTML;
			//y = b.getElementsByTagName("TD")[0].innerHTML;
			return (
				a.getElementsByTagName("TD")[0].innerHTML -
				b.getElementsByTagName("TD")[0].innerHTML
			);
		});
		for (const arr of array) {
			console.log("for of");
			console.log(arr);
			let f = 0;
			for (const arr2 of arr) {
				console.log("for of 2");
				console.log(arr2);
				console.log("tr en [f].getElementsByTagName('TD')[0]");
				console.log(tr[f].getElementsByTagName("TD")[0].innerHTML);
				tr[f]
					.getElementsByTagName("TD")[0]
					.append(arr2.getElementsByTagName("TD")[0].innerHTML);
				f++;
			}
		}
		/*for (i = 0; i < array[0].length; i++) {
			let td = tr[i].getElementsByTagName("TD")[0];
			console.log(td);
			console.log(array[i]);
			td.append(array[i]);
			console.log("array en [i][i].getElementsByTagName('TD')[0].innerHTML");
			console.log(array[i][i].getElementsByTagName("TD")[0].innerHTML);
			tr[0].append(array[i][i].getElementsByTagName("TD")[0].innerHTML);
		}*/
	} else {
		// Bucle para recorrer todas las filas
		for (i = 0; i < tr.length; i++) {
			x = tr[i].getElementsByTagName("TD")[1];
			array.push(x.innerHTML);
		}
		array.sort(function (a, b) {
			if (a > b) {
				return 1;
			}
			if (a < b) {
				return -1;
			}
			return 0;
		});
		for (i = 0; i < tr.length; i++) {
			let td = tr[i].getElementsByTagName("TD")[1];
			console.log(td);
			console.log(array[i]);
			td.replaceWith(array[i]);
		}
	}
	console.log("array");
	console.log(array);
}

/*let table = document.getElementById("grid");
table.addEventListener("click", ordenar);
function ordenar(e) {
	let i, x, y;
	let switching = true;

	// está en el while hasta que no haga falta cambiar más
	while (switching) {
		switching = false;
		let pulsar = e.target.closest("th");
		let atributo = pulsar.getAttribute("data-type");
		let tbody = document.getElementsByTagName("tbody");
		let tr = tbody[0].getElementsByTagName("tr");
		if (atributo === "number") {
			// Bucle para recorrer todas las filas
			for (i = 1; i < tr.length - 1; i++) {
				var Switch = false;

				// Obtener 2 elementos que necesitan ser comparados
				x = tr[i].getElementsByTagName("TD")[0];
				console.log("esto es x");
				console.log(x);
				y = tr[i + 1].getElementsByTagName("TD")[0];
				console.log("esto es y");
				console.log(y);
				// Compruebe si es necesario cambiar 2 filas
				if (x.innerHTML > y.innerHTML) {
					// En caso afirmativo, switch pasa a ser falso y entra en el if
					Switch = true;
					break;
				}
			}
			if (Switch) {
				// Función para cambiar filas y marcar el cambio como completado
				tr[i].parentNode.insertBefore(tr[i + 1], tr[i]);
				switching = true;
			}
		} else {
			// Bucle para recorrer todas las filas
			for (i = 1; i < tr.length - 1; i++) {
				var Switch = false;

				// Obtener 2 elementos que necesitan ser comparados
				x = tr[i].getElementsByTagName("TD")[1];
				console.log("esto es x");
				console.log(x);
				y = tr[i + 1].getElementsByTagName("TD")[1];
				console.log("esto es y");
				console.log(y);

				// Compruebe si es necesario cambiar 2 filas
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// En caso afirmativo, switch pasa a ser falso y entra en el if
					Switch = true;
					break;
				}
			}
			if (Switch) {
				// Función para cambiar filas y marcar el cambio como completado
				tr[i].parentNode.insertBefore(tr[i + 1], tr[i]);
				switching = true;
			}
		}
	}
}*/
