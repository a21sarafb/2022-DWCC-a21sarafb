"use strict";
/* 1. Crea unha páxina web con un formulario que conteña diferentes campos, polo
menos caixas de texto, botóns de radio e checkboxes. Fai que a páxina permita
almacenar en local os valores de todos os campos do formulario de forma
automática e transparente para a persoa usuaria. Isto permitirá que se a páxina se
pecha accidentalmente e se volve a abrir, o formulario aparecerá cuberto cos últimos
valores introducidos. */

//click cambiar
let formulario = document.getElementById("myForm");
formulario.addEventListener("click", funcionCambios);
function funcionCambios(e) {
	console.log("funcion cambios " + e.target.id);
	if (e.target.id == "nome") {
		localStorage.setItem("nome", nome.value);
	} else if (e.target.id == "tel") {
		localStorage.setItem("tel", tel.value);
	} else if (e.target.id == "select1") {
		localStorage.setItem("select1", select1.value);
	} else if (e.target.id == "select2") {
		console.log(select2.value);
		localStorage.setItem("select2", select2.value);
	} else if (e.target.id == "check") {
		localStorage.setItem("check", checkbox.checked);
	} else if (e.target.id == "check2") {
		localStorage.setItem("check2", checkbox2.checked);
	} else if (e.target.id == "check3") {
		console.log(checkbox3.checked);
		console.log("a   " + typeof localStorage.getItem("check3"));
		localStorage.setItem("check3", checkbox3.checked);
		console.log(checkbox3.checked);
		console.log("b   " + typeof localStorage.getItem("check3"));
	}
}
//nome
let nome = document.getElementById("nome");
nome.value = localStorage.getItem("nome");

//num
let tel = document.getElementById("tel");
tel.value = localStorage.getItem("tel");

//select 1
let select1 = document.getElementById("select12");

//select 2
let select2 = document.getElementById("select2");

//check
let checkbox = document.getElementById("check");
checkbox.checked = localStorage.getItem("check");

//check2
let checkbox2 = document.getElementById("check2");
checkbox2.checked = localStorage.getItem("check2");

//check3
let checkbox3 = document.getElementById("check3");
console.log("x   " + localStorage.getItem("check3"));
console.log("c   " + typeof Boolean(localStorage.getItem("check3")));
checkbox3.checked = localStorage.getItem("check3") === "true" ? true : false;

function recargaPaxina() {
	/*for (let i = 0; i < localStorage.length; i++) {
		//localStorage.removeItem(localStorage.key(i));
		//console.log(localStorage.key(i));
		if (localStorage.key(i) == "select1") {
			console.log("hola select1");
			console.log(localStorage.getItem("select1"));
			if (localStorage.getItem("select2") === "completo") {
				select1.setAttribute("checked", true);
				localStorage.removeItem("select2");
			}
		} else if (localStorage.key(i) == "select2") {
			console.log("hola select 2");
			console.log(localStorage.getItem("select2"));
			if (localStorage.getItem("select2") === "medio") {
				select2.setAttribute("checked", true);
				localStorage.removeItem("select1");
			}
		} else if (localStorage.key(i) == "check") {
			console.log(localStorage.getItem("check"));
			if (localStorage.getItem("check") === "true") {
				console.log("entro1");
				//checkbox.setAttribute("checked", true);
			} else if (localStorage.getItem("check") === "false") {
				console.log("entro else1");
				localStorage.removeItem("check");
			}
		} else if (localStorage.key(i) == "check2") {
			console.log(localStorage.getItem("check2"));
			if (localStorage.getItem("check2") === "true") {
				console.log("entro2");
				//checkbox2.setAttribute("checked", true);
			} else if (localStorage.getItem("check2") === "false") {
				console.log("entro else2");
				localStorage.removeItem("check2");
			}
		} else if (localStorage.key(i) == "check3") {
			console.log(localStorage.getItem("check3"));
			if (localStorage.getItem("check3") === "true") {
				console.log("entro3");
			} else if (localStorage.getItem("check3") === "false") {
				console.log("entro else3");
				checkbox3.setAttribute("checked", false);
				localStorage.removeItem("check3");
			}
		}
	}*/
	nome.setAttribute("value", nome.value);
	tel.setAttribute("value", tel.value);
	//checkbox3.checked = localStorage.getItem("check3");
}
recargaPaxina();
