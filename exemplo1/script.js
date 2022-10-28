"use strict";
console.log("Mensaxe por consola");

/*window.confirm("Mensaxe");
let text = "Press a button!\nEither OK or Cancel.";
if (confirm(text) == true) {
	text = "You pressed OK!";
} else {
	text = "You canceled!";
}
let variable; // declaro variable. Ao non asignar un valor, valerá undefined
variable = "Ola"; // agora o seu valor é 'Ola', por tanto contén unha cadena de texto
console.log(variable);
variable = 34; // agora contén un número
console.log(variable);
variable = [3, 45, 2]; // agora un array
console.log(variable);
variable = undefined; // vólvese a asignar o valor especial undefined
console.log(variable);
console.log("probando var");*/
//probando var
/*var y = 3;
function foo() {
	var x = 1;
	function bar() {
		var y = 2;
		console.log(x); // 1 (function `bar` closes over `x`)
		x = 11;
		console.log(y); // 2 (`y` is in scope)
	}
	bar();
	console.log(x); // (`x` is in scope)
	console.log(y);
}
foo();
console.log("probando let");*/
//probando let
/*var a = 1;
var b = 2;
if (a === 1) {
	var a = 11; // the scope is global
	let b = 22; // the scope is inside the if-block
	console.log(a); // 11
	console.log(b); // 22
}
console.log(a); // 11
console.log(b); // 2
console.log("probar conversión de tipos");*/
//probar conversión de tipos
/*console.log("Ana is " + 18 + " years old");
console.log(1 + "5");
console.log("23" - "10" - 3);
console.log(12 / "6");
console.log("number" + 15 + 3);
console.log(15 + 3 + "number");
let n = "1" + 1;
n = n - 1;
console.log(n);
console.log("10" - "4" - "3" - 2 + "5");
console.log("false" == false);*/

/*let data = new Date();
console.log(`new Date() = ${data}`);
console.log(`Tipo de dato de new Date() = ${typeof data}`);
let data2 = Date();
console.log(`Date() = ${data2}`);
console.log(`Tipo de dato de Date() = ${typeof data2}`);*/

/*const array = [15, 16, 17, 18, 19];
function reducer(previousValue, currentValue, index) {
	const returns = previousValue + currentValue;
	console.log(
		`previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index},
returns: ${returns}`
	);
	return returns;
}
let resultado = array.reduce(reducer);
console.log(`Resultado = ${resultado}`);
console.log("Usando un valor inicial");
resultado = array.reduce(reducer, 0);
console.log(`Resultado = ${resultado}`);
console.log("Usando unha función frecha");
resultado = array.reduce(
	(previousValue, currentValue, index) => previousValue + currentValue,
	0
);
console.log(`Resultado = ${resultado}`);*/
console.log(
	"1. Crea unha clase chamada Produtos coas propiedades marca, categoría, unidades, precio e un método chamado importe que devolva o prezo total das unidades (unidades x precio). Ademais terá un método getInfo que devolverá “Nome (categoría): unidades x precio = importe”. Crea tamén tres produtos diferentes."
);
class Producto {
	constructor(marca, categoria, unidades, prezo) {
		this.marca = marca;
		this.categoria = categoria;
		this.unidades = unidades;
		this.prezo = prezo;
	}
	importe() {
		return this.unidades * this.prezo;
	}
	getInfo() {
		console.log(
			this.categoria +
				"(" +
				this.marca +
				"): " +
				this.unidades +
				" x " +
				this.prezo +
				" = " +
				this.importe()
		);
	}
}
const producto1 = new Producto("Ferrari", "Coche", 2, 100);
const producto2 = new Producto("Mercedes", "Coche", 1, 500);
const producto3 = new Producto("BMW", "Coche", 3, 50);
producto1.getInfo();
producto2.getInfo();
producto3.getInfo();
console.log(
	"Crea unha clase Televisor que herde de Produto e teña unha nova propiedade chamada tamaño. O método getInfo mostrará o tamaño, ademais do resultado do método getInfo da calse ancestra."
);
class Televisor extends Producto {
	constructor(marca, categoria, unidades, prezo, tamano) {
		super(marca, categoria, unidades, prezo);
		this.tamano = tamano;
	}
	getInfo() {
		super.getInfo();
		return " Tamaño: " + this.tamano;
	}
}
const tele1 = new Televisor("Samsumg", "Televisor", 4, 50, 1);
const tele2 = new Televisor("LG", "Televisor", 2, 100, 2);
const tele3 = new Televisor("Apple", "Televisor", 3, 20, 3);
console.log(tele1.getInfo());
console.log(tele2.getInfo());
console.log(tele3.getInfo());
console.log(
	"3. Crea 5 produtos e gárdaos nun array. Crea as seguintes funcións (todas reciben o array como parámetro): "
);
class Exercicio3 {
	static prodsSortBayName(productos) {}
	static prodsSortByPrice(productos) {}
	static prodsTotalPrice(productos) {}
	static prodsWithLowUnits(productos) {}
	static prodsList(productos) {}
}
const producto4 = new Producto("Ford", "Coche", 5, 10);
const producto5 = new Producto("Porche", "Coche", 6, 5);
const arrayProductos = [producto1, producto2, producto3, producto4, producto5];
console.log(
	"a. prodsSortBayName: devolve un array cos produtos ordenados alfabeticamente."
);
console.log(Exercicio3.prodsSortBayName(arrayProductos));
console.log(
	"b. prodsSortByPrice: devolve un array cos produtos ordenados por importe"
);
console.log(Exercicio3.prodsSortByPrice(arrayProductos));
console.log(
	"c. prodsTotalPrice: devolve o importe total dos produtos do array, con 2 decimais."
);
console.log(Exercicio3.prodsTotalPrice(arrayProductos));
console.log(
	"d. prodsWithLowUnits: ademais do array, recibe como segundo parámetro un nº e devolve un array con todos os produtos dos que quedan menos das unidades indicadas"
);
console.log(Exercicio3.prodsWithLowUnits(arrayProductos));
console.log(
	"e. prodsList: devolve unha cadena que di ‘Listado de produtos:’ e en cada liña un guión e a información dun produto do array."
);
console.log(Exercicio3.prodsList(arrayProductos));
