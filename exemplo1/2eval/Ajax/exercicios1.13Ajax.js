"use strict";
/* 2. Neste exercicio vaise usar a API https://jsonplaceholder.typicode.com/. Esta API
contén, entre outras cousas, información falsa de posts e comentarios. Debes
elaborar unha páxina web que conteña un formulario con un campo input, para
introducir o id do usuario (un número entre 1 e 10), e un botón. Ao pulsar o botón,
debe mostrarse nunha táboa toda a información dos posts do usuario que ten o id
indicado no formulario, sen recargar a páxina web. Por exemplo, para o usuario con
id = 1, a url de consulta será https://jsonplaceholder.typicode.com/posts?userId=1. */
const log = document.querySelector(".event-log");
let body = document.querySelector("body");
let newTable = document.createElement("table");
body.append(newTable);
let newTr = document.createElement("tr");
newTable.append(newTr);
let newTdUserId = document.createElement("td");
newTdUserId.innerHTML = "UserId";
newTr.append(newTdUserId);
let newTdId = document.createElement("td");
newTdId.innerHTML = "Id";
newTr.append(newTdId);
let newTdTitle = document.createElement("td");
newTdTitle.innerHTML = "Title";
newTr.append(newTdTitle);
let newTdBody = document.createElement("td");
newTdBody.innerHTML = "Body";
newTr.append(newTdBody);
document.querySelector("#xhr").addEventListener("click", () => {
	const comezoUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
	let inputText = document.querySelector(".id");
	const numId = inputText.value;
	const urlFinal = comezoUrl + numId;
	fetch(urlFinal)
		.then((response) => {
			if (response.ok) return response.json();
			return Promise.reject(response);
		})
		.then((data) => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				let table = document.querySelector("table");
				let newTr = document.createElement("tr");
				table.append(newTr);
				let userId = data[i].userId;
				let id = data[i].id;
				let title = data[i].title;
				let bodyData = data[i].body;
				let newTdUserId = document.createElement("td");
				newTdUserId.innerHTML = userId;
				newTr.append(newTdUserId);
				let newTdId = document.createElement("td");
				newTdId.innerHTML = id;
				newTr.append(newTdId);
				let newTdTitle = document.createElement("td");
				newTdTitle.innerHTML = title;
				newTr.append(newTdTitle);
				let newTdBody = document.createElement("td");
				newTdBody.innerHTML = bodyData;
				newTr.append(newTdBody);
			}
		})

		.catch(function (error) {
			console.warn("Something went wrong.", error.message);
		});
});
document.querySelector("#reload").addEventListener("click", () => {
	log.textContent = "";
	document.location.reload();
});
