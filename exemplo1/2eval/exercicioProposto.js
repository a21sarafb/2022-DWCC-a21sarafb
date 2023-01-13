"use strict";
const request = new XMLHttpRequest();
const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", () => {
	let urlInicio = "https://api.edamam.com/api/recipes/v2?type=public&q=";
	let inputText = document.querySelector(".ingredient");
	console.log(inputText.value);
	let urlFinal =
		"&app_id=3ec28d79&app_key=fcd09282a9404523092a4a1d33ad13f3&ingr=6-8&field=url";
	let cadenaFinal = urlInicio + inputText.value + urlFinal;
	console.log(cadenaFinal);
	request.open(
		"GET",
		cadenaFinal

		/*https://world.openfoodfacts.org/api/v0/product/737628064502.json*/
		/*https://poetrydb.org/title/all/author,title,lines,linecount.json*/
		/*https://api.agify.io?name=michael&country_id=US*/
	);
	request.responseType = "json";
	// send request
	request.send();
	request.addEventListener("loadend", function () {
		let body = document.querySelector("body");
		const recipe = request.response;
		console.log(recipe);
		let hits = recipe.hits;
		console.log(hits);
		for (let i = 0; i < hits.length; i++) {
			let self = hits[i].recipe;
			console.log(self.url);
			let newLink = document.createElement("a");
			let br = document.createElement("br");
			newLink.innerHTML = "Enlace a receta";
			newLink.setAttribute("target", "_blank");
			newLink.setAttribute("href", self.url);
			body.append(newLink);
			body.append(br);
		}
	});
});
document.querySelector("#reload").addEventListener("click", () => {
	log.textContent = "";
	document.location.reload();
});
/*https://developer.edamam.com/edamam-docs-recipe-api*/
