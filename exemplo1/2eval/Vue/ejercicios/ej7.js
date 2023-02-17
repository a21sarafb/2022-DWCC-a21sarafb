Vue.createApp({
	data() {
		return {
			isRed: false,
			isRed2: false,
		};
	},
	methods: {
		cambio(e) {
			if (
				e.currentTarget.id == "1" &&
				this.isRed2 == false &&
				this.isRed == false
			) {
				this.isRed = true;
				this.isRed2 = false;
			} else if (e.currentTarget.id == "1" && this.isRed2) {
				this.isRed2 = false;
				this.isRed = true;
			} else if (e.currentTarget.id == "1" && this.isRed) {
				this.isRed = false;
			} else if (
				e.currentTarget.id == "2" &&
				this.isRed == false &&
				this.isRed2 == false
			) {
				this.isRed2 = true;
				this.isRed = false;
			} else if (e.currentTarget.id == "2" && this.isRed) {
				this.isRed = false;
				this.isRed2 = true;
			} else if (e.currentTarget.id == "2" && this.isRed2) {
				this.isRed2 = false;
			}
		},
	},
}).mount("#data");
