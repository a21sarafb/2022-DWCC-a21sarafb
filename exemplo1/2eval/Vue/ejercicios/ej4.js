Vue.createApp({
	data() {
		return {
			texto: "",
			textoBoton: "",
			textoEnter: "",
		};
	},
	methods: {
		update(e) {
			this.texto = e.target.value;
		},
		mensaxe() {
			this.textoBoton = "Me has pulsado";
		},
		updateEnter(e) {
			this.textoEnter = e.target.value;
			e.target.value = "";
		},
	},
}).mount("#data");
