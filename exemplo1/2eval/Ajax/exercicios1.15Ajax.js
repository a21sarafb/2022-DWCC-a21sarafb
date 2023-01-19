"use strict";
/* 4. Crea unha páxina web que mostre información dun Pokémon escollido de forma
aleatorio usando a PokéAPI. Para acceder á información dun Pokémon pode usarse
a URL https://pokeapi.co/api/v2/pokemon/{id or name}.
Cada vez que se cargue a páxina web, debe xerarse un número aleatorio entre 1 e
1000, que será o id do Pokémon a mostrar (hai 1010 exactamente, aínda que os
últimos aínda non teñen imaxe).
Unha vez obtido o id, consultarase a API para acceder a toda a información do
Pokémon.
Na páxina web debe mostrarase o nome do Pokémon, a imaxe que está
almacenada na propiedade sprites.other.home.front_default do obxecto resposta e
as habilidades.
Cada Pokémon ten varias habilidades. Deben mostrarse os nomes das habilidades e
engadir unha ligazón para consultala na API. Así por exemplo, o Pokémon con id = 1
ten a habilidade denominada overgrow.
Na ligazón de consulta da habilidade aparece o seu nome en diferentes idiomas.
Busca o nome en español e móstrao tamén na páxina web. */
const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", () => {
	//mostrar reload
	let reload = document.querySelector("#reload");
	reload.setAttribute("class", "raise");

	//elaborar url co numero aleatorio
	const comezoUrl = "https://pokeapi.co/api/v2/pokemon/";
	const numId = Math.floor(Math.random() * (905 - 1) + 1);
	console.log(numId);
	let numIdString = numId.toString();
	const urlFinal = comezoUrl.concat(numIdString);
	console.log(urlFinal);
	fetch(urlFinal)
		.then((response) => {
			if (response.ok) return response.json();
			return Promise.reject(response);
		})
		//obtención de datos
		.then((data) => {
			console.log(data);
			//nome
			let newParrafo = document.createElement("h1");
			newParrafo.innerHTML = "Nome: " + data.name.toUpperCase();
			let divNome = document.querySelector(".nome");
			divNome.append(newParrafo);

			//habilidades
			let divHabilidades = document.querySelector(".habilidades");
			divHabilidades.innerHTML = "Habilidades: ";
			let arrayHabilidades = data.abilities;
			let lista = document.createElement("ul");
			arrayHabilidades.forEach(function (habilidad) {
				console.log(habilidad);
				let elementoLista = document.createElement("li");
				let enlaceHabilidades = document.createElement("a");
				enlaceHabilidades.setAttribute("target", "_blank");
				enlaceHabilidades.setAttribute("href", habilidad.ability.url);
				//obtendo a url para poñer a habilidade en español
				fetch(habilidad.ability.url)
					.then((response) => {
						if (response.ok) return response.json();
						return Promise.reject(response);
					})
					//obtención de datos de habilidad en español
					.then((data) => {
						console.log(data);
						//nombre español
						let arrayIdiomasHabilidad = data.names;
						arrayIdiomasHabilidad.forEach(function (idioma) {
							if (idioma.language.name === "es") {
								enlaceHabilidades.innerHTML = idioma.name;
							}
						});
					})
					.catch(function (error) {
						console.warn("Something went wrong.", error.message);
					});

				elementoLista.append(enlaceHabilidades);
				lista.append(elementoLista);
			});
			divHabilidades.append(lista);

			//imaxe
			let bodyImaxe = document.querySelector(".imaxe");
			let urlImaxe = data.sprites.other.home.front_shiny;
			let imaxe = document.createElement("img");
			imaxe.setAttribute("src", urlImaxe);
			imaxe.setAttribute("width", 300);
			imaxe.setAttribute("height", 300);
			imaxe.setAttribute("alt", data.name);
			bodyImaxe.append(imaxe);

			//tipo
			let divTipo = document.querySelector(".tipo");
			divTipo.innerHTML = "Tipo: ";
			let arrayTipo = data.types;
			arrayTipo.forEach(function (tipos) {
				let nombreTipo = tipos.type.name;
				let urlTipo = tipos.type.url;
				console.log(nombreTipo);
				console.log(urlTipo);
				fetch(urlTipo)
					.then((response) => {
						if (response.ok) return response.json();
						return Promise.reject(response);
					})
					//obtención de datos de tipo en español
					.then((data) => {
						console.log("aqui");
						console.log(data);
						let arrayIdiomasTipo = data.names;
						//nombre español + imagen

						arrayIdiomasTipo.forEach(function (idioma) {
							if (idioma.language.name === "es") {
								let imagenTipo = document.createElement("img");
								let urlImaxeTipoP = "img\\";
								let tipoTexto = idioma.name.toLowerCase();
								let urlImaxeTipoF = ".png";
								console.log("ESTO");

								let urlTipoFinal = urlImaxeTipoP.concat(
									tipoTexto,
									urlImaxeTipoF
								);
								console.log(urlTipoFinal);
								imagenTipo.setAttribute("src", urlTipoFinal);
								imagenTipo.setAttribute("width", 100);
								imagenTipo.setAttribute("height", 30);
								imagenTipo.setAttribute("alt", idioma.name);
								divTipo.append(imagenTipo);
							}
						});
					})
					.catch(function (error) {
						console.warn("Something went wrong.", error.message);
					});
			});

			//ocultar boton de xenerar
			let boton = document.querySelector("#xhr");
			boton.setAttribute("class", "hidden");
		})
		//captura de erros
		.catch(function (error) {
			console.warn("Something went wrong.", error.message);
		});
});
//evento al pulsar reload
document.querySelector("#reload").addEventListener("click", () => {
	log.textContent = "";
	document.location.reload();
});
