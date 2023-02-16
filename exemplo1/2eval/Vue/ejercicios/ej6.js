Vue.createApp({
	data() {
		return {
			num1: "",
			num2: "",
		};
	},
	computed: {
		suma() {
			return this.num1 + this.num2;
		},
		par() {
			if (this.num1 + this.num2 == 0) return "";
			return (this.num1 + this.num2) % 2 == 0 ? "par" : "impar";
		},
	},
}).mount("#data");
