"use strict";
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
const producto1 = new Producto("Ferrari", "Avion", 2, 100.12);
const producto2 = new Producto("Mercedes", "Carro", 1, 500.65);
const producto3 = new Producto("BMW", "Coche", 3, 50.5);
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
const tele1 = new Televisor("Samsumg", "Televisor", 4, 50.56, 1);
const tele2 = new Televisor("LG", "Televisor", 2, 100.99, 2);
const tele3 = new Televisor("Apple", "Televisor", 3, 20.67, 3);
console.log(tele1.getInfo());
console.log(tele2.getInfo());
console.log(tele3.getInfo());
console.log(
	"3. Crea 5 produtos e gárdaos nun array. Crea as seguintes funcións (todas reciben o array como parámetro): "
);
class Exercicio3 {
	static prodsSortBayName(productos) {
		productos.sort((a, b) => (a.categoria > b.categoria ? 1 : -1));
		return productos;
	}
	static prodsSortByPrice(productos) {
		productos.sort((a, b) => (a.importe() > b.importe() ? 1 : -1));
		return productos;
	}
	static prodsTotalPrice(productos) {
		return productos.reduce((total, importes) => total + importes.importe(), 0);
	}
	static prodsWithLowUnits(productos, unidades) {
		return productos.filter((product) => product.unidades < unidades);
	}
	static prodsList(productos) {
		let result = "Listado de produtos: \n";
		return productos.forEach((productos) => {
			result += "- " + productos.getInfo() + "\n";
		});
	}
}
const producto4 = new Producto("Ford", "Moto", 5, 10.67);
const producto5 = new Producto("Porche", "Bici", 6, 5.99);
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
console.log(Exercicio3.prodsTotalPrice(arrayProductos).toFixed(2));
console.log(
	"d. prodsWithLowUnits: ademais do array, recibe como segundo parámetro un nº e devolve un array con todos os produtos dos que quedan menos das unidades indicadas"
);
console.log(Exercicio3.prodsWithLowUnits(arrayProductos, 5));
console.log(
	"e. prodsList: devolve unha cadena que di ‘Listado de produtos:’ e en cada liña un guión e a información dun produto do array."
);
console.log(Exercicio3.prodsList(arrayProductos));
