"use strict";
/* 1. Reescribe o seguinte código usando async/await: 
https://no-such-user.json*/
function loadJson(url) {
	return fetch(url).then((response) => {
		if (response.status == 200) {
			return response.json();
		} else {
			throw new Error(response.status);
		}
	});
}
loadJson("https://pokeapi.co/api/v2/pokemon/25").catch(console.log); // Error: 404

async function loadJsonAsync(url) {
	let response = await fetch(url);
	let datos = await response.json();
	console.log(datos);
}
loadJsonAsync("https://pokeapi.co/api/v2/pokemon/25").catch(console.log);
