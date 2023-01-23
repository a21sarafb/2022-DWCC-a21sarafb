"use strict";
/* 2. Dado o seguinte código, ¿como debe chamarse á función wait para usar o resultado
da promesa que devolve dentro de f? */
async function wait() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return 10;
}
async function f() {
	// Recorda, aquí non se pode usar "await"
	// ¿que escribir aquí?
}
f();
