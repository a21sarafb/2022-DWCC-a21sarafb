Vue.createApp({
	data() {
	  return {
		selection: {
		  activa1: false,
		  activa2: false,
		},
	  };
	},
	methods: {
	  alternar(e) {
		if (!this.selection['activa' + e.target.id]) {
		  for (const property in this.selection) {
			this.selection[property] = false;
		  }
  
		  this.selection['activa' + e.target.id] = true;
		}
	  },
	},
  }).mount("#data");
