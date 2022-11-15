"use strict";
/*A táboa con id="age-table".*/
let table = document.getElementById("age-table");
console.log(table);
/*Todos os elementos label dentro da táboa (debería haber 3).*/
let label = table.getElementsByTagName("label");
console.log(label);
/*O primeiro td da táboa.*/
const td = table.getElementsByTagName("td");
console.log(td[0]);
/*O form con name="search".*/
let search = document.getElementsByName("search")[0];
console.log(search);
/*O primeiro input do formulario anterior formulario*/
let primeiro = document.getElementsByTagName("input");
console.log(primeiro[0]);
//OUTRA FORMA q non vai ben ainda
console.log(search.children[0]);
/*O último input do formulario anterior formulario.*/
console.log(primeiro[1]);
