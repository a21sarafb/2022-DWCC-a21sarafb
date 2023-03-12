Vue.createApp({
	data() {
		return {
			texto: "",
		};
	},
	methods: {
		update(e) {
			this.texto = e.target.value;
		},
	},
}).mount(".ej3");
