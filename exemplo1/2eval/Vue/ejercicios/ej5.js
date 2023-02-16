Vue.createApp({
	data() {
		return {
			textoNombre: "",
			textoArea: "",
			check: [],
			elegido: "",
			provincia: "",
		};
	},
	methods: {
		borrar() {
			this.textoNombre = "";
			this.textoArea = "";
			this.check = [];
			this.elegido = "";
			this.provincia = "";
		},
	},
}).mount("#data");
