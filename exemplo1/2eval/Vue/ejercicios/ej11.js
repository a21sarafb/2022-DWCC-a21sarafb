Vue.createApp({
	data() {
		return {
			elemento: [],
			o: true,
			texto: "Ocultar lista",
		};
	},
	methods: {
		elementos(e) {
			this.elemento.push(e.target.value);
		},
		eliminar(index) {
			this.elemento.splice(index, 1);
		},
		bot() {},
	},
}).mount("#data");
