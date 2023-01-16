"use strict";
/* Busca unha imaxe grande en internet para probar que tarda algún tempo en
descargarse. Carga esa imaxe remota nun script. Unha vez que a imaxe estea
cargada, mostra unha mensaxe en consola. */
let script = document.createElement("img");
script.src = "esta";
document.body.append(script);
script.addEventListener("load", function () {
	console.log("FOTO CARGADA");
});
console.log("algo");
script.addEventListener("error", function () {
	console.log("Erro ao cargar o script");
});
