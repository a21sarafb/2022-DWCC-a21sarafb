Vue.createApp({
	data() {
		return {
			name: "Sara Facal Boullosa",
			year: new Date().getFullYear(),
			rutaImg: "img/risa.jpeg",
			count: 0,
		};
	},
	methods: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
}).mount("#data");
