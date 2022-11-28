"use strict";
let table = document.getElementById("grid");
table.addEventListener("click", ordenar);
function ordenar(e) {
	let i, x, y;
	let switching = true;

	// está en el while hasta que no haga falta cambiar más
	while (switching) {
		switching = false;
		let pulsar = e.target.closest("th");
		console.log(pulsar);
		let atributo = pulsar.getAttribute("data-type");
		var rows = table.pulsar.rows;
		console.log("esto es rows");
		console.log(rows);
		if (atributo === "number") {
			// Bucle para recorrer todas las filas
			for (i = 1; i < rows.length - 1; i++) {
				var Switch = false;

				// Obtener 2 elementos que necesitan ser comparados
				x = rows[i].getElementsByTagName("TD")[0];
				console.log("esto es x");
				console.log(x);
				y = rows[i + 1].getElementsByTagName("TD")[0];
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
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
			}
		} else {
			// Bucle para recorrer todas las filas
			for (i = 1; i < rows.length - 1; i++) {
				var Switch = false;

				// Obtener 2 elementos que necesitan ser comparados
				x = rows[i].getElementsByTagName("TD")[0];
				y = rows[i + 1].getElementsByTagName("TD")[0];

				// Compruebe si es necesario cambiar 2 filas
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// En caso afirmativo, switch pasa a ser falso y entra en el if
					Switch = true;
					break;
				}
			}
			if (Switch) {
				// Función para cambiar filas y marcar el cambio como completado
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
			}
		}
	}
}
