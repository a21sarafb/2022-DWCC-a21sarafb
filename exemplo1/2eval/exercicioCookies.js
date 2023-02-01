"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */

//nome
let nome = document.getElementById("nome");
nome.addEventListener("blur", setItemFuncion);
nome.value = localStorage.getItem("nome");
nome.setAttribute("value", nome.value);

//num
let tel = document.getElementById("tel");
tel.addEventListener("blur", setItemFuncion);
tel.value = localStorage.getItem("tel");
tel.setAttribute("value", tel.value);

//select 1
let select = document.getElementById("select");
console.log(select);
select.addEventListener("blur", setItemFuncion);
select.value = localStorage.getItem("select");
select.setAttribute("checked", true);

//select 2
let select2 = document.getElementById("select2");
console.log(select2);
select2.addEventListener("blur", setItemFuncion);
select2.value = localStorage.getItem("select2");
select2.setAttribute("checked", true);

//select 3
let select3 = document.getElementById("select3");
console.log(select3);
select3.addEventListener("blur", setItemFuncion);
select3.value = localStorage.getItem("select3");
select3.setAttribute("checked", true);

//check
let checkbox = document.getElementById("check");
console.log(checkbox);
checkbox.addEventListener("click", setItemFuncion);
checkbox.checked = localStorage.getItem("check");
checkbox.setAttribute("checked", true);

//check2
let checkbox2 = document.getElementById("check2");
console.log(checkbox);
checkbox2.addEventListener("click", setItemFuncion);
checkbox2.checked = localStorage.getItem("check2");
checkbox2.setAttribute("checked", true);

//check3
let checkbox3 = document.getElementById("check3");
console.log(checkbox);
checkbox3.addEventListener("click", setItemFuncion);
checkbox3.checked = localStorage.getItem("check3");
checkbox3.setAttribute("checked", true);

function setItemFuncion(e) {
	console.log(e.target.id);
	if (e.target.id == "nome") {
		localStorage.setItem("nome", nome.value);
	} else if (e.target.id == "tel") {
		localStorage.setItem("tel", tel.value);
	} else if (e.target.id == "select") {
		localStorage.setItem("select", select.value);
	} else if (e.target.id == "select2") {
		localStorage.setItem("select2", select2.value);
	} else if (e.target.id == "select3") {
		localStorage.setItem("select3", select3.value);
	} else if (e.target.id == "check") {
		localStorage.setItem("check", checkbox.checked);
	} else if (e.target.id == "check2") {
		localStorage.setItem("check2", checkbox2.checked);
	} else if (e.target.id == "check3") {
		localStorage.setItem("check3", checkbox3.checked);
	}
}
