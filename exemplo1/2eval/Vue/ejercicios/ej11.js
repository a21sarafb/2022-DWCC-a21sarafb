Vue.createApp({
	data() {
		return {
			nuevoElemento: "",
			elementos: ["sara", "paula", "fer", "alba"],
			mostrar: true,
		};
	},
	methods: {
		añadirElemento() {
			this.elementos.push(this.nuevoElemento);
			this.nuevoElemento = "";
		},
		visualizar() {
			this.mostrar = !this.mostrar;
		},
		eliminar(index) {
			console.log(index);
			this.elementos.splice(index, 1);
		},
	},
}).mount("#data");
