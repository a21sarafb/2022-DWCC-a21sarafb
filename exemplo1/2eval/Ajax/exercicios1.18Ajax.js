"use strict";
/* 3. Crea unha función async chamada obterUsuarios(listadoNomes) que reciba como parámetro un array de logins de GitHub e que devolva nun array a información dos usuarios de GitHub.
GitHub ofrece unha API para consultar información dos usuarios dado o login. Para acceder a esta información hai que acceder á seguinte URL https://api.github.com/users/{username} tal e como se indica na documentación.
Proba a consultar a información de GitHub do teu login.
Debe realizarse unha petición fetch para cada login e non hai que esperar a que remate a anterior para facer a seguinte petición.
Se unha petición falla, por exemplo porque o usuario non existe, devolverase null nesa posición do array resultado.
A función obterUsuarios devolverá a resposta cando todas as peticións fetch remataran. */
async function obterUsuarios(listaNomes) {
	let arrayDevol = [];
	let principioUrl = "https://api.github.com/users/";
	listaNomes.forEach(async function (nome) {
		try {
			let urlFinal = principioUrl + nome;
			/*let auth = "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";*/
			// await fetch(urlFinal);
			const response = fetch(urlFinal, {
				Accept: "application/vnd.github+json",
				Authorization: "Bearer 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",
			});
			let datos = await response.json();
			console.log(datos);
			arrayDevol.push(datos);
			if (!response.ok) throw new Error("null");
		} catch (err) {
			console.log(err);
		}
	});
}

let arrayLogin = ["a21sarafb", "a21ezequielss", "a21andresdc1", "a21andresdc1"];
obterUsuarios(arrayLogin);
