"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */
let formulario = document.getElementById("myForm");
formulario.addEventListener("change", funcionCambios);

//nome
let nome = document.getElementById("nome");
nome.value = localStorage.getItem("nome");

//num
let tel = document.getElementById("tel");
tel.value = localStorage.getItem("tel");

//select 1
let select = document.getElementById("select");
select.value = localStorage.getItem("select");

//select 2
let select2 = document.getElementById("select2");
select2.value = localStorage.getItem("select2");

//check
let checkbox = document.getElementById("check");
checkbox.checked = localStorage.getItem("check");

//check2
let checkbox2 = document.getElementById("check2");
checkbox2.checked = localStorage.getItem("check2");

//check3
let checkbox3 = document.getElementById("check3");
checkbox3.checked = localStorage.getItem("check3");

function funcionCambios(e) {
	console.log(e.target.id);
	if (e.target.id == "nome") {
		localStorage.setItem("nome", nome.value);
	} else if (e.target.id == "tel") {
		localStorage.setItem("tel", tel.value);
	} else if (e.target.id == "select") {
		localStorage.setItem("select", select.value);
	} else if (e.target.id == "select2") {
		localStorage.setItem("select2", select2.value);
	} else if (e.target.id == "check") {
		localStorage.setItem("check", checkbox.checked);
	} else if (e.target.id == "check2") {
		localStorage.setItem("check2", checkbox2.checked);
	} else if (e.target.id == "check3") {
		localStorage.setItem("check3", checkbox3.checked);
	}
}
function recargaPaxina() {
	for (let i = 0; i < localStorage.length; i++) {
		console.log(localStorage[i]);
	}
	nome.setAttribute("value", nome.value);
	tel.setAttribute("value", tel.value);
	select.setAttribute("checked", true);
	select2.setAttribute("checked", true);
	checkbox.setAttribute("checked", true);
	checkbox2.setAttribute("checked", true);
	checkbox3.setAttribute("checked", true);
}
recargaPaxina();
