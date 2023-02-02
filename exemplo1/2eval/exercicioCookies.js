"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */

let formulario = document.getElementById("myForm");
formulario.addEventListener("change", funcionCambios);
function funcionCambios(e) {
	console.log("funcion cambios " + e.target.id);
	if (e.target.id == "nome") {
		localStorage.setItem("nome", nome.value);
	} else if (e.target.id == "tel") {
		localStorage.setItem("tel", tel.value);
	} else if (e.target.id == "select") {
		localStorage.setItem("select", select.value);
		//console.log(localStorage.getItem("select"));
		/*if (localStorage.getItem("select2")) {
			select.setAttribute("checked", true);
			localStorage.removeItem("select2");
		}*/
	} else if (e.target.id == "select2") {
		localStorage.setItem("select2", select2.value);
		//console.log(localStorage.getItem("select2"));
		/*if (localStorage.getItem("select")) {
			select2.setAttribute("checked", true);
			localStorage.removeItem("select");
		}*/
	} else if (e.target.id == "check") {
		localStorage.setItem("check", checkbox.checked);
	} else if (e.target.id == "check2") {
		localStorage.setItem("check2", checkbox2.checked);
	} else if (e.target.id == "check3") {
		localStorage.setItem("check3", checkbox3.checked);
	}
}
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

function recargaPaxina() {
	for (let i = 0; i < localStorage.length; i++) {
		//localStorage.removeItem(localStorage.key(i));
		//console.log(localStorage.key(i));
		if (localStorage.key(i) == "select") {
			console.log("hola select");
			console.log(localStorage.getItem("select"));
			//select.setAttribute("checked", true);
		} else if (localStorage.key(i) == "select2") {
			console.log("hola select 2");
			console.log(localStorage.getItem("select2"));
			select2.setAttribute("checked", true);
		} else if (localStorage.key(i) == "check") {
			console.log(localStorage.getItem("check"));
			if (localStorage.getItem("check")) {
				console.log("entro1");
				checkbox.setAttribute("checked", true);
			} else {
				localStorage.removeItem(localStorage.key(i));
				checkbox3.setAttribute("checked", false);
			}
		} else if (localStorage.key(i) == "check2") {
			console.log(localStorage.getItem("check2"));
			if (localStorage.getItem("check2")) {
				console.log("entro2");
				checkbox2.setAttribute("checked", true);
			} else {
				localStorage.removeItem(localStorage.key(i));
				checkbox2.setAttribute("checked", false);
			}
		} else if (localStorage.key(i) == "check3") {
			console.log(localStorage.getItem("check3"));
			if (localStorage.getItem("check3")) {
				console.log("entro3");
				checkbox3.setAttribute("checked", true);
			} else {
				localStorage.removeItem(localStorage.key(i));
			}
		}
	}
	nome.setAttribute("value", nome.value);
	tel.setAttribute("value", tel.value);
}
recargaPaxina();
