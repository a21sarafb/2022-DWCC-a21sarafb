Vue.createApp({
	data() {
	  return {
		clase: "",
		isHidden: false,
		isVisible: true,
		color: "",
	  };
	},
	methods: {
	  ocultar() {
		this.isHidden = !this.isHidden;
		this.isVisible = !this.isVisible;
	  },
	},
  }).mount("#data");
