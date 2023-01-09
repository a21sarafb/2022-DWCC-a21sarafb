"use strict";
let formulario = document.getElementById("seleccion");
formulario.addEventListener("input", seleccionar);
let seleccion = document.getElementById("seleccion");
function seleccionar() {
	console.log("A opción escollida é: " + seleccion.value);
}
let opcion = document.createElement("option");
opcion.innerHTML = 5;
opcion.value = "5";
seleccion.append(opcion);
