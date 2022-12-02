"use strict";
let div = document.getElementById("div1");
div.addEventListener("click", modificar);
function modificar(e) {
	e.preventDefault();
	let areaTexto = document.createElement("textarea");
	let textoDiv = div.innerHTML;
	let div2 = document.getElementById("div2");
	areaTexto.setAttribute("rows", 10);
	areaTexto.setAttribute("cols", 50);
	areaTexto.innerHTML = textoDiv;
	div2.append(areaTexto);
	div.setAttribute("style", "display:none");
	areaTexto.addEventListener("change", cambio);
	function cambio(evt) {
		evt.preventDefault();
		div.setAttribute("style", "width:425px;height:160px");
		console.log(areaTexto.value);
		let textoArea = areaTexto.value;
		div.innerHTML = textoArea;
		areaTexto.setAttribute("style", "display:none");
	}
}
