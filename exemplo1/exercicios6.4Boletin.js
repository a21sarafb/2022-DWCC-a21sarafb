"use strict";
function mueveReloj() {
	let momentoActual = new Date();
	let hora = momentoActual.getHours();
	let minuto = momentoActual.getMinutes();
	let segundo = momentoActual.getSeconds();
	let Am_o_Pm = hora >= 12 ? "PM" : "AM";
	hora = hora % 12;
	hora = hora ? hora : 12;
	minuto = minuto < 10 ? "0" + minuto : minuto;
	let horaImprimible = hora + " : " + minuto + " : " + segundo + " " + Am_o_Pm;
	setTimeout(mueveReloj, 1000);
	document.form_reloj.reloj.value = horaImprimible;
}
setInterval(imprimirMensaxe, 2000);
function imprimirMensaxe() {
	console.log("Hello World!");
}
