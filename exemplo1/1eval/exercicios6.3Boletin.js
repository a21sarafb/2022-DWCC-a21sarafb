"use strict";
let tbody = document.getElementById("tbody");
tbody.addEventListener("click", modificar);
function modificar(e) {
	let areaTexto = document.createElement("textarea");
	let textoCelda = e.target.innerHTML;
	let celda2 = e.target.closest("td").nextElementSibling;
	areaTexto.setAttribute("rows", 3);
	areaTexto.setAttribute("style", "width:70px;height:45px");
	areaTexto.setAttribute("cols", 7);
	areaTexto.innerHTML = textoCelda;
	celda2.setAttribute("style", "display:''");
	celda2.replaceWith(areaTexto);
	e.target.setAttribute("style", "display:none");
	document.addEventListener("keyup", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			e.target.setAttribute("style", "width:70px;height:45px");
			let textoArea = areaTexto.value;
			e.target.innerHTML = textoArea;
			areaTexto.setAttribute("style", "display:none");
		}
	});
}
