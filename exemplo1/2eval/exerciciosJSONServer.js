"use strict";
/* 1. Imaxina que tes que crear unha páxina web básica para realizar pedidos (do que queiras).Como simulación da base de datos, crea un ficheiro JSON para almacenar a información dos clientes e pedidos (simularían a táboa clientes e a táboa pedidos). Dos clientes vaise gardar o número de teléfono, o enderezo e o pedido típico, que será unha descrición corta. Dos pedidos gardarase a información do teléfono do cliente e a descrición do pedido.
Crea un formulario onde apareza unha caixa de texto para introducir o teléfono e un botón, de tal forma que ao pulsar o botón aparezan os datos do cliente asociados ao teléfono (pedido e enderezo). Ademais, cando aparezan os datos do cliente tamén se mostrará un novo formulario con unha caixa de texto que conteña a descrición do pedido típico do cliente e un botón “Realizar pedido”. O cliente poderá modificar a descrición do pedido e confirmará o pedido pulsando o botón “Realizar pedido”. Isto fará que os datos do novo pedido se garden no ficheiro JSON. */
/*const newPedido = {
	telefono: 123456789,
	descripcion: "manzana",
};
const newClient = {
	num: 987654321,
	enderezo: "Rua Alfredo Brañas, 5, 5A",
	pedidoTipico: "manzana",
};*/

const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", () => {
	const telef = document.querySelector("#tel");
	console.log(telef.value);
	async function buscaCliente(num) {
		try {
			let response = await fetch(`http://localhost:3000/clientes/?num=` + num);
			let data = await response.json();
			console.log(data);
			let parrafo = document.querySelector(".parr");
			data.forEach((cliente) => {
				let texto =
					"Enderezo " +
					cliente.enderezo +
					" Pedido Típico " +
					cliente.pedidoTipico;
				parrafo.append(texto);
			});
			newForm = document.createElement("form");
			parrafo.append(newForm);
		} catch (error) {
			return error;
		}
	}
	buscaCliente(telef.value);
});

async function procesarPedido() {
	try {
		let response = await fetch("http://localhost:3000/pedidos", {
			method: "POST",
			headers: {
				"Content-type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(newPedido),
		});
		let data = await response.json();
		console.log(data);
		let response2 = await fetch(
			`http://localhost:3000/clientes/?num=${newProduct.name}`
		);
		let data2 = await response2.json();
		console.log(data2);
	} catch (error) {
		return error;
	}
}
async function procesarCliente() {
	try {
		let response = await fetch("http://localhost:3000/clientes", {
			method: "POST",
			headers: {
				"Content-type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(newClient),
		});
		let data = await response.json();
		console.log(data);
	} catch (error) {
		return error;
	}
}
procesarPedido();
procesarCliente();
