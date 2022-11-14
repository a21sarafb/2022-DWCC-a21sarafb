"use strict";
//o nodo <div>
let primeiro = document.getElementsByTagName("div");
console.log(primeiro[0]);
console.log(primeiro[0].textContent);
//OUTRA
let primeiroDiv = document.body.firstElementChild;
console.log(primeiroDiv);
//OUTRA
let primerDiv = document.body.children;
console.log(primerDiv[0]);
//o nodo <ul>
let segundo = document.getElementsByTagName("ul");
console.log(segundo[0]);
console.log(segundo[0].textContent);
//OUTRA
let primerUl = document.body.children;
console.log(primerUl[1]);
//OUTRA
let primeiroUl = document.body.firstElementChild.nextElementSibling;
console.log(primeiroUl);
//o segundo <li>
let tercero = document.getElementsByTagName("li");
console.log(tercero[1]);
console.log(tercero[1].textContent);
//OUTRA
let segundoLi =
	document.body.firstElementChild.nextElementSibling.lastElementChild;
console.log(segundoLi);
