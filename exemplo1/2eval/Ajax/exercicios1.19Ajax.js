"use strict";
/* 4. Descarga o ficheiro municipiosCoruna.json. Coa información do ficheiro descargado
crea unha páxina web onde se mostre nunha táboa a información dos municipios da
Coruña (Nome, número de habitantes, superificie e capital).
Engade á túa páxina web unha caixa de texto de tal forma que cada vez que se
escriba unha letra se mostren na táboa só os municipios que teñan un nome que
comece polo texto escrito.
Configura tamén a táboa para que ao pulsar sobre unha fila se mostre toda a
información dese municipio que hai no ficheiro JSON. */
let body = document.querySelector("body");
let textArea = document.querySelector(".textArea");
textArea.addEventListener("click", modificar);
function modificar(e) {
	e.preventDefault();
	document.addEventListener("keyup", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			console.log(textArea.value);
			async function municipiosBuscador(buscar) {
				console.log("dentro de la funcion buscar");
				console.log(buscar);
				let longitudBuscar = buscar.length;
				let response = await fetch("municipiosCoruna.json");
				let datos = await response.json();
				console.log(datos);
				datos.forEach((dato) => {
					let largoNombre = dato.Denominación.substr(0, longitudBuscar - 1);
					console.log(largoNombre);
					if (largoNombre == buscar) {
						console.log("entro en el IF");
						let newTable = document.createElement("table");
						let newTr = document.createElement("tr");
						let newTdNome = document.createElement("td");
						newTdNome.innerHTML = dato.Denominación;
						newTr.append(newTdNome);
						let newTdNumHab = document.createElement("td");
						newTdNumHab.innerHTML = dato.Habitantes;
						newTr.append(newTdNumHab);
						let newTdSuperficie = document.createElement("td");
						newTdSuperficie.innerHTML = dato.Superficie;
						newTr.append(newTdSuperficie);
						let newTdCap = document.createElement("td");
						newTdCap.innerHTML = dato.Capitalidad;
						newTr.append(newTdCap);
						newTable.append(newTr);
						body.append(newTable);
					}
				});
			}
			municipiosBuscador(textArea.value);
		}
	});
}

async function municipios() {
	let response = await fetch("municipiosCoruna.json");
	let datos = await response.json();
	console.log(datos);
	console.log(textArea.value);
	datos.forEach((dato) => {
		let table = document.querySelector(".table");
		let newTr = document.createElement("tr");
		let newTdNome = document.createElement("td");
		newTdNome.innerHTML = dato.Denominación;
		newTr.append(newTdNome);
		let newTdNumHab = document.createElement("td");
		newTdNumHab.innerHTML = dato.Habitantes;
		newTr.append(newTdNumHab);
		let newTdSuperficie = document.createElement("td");
		newTdSuperficie.innerHTML = dato.Superficie;
		newTr.append(newTdSuperficie);
		let newTdCap = document.createElement("td");
		newTdCap.innerHTML = dato.Capitalidad;
		newTr.append(newTdCap);
		table.append(newTr);
	});
}
municipios();
