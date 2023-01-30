"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */

const log = document.querySelector(".event-log");
let form = document.querySelector("form");
document.querySelector("#xhr").addEventListener("click", () => {
	let nome = document.querySelector("#nome");
	localStorage.setItem("nome", nome.value);
	let nomeForm = localStorage.getItem("nome");
	console.log(nomeForm);
	nome.setAttribute("value", nomeForm);
	let tel = document.querySelector("#tel");
	localStorage.setItem(tel, tel.value);
	let telForm = localStorage.getItem(tel);
	console.log(telForm);
	tel.setAttribute("value", telForm);

	/*let empleo = document.querySelector(".empleoactual");
	let inputEmpleo = empleo.getElementsByTagName("input");
	console.log(empleo);
	console.log(inputEmpleo);
	for (let input in inputEmpleo) {
		if (input.isSelected) {
			console.log(input);
		}
	}

	let intereses = document.querySelector(".intereses");
	console.log(intereses);*/
});
