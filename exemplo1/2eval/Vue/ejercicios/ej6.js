Vue.createApp({
	data() {
		return {
			num1: 0,
			num2: 0,
			par: true,
		};
	},
	computed: {
		suma() {
		  return this.num1 + this.num2;
		},
	  },
	  watch: {
		suma() {
		  this.par = this.suma % 2 === 0 ? true : false;
		},
	  }
}).mount("#data");
