"use strict";
/* 4. Descarga o ficheiro municipiosCoruna.json. Coa información do ficheiro descargado
crea unha páxina web onde se mostre nunha táboa a información dos municipios da
Coruña (Nome, número de habitantes, superificie e capital).
Engade á túa páxina web unha caixa de texto de tal forma que cada vez que se
escriba unha letra se mostren na táboa só os municipios que teñan un nome que
comece polo texto escrito.
Configura tamén a táboa para que ao pulsar sobre unha fila se mostre toda a
información dese municipio que hai no ficheiro JSON. */
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.path[1]);
});

const log = document.querySelector(".event-log");
let form = document.querySelector("form");
document.querySelector("#xhr").addEventListener("click", () => {
	let inputText = document.querySelector(".id");
	const buscar = inputText.value;
	async function municipiosBuscador(buscar) {
		let longitudBuscar = buscar.length;
		let response = await fetch("municipiosCoruna.json");
		let datos = await response.json();
		console.log(datos);
		let newTable = document.createElement("table");
		newTable.setAttribute("class", "table responstable");
		let cabecera = document.createElement("tr");
		let th1 = document.createElement("th");
		th1.innerHTML = "Nombre";
		cabecera.append(th1);
		let th2 = document.createElement("th");
		th2.innerHTML = "Número de habitantes";
		cabecera.append(th2);
		let th3 = document.createElement("th");
		th3.innerHTML = "Superficie m2";
		cabecera.append(th3);
		let th4 = document.createElement("th");
		th4.innerHTML = "Capitalidad";
		cabecera.append(th4);

		newTable.append(cabecera);
		datos.forEach((dato) => {
			let largoNombre = dato.Denominación.substr(0, longitudBuscar);
			if (largoNombre == buscar) {
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
				form.append(newTable);
			}
		});
	}
	municipiosBuscador(buscar);
});
document.querySelector("#reload").addEventListener("click", () => {
	log.textContent = "";
	document.location.reload();
});

async function municipios() {
	let response = await fetch("municipiosCoruna.json");
	let datos = await response.json();
	console.log(datos);
	datos.forEach((dato) => {
		let table = document.querySelector("tbody");
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
