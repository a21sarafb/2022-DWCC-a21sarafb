Vue.createApp({
	data() {
		return {
			styleColor: {},
		};
	},
	methods: {
		cambio() {
			this.styleColor = {
				backgroundColor: "red",
			};
		},
	},
}).mount("#data");
