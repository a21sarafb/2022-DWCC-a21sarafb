"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */

//nome
let nome = document.getElementById("nome");
nome.addEventListener("blur", guardar);
nome.value = localStorage.getItem("nome");
nome.setAttribute("value", nome.value);

//num
let tel = document.getElementById("tel");
tel.addEventListener("blur", guardar);
tel.value = localStorage.getItem("tel");
tel.setAttribute("value", tel.value);

//select
let select = document.getElementById("select");
select.addEventListener("blur", guardar);
select.value = localStorage.getItem("select");
//select.setAttribute("checked", true);

//check
let checkbox = document.getElementById("check");
checkbox.addEventListener("click", guardar);
checkbox.checked = localStorage.getItem("check");
//checkbox.setAttribute("checked", true);

function guardar(e) {
	console.log(e.target.id);
	if (e.target.id == "nome") {
		localStorage.setItem("nome", nome.value);
	} else if (e.target.id == "tel") {
		localStorage.setItem("tel", tel.value);
	} else if (e.target.id == "select") {
		localStorage.setItem("select", select.value);
	} else if (e.target.id == "check") {
		localStorage.setItem("check", checkbox.checked);
	}
}
